<template>
  <div class="card-wrapper relative w-[70%]">
    <!-- Translation Card -->
    <div :class="['translation-card', showFullCard ? 'expanded' : 'collapsed']">
      <!-- Heading with Copy to Clipboard -->
      <div class="flex items-center mb-2 text-center">
        <h1
          ref="headingText"
          class="text-2xl font-light"
          :class="showFullCard ? 'font-semibold' : 'font-normal text-gray-400'"
        >
          <span
            class="text-gray-400 text-center hover:text-black cursor-pointer"
            v-html="highlightedHeading"
          ></span>
          <button
            :class="{ 'opacity-100': showFullCard, 'opacity-0': !showFullCard }"
            @click="copyToClipboard(headingText)"
            class="copy-btn ml-2 p-1 rounded shadow text-sm transition"
            title="Copy to clipboard"
          >
            <img
              src="/copy-document.png"
              alt="Copy to clipboard"
              class="copy-icon"
            />
          </button>
        </h1>
      </div>

      <div
        class="overflow-hidden transition-all duration-500 ease-in-out"
        :class="{ 'max-h-0': !showFullCard, 'max-h-[auto]': showFullCard }"
      >
        <!-- Meaning Section -->
        <transition name="fade-page" mode="out-in">
          <div :key="activePage">
            <h2 class="text-lg font-medium text-gray-400 mb-2">
              <span class="text-black">{{ currentPage.meaning }}</span> meaning
            </h2>
            <ul class="text-gray-400 space-y-2 mb-6">
              <li
                v-for="(desc, index) in getDescriptions(
                  currentPage.description
                )"
                :key="index"
              >
                {{ index + 1 }}.
                <span v-if="index === 1">
                  {{ desc.substring(0, desc.length / 2) }}<span>... </span>
                  <button
                    :class="{ 'opacity-0': showMore, 'opacity-100': !showMore }"
                    @click="toggleMore"
                    class="text-blue-500 transition-opacity duration-500 ease-in-out"
                  >
                    More
                  </button>
                  <!-- Second half of the description (hidden until "More" is clicked) -->
                  <span
                    :class="{ 'opacity-0': !showMore, 'opacity-100': showMore }"
                    class="transition-opacity duration-500 ease-in-out overflow-hidden"
                  >
                    {{ desc.substring(desc.length / 2) }}
                  </span>
                </span>
                <span v-else>{{ desc }}</span>
              </li>
            </ul>
          </div>
        </transition>

        <!-- Extra Message -->
        <div
          :class="{ 'opacity-0 ': !showMore, 'opacity-100 ': showMore }"
          class="extra-message text-gray-400 text-base transition-opacity duration-500 ease-in-out overflow-hidden"
        >
          {{ currentPage.extraMessage }}
          <button
            v-if="showMore"
            @click="toggleMore"
            class="text-blue-500 mt-2"
          >
            Less
          </button>
        </div>

        <!-- Pagination Dots -->
        <div class="flex justify-center space-x-2 mt-4 cursor-pointer">
          <span
            v-for="dot in dots"
            :key="dot"
            :class="{
              'bg-gray-600': dot === activePage,
              'bg-gray-400': dot !== activePage,
            }"
            class="w-2 h-2 rounded-full cursor-pointer hover:bg-gray-600"
            @click="changePage(dot)"
          ></span>
        </div>
      </div>
      <!-- </transition> -->

      <!-- Full Card Toggle Button -->
      <button
        @click="toggleFullCard"
        class="absolute bottom-6 right-4"
        title="Toggle Expand/Collapse"
      >
        <img :src="showFullCard ? '/up-arrow.png' : '/down-arrow.png'" />
      </button>
    </div>

    <!-- Side Icons -->
    <div
      :class="{ 'opacity-100': showFullCard, 'opacity-0': !showFullCard }"
      class="icon-container transition-opacity duration-500 ease-in-out"
    >
      <div class="container flex flex-col items-center h-full gap-3">
        <!-- Link Icon -->
        <img src="/link.jpg" alt="Link icon" class="w-4" title="link" />
        <img
          src="/feedback.jpg"
          alt="Feedback icon"
          class="w-4"
          title="feedback"
        />
        <!-- Languages Icon -->
        <div
          class="translationLanguageSelector bg-[#F3F3F3] mt-0 rounded-3xl flex flex-col justify-start items-center rounded overflow-hidden"
        >
          <img
            src="/languages.jpg"
            alt="Languages icon"
            class="w-5 h-4 bg-[#F3F3F3] cursor-pointer"
          />
          <span class="text-sm text-gray-950 mt-2">EN</span>
          <span class="text-sm text-gray-950 mt-2">ES</span>
          <span class="text-sm text-gray-950 mt-2">IT</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from "vue";
