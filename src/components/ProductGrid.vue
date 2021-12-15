<script>
export default {
    props: {
        blok: {
            type: Object,
            required: true 
        },
        products: { type: Object },
        categories: { type: Object },
    },
    data() {
      return {
        fullCategories: [],
        fullProducts: []
      }
    }
}
</script>

<template>
  <ul v-editable="blok" class="section">
    <li :key="blok._uid" v-for="blok in blok.columns" class="container">
        <component :blok="blok" :is="blok.component" />
    </li>
  </ul>
</template>