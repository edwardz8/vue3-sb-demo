<script setup>
import StoryblokClient from 'storyblok-js-client'
import { reactive, onMounted } from 'vue'
import useStoryBridge from '../lib/composables/useStoryBridge'
// import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'
// const storyblokInstance = new StoryblokBridge()
// const resolver = new RichTextResolver()

const Storyblok = new StoryblokClient({
  accessToken: 'GlBndxRSmbN80CH09ZnaiQtt'
})

const state = reactive({ story: {} })

onMounted(async () => {
  const { data } = await Storyblok.get(`cdn/stories/home`, {
    version: 'draft'
  })

  state.story = data.story
    
    useStoryBridge(state.story.id, (story) => state.story = story)
})
</script>

<template>
  <section>
    <div v-if="state">
    <h1>{{ state.story.name }}</h1>

    </div>
    <div v-if="state.story.content">
      <template v-for="blok in state.story.content.body" :key="blok._uid">
        <component
          :is="blok.component"
          :blok="blok"
        ></component>
      </template>
    </div>
  </section>
</template>