import { arrType } from "./CardData";

export default defineComponent({
  props: {
    page: {
      type: Object as PropType<arrType>,
      required: true,
      default: () => ({
        body: { page1: {}, page2: {} },
        heading: "",
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
      return activePage.value === 1
        ? props.page.body.page1
        : props.page.body.page2;
    });

    const highlightedHeading = computed(() => {
      const meaning = currentPage.value.meaning;
      const heading = props.page.heading;

      if (showFullCard.value) {
        return heading
          .split(meaning)
          .map((part, index, array) => {
            if (index < array.length - 1) {
              return `${part}<span class="text-black ">${meaning}</span>`;
            }
            return `${part}`;
          })
          .join("");
      } else {
        return `${heading}`;
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
      const card = button.closest(".translation-card") as HTMLElement;
      if (!card) return;

      if (!showFullCard.value) {
        card.style.height = "auto";
        card.classList.remove("collapsed");
        card.classList.add("expanded");
      } else {
        const currentHeight = card.offsetHeight;
        // card.style.height = `${currentHeight}px`;
        requestAnimationFrame(() => {
          // card.style.height = '100px';
        });
        card.classList.remove("expanded");
        card.classList.add("collapsed");

        showMore.value = false;
      }

      showFullCard.value = !showFullCard.value;
    };

    // Correctly typed methods for lifecycle hooks
    const beforeEnter = (el: Element): void => {
      const element = el as HTMLElement;
      element.style.maxHeight = "0px";
      element.style.opacity = "0";
    };

    const afterEnter = (el: Element): void => {
      const element = el as HTMLElement;
      element.style.maxHeight = "1000px"; // Adjust based on your content size
      element.style.opacity = "1";
    };
    const changePage = (page: number) => {
      activePage.value = page;
      showMore.value = false;
    };

    const copyToClipboard = (headingElement: HTMLElement | null) => {
      if (!headingElement) {
        console.error("Heading element is null");
        return;
      }
      const text = headingElement.innerText || headingElement.textContent;
      if (text) {
        navigator.clipboard.writeText(text).then(() => {
          alert("Heading copied to clipboard!");
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
  /*display: flex; */
  /* flex-wrap: wrap;  */
  /* justify-content: space-between; Even spacing between cards */
  /* align-items: start; */
  /* width: 70%;  width when the card expands */
  /* padding: 20px; */
  display: flex;
  flex-direction: column;
  margin: auto;
  /* padding: 20px; */
}

.translation-card {
  /* @apply bg-white rounded-sm shadow-lg transition-all duration-300 ease-in-out; */
  padding: 30px;
  position: relative;
  background-color: white;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.2);
  /* transition: all 0.5s ease-in-out; */
  overflow: hidden;
  /* height: 100px;  */
}

/* .expandable-content{
 opacity: 50; 
} */

/* .expand-fade-enter-to,
.expand-fade-leave-to {
  transition: opacity 0.4s ease;
} */

.expand-fade-enter-active,
.expand-fade-leave-active {
  transition: opacity 0.3s ease-in-out;
}

.expand-fade-enter,
.expand-fade-leave-active {
  opacity: 0;
}

.expand-fade-enter-active,
.expand-fade-leave {
  opacity: 0;
}

button {
  outline: none;
}

/* .language-option {
  @apply  bg-white p-2;
  transition: height 0.5s linear;
} */

button img {
  width: 10px; /* Set smaller width */
  height: 7px; /* Set smaller height */
}

.copy-btn img {
  width: 20px;
  height: 20px;
}

.icon-wrapper img {
  width: 23px;
}

.fade-page-enter-active,
.fade-page-leave-active {
  transition: opacity 0.4s ease;
}

.fade-page-enter,
.fade-page-leave-to {
  opacity: 0;
}

.translationLanguageSelector {
  @apply absolute bottom-1 h-[44px] transition-height duration-500 ease-in-out;
}

.translationLanguageSelector:hover {
  @apply h-[104px];
}

.translationLanguageSelector:hover .language-option {
  display: block;
}
</style>
