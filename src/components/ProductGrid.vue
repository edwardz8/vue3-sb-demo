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
    <li
      :key="category.id"
      v-for="category in blok.categories.items"
      class="container"
    >{{ category.name }}</li>
  </ul>
  <div v-editable="blok" class="grid">
     <div :key="product.name" v-for="product in blok.products.items" class="container"> 
     <div class="card mx-2 my-2" style="width: 18rem">
        <img :src="product.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <!-- <a class="btn btn-primary">Info</a> -->
        </div>
      </div>
     </div>
  </div>
  <!-- <div v-editable="blok" class="section">
    <pre><code>{{blok}}</code></pre>
  </div>-->
</template>

<style> 
.grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}
.list {
  max-width: 1640px;
}
</style>