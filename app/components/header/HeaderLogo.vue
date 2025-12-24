<script setup lang="ts">
import { useLocalePath } from "#imports";

const localePath = useLocalePath();

interface Props {
  width?: number;
  height?: number;
}

const props = withDefaults(defineProps<Props>(), {
  width: 35,
  height: 38,
});
</script>

<template>
  <UPopover mode="hover">
    <ULink
      rel="home"
      :to="localePath('/')"
      class="cursor-pointer group focus:ring-transparent focus:right-0"
      aria-label="Go to homepage"
      title="Go to homepage"
    >
      <svg
        class="group-hover:opacity-75"
        version="1.1"
        id="svg1"
        :width="props.width"
        :height="props.height"
        viewBox="0 0 216 233"
        sodipodi:docname="ft.svg"
        inkscape:version="1.4.2 (2aeb623e1d, 2025-05-12)"
        xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
        xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:svg="http://www.w3.org/2000/svg"
      >
        <defs id="defs1" />

        <g inkscape:groupmode="layer" id="layer4" inkscape:label="Log objects">
          <g
            inkscape:groupmode="layer"
            id="layer1"
            inkscape:label="Pen T"
            class="text-primary"
          >
            <path
              fill="currentColor"
              style="
                fill-opacity: 1;
                stroke: none;
                stroke-width: 1.93553px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 31.288772,48.380059 c 0,0 0,-14.106795 -13.890492,-16.888418 L 59.466623,2.2846135 158.88286,2.4833016 202.14182,31.094268 c 0,0 -11.70771,-0.397374 -15.27955,17.087103 h -27.78099 l -0.39685,-17.087103 -35.91686,-0.397374 v 20.86216 L 95.581908,51.360368 V 31.292955 L 58.871322,30.89558 v 17.087103 z"
              id="path1"
            />
            <path
              fill="currentColor"
              style="
                fill-opacity: 1;
                stroke: none;
                stroke-width: 1.93553px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 123.16446,95.468936 -0.59532,93.184314 c 0,0 5.15932,12.716 15.47797,13.51076 L 96.177222,231.37102 V 95.071562 Z"
              id="path2"
            />
          </g>
          <g
            inkscape:groupmode="layer"
            id="layer2"
            inkscape:label="Pen F"
            class="text-highlighted/90"
          >
            <path
              fill="currentColor"
              style="
                fill-opacity: 1;
                stroke: none;
                stroke-width: 1.93553px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 130.30812,115.93371 v 27.22016 h 31.35282 c 0,0 0.9922,-16.68974 12.30301,-26.4254 z"
              id="path3"
            />
            <path
              fill="currentColor"
              style="
                fill-opacity: 1;
                stroke: none;
                stroke-width: 1.93553px;
                stroke-linecap: butt;
                stroke-linejoin: miter;
                stroke-opacity: 1;
              "
              d="m 201.34808,59.903922 c 0,0 -10.91397,10.133049 -10.71553,27.617522 L 58.672884,86.528009 58.276015,116.52978 h 29.566897 l -0.198435,27.22016 -28.574718,-0.19869 -0.396875,57.02324 -41.86991,-27.02148 c 0,0 15.081105,-3.57635 15.081105,-14.10678 L 31.685643,92.289942 c 0,0 -2.579661,-22.45166 -16.668591,-32.783399 z"
              id="path4"
            />
          </g>
        </g>
      </svg>
    </ULink>

    <template #content>
      <div class="p-1">
        <span class="text-xs px-1">{{ $t("nav.popover") }}</span>
      </div>
    </template>
  </UPopover>
</template>
