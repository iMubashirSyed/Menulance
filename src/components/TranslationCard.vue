<template>
  <div class="card-wrapper relative mx-auto">
    <!-- Translation Card -->
    <div :class="['translation-card', showFullCard ? 'expanded' : 'collapsed']">
      <!-- Heading with Copy to Clipboard -->
      <div class="flex justify-center items-center mb-4">
        <h1 :class="['text-2xl text-center', showFullCard ? 'font-semibold' : 'font-normal']">
          <span ref="headingText" v-html="highlightedHeading"></span>
        </h1>
        <button
          v-if="showFullCard"
          @click="copyToClipboard(headingText)"
          class="ml-2 bg-gray-200 hover:bg-gray-300 text-gray-700 p-1 rounded shadow text-sm transition"
          title="Copy to clipboard"
        >
          📋
        </button>
      </div>

      <!-- Expandable Content -->
      <div v-if="showFullCard">
        <!-- Meaning Section -->
        <h2 class="text-lg font-medium text-gray-700 mb-2">
          {{ currentPage.meaning }} meaning
        </h2>
        <ul class="text-gray-600 text-base space-y-2 mb-6">
          <li v-for="(desc, index) in getDescriptions(currentPage.description)" :key="index">
            {{ index + 1 }}. 
            <span v-if="index === 1 && !showMore">{{ desc.substring(0, desc.length / 2) }}...</span>
            <span v-else>{{ desc }}</span>
            <button v-if="index === 1 && !showMore" @click="toggleMore" class="text-blue-500">More</button>
          </li>
        </ul>

        <!-- Extra Message -->
        <div v-if="showMore" class="text-gray-600 text-base mb-6">{{ currentPage.extraMessage }}</div>

        <!-- "Less" button -->
        <button v-if="showMore" @click="toggleMore" class="text-blue-500 mb-6">Less</button>
      </div>

      <!-- Full Card Toggle Button -->
      <button 
        @click="toggleFullCard" 
        class="absolute bottom-6 right-4 bg-gray-100 p-2 rounded-lg shadow text-gray-600 transition-all duration-300 transform hover:bg-gray-200 hover:scale-105"
        title="Toggle Expand/Collapse"
      >
        {{ showFullCard ? "Collapse" : "Expand" }}
      </button>

      <!-- Pagination dots -->
      <div v-if="showFullCard" class="flex justify-center space-x-2 mt-4">
        <span
          v-for="dot in dots"
          :key="dot"
          :class="{'bg-gray-600': dot === activePage, 'bg-gray-400': dot !== activePage}"
          class="w-3 h-3 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-600"
          @click="changePage(dot)"
        ></span>
      </div>
    </div>

    <!-- Side Icons -->
    <div v-if="showFullCard" class="icon-container absolute top-8 right-[-4rem] bg-white p-4 rounded-lg shadow-lg">
      <div class="flex flex-col items-center space-y-4 relative">
        <!-- Link Icon -->
        <div class="icon-wrapper bg-white p-2 rounded-lg shadow transition-all duration-300 hover:bg-gray-200">
          <img src="/link.jpg" alt="Link icon" class="w-5 h-5">
        </div>

        <!-- Feedback Icon -->
        <div class="icon-wrapper bg-white p-2 rounded-lg shadow transition-all duration-300 hover:bg-gray-200">
          <img src="/feedback.jpg" alt="Feedback icon" class="w-5 h-5">
        </div>

        <!-- Languages Icon and Options -->
        <div
          class="icon-wrapper bg-white p-2 rounded-lg shadow relative transition-all duration-300 hover:bg-gray-200"
          @mouseenter="hoverLanguages = true"
          @mouseleave="hoverLanguages = false"
        >
          <!-- Languages Icon -->
          <img
            src="/languages.jpg"
            alt="Languages icon"
            :class="hoverLanguages ? 'translate-y-[-40px]' : 'translate-y-0'"
            class="w-5 h-5 cursor-pointer transition-transform duration-300"
          />
          <!-- Language Options Dropdown -->
          <transition name="expand-linear">
            <div
              v-if="hoverLanguages"
              class="language-options absolute left-[-15px] top-[-100px] bg-white shadow-lg rounded-lg p-2 text-gray-700 space-y-1"
            >
              <div class="language-option cursor-pointer hover:bg-gray-200 px-2 py-1">EN</div>
              <div class="language-option cursor-pointer hover:bg-gray-200 px-2 py-1">ES</div>
              <div class="language-option cursor-pointer hover:bg-gray-200 px-2 py-1">IT</div>
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
      type: Array as PropType<number[]>,
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
      showMore.value = false;
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
  max-width: 800px;
}

.translation-card {
  @apply w-full;
}

button {
  outline: none;
}

.language-options {
  @apply flex flex-col items-center bg-white shadow-lg rounded-lg p-2;
  width: 70px;
  opacity: 0;
  transform: translateY(10%);
  transition: opacity 0.3s ease, transform 0.3s ease;
}

.icon-wrapper:hover .language-options {
  opacity: 1;
  transform: translateY(-10%);
}

.icon-wrapper img {
  transition: transform 0.3s ease;
}

.icon-wrapper:hover img {
  transform: translateY(-40px);
}

.language-option {
  @apply text-sm cursor-pointer hover:bg-gray-200 px-2 py-1;
}

.expand-linear-enter-active,
.expand-linear-leave-active {
  transition: all 0.2s linear;
}

.expand-linear-enter-from,
.expand-linear-leave-to {
  opacity: 0;
  transform: translateY(-10%);
}
</style>
