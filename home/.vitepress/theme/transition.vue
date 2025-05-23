<!-- .vitepress/theme/Layout.vue -->
<!-- https://vitepress.dev/guide/extending-default-theme#using-view-transitions-api -->
<script setup lang="ts">
import { useData, useRoute } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import { nextTick, provide, onMounted, watch, onUnmounted, computed } from 'vue'
import mediumZoom from 'medium-zoom'

const { isDark, frontmatter, site, page } = useData()
const route = useRoute()
let zoom: ReturnType<typeof mediumZoom> | null = null
let observer: MutationObserver | null = null

// Open Graph metadata handling
const pageTitle = computed(() => {
  return frontmatter.value.title || site.value.title;
});

const pageDescription = computed(() => {
  return frontmatter.value.description || site.value.description;
});

const pageImage = computed(() => {
  return frontmatter.value.image || '/img/banner.webp';
});

const pageUrl = computed(() => {
  // Base URL from site config or fallback
  const baseUrl = site.value.base || 'https://collapselauncher.com';
  // Current route path
  return baseUrl + route.path;
});

const updateMetaTags = () => {
  if (typeof document === 'undefined') return;
  
  // Function to set or update meta tags
  const setMetaTag = (name: string, content: string, property = false) => {
    const selector = property ? 
      `meta[property="${name}"]` : 
      `meta[name="${name}"]`;
    
    let tag = document.querySelector(selector);
    
    if (tag) {
      // Update existing tag
      tag.setAttribute('content', content);
    } else {
      // Create new tag
      tag = document.createElement('meta');
      tag.setAttribute(property ? 'property' : 'name', name);
      tag.setAttribute('content', content);
      document.head.appendChild(tag);
    }
  };

  // Update the document title
  document.title = pageTitle.value;

  // Set Open Graph tags
  setMetaTag('og:title', pageTitle.value, true);
  setMetaTag('og:description', pageDescription.value, true);
  setMetaTag('og:image', pageImage.value.startsWith('http') ? pageImage.value : `https://collapselauncher.com${pageImage.value}`, true);
  setMetaTag('og:url', pageUrl.value, true);
  
  // Set Twitter card tags
  setMetaTag('twitter:card', 'summary_large_image');
  setMetaTag('twitter:title', pageTitle.value);
  setMetaTag('twitter:description', pageDescription.value);
  setMetaTag('twitter:image', pageImage.value.startsWith('http') ? pageImage.value : `https://collapselauncher.com${pageImage.value}`);
  
  // Set standard meta description
  setMetaTag('description', pageDescription.value);
};

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y)
    )}px at ${x}px ${y}px)`
  ]

  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 300,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`
    }
  )
})

const initZoom = () => {
  // Detach previous instance if it exists
  if (zoom) {
    zoom.detach();
  }
  
  const backgroundColor = getComputedStyle(document.documentElement).getPropertyValue('--vp-c-bg').trim();
  
  // Target both specifically marked images and all content images
  zoom = mediumZoom('.vp-doc img[data-zoomable], .vp-doc figure img', {
    background: backgroundColor || '#fff',
    margin: 24
  });
}

const setupImageObserver = () => {
  // Detach previous observer if exists
  if (observer) {
    observer.disconnect();
  }
  
  // Setup mutation observer to detect when images are loaded
  observer = new MutationObserver((mutations) => {
    let needsUpdate = false;
    
    mutations.forEach(mutation => {
      // Check if new nodes were added
      if (mutation.type === 'childList' && mutation.addedNodes.length) {
        // Check if any of the added nodes are images or contain images
        mutation.addedNodes.forEach(node => {
          if (node.nodeName === 'IMG' || 
              (node instanceof HTMLElement && node.querySelector('img'))) {
            needsUpdate = true;
          }
        });
      }
      
      // Also check for attribute changes on images (like when lazy loading completes)
      if (mutation.type === 'attributes' && 
          mutation.attributeName === 'src' &&
          mutation.target.nodeName === 'IMG') {
        needsUpdate = true;
      }
    });
    
    if (needsUpdate) {
      // Give a short delay for the image to be fully loaded
      setTimeout(initZoom, 100);
    }
  });
  
  // Observe the entire document content for changes
  observer.observe(document.querySelector('.vp-doc') || document.body, {
    childList: true,
    subtree: true,
    attributes: true,
    attributeFilter: ['src', 'data-zoomable']
  });
}

onMounted(() => {
  // Initialize with a delay to ensure DOM is fully rendered
  setTimeout(() => {
    initZoom();
    setupImageObserver();
    updateMetaTags(); // Update meta tags on initial mount
  }, 200);
  
  // Also attach event listeners for lazy-loaded images
  document.addEventListener('load', (event) => {
    if (event.target instanceof HTMLImageElement) {
      // Reinitialize zoom when any image loads
      initZoom();
    }
  }, true);
})

onUnmounted(() => {
  // Clean up
  if (observer) {
    observer.disconnect();
  }
  if (zoom) {
    zoom.detach();
  }
})

// Re-initialize zoom when route changes
watch(() => route.path, () => {
  // Allow time for the new page content to render
  setTimeout(() => {
    initZoom();
    setupImageObserver();
    updateMetaTags(); // Update meta tags when route changes
  }, 200);
})

// Update zoom background when theme changes
watch(() => isDark.value, () => {
  setTimeout(initZoom, 200);
})

// Update meta tags when frontmatter changes
watch(() => frontmatter.value, () => {
  updateMetaTags();
});
</script>

<template>
  <DefaultTheme.Layout>
    <template #home-hero-image>
      <img class="VPImage image-src" src="/img/logo.webp" srcset="/img/logo.webp 1x, /img/logo@2x.webp 2x" alt="Collapse Launcher Logo" />
    </template>
  </DefaultTheme.Layout>
</template>

<style>
::view-transition-old(root),
::view-transition-new(root) {
  animation: none;
  mix-blend-mode: normal;
}

::view-transition-old(root),
.dark::view-transition-new(root) {
  z-index: 1;
}

::view-transition-new(root),
.dark::view-transition-old(root) {
  z-index: 9999;
}

.VPSwitchAppearance {
  width: 22px !important;
}

.VPSwitchAppearance .check {
  transform: none !important;
}

/* Image zoom styles */
.medium-zoom-overlay {
  z-index: 10000 !important;
  background: var(--vp-c-bg) !important;
}

.medium-zoom-image--opened {
  z-index: 10001 !important;
}
</style>