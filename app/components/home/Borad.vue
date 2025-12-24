<template>
  <div
    class="flex lg:flex-row flex-col justify-between items-center border-x border-dashed border-muted/80 relative"
  >
    <motion.div
      ref="constraintsRef"
      class="bg-prodots flex flex-col justify-between w-full h-full relative overflow-hidden"
    >
      <!-- Draggable item -->
      <motion.div
        :animate="{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ['0%', '0%', '50%', '50%', '0%'],
        }"
        :transition="{
          duration: 1,
          ease: 'easeInOut',
          times: [0, 0.2, 0.5, 0.8, 1],
        }"
        drag
        :style="{ x, y }"
        :whileDrag="{ scale: 1.2 }"
        :dragElastic="0.2"
        :dragConstraints="constraintsRef"
        class="w-fit h-full mx-auto flex items-center min-h-59 cursor-grab active:cursor-grabbing"
      >
        <HeaderLogo
          :width="70"
          :height="76"
          class="ring-0 focus:ring-transparent focus:ring-0 shadow-none border-0 focus:outline-none"
        />
      </motion.div>

      <!-- Reset Button -->
    </motion.div>
    <motion.div
      :whileHover="{ scale: 1.1 }"
      :whilePress="{ scale: 0.7 }"
      class="absolute top-4 rtl:right-4 ltr:left-4"
    >
      <UButton
        @click="resetDrag"
        icon="solar:refresh-circle-line-duotone"
        size="md"
        color="neutral"
        variant="outline"
        class="shadow-none bg-elevated cursor-pointer"
      />
    </motion.div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";
const { t, setLocale } = useI18n();
import { ref } from "vue";
import { motion, useMotionValue } from "motion-v";
import { useDomRef } from "motion-v";
const constraintsRef = useDomRef();

const x = useMotionValue(0);
const y = useMotionValue(0);

const resetDrag = () => {
  x.set(0);
  y.set(0);
};
</script>
<style scoped>
.container {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

.box {
  width: 100px;
  height: 100px;
  background-color: #8df0cc;
  border-radius: 10px;
}
</style>
