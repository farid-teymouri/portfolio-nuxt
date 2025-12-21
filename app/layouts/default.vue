<template>
  <div>
    <UContainer>
      <!-- Header will appear on all pages using this layout -->
      <AppHeader />
    </UContainer>

    <!-- Main page content -->
    <slot />

    <!-- Optional footer in the future -->
  </div>
</template>
