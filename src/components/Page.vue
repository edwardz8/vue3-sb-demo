<template>
  <div v-editable="blok">
  <template v-for="item in blok.body" :key="item._uid">
    <component :blok="item" :is="item.component"></component>
  </template>
  </div>
</template>

<script>
export default {
  props: ['blok']
}
</script>