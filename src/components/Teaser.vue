<template>
  <div v-editable="blok">
    <img :src="blok.image.filename" />
    <h3>{{ blok.headline }}</h3>
  </div>
</template>

<script>
export default {
    props: ['blok']
}
</script>