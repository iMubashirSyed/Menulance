<template>
    <div class="card-list-wrapper mx-auto bg-black p-6 rounded-md shadow-lg space-y-6">
      <!-- Cards List (Flex Column) -->
      <div class="flex flex-col space-y-6">
        <TranslationCard
          v-for="(card, index) in displayedCards"
          :key="index"
          :page="card"
          :dots="[1, 2]"
          :activeDot="activeDot"
        />
      </div>
  
      <!-- "More Results" Button -->
      <div class="flex justify-center mt-4">
        <button
          v-if="!showAllCards"
          @click="showMoreCards"
          class="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          More Results
        </button>
        <button
          v-else
          @click="showLessCards"
          class="bg-gray-500 text-white py-2 px-4 rounded hover:bg-gray-600 transition"
        >
          Show Less
        </button>
      </div>
    </div>
  </template>
    
  <script lang="ts">
  import { defineComponent, ref, computed } from "vue";
  import TranslationCard from "./TranslationCard.vue";
  import { arr, arrType } from "./CardData";
  
  export default defineComponent({
    name: "TranslationCardList",
    components: { TranslationCard },
    setup() {
      const data = ref<arrType[]>(arr); // Full card data
      const showAllCards = ref(false); // Toggle state
      const activeDot = ref(1); // Active page indicator
  
      // Dynamically calculate displayed cards
      const displayedCards = computed(() =>
        showAllCards.value ? data.value : data.value.slice(0, 3)
      );
  
      const showMoreCards = () => {
        showAllCards.value = true;
      };
  
      const showLessCards = () => {
        showAllCards.value = false;
      };
  
      return {
        displayedCards,
        showAllCards,
        showMoreCards,
        showLessCards,
        activeDot,
      };
    },
  });
  </script>
  
  <style scoped>
  .card-list-wrapper {
    max-width: 1200px;
    margin: 0 auto;
  }
  </style>
  