<template>
  <div class="flex flex-row justify-around">
    <div
      class="border-x border-dashed border-muted/80 lg:max-w-33 md:max-w-30 max-w-25 w-full flex flex-col items-center justify-center"
    >
      <div class="rounded-full border border-dashed border-muted">
        <NuxtImg
          src="/images/farid-teymouri.webp"
          :alt="t('pages.home.profile.avatar-alt')"
          width="140"
          height="140"
          format="webp"
          quality="100"
          loading="lazy"
          class="block rounded-full lg:size-33 md:size-30 size-25"
        />
      </div>
    </div>
    <div class="flex flex-col border-e border-dashed border-muted/80 w-full">
      <div
        class="h-full flex flex-col gap-2 border-b border-dashed border-muted/80 p-2.5 px-4"
      >
        <div class="flex flex-row gap-2 items-center">
          <span
            class="lg:text-2xl md:text-2xl text-lg ltr:font-sans"
            ref="textRef"
          >
            {{ $t("pages.home.profile.profile-name") }}</span
          >
          <UIcon
            name="si:verified-fill"
            class="lg:size-4 size-3 text-blue-500"
          />
          <audio
            controls
            class="hidden"
            ref="audio"
            src="/voice/farid-e-teymouri.mp3"
          ></audio>
          <motion.button
            :whileHover="{ scale: 1.1 }"
            :whilePress="{ scale: 0.7 }"
            @click="play"
            calss="items-center justify-center "
          >
            <UIcon
              name="ic:outline-volume-up"
              class="lg:size-5 size-4 text-muted px-3 block cursor-pointer"
            />
          </motion.button>
        </div>
        <div class="w-full">
          <span class="text-sm">
            {{ $t("pages.home.profile.short-bio") }}
          </span>
        </div>
      </div>
      <div class="flex items-center h-fit p-2.5 px-4">
        <span ref="text" class="w-full text-sm">{{ sentences[current] }}</span>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
import gsap from "gsap";
import { motion } from "motion-v";
const { t, setLocale } = useI18n();
const sentences = [
  t("pages.home.profile.sentences-1"),
  t("pages.home.profile.sentences-2"),
  t("pages.home.profile.sentences-3"),
  t("pages.home.profile.sentences-4"),
  t("pages.home.profile.sentences-5"),
  t("pages.home.profile.sentences-6"),
  t("pages.home.profile.sentences-7"),
  t("pages.home.profile.sentences-8"),
];

const current = ref(0);
const text = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!text.value) return;

  const timeline = gsap.timeline({
    repeat: -1,
    defaults: { ease: "power2.inOut" },
  });

  sentences.forEach((_, i) => {
    timeline
      // جمله قبلی خارج شود: به پایین حرکت کند و ناپدید شود
      .to(text.value, { y: 15, opacity: 0, duration: 0.5 })
      // تغییر متن
      .call(() => {
        current.value = i;
      })
      // جمله جدید از بالا وارد شود
      .fromTo(
        text.value,
        { y: -15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5 }
      )
      // کمی نمایش داده شود
      .to({}, { duration: 2 });
  });
});

const audio = ref<HTMLAudioElement | null>(null);

const play = () => {
  audio.value?.play();
};
</script>
