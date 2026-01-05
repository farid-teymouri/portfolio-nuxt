<script setup lang="ts">
import AppHeader from "~/components/header/AppHeader.vue";
import { motion } from "motion-v";
import { useScroll } from "@vueuse/core";
import { ref, watch, onMounted } from "vue";

// --- Reactive References ---
// Reference to the header element in the template for DOM measurements
const headerRef = ref<HTMLElement | null>(null);
// Controls whether the header should be visually "sticky" (fixed to top)
const isSticky = ref(false);
// Controls visibility of dependent UI elements (e.g., back-to-top button)
const isVisible = ref(false);
// Stores the actual measured height of the header for accurate scroll logic
const headerHeight = ref(0);

// --- Scroll Monitoring ---
// Track vertical scroll position of the window
const { y: scrollY } = useScroll(window);

// --- Scroll Behavior Logic ---
// Update sticky and visibility flags based on scroll position
watch(scrollY, (currentScrollY) => {
  // Make header sticky once user scrolls past its height (fallback to 80px if not yet measured)
  isSticky.value = currentScrollY > (headerHeight.value || 80);
  // Show supporting UI (e.g., scroll-to-top button) after scrolling 300px
  isVisible.value = currentScrollY > 300;
});

// --- Initialization on Mount ---
onMounted(() => {
  // Measure and cache the header's actual height for precise scroll thresholds
  if (headerRef.value) {
    headerHeight.value = headerRef.value.offsetHeight;
  }

  // If the URL contains a hash (e.g., #section), scroll to that anchor after a short delay
  // to ensure the layout is stable before scrolling
  if (window.location.hash) {
    const { scrollToAnchor } = useAnchorScroll();
    setTimeout(() => {
      scrollToAnchor(window.location.hash.slice(1)); // Remove '#' prefix
    }, 100);
  }
});

// --- Scroll Helpers ---
// Expose a smooth-scroll-to-top function using shared composable logic
const { scrollToTop } = useAnchorScroll({
  toTop: {
    scrollOptions: {
      behavior: "smooth",
      // Offset accounts for sticky header height if needed (currently set to 0)
      offsetTop: 0,
    },
  },
});
</script>

<template>
  <!-- Header will appear on all pages using this layout -->

  <div class="transition-none h-13.5">
    <div
      :class="isSticky ? 'bg-default/80' : ''"
      class="z-50 bg-default/50 backdrop-blur-sm fixed top-0 left-0 right-0 shadow-2xl shadow-neutral-50 dark:shadow-neutral-900"
    >
      <header
        class="z-50 border-y border-dashed border-muted md:px-10 px-2 mt-2"
      >
        <UContainer
          class="transition-none border-x border-dashed border-muted/80 mx-auto relative px-0!"
        >
          <AppHeader />
        </UContainer>
      </header>
    </div>
  </div>
  <slot />

  <Footer />

  <Transition name="fade">
    <motion.div
      v-if="isVisible"
      :while-press="{ scale: 0.9 }"
      class="fixed rtl:lg:left-10 rtl:left-5 ltr:lg:right-10 ltr:right-5 bottom-15 w-fit"
    >
      <UButton
        icon="solar:alt-arrow-up-outline"
        size="lg"
        color="neutral"
        variant="outline"
        class="cursor-pointer border border-primary/60 outline-0 shadow-none outline-none ring-0 bg-elevated/80"
        @click="scrollToTop()"
      ></UButton
    ></motion.div>
  </Transition>
</template>
