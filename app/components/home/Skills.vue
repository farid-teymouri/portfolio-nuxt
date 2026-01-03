<template>
  <div
    id="skills"
    class="flex flex-col p-4 border-x border-dashed border-muted/80 relative"
  >
    <UCommandPalette
      :dir
      :placeholder="searchPlaceHolder"
      :groups="groups"
      :fuse="{
        resultLimit: 1000,
        fuseOptions: {
          ignoreLocation: true,
          threshold: 0.1,
          keys: [
            'label',
            'suffix',
            'children.label',
            'children.suffix',
            'children.children.label',
          ],
        },
        matchAllWhenSearchEmpty: true,
      }"
      class="flex-1"
      :autofocus="false"
      :back="{
        size: 'xl',
        color: 'neutral',
        variant: 'link',
        class: 'cursor-pointer',
      }"
      :backIcon="backIcon"
      :childrenIcon="childrenIcon"
      :ui="{
        root: 'min-h-88 h-88 rounded-md dark:bg-elevated/50 bg-elevated/40',
        input: 'h-12  ',
        content: 'h-full flex-1 max-h-100',
        footer:
          'h-9  dark:bg-elevated bg-elevated/90 rounded-b-md flex felx-row items-center',
        item: 'cursor-pointer py-2',
        itemLabel: 'flex gap-2 items-center',
        label:
          'flex flex-row w-fit rounded-md px-1 py-0.5 bg-accented/85 font-normal my-2 mx-2 lg:text-md text-sm',
        itemTrailingIcon: 'size-5.5 ',
        itemLabelBase: 'mx-0 text-md  bg-accented/70 px-1 py-0.5 rounded-md',
        itemLabelSuffix: 'text-sm text-muted ',
      }"
    >
      <template #item="{ item }" :dir>
        <div
          class="w-full flex md:flex-row flex-wrap gap-2 justify-start items-center text-start"
          v-if="!item.children"
        >
          <div class="w-fit flex flex-row justify-start items-center gap-2">
            <!-- Pass iconColorMode down -->
            <IconWithColorMode :item="item" :iconColorMode="iconColorMode" />

            <div
              class="w-fit rounded-md px-1 py-0.5 bg-accented/35 font-normal lg:text-md text-sm font-sans text-nowrap"
            >
              {{ item.label }}
            </div>
          </div>

          <div class="text-sm text-muted">{{ item.suffix }}</div>
        </div>
      </template>
      <template #footer>
        <div
          class="flex flex-row w-full items-center justify-between gap-2 bg-dots"
        >
          <ULink
            :to="localePath('/blog')"
            target="_blank"
            variant="ghost"
            class="text-dimmed hover:text-primary cursor-pointer flex flex-row gap-0.5 items-center justify-center content-center dark:bg-elevated bg-elevated px-2"
          >
            <UIcon name="fa7-solid:blog" class="size-4" />
            <span class="text-sm h-full"> {{ $t("nav.blog") }} </span>
          </ULink>

          <div class="flex items-center gap-1">
            <div class="px-2 dark:bg-elevated bg-elevated">
              <svg
                class="ring-0 focus:ring-transparent focus:ring-0"
                version="1.1"
                id="svg1"
                width="24"
                height="24"
                viewBox="0 0 216 233"
                sodipodi:docname="ft.svg"
                inkscape:version="1.4.2 (2aeb623e1d, 2025-05-12)"
                xmlns:inkscape="http://www.inkscape.org/namespaces/inkscape"
                xmlns:sodipodi="http://sodipodi.sourceforge.net/DTD/sodipodi-0.dtd"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:svg="http://www.w3.org/2000/svg"
              >
                <defs id="defs1" />

                <g
                  inkscape:groupmode="layer"
                  id="layer4"
                  inkscape:label="Log objects"
                >
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
            </div>
          </div>
        </div>
      </template>
    </UCommandPalette>
  </div>
</template>
<script setup lang="ts">
const { t } = useI18n();
const localePath = useLocalePath();

const { locale } = useI18n();

const dir = computed(() => (locale.value === "fa" ? "rtl" : "ltr"));

const route = useRoute();

