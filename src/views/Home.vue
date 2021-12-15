<script setup>
import StoryblokClient from 'storyblok-js-client'
import { ref, onMounted } from 'vue'
// import RichTextResolver from 'storyblok-js-client/dist/rich-text-resolver.es'
// const { StoryblokBridge } = window
// const storyblokInstance = new StoryblokBridge()

// const resolver = new RichTextResolver()

const Storyblok = new StoryblokClient({
  accessToken: 'GlBndxRSmbN80CH09ZnaiQtt'
})

const data = ref(null)
// const story = ref([])

onMounted(async () => {
  data.value = await Storyblok.get(`cdn/stories/home`, {
    version: 'draft'
  }).then(({ data }) => data.story)
})
</script>

<template>
  <section>
    <div v-if="data">
    <h1>{{ data.name }}</h1>

    </div>
    <!-- <div v-if="story.content">
      <template v-for="component in story.content.body">
        <component
          :is="story.content.component"
          v-if="story.content.component"
          :key="component._uid"
          :blok="component"
        ></component>
      </template>
    </div> -->
    <!-- <component
      v-if="story.content.component"
      :key="story.content._uid"
      :blok="story.content"
      :is="story.content.component"
    /> -->
  </section>
</template>


