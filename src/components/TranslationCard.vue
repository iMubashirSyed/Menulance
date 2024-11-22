<template>
  <div class="card-wrapper relative mx-auto">
    <!-- Translation Card -->
    <div :class="['translation-card', showFullCard ? 'expanded' : 'collapsed']">
      <!-- Heading with Copy to Clipboard -->
      <div class="heading-container flex justify-center items-center relative mb-4">
        <h1
          ref="headingText"
          class="inline text-2xl"
          :class="showFullCard ? 'font-semibold' : 'font-normal text-gray-400'"
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

      <!-- Expandable Content with Smooth Transitions -->
      <transition name="expand-fade" @before-enter="beforeEnter" @after-enter="afterEnter">
        <div v-if="showFullCard" key="expandable-content" class="expandable-content" :class="{ 'show': showFullCard }">
          <!-- Meaning Section -->
          <transition name="fade-page" mode="out-in">
            <div :key="activePage">
              <h2 class="text-lg font-medium text-gray-400 mb-2">
                <span class="text-black">{{ currentPage.meaning }}</span> meaning
              </h2>
              <ul class="text-gray-400 space-y-2 mb-6">
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
            </div>
          </transition>
        </div>
      </transition>
                <!-- Extra Message -->
          <transition name="fade-toggle">
            <div
              v-if="showMore"
              class="extra-message text-gray-400 text-base"
              :style="showMore ? {} : { maxHeight: '0', padding: '0' }"
            >
              {{ currentPage.extraMessage }}
              <button @click="toggleMore" class="text-blue-500 inline ml-2">Less</button>
            </div>
      </transition>

      <!-- Full Card Toggle Button -->
      <button
        @click="toggleFullCard"
        class="absolute bottom-6 right-4"
        title="Toggle Expand/Collapse"
      >
        <img :src="showFullCard ? '/up-arrow.png' : '/down-arrow.png'" />
      </button>

      <!-- Pagination Dots -->
      <transition name="fade-toggle">
        <div v-if="showFullCard" class="flex justify-center space-x-2 mt-4">
          <span
            v-for="dot in dots"
            :key="dot"
            :class="{
              'bg-gray-600': dot === activePage,
              'bg-gray-400': dot !== activePage,
            }"
            class="w-2 h-2 rounded-full cursor-pointer transition-all duration-300 hover:bg-gray-600"
            @click="changePage(dot)"
          ></span>
        </div>
      </transition>
    </div>

    <!-- Side Icons -->
    <div v-if="showFullCard" class="icon-container w-13">
      <div class="flex flex-col items-center space-y-4">
        <!-- Link Icon -->
        <div class="icon-wrapper bg-white">
          <img src="/link.jpg" alt="Link icon" class="w-3 h-3" title="link" />
        </div>
        <!-- Feedback Icon -->
        <div class="icon-wrapper bg-white">
          <img src="/feedback.jpg" alt="Feedback icon" class="w-3 h-3" title="feedback" />
        </div>
        <!-- Languages Icon and Options -->
        <div
          class="icon-wrapper bg-white"
          @mouseenter="hoverLanguages = true"
          @mouseleave="hoverLanguages = false"
        >
          <!-- Languages Icon -->
          <img
            src="/languages.jpg"
            alt="Languages icon"
            class="w-3 h-3 cursor-pointer transition-transform duration-300"
          />
          <!-- Language Options Dropdown -->
          <transition name="expand-linear">
            <div
              v-if="hoverLanguages"
              class="language-options absolute left-[3px] top-[0px] bg-white shadow-lg rounded-lg p-2 text-gray-700 space-y-1"
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
import { defineComponent, ref, computed, PropType } from 'vue';
import { arrType } from './CardData';

export default defineComponent({
  props: {
    page: {
      type: Object as PropType<arrType>,
      required: true,
      default: () => ({
        body: { page1: {}, page2: {} },
        heading: ''
      }),
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

      if (showFullCard.value) {
        return heading.split(meaning).map((part, index, array) => {
          if (index < array.length - 1) {
            return `<span class="text-gray-400">${part}</span><span class="text-black ">${meaning}</span>`;
          }
          return `<span class="text-gray-400">${part}</span>`;
        }).join('');
      } else {
        return `<span class="text-gray-400">${heading}</span>`;
      }
    });

    const getDescriptions = (descriptions: string[]) => {
      return showMore.value ? descriptions : descriptions.slice(0, 2);
    };

    const toggleMore = () => {
      showMore.value = !showMore.value;
    };

    const toggleFullCard = (event: Event) => {
      const button = event.currentTarget as HTMLElement;
      const card = button.closest('.translation-card') as HTMLElement;
      if (!card) return;

      if (!showFullCard.value) {
        card.style.height = 'auto';
        card.classList.remove('collapsed');
        card.classList.add('expanded');
      } else {
        const currentHeight = card.offsetHeight;
        card.style.height = `${currentHeight}px`;
        requestAnimationFrame(() => {
          card.style.height = '100px';
        });
        card.classList.remove('expanded');
        card.classList.add('collapsed');

        showMore.value = false;
      }

      showFullCard.value = !showFullCard.value;
    };

    // Correctly typed methods for lifecycle hooks
    const beforeEnter = (el: Element): void => {
  const element = el as HTMLElement;
  element.style.maxHeight = '0px';
  element.style.paddingTop = '0';
  element.style.paddingBottom = '0';
  element.style.opacity = '0';
};

const afterEnter = (el: Element): void => {
  const element = el as HTMLElement;
  element.style.maxHeight = '1000px'; // Adjust based on your content size
  element.style.paddingTop = '10px';
  element.style.paddingBottom = '10px';
  element.style.opacity = '1';
};
    const changePage = (page: number) => {
      activePage.value = page;
      showMore.value = false;
    };

    const copyToClipboard = (headingElement: HTMLElement | null) => {
      if (!headingElement) {
        console.error('Heading element is null');
        return;
      }
      const text = headingElement.innerText || headingElement.textContent;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
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
      beforeEnter,
      afterEnter,
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
  /* padding: 20px; */
}

.translation-card {
  width: 1700px;
  padding: 30px;
  /* position: relative; */
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
  overflow: hidden;
  height: 100px;
}

.expandable-content {
  overflow: hidden;
  max-height: 0;
  padding-top: 0;
  padding-bottom: 0;
  opacity: 0;
  transition: max-height 0.5s ease-in-out, padding 0.5s ease-in-out, opacity 0.5s ease-in-out;
}

.expandable-content.show {
  max-height: 1000px; /* Adjust this based on content */
  padding-top: 10px;
  padding-bottom: 10px;
  opacity: 1;
}

button {
  outline: none;
}

.language-options {
  @apply flex flex-col items-center bg-white shadow-lg rounded-lg p-2;
  width: 50px;
  transition: height 0.5s linear;
}

button img {
  width: 10px;  /* Set smaller width */
  height: 7px; /* Set smaller height */
}

.copy-btn img{
  width: 20px;
  height: 20px;
}

.icon-wrapper img{
  width: 15px;
}

.page-transition-enter-active,
.page-transition-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.page-transition-enter {
  opacity: 0;
  transform: translateX(20px);
}
.page-transition-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}


.fade-toggle-enter-active,
.fade-toggle-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
}

.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 2s ease, transform 2s ease;
  overflow: hidden;
}

.expand-linear-enter-active, .expand-linear-leave-active {
  transition: all 0.5s ease;
  overflow: hidden;
}

.expand-fade{
  transition: all 2s ease, transform 2s ease;
  overflow: hidden;
}
</style>