const toast = useToast();

const colorMode = useColorMode();
// Fallback to 'light' during SSR or loading
const iconColorMode = computed(() => {
  if (colorMode.value != "system") {
    return colorMode.value;
  }
});

const searchPlaceHolder = ref(locale.value === "fa" ? "جستجو…" : "Search...");

const backIcon = ref(
  locale.value === "fa" ? "solar:undo-right-outline" : "solar:undo-left-outline"
);
const childrenIcon = ref(
  locale.value === "fa"
    ? "solar:alt-arrow-left-line-duotone"
    : "solar:alt-arrow-right-line-duotone"
);
const groups = computed(() => [
  {
    id: "skills-box",
    items: [
      {
        id: "programing-languages",
        label: t("pages.home.skills.programingLanguages.label"),
        suffix: t("pages.home.skills.programingLanguages.suffix"),
        children: [
          {
            label: t(
              "pages.home.skills.programingLanguages.children.javascript.label"
            ),
            icon: "skill-icons:javascript",
            suffix: t(
              "pages.home.skills.programingLanguages.children.javascript.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.programingLanguages.children.typescript.label"
            ),
            icon: "skill-icons:typescript",
            suffix: t(
              "pages.home.skills.programingLanguages.children.typescript.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.programingLanguages.children.php.label"
            ),
            icon: "skill-icons:php-light",
            iconDark: "skill-icons:php-dark",
            suffix: t(
              "pages.home.skills.programingLanguages.children.php.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.programingLanguages.children.python.label"
            ),
            icon: "skill-icons:python-light",
            iconDark: "skill-icons:python-dark",
            suffix: t(
              "pages.home.skills.programingLanguages.children.python.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.programingLanguages.children.go.label"),
            icon: "skill-icons:golang",
            suffix: t(
              "pages.home.skills.programingLanguages.children.go.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.programingLanguages.children.sql.label"
            ),
            icon: "skill-icons:mysql-light",
            iconDark: "skill-icons:mysql-dark",
            suffix: t(
              "pages.home.skills.programingLanguages.children.sql.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.programingLanguages.children.json.label"
            ),
            icon: "logos:json",
            suffix: t(
              "pages.home.skills.programingLanguages.children.json.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.programingLanguages.children.xml.label"
            ),
            icon: "devicon:xml",
            suffix: t(
              "pages.home.skills.programingLanguages.children.xml.suffix"
            ),
            kbds: ["0"],
          },

          {
            label: t(
              "pages.home.skills.programingLanguages.children.bash.label"
            ),
            icon: "skill-icons:bash-light",
            iconDark: "skill-icons:bash-dark",
            suffix: t(
              "pages.home.skills.programingLanguages.children.bash.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.programingLanguages.children.html.label"
            ),
            icon: "skill-icons:html",
            suffix: t(
              "pages.home.skills.programingLanguages.children.html.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.programingLanguages.children.css.label"
            ),
            icon: "skill-icons:css",
            suffix: t(
              "pages.home.skills.programingLanguages.children.css.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.programingLanguages.children.scss.label"
            ),
            icon: "skill-icons:sass",
            suffix: t(
              "pages.home.skills.programingLanguages.children.scss.suffix"
            ),
            kbds: ["0"],
          },
        ],
      },
      {
        id: "front-end",
        label: t("pages.home.skills.frontEnd.label"),
        suffix: t("pages.home.skills.frontEnd.suffix"),
        children: [
          {
            label: t("pages.home.skills.frontEnd.children.vue.label"),
            icon: "skill-icons:vuejs-light",
            iconDark: "skill-icons:vuejs-dark",
            suffix: t("pages.home.skills.frontEnd.children.vue.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.nuxt.label"),
            icon: "skill-icons:nuxtjs-light",
            iconDark: "skill-icons:nuxtjs-dark",
            suffix: t("pages.home.skills.frontEnd.children.nuxt.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.vuex.label"),
            icon: "material-icon-theme:vuex-store",
            suffix: t("pages.home.skills.frontEnd.children.vuex.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.pinia.label"),
            icon: "skill-icons:pinia-light",
            iconDark: "skill-icons:pinia-dark",
            suffix: t("pages.home.skills.frontEnd.children.pinia.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.jquery.label"),
            icon: "skill-icons:jquery",
            suffix: t("pages.home.skills.frontEnd.children.jquery.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.vuetify.label"),
            icon: "skill-icons:vuetify-light",
            iconDark: "skill-icons:vuetify-dark",
            suffix: t("pages.home.skills.frontEnd.children.vuetify.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.nuxtUI.label"),
            icon: "skill-icons:nuxtjs-light",
            iconDark: "skill-icons:nuxtjs-dark",
            suffix: t("pages.home.skills.frontEnd.children.nuxtUI.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.chakra.label"),
            icon: "devicon:chakraui",
            suffix: t("pages.home.skills.frontEnd.children.chakra.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.headlessUI.label"),
            icon: "logos:headlessui-icon",
            suffix: t("pages.home.skills.frontEnd.children.headlessUI.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.quasar.label"),
            icon: "material-icon-theme:quasar",
            suffix: t("pages.home.skills.frontEnd.children.quasar.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.tailwind.label"),
            icon: "skill-icons:tailwindcss-light",
            iconDark: "skill-icons:tailwindcss-dark",
            suffix: t("pages.home.skills.frontEnd.children.tailwind.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.frontEnd.children.bootstrap.label"),
            icon: "skill-icons:bootstrap",
            suffix: t("pages.home.skills.frontEnd.children.bootstrap.suffix"),
            kbds: ["0"],
          },
        ],
      },
      {
        id: "back-end",
        label: t("pages.home.skills.backEnd.label"),
        suffix: t("pages.home.skills.backEnd.suffix"),
        children: [
          {
            label: t("pages.home.skills.backEnd.children.node.label"),
            icon: "skill-icons:nodejs-light",
            iconDark: "skill-icons:nodejs-dark",
            suffix: t("pages.home.skills.backEnd.children.node.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.backEnd.children.express.label"),
            icon: "skill-icons:expressjs-light",
            iconDark: "skill-icons:expressjs-dark",
            suffix: t("pages.home.skills.backEnd.children.express.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.backEnd.children.nestjs.label"),
            icon: "skill-icons:nestjs-light",
            iconDark: "skill-icons:nestjs-dark",
            suffix: t("pages.home.skills.backEnd.children.nestjs.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.backEnd.children.laravel.label"),
            icon: "skill-icons:laravel-light",
            iconDark: "skill-icons:laravel-dark",
            suffix: t("pages.home.skills.backEnd.children.laravel.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.backEnd.children.graphql.label"),
            icon: "skill-icons:graphql-light",
            iconDark: "skill-icons:graphql-dark",
            suffix: t("pages.home.skills.backEnd.children.graphql.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.backEnd.children.websocket.label"),
            icon: "logos:websocket",
            suffix: t("pages.home.skills.backEnd.children.websocket.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.backEnd.children.auth.label"),
            icon: "logos:jwt-icon",
            suffix: t("pages.home.skills.backEnd.children.auth.suffix"),
            kbds: ["0"],
          },
        ],
      },
      {
        id: "databases-caching",
        label: t("pages.home.skills.databasesCaching.label"),
        suffix: t("pages.home.skills.databasesCaching.suffix"),
        children: [
          {
            label: t("pages.home.skills.databasesCaching.children.mysql.label"),
            icon: "skill-icons:mysql-light",
            iconDark: "skill-icons:mysql-dark",
            suffix: t(
              "pages.home.skills.databasesCaching.children.mysql.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.databasesCaching.children.mariadb.label"
            ),
            icon: "devicon:mariadb-wordmark",
            suffix: t(
              "pages.home.skills.databasesCaching.children.mariadb.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.databasesCaching.children.postgresql.label"
            ),
            icon: "skill-icons:postgresql-light",
            iconDark: "skill-icons:postgresql-light",
            suffix: t(
              "pages.home.skills.databasesCaching.children.postgresql.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.databasesCaching.children.mongodb.label"
            ),
            icon: "skill-icons:mongodb",
            suffix: t(
              "pages.home.skills.databasesCaching.children.mongodb.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.databasesCaching.children.redis.label"),
            icon: "skill-icons:redis-light",
            iconDark: "skill-icons:redis-dark",
            suffix: t(
              "pages.home.skills.databasesCaching.children.redis.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.databasesCaching.children.firebase.label"
            ),
            icon: "devicon:firebase",
            suffix: t(
              "pages.home.skills.databasesCaching.children.firebase.suffix"
            ),
            kbds: ["0"],
          },
        ],
      },
      {
        id: "orm-data-tools",
        label: t("pages.home.skills.ormDataTools.label"),
        suffix: t("pages.home.skills.ormDataTools.suffix"),
        children: [
          {
            label: t("pages.home.skills.ormDataTools.children.eloquent.label"),
            icon: "devicon:laravel",
            suffix: t(
              "pages.home.skills.ormDataTools.children.eloquent.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.ormDataTools.children.prisma.label"),
            icon: "skill-icons:prisma",
            suffix: t("pages.home.skills.ormDataTools.children.prisma.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.ormDataTools.children.typeorm.label"),
            icon: "devicon:typeorm",
            suffix: t("pages.home.skills.ormDataTools.children.typeorm.suffix"),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.ormDataTools.children.elasticsearch.label"
            ),
            icon: "skill-icons:elasticsearch-light",
            iconDark: "skill-icons:elasticsearch-dark",
            suffix: t(
              "pages.home.skills.ormDataTools.children.elasticsearch.suffix"
            ),
            kbds: ["0"],
          },
        ],
      },
      {
        id: "devops-infrastructure",
        label: t("pages.home.skills.devopsInfrastructure.label"),
        suffix: t("pages.home.skills.devopsInfrastructure.suffix"),
        children: [
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.linux.label"
            ),
            icon: "skill-icons:ubuntu-light",
            iconDark: "skill-icons:ubuntu-dark",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.linux.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.git.label"
            ),
            icon: "skill-icons:git",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.git.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.github.label"
            ),
            icon: "skill-icons:github-light",
            iconDark: "skill-icons:github-dark",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.github.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.gitlab.label"
            ),
            icon: "skill-icons:gitlab-light",
            iconDark: "skill-icons:gitlab-dark",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.gitlab.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.docker.label"
            ),
            icon: "skill-icons:docker",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.docker.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.dockerCompose.label"
            ),
            icon: "vscode-icons:file-type-dockertest2",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.dockerCompose.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.ciCd.label"
            ),
            icon: "material-icon-theme:azure-pipelines",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.ciCd.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.nginx.label"
            ),
            icon: "skill-icons:nginx",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.nginx.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.pm2.label"
            ),
            icon: "devicon:pm2",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.pm2.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.cloud.label"
            ),
            icon: "skill-icons:vercel-light",
            iconDark: "skill-icons:vercel-dark",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.cloud.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.devopsInfrastructure.children.monitoring.label"
            ),
            icon: "devicon:datadog",
            suffix: t(
              "pages.home.skills.devopsInfrastructure.children.monitoring.suffix"
            ),
            kbds: ["0"],
          },
        ],
      },
      {
        id: "architecture-design-principles",
        label: t("pages.home.skills.architectureDesignPrinciples.label"),
        suffix: t("pages.home.skills.architectureDesignPrinciples.suffix"),
        children: [
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.solid.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.solid.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.cleanArchitecture.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.cleanArchitecture.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.modular.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.modular.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.mvc.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.mvc.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.ddd.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.ddd.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.microservices.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.microservices.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.eventDriven.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.eventDriven.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.scalableDesign.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.scalableDesign.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.monorepo.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.monorepo.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.architectureDesignPrinciples.children.dependencyInjection.label"
            ),
            icon: "",
            suffix: t(
              "pages.home.skills.architectureDesignPrinciples.children.dependencyInjection.suffix"
            ),
            kbds: ["0"],
          },
        ],
      },
      {
        id: "testing-code-quality",
        label: t("pages.home.skills.testingCodeQuality.label"),
        suffix: t("pages.home.skills.testingCodeQuality.suffix"),
        children: [
          {
            label: t(
              "pages.home.skills.testingCodeQuality.children.jest.label"
            ),
            icon: "skill-icons:jest",
            suffix: t(
              "pages.home.skills.testingCodeQuality.children.jest.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.testingCodeQuality.children.phpunit.label"
            ),
            icon: "material-icon-theme:phpunit",
            suffix: t(
              "pages.home.skills.testingCodeQuality.children.phpunit.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.testingCodeQuality.children.cypress.label"
            ),
            icon: "skill-icons:cypress-light",
            iconDark: "skill-icons:cypress-dark",
            suffix: t(
              "pages.home.skills.testingCodeQuality.children.cypress.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.testingCodeQuality.children.playwright.label"
            ),
            icon: "devicon:playwright",
            suffix: t(
              "pages.home.skills.testingCodeQuality.children.playwright.suffix"
            ),
            kbds: ["0"],
          },
        ],
      },
      {
        id: "tools-utilities",
        label: t("pages.home.skills.toolsUtilities.label"),
        suffix: t("pages.home.skills.toolsUtilities.suffix"),
        children: [
          {
            label: t("pages.home.skills.toolsUtilities.children.axios.label"),
            icon: "devicon-plain:axios-wordmark",
            suffix: t("pages.home.skills.toolsUtilities.children.axios.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.postman.label"),
            icon: "skill-icons:postman",
            suffix: t(
              "pages.home.skills.toolsUtilities.children.postman.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t(
              "pages.home.skills.toolsUtilities.children.insomnia.label"
            ),
            icon: "devicon:insomnia",
            suffix: t(
              "pages.home.skills.toolsUtilities.children.insomnia.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.sanctum.label"),
            icon: "devicon:laravel-wordmark",
            suffix: t(
              "pages.home.skills.toolsUtilities.children.sanctum.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.inertia.label"),
            icon: "devicon:inertiajs",
            suffix: t(
              "pages.home.skills.toolsUtilities.children.inertia.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.i18n.label"),
            icon: "vscode-icons:file-type-vueconfig",
            suffix: t("pages.home.skills.toolsUtilities.children.i18n.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.sentry.label"),
            icon: "skill-icons:sentry",
            suffix: t(
              "pages.home.skills.toolsUtilities.children.sentry.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.echo.label"),
            icon: "devicon:laravel",
            suffix: t("pages.home.skills.toolsUtilities.children.echo.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.husky.label"),
            icon: "vscode-icons:file-type-husky",
            suffix: t("pages.home.skills.toolsUtilities.children.husky.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.figma.label"),
            icon: "skill-icons:figma-light",
            iconDark: "skill-icons:figma-dark",
            suffix: t("pages.home.skills.toolsUtilities.children.figma.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.vite.label"),
            icon: "skill-icons:vite-light",
            iconDark: "skill-icons:vite-dark",
            suffix: t("pages.home.skills.toolsUtilities.children.vite.suffix"),
            kbds: ["0"],
          },
          {
            id: "gsap",
            label: t("pages.home.skills.toolsUtilities.children.gsap.label"),
            icon: "simple-icons:gsap",
            suffix: t("pages.home.skills.toolsUtilities.children.gsap.suffix"),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.webpack.label"),
            icon: "skill-icons:webpack-light",
            iconDark: "skill-icons:webpack-dark",
            suffix: t(
              "pages.home.skills.toolsUtilities.children.webpack.suffix"
            ),
            kbds: ["0"],
          },
          {
            label: t("pages.home.skills.toolsUtilities.children.chartjs.label"),
            icon: "Chartjs",
            suffix: t(
              "pages.home.skills.toolsUtilities.children.chartjs.suffix"
            ),
            kbds: ["0"],
          },
        ],
      },
    ],
  },
  {
    id: "latest-projects",
    label: t("pages.home.skills.latestProjects.label"),
    items: [
      {
        label: "portfolio-nuxt",
        suffix: "",
        icon: "skill-icons:nuxtjs-light",
      },
      {
        label: "readme.md",
        suffix: "",
        icon: "i-vscode-icons-file-type-markdown",
      },
    ],
  },
]);
</script>
