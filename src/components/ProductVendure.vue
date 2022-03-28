<script>
export default {
  props: {
    blok: {
      type: Object,
      required: true
    }
  },
}
</script>

<template>
  <div v-editable="blok" class="section"> 
    <button
      :key="category.id"
      v-for="category in blok.collections"
      type="button"
      class="btn bg-light mx-2 my-2"
    >
      {{ category.name }}
    </button>
  </div>

  <div v-editable="blok" class="grid">
    <div :key="product.name" v-for="product in blok.products.items" class="container">
      <div class="card mx-2 my-2" style="width: 18rem">
        <img :src="product.image" class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title">{{ product.name }}</h5>
          <p class="card-title">{{ product.price }}</p>
          <!-- <a class="btn btn-secondary">View</a> -->
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
  /* justify-content: center; */
}
.list {
  max-width: 1640px;
}
</style>