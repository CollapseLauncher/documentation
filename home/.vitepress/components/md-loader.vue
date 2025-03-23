<script setup>
import { ref, onMounted } from 'vue'
import MarkdownIt from 'markdown-it'
import { nextTick } from 'vue'

// Define props for the component
const props = defineProps({
  // URL to fetch markdown from
  url: {
    type: String,
    default: 'https://raw.githubusercontent.com/CollapseLauncher/Collapse/refs/heads/main/THIRD_PARTY_NOTICES.md'
  },
  // Title to show while loading
  loadingText: {
    type: String,
    default: 'Loading content...'
  },
  // CSS class for the rendered markdown
  markdownClass: {
    type: String,
    default: 'vp-doc'
  }
})

const md = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  breaks: true
})

const content = ref('')
const isLoading = ref(true)
const hasError = ref(false)
const errorMessage = ref('')

onMounted(async () => {
  try {
    const response = await fetch(props.url)
    
    if (!response.ok) {
      throw new Error(`Failed to fetch content: ${response.status}`)
    }
    
    const markdownText = await response.text()
    if (markdownText.length === 0) {
      throw new Error('No content received')
    }
    
    // Render markdown using markdown-it
    content.value = md.render(markdownText)
    
    await nextTick()
  } catch (error) {
    console.error('Error:', error)
    hasError.value = true
    errorMessage.value = error.message || 'Unknown error'
  } finally {
    isLoading.value = false
  }
})
</script>

<template>
  <ClientOnly>
    <div v-if="isLoading" class="loading">{{ loadingText }}</div>
    <div v-else-if="hasError" class="error">
      Error loading content: {{ errorMessage }}
    </div>
    <div v-else-if="content" v-html="content" :class="markdownClass"></div>
    <div v-else class="error">No content available</div>
  </ClientOnly>
</template>

<style scoped>
.loading {
  padding: 1rem;
  text-align: center;
  font-style: italic;
  color: #666;
}

.error {
  color: #d32f2f;
  padding: 1rem;
  border: 1px solid #d32f2f;
  border-radius: 4px;
  margin: 1rem 0;
}
</style>