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
    <li :key="category.id" v-for="category in blok.categories.items" class="container">
  {{category.name}}
    </li>
  </ul>
  <!-- <ul v-editable="blok" class="section">
    <li :key="category.id" v-for="product in blok.products.items" class="container">
  {{product.name}}
    </li>
  </ul> -->
  <!-- <div v-editable="blok" class="section">
    <pre><code>{{blok}}</code></pre>
  </div> -->
</template>