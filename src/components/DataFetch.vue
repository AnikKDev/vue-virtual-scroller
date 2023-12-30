<script setup>
import { ref } from "vue";
import { RecycleScroller } from "vue-virtual-scroller";

const images = ref([]);
const fetchPhotos = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/photos").then(
    (res) => res.json()
  );
  images.value = res;
  //   console.log(res);
};
fetchPhotos();
</script>
<style lang=""></style>
<template lang="">
  <div>
    <h1>Hello world</h1>
    <!-- <img v-for="img in images.slice(0, 30)" :src="img.url" alt="" /> -->

    <RecycleScroller
      class="scroller"
      :items="images"
      :item-size="200"
      key-field="id"
      v-slot="{ item }"
    >
      <div class="user">
        <img style="height: 200px; width: 200px" :src="item.url" alt="" />
      </div>
    </RecycleScroller>
  </div>
</template>

<style scoped>
.scroller {
  height: 600px;
  overflow-y: auto;
}

.user {
  height: 32%;
  padding: 0 12px;
  display: flex;
  align-items: center;
}
</style>
