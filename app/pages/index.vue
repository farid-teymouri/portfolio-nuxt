<script setup lang="ts">
import About from "~/components/home/About.vue";
import Borad from "~/components/home/Borad.vue";
import Community from "~/components/home/Community.vue";
import HeadLine from "~/components/home/HeadLine.vue";
import MyContributions from "~/components/home/MyContributions.vue";
import Overview from "~/components/home/Overview.vue";
import Profile from "~/components/home/Profile.vue";
import Spacer from "~/components/home/Spacer.vue";
// pages/index.vue
const test = "the home page";
</script>

<template>
  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Borad />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Profile />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Overview />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <Community />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 h-8">
    <UContainer class="mx-auto relative px-0!">
      <HeadLine
        :header-text="$t('pages.home.about.header')"
        id="about"
        tag="h2"
      />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <About />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2 bg-linear h-8">
    <UContainer class="mx-auto relative px-0!">
      <Spacer />
    </UContainer>
  </div>

  <div class="border-b border-dashed border-muted md:px-10 px-2">
    <UContainer class="mx-auto relative px-0!">
      <MyContributions />
    </UContainer>
  </div>
</template>
