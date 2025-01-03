<template>
  <div class="card-list-wrapper rounded-md w-full">
    <!-- Cards List -->
    <div class="flex flex-col w-full items-center gap-2">
      <TranslationCard
        v-for="(card, index) in displayedCards"
        :key="index"
        :page="card"
        :dots="[1, 2]"
        :activeDot="activeDot"
      />

      <!-- "More Results" Section -->
      <div
        v-if="!showAllCards"
        class="more-results-section cursor-pointer w-[70%]"
        @click="showMoreCards"
      >
        <button class="more-results-btn w-full">▼ More Results</button>
      </div>
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
    const data = ref<arrType[]>(arr);
    const showAllCards = ref(false);
    const activeDot = ref(1);

    const displayedCards = computed(() =>
      showAllCards.value ? data.value : data.value.slice(0, 3)
    );

    const showMoreCards = () => {
      showAllCards.value = true; // Set to true to display all cards
    };

    return {
      displayedCards,
      showAllCards,
      showMoreCards,
      activeDot,
    };
  },
});
</script>

<style scoped>
.card-list-wrapper {
  max-width: 1200px;
}

/* More Results Section */
.more-results-section {
  background: linear-gradient(to bottom, #ffffff, #898686);
  text-align: center;
  padding: 20px 0;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

.more-results-section:hover {
  background: linear-gradient(to bottom, #f0f0f0, #898686);
  transform: translateY(-2px);
}

/* Button Styling */
.more-results-btn {
  background: none;
  color: #666;
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  pointer-events: none; /* Prevent this button from intercepting clicks */
  height: 44px;
}
</style>
