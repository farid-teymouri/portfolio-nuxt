<template>
  <div class="flex lg:flex-row justify-between">
    <div class="p-2.5 flex flex-wrap">
      <ul class="flex flex-col gap-2 text-[14px]">
        <li>
          <div class="flex flex-row gap-2 items-center">
            <UBadge
              icon="si:terminal-alt-duotone"
              size="md"
              class="rounded-lg p-1 bg-accented text-toned"
            ></UBadge>
            <span class="cursor-default">
              {{ $t("pages.home.board.bio") }}
            </span>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2 items-center">
            <UBadge
              icon="si:emoji-alt-duotone"
              size="md"
              class="rounded-lg p-1 bg-accented text-toned"
            ></UBadge>
            <span class="cursor-default">
              {{ $t("pages.home.board.work-status") }}
            </span>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2 items-center">
            <UBadge
              icon="si:pin-alt-1-duotone"
              size="md"
              class="rounded-lg p-1 bg-accented text-toned"
            ></UBadge>
            <span class="cursor-default">
              {{ $t("pages.home.board.location") }}
            </span>
          </div>
        </li>

        <li>
          <div class="flex flex-row gap-2 items-center">
            <UBadge
              icon="si:phone-duotone"
              size="md"
              class="rounded-lg p-1 bg-accented text-toned"
            ></UBadge>
            <a href="tel:+989352252502" class="hover:text-primary" dir="ltr">
              {{ $t("pages.home.board.phone-number") }}
            </a>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2 items-center">
            <UBadge
              icon="si:mail-duotone"
              size="md"
              class="rounded-lg p-1 bg-accented text-toned"
            ></UBadge>
            <a
              href="mailto:senior.farid72@gmail.com"
              class="hover:text-primary"
              dir="ltr"
            >
              {{ $t("pages.home.board.email-address") }}
            </a>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2 items-center">
            <UBadge
              icon="material-symbols:male-rounded"
              size="md"
              class="rounded-lg p-1 bg-accented text-toned"
            ></UBadge>
            <span class="cursor-default">
              {{ $t("pages.home.board.birthday") }}
            </span>
          </div>
        </li>
        <li>
          <div class="flex flex-row gap-2 items-center">
            <UBadge
              icon="si:clock-alt-duotone"
              size="md"
              class="rounded-lg p-1 bg-accented text-toned"
            ></UBadge>
            <!-- This will display the current time in Tehran in Persian locale -->
            <span class="cursor-default">{{ tehranTime }}</span>
            <span class="cursor-default">
              {{ $t("pages.home.board.time-country") }}
            </span>
          </div>
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from "#imports";
import { useTehranTime } from "~/composables/useTehranTime";

const { t, setLocale } = useI18n();

const { locale } = useI18n();
const { formattedTime: tehranTime } = useTehranTime(locale);
</script>
