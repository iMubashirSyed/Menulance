<template>
  <div class="bg-black min-h-screen flex flex-col items-center justify-start p-4">
    <!-- English Egg Image and Text -->
    <div class="text-center text-gray-300 flex flex-col items-center mb-12">
      <img src="/english-egg.png" alt="English" class="w-12 h-12 mb-4" />
      <h1 class="text-3xl font-bold ">English</h1>
    </div>

    <!-- Cards Section -->
    <TranslationCardList />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TranslationCardList from "./components/TranslationCardList.vue";

export default defineComponent({
  components: {
    TranslationCardList,
  },
});
</script>

<style scoped>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}

img {
  object-fit: contain;
}
</style>
