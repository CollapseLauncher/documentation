<script>
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { VBtn, VCard, VCardItem, VCardText, VIcon, VTimeline, VTimelineItem } from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'

const vuetify = createVuetify({
  components: {
    VTimeline,
    VTimelineItem,
    VCard,
    VCardItem,
    VCardText,
    VIcon,
    VBtn
  },
  icons: { iconfont: 'mdi' }
})

export { vuetify }
</script>

<template>
  <!-- This component doesn't need to render anything -->
</template>