<template>
  <div class="border-x border-dashed border-muted/80">
    <div
      class="p-2.5 flex lg:flex-row lg:gap-8 gap-2 flex-col items-start w-full"
    >
      <ul
        class="flex flex-col gap-2 text-[14px]"
        v-for="(group, gIndex) in infoGroups"
        :key="gIndex"
      >
        <li v-for="(item, index) in group" :key="index">
          <div class="flex flex-row gap-2 items-center">
            <ClientOnly>
              <UBadge
                :icon="item.icon"
                size="md"
                class="rounded-lg p-1 bg-accented text-toned"
              ></UBadge>
            </ClientOnly>
            <template v-if="isLinkItem(item)">
              <a
                :href="item.href"
                class="hover:text-primary"
                :dir="item.dir || 'ltr'"
              >
                {{ item.text }}
              </a>
            </template>

            <template v-else>
              <span class="cursor-default">
                {{ item.text }}
              </span>
            </template>

            <!-- extraText -->
            <template v-if="'extraText' in item && item.extraText">
              <span class="cursor-default">{{ unref(item.extraText) }}</span>
            </template>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Ref } from "vue";
import { unref } from "vue";
import { useI18n } from "#imports";
import { useTehranTime } from "~/composables/useTehranTime";

const { t, locale } = useI18n();
const { formattedTime: tehranTime } = useTehranTime(locale);

// تعریف type-safe
interface TextItem {
  icon: string;
  text: string;
  extraText?: string | Ref<string>;
}

interface LinkItem {
  icon: string;
  text: string;
  href: string;
  dir?: string;
}

type InfoItem = TextItem | LinkItem;

function isLinkItem(item: InfoItem): item is LinkItem {
  return "href" in item && typeof item.href === "string";
}

const infoGroups: InfoItem[][] = [
  [
    { icon: "si:terminal-alt-duotone", text: t("pages.home.board.bio") },
    { icon: "si:emoji-alt-duotone", text: t("pages.home.board.work-status") },
  ],
  [
    {
      icon: "si:phone-duotone",
      text: t("pages.home.board.phone-number"),
      href: "tel:+989352252502",
    },
    {
      icon: "si:mail-duotone",
      text: t("pages.home.board.email-address"),
      href: "mailto:senior.farid72@gmail.com",
    },
  ],
  [
    {
      icon: "material-symbols:male-rounded",
      text: t("pages.home.board.birthday"),
    },
    {
      icon: "si:clock-alt-duotone",
      text: t("pages.home.board.time-country"),
      extraText: tehranTime,
    },
  ],
];
</script>
