<template>
  <div
    id="skills"
    class="flex flex-col p-4 border-x border-dashed border-muted/80 relative"
  >
    <UCommandPalette
      :dir
      :fuse="{ fuseOptions: { includeMatches: true } }"
      :placeholder="searchPlaceHolder"
      :groups="groups"
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
        itemLabel: 'flex',
        label:
          'flex flex-row  w-fit rounded-md px-2 bg-elevated/85 font-normal my-2 mx-2  lg:text-md text-sm',
        itemTrailingIcon: 'size-5.5 ',
      }"
    >
      <template #item="{ item }" :dir>
        <div
          class="w-full flex flex-row gap-2 justify-start items-center text-start"
          v-if="!item.children"
        >
          <UIcon v-if="item.icon" :name="item.icon" class="size-7" />
          <div class="">{{ item.label }}</div>
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

// Effective mode: 'dark' or 'light'
console.log(colorMode.value); // Outputs 'dark' or 'light'

// For convenience, e.g., in conditional logic
const iconColorMode = computed(() => {
  return colorMode.value === "dark" ? "dark" : "light"; // Fallback to 'light' if 'system'
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
const groups = [
  {
    id: "skills-box",
    items: [
      {
        id: "programing-languages",
        label: "Programming Languages",
        suffix: "Languages used for building applications and systems.",
        children: [
          {
            label: "JavaScript (ES6+)",
            icon: "skill-icons:javascript",
            suffix: "Modern JavaScript features and syntax.",
            kbds: ["0"],
          },
          {
            label: "TypeScript",
            icon: "skill-icons:typescript",
            suffix: "Statically typed superset of JavaScript.",
            kbds: ["0"],
          },
          {
            label: "PHP 8+",
            icon: `skill-icons:php-${iconColorMode.value}`,
            suffix: "Server-side scripting language for web development.",
            kbds: ["0"],
          },
          {
            label: "Python",
            icon: `skill-icons:python-${iconColorMode.value}`,
            suffix: "High-level language for web, data, and automation.",
            kbds: ["0"],
          },
          {
            label: "SQL",
            icon: `skill-icons:mysql-${iconColorMode.value}`,
            suffix: "Structured query language for relational databases.",
            kbds: ["0"],
          },
          {
            label: "JSON",
            icon: "logos:json",
            suffix: "Lightweight data interchange format.",
            kbds: ["0"],
          },
          {
            label: "XML",
            icon: "devicon:xml",
            suffix: "Markup language for structured data.",
            kbds: ["0"],
          },
          {
            label: "Bash / Shell Scripting",
            icon: `skill-icons:bash-${iconColorMode.value}`,
            suffix: "Command-line scripting for automation and system tasks.",
            kbds: ["0"],
          },
          {
            label: "HTML5",
            icon: "skill-icons:html",
            suffix: "Standard markup language for web pages.",
            kbds: ["0"],
          },
          {
            label: "CSS3",
            icon: "skill-icons:css",
            suffix: "Styling language for web content.",
            kbds: ["0"],
          },
          {
            label: "SCSS / SASS",
            icon: "skill-icons:sass",
            suffix: "CSS preprocessor for cleaner, modular styles.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "front-end",
        label: "Front-End Frameworks & Libraries",
        suffix: "UI/UX, Dashboard, Responsive, etc..",
        children: [
          {
            label: "Vue.js",
            icon: `skill-icons:vuejs-${iconColorMode.value}`,
            suffix: "Progressive framework for building reactive interfaces.",
            kbds: ["0"],
          },
          {
            label: "Nuxt.js",
            icon: `skill-icons:nuxtjs-${iconColorMode.value}`,
            suffix: "SSR and SSG framework for Vue.js apps.",
            kbds: ["0"],
          },
          {
            label: "Vuex",
            icon: "material-icon-theme:vuex-store",
            suffix: "State management library for Vue.js.",
            kbds: ["0"],
          },
          {
            label: "Pinia",
            icon: `skill-icons:pinia-${iconColorMode.value}`,
            suffix: "Modern state management library for Vue.js.",
            kbds: ["0"],
          },
          {
            label: "jQuery",
            icon: "skill-icons:jquery",
            suffix: "Legacy DOM manipulation and utilities library.",
            kbds: ["0"],
          },
          {
            label: "Vuetify",
            icon: `skill-icons:vuetify-${iconColorMode.value}`,
            suffix: "Material Design UI framework for Vue.js.",
            kbds: ["0"],
          },
          {
            label: "Nuxt UI",
            icon: `skill-icons:nuxtjs-${iconColorMode.value}`,
            suffix: "UI components optimized for Nuxt.js apps.",
            kbds: ["0"],
          },
          {
            label: "Chakra UI",
            icon: "devicon:chakraui",
            suffix: "Accessible component library for Vue/React.",
            kbds: ["0"],
          },
          {
            label: "Headless UI",
            icon: "logos:headlessui-icon",
            suffix: "Unstyled, accessible UI components.",
            kbds: ["0"],
          },
          {
            label: "Quasar",
            icon: "material-icon-theme:quasar",
            suffix: "Vue.js framework for SPA, SSR, PWA, mobile, desktop apps.",
            kbds: ["0"],
          },
          {
            label: "Tailwind CSS",
            icon: `skill-icons:tailwindcss-${iconColorMode.value}`,
            suffix: "Utility-first CSS framework with JS integration.",
            kbds: ["0"],
          },
          {
            label: "Bootstrap 5",
            icon: "skill-icons:bootstrap",
            suffix: "Responsive CSS framework for UI components.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "back-end",
        label: "Back-End Frameworks & APIs",
        suffix: "APIs, authentication, and real-time systems.",
        children: [
          {
            label: "Node.js",
            icon: `skill-icons:nodejs-${iconColorMode.value}`,
            suffix: "JavaScript runtime for server-side applications.",
            kbds: ["0"],
          },
          {
            label: "Express.js",
            icon: `skill-icons:expressjs-${iconColorMode.value}`,
            suffix: "Minimal Node.js web framework for APIs.",
            kbds: ["0"],
          },
          {
            label: "NestJS",
            icon: `skill-icons:nestjs-${iconColorMode.value}`,
            suffix: "Scalable Node.js framework inspired by Angular.",
            kbds: ["0"],
          },
          {
            label: "Laravel",
            icon: `skill-icons:laravel-${iconColorMode.value}`,
            suffix: "PHP framework for web applications and APIs.",
            kbds: ["0"],
          },
          {
            label: "GraphQL",
            icon: `skill-icons:graphql-${iconColorMode.value}`,
            suffix: "Flexible query language for APIs.",
            kbds: ["0"],
          },
          {
            label: "WebSocket",
            icon: "logos:websocket",
            suffix: "Real-time, bidirectional communication protocol.",
            kbds: ["0"],
          },
          {
            label: "JWT / OAuth",
            icon: "logos:jwt-icon",
            suffix: "Authentication and authorization mechanisms.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "databases-caching",
        label: "Databases & Caching",
        suffix: "SQL, NoSQL, caching, performance optimization.",
        children: [
          {
            label: "MySQL",
            icon: `skill-icons:mysql-${iconColorMode.value}`,
            suffix: "Popular open-source relational database.",
            kbds: ["0"],
          },
          {
            label: "MariaDB",
            icon: "devicon:mariadb-wordmark",
            suffix: "MySQL-compatible open-source database.",
            kbds: ["0"],
          },
          {
            label: "PostgreSQL",
            icon: `skill-icons:postgresql-${iconColorMode.value}`,
            suffix: "Advanced open-source relational database.",
            kbds: ["0"],
          },
          {
            label: "MongoDB",
            icon: "skill-icons:mongodb",
            suffix: "NoSQL document-oriented database.",
            kbds: ["0"],
          },
          {
            label: "Redis",
            icon: `skill-icons:redis-${iconColorMode.value}`,
            suffix: "In-memory data store for caching and queues.",
            kbds: ["0"],
          },
          {
            label: "Firebase (Realtime DB & Auth)",
            icon: "devicon:firebase",
            suffix: "Realtime database and authentication platform.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "orm-data-tools",
        label: "ORM & Data Tools",
        suffix: "Data modeling, querying, and search tools.",
        children: [
          {
            label: "Eloquent ORM",
            icon: "devicon:laravel",
            suffix: "Active Record ORM for Laravel.",
            kbds: ["0"],
          },
          {
            label: "Prisma ORM",
            icon: "skill-icons:prisma",
            suffix: "Type-safe ORM for Node.js and TypeScript.",
            kbds: ["0"],
          },
          {
            label: "TypeORM",
            icon: "devicon:typeorm",
            suffix: "ORM for TypeScript and JavaScript.",
            kbds: ["0"],
          },
          {
            label: "ElasticSearch",
            icon: `skill-icons:elasticsearch-${iconColorMode.value}`,
            suffix: "Distributed search and analytics engine.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "devops-infrastructure",
        label: "DevOps & Infrastructure",
        suffix:
          "Tools and practices for deployment, CI/CD, and server management.",

        children: [
          {
            label: "Linux (Ubuntu)",
            icon: `skill-icons:ubuntu-${iconColorMode.value}`,
            suffix: "Open-source operating system for servers and development.",
            kbds: ["0"],
          },
          {
            label: "Git (Advanced)",
            icon: "skill-icons:git",
            suffix: "Version control for tracking and managing code changes.",
            kbds: ["0"],
          },
          {
            label: "GitHub",
            icon: `skill-icons:github-${iconColorMode.value}`,
            suffix:
              "Platform for hosting and collaborating on Git repositories.",
            kbds: ["0"],
          },
          {
            label: "GitLab",
            icon: `skill-icons:gitlab-${iconColorMode.value}`,
            suffix: "Git repository management with integrated CI/CD.",
            kbds: ["0"],
          },
          {
            label: "Docker",
            icon: "skill-icons:docker",
            suffix: "Containerization platform for consistent environments.",
            kbds: ["0"],
          },
          {
            label: "Docker Compose",
            icon: "vscode-icons:file-type-dockertest2",
            suffix:
              "Tool for defining and running multi-container Docker apps.",
            kbds: ["0"],
          },
          {
            label: "CI/CD Pipelines",
            icon: "material-icon-theme:azure-pipelines",
            suffix: "Automated build, test, and deployment workflows.",
            kbds: ["0"],
          },
          {
            label: "Nginx",
            icon: "skill-icons:nginx",
            suffix: "High-performance web server and reverse proxy.",
            kbds: ["0"],
          },
          {
            label: "PM2",
            icon: "devicon:pm2",
            suffix: "Production process manager for Node.js applications.",
            kbds: ["0"],
          },
          {
            label: "Cloud Deployment",
            icon: `skill-icons:vercel-${iconColorMode.value}`,
            suffix:
              "Deploying applications to cloud platforms (AWS, GCP, Vercel , etc.).",
            kbds: ["0"],
          },
          {
            label: "Server Monitoring",
            icon: "devicon:datadog",
            suffix: "Tracking server performance and uptime.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "architecture-design-principles",
        label: "Architecture & Design Principles",
        suffix: "Patterns and principles for scalable systems.",
        children: [
          {
            label: "SOLID Principles",
            icon: "",
            suffix: "Core principles for maintainable object-oriented design.",
            kbds: ["0"],
          },
          {
            label: "Clean Architecture",
            icon: "",
            suffix: "Separation of concerns and independent layers.",
            kbds: ["0"],
          },
          {
            label: "Modular Architecture",
            icon: "",
            suffix: "Independent and reusable application modules.",
            kbds: ["0"],
          },
          {
            label: "MVC / MVVM",
            icon: "",
            suffix: "Architectural patterns for UI applications.",
            kbds: ["0"],
          },
          {
            label: "Domain-Driven Design (DDD)",
            icon: "",
            suffix: "Modeling software around business domains.",
            kbds: ["0"],
          },
          {
            label: "Microservices",
            icon: "",
            suffix: "Distributed services for large-scale systems.",
            kbds: ["0"],
          },
          {
            label: "Event-Driven Architecture",
            icon: "",
            suffix: "Systems built around events and messaging.",
            kbds: ["0"],
          },
          {
            label: "Scalable System Design",
            icon: "",
            suffix: "Designing systems to handle growth and load.",
            kbds: ["0"],
          },
          {
            label: "Monorepo Management",
            icon: "",
            suffix: "Managing multiple projects in a single repository.",
            kbds: ["0"],
          },
          {
            label: "Dependency Injection",
            icon: "",
            suffix: "Decoupling components through inversion of control.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "testing-code-quality",
        label: "Testing & Code Quality",
        suffix: "Ensuring reliable and maintainable software.",
        children: [
          {
            label: "Jest",
            icon: "skill-icons:jest",
            suffix:
              "JavaScript testing framework for unit and integration tests.",
            kbds: ["0"],
          },
          {
            label: "PHPUnit",
            icon: "material-icon-theme:phpunit",
            suffix: "PHP testing framework for unit and integration tests.",
            kbds: ["0"],
          },
          {
            label: "Cypress",
            icon: `skill-icons:cypress-${iconColorMode.value}`,
            suffix: "End-to-end testing framework for web apps.",
            kbds: ["0"],
          },
          {
            label: "Playwright",
            icon: "devicon:playwright",
            suffix: "Modern end-to-end testing tool for browsers.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "tools-utilities",
        label: "Tools & Utilities",
        suffix:
          "General-purpose libraries, development tools, and productivity enhancers.",
        children: [
          {
            label: "Axios",
            icon: "devicon-plain:axios-wordmark",
            suffix:
              "Promise-based HTTP client for API requests in Nuxt/Laravel.",
            kbds: ["0"],
          },
          {
            label: "Postman",
            icon: "skill-icons:postman",
            suffix: "API development, testing, and documentation tool.",
            kbds: ["0"],
          },
          {
            label: "Insomnia",
            icon: "devicon:insomnia",
            suffix: "Modern alternative to Postman for REST/GraphQL testing.",
            kbds: ["0"],
          },
          {
            label: "Laravel Sanctum",
            icon: "devicon:laravel-wordmark",
            suffix: "Lightweight API authentication for SPAs (Nuxt).",
            kbds: ["0"],
          },
          {
            label: "Inertia.js",
            icon: "devicon:inertiajs",
            suffix:
              "Seamless server-driven SPA experience with Laravel + Vue/Nuxt.",
            kbds: ["0"],
          },
          {
            label: "vue-i18n",
            icon: "vscode-icons:file-type-vueconfig",
            suffix: "Internationalization plugin for Nuxt/Vue applications.",
            kbds: ["0"],
          },
          {
            label: "Sentry",
            icon: "skill-icons:sentry",
            suffix:
              "Error tracking and performance monitoring (Laravel & Nuxt).",
            kbds: ["0"],
          },
          {
            label: "Laravel Echo",
            icon: "devicon:laravel",
            suffix: "Real-time event broadcasting with Pusher/Socket.io.",
            kbds: ["0"],
          },
          {
            label: "Husky + Lint-staged",
            icon: "vscode-icons:file-type-husky",
            suffix: "Git hooks for automated quality checks.",
            kbds: ["0"],
          },
          {
            label: "Figma",
            icon: `skill-icons:figma-${iconColorMode.value}`,
            suffix: "Collaborative UI/UX design and prototyping tool.",
            kbds: ["0"],
          },
          {
            label: "Vite",
            icon: `skill-icons:vite-${iconColorMode.value}`,
            suffix: "Next-generation frontend build tool (used by Nuxt 3).",
            kbds: ["0"],
          },
          {
            label: "Webpack",
            icon: `skill-icons:webpack-${iconColorMode.value}`,
            suffix: "Module bundler (legacy/alternative to Vite).",
            kbds: ["0"],
          },
          {
            label: "Chart.js",
            icon: "Chartjs",
            suffix: "Simple charting library for dashboards.",
            kbds: ["0"],
          },
          {
            label: "GSAP",
            icon: "simple-icons:gsap",
            suffix: "Professional-grade animation library.",
            kbds: ["0"],
          },
        ],
      },
    ],
  },
  {
    id: "latest-projects",
    label: "Latest Projects",
    items: [
      {
        label: "portfolio-nuxt",
        suffix: "/projects/portfolio-nuxt",
        icon: `skill-icons:nuxtjs-${iconColorMode.value}`,
      },
      {
        label: "readme.md",
        suffix: "/docs",
        icon: "i-vscode-icons-file-type-markdown",
      },
    ],
  },
];
</script>
