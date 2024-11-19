<template>
  <div class="card-wrapper relative mx-auto">
    <!-- Translation Card -->
    <div :class="['translation-card', showFullCard ? 'expanded' : 'collapsed']">
      <!-- Heading with Copy to Clipboard -->
      <div class="heading-container flex justify-center items-center relative mb-4">
        <h1
          ref="headingText"
          class="inline text-2xl"
          :class="showFullCard ? 'font-semibold' : 'font-normal'"
        >
          <span v-html="highlightedHeading"></span>
        </h1>
        <button
          v-if="showFullCard"
          @click="copyToClipboard(headingText)"
          class="copy-btn ml-2 p-1 rounded shadow text-sm transition"
          title="Copy to clipboard"
        >
          <img src="/copy-document.png" alt="Copy to clipboard" class="copy-icon" />
        </button>
      </div>


      <!-- Expandable Content -->
      <div v-if="showFullCard">
        <!-- Meaning Section -->
        <h2 class="text-lg font-medium text-gray-700 mb-2">
          {{ currentPage.meaning }} meaning
        </h2>
        <ul class="text-gray-600 text-base space-y-2 mb-6">
          <li
            v-for="(desc, index) in getDescriptions(currentPage.description)"
            :key="index"
          >
            {{ index + 1 }}.
            <span v-if="index === 1 && !showMore">{{ desc.substring(0, desc.length / 2) }}...</span>
            <span v-else>{{ desc }}</span>
            <button
              v-if="index === 1 && !showMore"
              @click="toggleMore"
              class="text-blue-500"
            >
              More
            </button>
          </li>
        </ul>

        <!-- Extra Message -->
        <div v-if="showMore" class="text-gray-600 text-base">
          {{ currentPage.extraMessage }}
          <button
            @click="toggleMore"
            class="text-blue-500 inline ml-2"
          >
            Less
          </button>
        </div>
      </div>

      <!-- Full Card Toggle Button -->
      <button
        @click="toggleFullCard"
        class="absolute bottom-6 right-4"
        title="Toggle Expand/Collapse"
      >
        <img
          :src="showFullCard ? '/up-arrow.png' : '/down-arrow.png'"
        />
      </button>

      <!-- Pagination dots -->
      <div v-if="showFullCard" class="flex justify-center space-x-2 mt-4">
        <span
          v-for="dot in dots"
          :key="dot"
          :class="{
            'bg-gray-600': dot === activePage,
            'bg-gray-400': dot !== activePage,
          }"
          class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-600"
          @click="changePage(dot)"
        ></span>
      </div>
    </div>

    <!-- Side Icons -->
    <div
      v-if="showFullCard"
      class="icon-container absolute top-8 right-[-4rem] bg-white p-4 rounded-lg shadow-lg"
    >
      <div class="flex flex-col items-center space-y-4 relative">
        <!-- Link Icon -->
        <div class="icon-wrapper bg-white p-2 rounded-lg shadow">
          <img src="/link.jpg" alt="Link icon" class="w-5 h-5" title="link"/>
        </div>

        <!-- Feedback Icon -->
        <div class="icon-wrapper bg-white p-2 rounded-lg shadow">
          <img src="/feedback.jpg" alt="Feedback icon" class="w-5 h-5" title="feedback"/>
        </div>

        <!-- Languages Icon and Options -->
        <div
          class="icon-wrapper bg-white p-2 rounded-lg shadow relative"
          @mouseenter="hoverLanguages = true"
          @mouseleave="hoverLanguages = false"
        >
          <!-- Languages Icon -->
          <img
            src="/languages.jpg"
            alt="Languages icon"
            class="w-5 h-5 cursor-pointer transition-transform duration-300"
          />
          <!-- Language Options Dropdown -->
          <transition name="expand-linear">
            <div
              v-if="hoverLanguages"
              class="language-options absolute left-[-15px] top-[-130px] bg-white shadow-lg rounded-lg p-2 text-gray-700 space-y-1"
            >
              <div class="language-option cursor-pointer hover:bg-gray-200 px-2 py-1">
                EN
              </div>
              <div class="language-option cursor-pointer hover:bg-gray-200 px-2 py-1">
                ES
              </div>
              <div class="language-option cursor-pointer hover:bg-gray-200 px-2 py-1">
                IT
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>
  </div>
</template>


<script lang="ts">
import { defineComponent, PropType, ref, computed } from 'vue';
import { arrType } from './CardData';

export default defineComponent({
  props: {
    page: {
      type: Object as PropType<arrType>,
      required: true,
    },
    dots: {
      type: Array as PropType<number[]> ,
      required: true,
    },
    activeDot: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const activePage = ref(props.activeDot);
    const showMore = ref(false);
    const showFullCard = ref(false);
    const hoverLanguages = ref(false);
    const headingText = ref<HTMLElement | null>(null);

    const showMoreState = ref<Record<number, boolean>>({ 1: false, 2: false });

    const currentPage = computed(() => {
      return activePage.value === 1 ? props.page.body.page1 : props.page.body.page2;
    });

    const highlightedHeading = computed(() => {
      const meaning = currentPage.value.meaning;
      const heading = props.page.heading;
      return showFullCard.value
        ? heading.replace(meaning, `<span class="font-bold">${meaning}</span>`)
        : heading;
    });

    const getDescriptions = (descriptions: string[]) => {
      return showMore.value ? descriptions : descriptions.slice(0, 2);
    };

    const toggleMore = () => {
      showMore.value = !showMore.value;
    };



 const toggleFullCard = () => {
    showFullCard.value = !showFullCard.value;
    // Reset all "showMore" states when collapsing the card
    if (!showFullCard.value) {
      showMoreState.value = { 1: false, 2: false };
    }
  };

    const changePage = (page: number) => {
      activePage.value = page;
      showMore.value = false;
    };

    const copyToClipboard = (headingElement: HTMLElement | null) => {
      if (headingElement) {
        const text = headingElement.innerText || headingElement.textContent;
        navigator.clipboard.writeText(text || '').then(() => {
          alert('Heading copied to clipboard!');
        });
      }
    };

    return {
      activePage,
      currentPage,
      showMore,
      showFullCard,
      hoverLanguages,
      toggleMore,
      toggleFullCard,
      changePage,
      highlightedHeading,
      getDescriptions,
      copyToClipboard,
      headingText,
    };
  },
});
</script>

<style scoped>
.card-wrapper {
  position: relative;
  display: flex;
  align-items: start;
  max-width: 1700px;  /* width when the card expands */
}

.translation-card {
  width: 1700px;
}

button {
  outline: none;
}

.language-options {
  @apply flex flex-col items-center bg-white shadow-lg rounded-lg p-2;
  width: 70px;
}

button img {
  width: 10px;  /* Set smaller width */
  height: 7px; /* Set smaller height */
}

.copy-btn img{
  width: 20px;
  height: 20px;
}

</style>
