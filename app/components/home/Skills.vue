<template>
  <div
    id="skills"
    class="flex flex-col p-4 border-x border-dashed border-muted/80 relative"
  >
    <UCommandPalette
      :groups="groups"
      class="flex-1"
      :autofocus="false"
      :ui="{
        root: 'min-h-88 h-88 ',
        input: 'h-12  ',
        content: 'h-full flex-1 max-h-67',
        footer: 'h-9',
      }"
    >
      <!-- <template #item="{ item }"> {{ item }}</template> -->
      <template #footer>
        <div class="flex items-center justify-between gap-2">
          <UIcon
            name="i-simple-icons-nuxtdotjs"
            class="size-5 text-dimmed ml-1"
          />
          <div class="flex items-center gap-1">
            <UButton
              color="neutral"
              variant="ghost"
              label="Open Command"
              class="text-dimmed"
              size="xs"
            >
              <template #trailing>
                <UKbd value="enter" />
              </template>
            </UButton>
            <USeparator orientation="vertical" class="h-4" />
            <UButton
              color="neutral"
              variant="ghost"
              label="Actions"
              class="text-dimmed"
              size="xs"
            >
              <template #trailing>
                <UKbd value="meta" />
                <UKbd value="k" />
              </template>
            </UButton>
          </div>
        </div>
      </template>
    </UCommandPalette>
  </div>
</template>
<script setup lang="ts">
const toast = useToast();
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
            icon: "",
            suffix: "Modern JavaScript features and syntax.",
            kbds: ["0"],
          },
          {
            label: "TypeScript",
            icon: "",
            suffix: "Statically typed superset of JavaScript.",
            kbds: ["0"],
          },
          {
            label: "PHP 8+",
            icon: "",
            suffix: "Server-side scripting language for web development.",
            kbds: ["0"],
          },
          {
            label: "Python",
            icon: "",
            suffix: "High-level language for web, data, and automation.",
            kbds: ["0"],
          },
          {
            label: "SQL",
            icon: "",
            suffix: "Structured query language for relational databases.",
            kbds: ["0"],
          },
          {
            label: "JSON",
            icon: "",
            suffix: "Lightweight data interchange format.",
            kbds: ["0"],
          },
          {
            label: "XML",
            icon: "",
            suffix: "Markup language for structured data.",
            kbds: ["0"],
          },
          {
            label: "Bash / Shell Scripting",
            icon: "",
            suffix: "Command-line scripting for automation and system tasks.",
            kbds: ["0"],
          },
          {
            label: "HTML5",
            icon: "",
            suffix: "Standard markup language for web pages.",
            kbds: ["0"],
          },
          {
            label: "CSS3",
            icon: "",
            suffix: "Styling language for web content.",
            kbds: ["0"],
          },
          {
            label: "SCSS / SASS",
            icon: "",
            suffix: "CSS preprocessor for cleaner, modular styles.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "front-end",
        label: "Front-End Frameworks & Libraries",
        suffix: "UI/UX, Dashboard, Responsive, etc..",
        icon: "",
        children: [
          {
            label: "Vue.js",
            icon: "",
            suffix: "Progressive framework for building reactive interfaces.",
            kbds: ["0"],
          },
          {
            label: "Nuxt.js",
            icon: "",
            suffix: "SSR and SSG framework for Vue.js apps.",
            kbds: ["0"],
          },
          {
            label: "Vuex",
            icon: "",
            suffix: "State management library for Vue.js.",
            kbds: ["0"],
          },
          {
            label: "Pinia",
            icon: "",
            suffix: "Modern state management library for Vue.js.",
            kbds: ["0"],
          },
          {
            label: "jQuery",
            icon: "",
            suffix: "Legacy DOM manipulation and utilities library.",
            kbds: ["0"],
          },
          {
            label: "Vuetify",
            icon: "",
            suffix: "Material Design UI framework for Vue.js.",
            kbds: ["0"],
          },
          {
            label: "Nuxt UI",
            icon: "",
            suffix: "UI components optimized for Nuxt.js apps.",
            kbds: ["0"],
          },
          {
            label: "Chakra UI",
            icon: "",
            suffix: "Accessible component library for Vue/React.",
            kbds: ["0"],
          },
          {
            label: "Headless UI",
            icon: "",
            suffix: "Unstyled, accessible UI components.",
            kbds: ["0"],
          },
          {
            label: "Quasar",
            icon: "",
            suffix: "Vue.js framework for SPA, SSR, PWA, mobile, desktop apps.",
            kbds: ["0"],
          },
          {
            label: "AG Grid",
            icon: "",
            suffix: "Feature-rich grid for React/Angular/Vue.",
            kbds: ["0"],
          },
          {
            label: "Tailwind CSS",
            icon: "",
            suffix: "Utility-first CSS framework with JS integration.",
            kbds: ["0"],
          },
          {
            label: "Bootstrap 5",
            icon: "",
            suffix: "Responsive CSS framework for UI components.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "back-end",
        label: "Back-End Frameworks & APIs",
        suffix: "APIs, authentication, and real-time systems.",
        icon: "",
        children: [
          {
            label: "Node.js",
            icon: "",
            suffix: "JavaScript runtime for server-side applications.",
            kbds: ["0"],
          },
          {
            label: "Express.js",
            icon: "",
            suffix: "Minimal Node.js web framework for APIs.",
            kbds: ["0"],
          },
          {
            label: "NestJS",
            icon: "",
            suffix: "Scalable Node.js framework inspired by Angular.",
            kbds: ["0"],
          },
          {
            label: "Laravel",
            icon: "",
            suffix: "PHP framework for web applications and APIs.",
            kbds: ["0"],
          },
          {
            label: "RESTful API Design",
            icon: "",
            suffix: "Designing stateless and scalable HTTP APIs.",
            kbds: ["0"],
          },
          {
            label: "GraphQL",
            icon: "",
            suffix: "Flexible query language for APIs.",
            kbds: ["0"],
          },
          {
            label: "WebSocket",
            icon: "",
            suffix: "Real-time, bidirectional communication protocol.",
            kbds: ["0"],
          },
          {
            label: "JWT / OAuth",
            icon: "",
            suffix: "Authentication and authorization mechanisms.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "databases-caching",
        label: "Databases & Caching",
        suffix: "SQL, NoSQL, caching, performance optimization.",
        icon: "",
        children: [
          {
            label: "MySQL",
            icon: "",
            suffix: "Popular open-source relational database.",
            kbds: ["0"],
          },
          {
            label: "MariaDB",
            icon: "",
            suffix: "MySQL-compatible open-source database.",
            kbds: ["0"],
          },
          {
            label: "PostgreSQL",
            icon: "",
            suffix: "Advanced open-source relational database.",
            kbds: ["0"],
          },
          {
            label: "MongoDB",
            icon: "",
            suffix: "NoSQL document-oriented database.",
            kbds: ["0"],
          },
          {
            label: "Redis",
            icon: "",
            suffix: "In-memory data store for caching and queues.",
            kbds: ["0"],
          },
          {
            label: "Firebase (Realtime DB & Auth)",
            icon: "",
            suffix: "Realtime database and authentication platform.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "orm-data-tools",
        label: "ORM & Data Tools",
        suffix: "Data modeling, querying, and search tools.",
        icon: "",
        children: [
          {
            label: "Eloquent ORM",
            icon: "",
            suffix: "Active Record ORM for Laravel.",
            kbds: ["0"],
          },
          {
            label: "Prisma ORM",
            icon: "",
            suffix: "Type-safe ORM for Node.js and TypeScript.",
            kbds: ["0"],
          },
          {
            label: "TypeORM",
            icon: "",
            suffix: "ORM for TypeScript and JavaScript.",
            kbds: ["0"],
          },
          {
            label: "ElasticSearch",
            icon: "",
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
        icon: "",
        children: [
          {
            label: "Linux (Ubuntu)",
            icon: "",
            suffix: "Open-source operating system for servers and development.",
            kbds: ["0"],
          },
          {
            label: "Git (Advanced)",
            icon: "",
            suffix: "Version control for tracking and managing code changes.",
            kbds: ["0"],
          },
          {
            label: "GitHub",
            icon: "",
            suffix:
              "Platform for hosting and collaborating on Git repositories.",
            kbds: ["0"],
          },
          {
            label: "GitLab",
            icon: "",
            suffix: "Git repository management with integrated CI/CD.",
            kbds: ["0"],
          },
          {
            label: "Docker",
            icon: "",
            suffix: "Containerization platform for consistent environments.",
            kbds: ["0"],
          },
          {
            label: "Docker Compose",
            icon: "",
            suffix:
              "Tool for defining and running multi-container Docker apps.",
            kbds: ["0"],
          },
          {
            label: "CI/CD Pipelines",
            icon: "",
            suffix: "Automated build, test, and deployment workflows.",
            kbds: ["0"],
          },
          {
            label: "Nginx",
            icon: "",
            suffix: "High-performance web server and reverse proxy.",
            kbds: ["0"],
          },
          {
            label: "PM2",
            icon: "",
            suffix: "Production process manager for Node.js applications.",
            kbds: ["0"],
          },
          {
            label: "Cloud Deployment",
            icon: "",
            suffix:
              "Deploying applications to cloud platforms (AWS, GCP, Vercel , etc.).",
            kbds: ["0"],
          },
          {
            label: "Server Monitoring",
            icon: "",
            suffix: "Tracking server performance and uptime.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "architecture-design-principles",
        label: "Architecture & Design Principles",
        suffix: "Patterns and principles for scalable systems.",
        icon: "",
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
        icon: "",
        children: [
          {
            label: "Unit Testing",
            icon: "",
            suffix: "Testing individual components in isolation.",
            kbds: ["0"],
          },
          {
            label: "Integration Testing",
            icon: "",
            suffix: "Testing interactions between modules.",
            kbds: ["0"],
          },
          {
            label: "End-to-End Testing",
            icon: "",
            suffix: "Testing the entire application flow.",
            kbds: ["0"],
          },
          {
            label: "Jest",
            icon: "",
            suffix:
              "JavaScript testing framework for unit and integration tests.",
            kbds: ["0"],
          },
          {
            label: "PHPUnit",
            icon: "",
            suffix: "PHP testing framework for unit and integration tests.",
            kbds: ["0"],
          },
          {
            label: "Cypress",
            icon: "",
            suffix: "End-to-end testing framework for web apps.",
            kbds: ["0"],
          },
          {
            label: "Playwright",
            icon: "",
            suffix: "Modern end-to-end testing tool for browsers.",
            kbds: ["0"],
          },
          {
            label: "TDD / BDD",
            icon: "",
            suffix: "Test-driven and behavior-driven development practices.",
            kbds: ["0"],
          },
        ],
      },
      {
        id: "tools-utilities",
        label: "Tools & Utilities",
        suffix:
          "General-purpose libraries, development tools, and productivity enhancers.",
        icon: "",
        children: [
          {
            label: "Axios",
            icon: "",
            suffix:
              "Promise-based HTTP client for API requests in Nuxt/Laravel.",
            kbds: ["0"],
          },
          {
            label: "Postman",
            icon: "",
            suffix: "API development, testing, and documentation tool.",
            kbds: ["0"],
          },
          {
            label: "Insomnia",
            icon: "",
            suffix: "Modern alternative to Postman for REST/GraphQL testing.",
            kbds: ["0"],
          },
          {
            label: "Zod",
            icon: "",
            suffix: "TypeScript-first schema validation (client & server).",
            kbds: ["0"],
          },
          {
            label: "Laravel Sanctum",
            icon: "",
            suffix: "Lightweight API authentication for SPAs (Nuxt).",
            kbds: ["0"],
          },
          {
            label: "Inertia.js",
            icon: "",
            suffix:
              "Seamless server-driven SPA experience with Laravel + Vue/Nuxt.",
            kbds: ["0"],
          },
          {
            label: "vue-i18n",
            icon: "",
            suffix: "Internationalization plugin for Nuxt/Vue applications.",
            kbds: ["0"],
          },
          {
            label: "Day.js",
            icon: "",
            suffix: "Lightweight date/time manipulation library.",
            kbds: ["0"],
          },
          {
            label: "Lodash",
            icon: "",
            suffix: "Utility library for common JavaScript operations.",
            kbds: ["0"],
          },
          {
            label: "Sentry",
            icon: "",
            suffix:
              "Error tracking and performance monitoring (Laravel & Nuxt).",
            kbds: ["0"],
          },
          {
            label: "Laravel Echo",
            icon: "",
            suffix: "Real-time event broadcasting with Pusher/Socket.io.",
            kbds: ["0"],
          },
          {
            label: "ESLint + Prettier",
            icon: "",
            suffix: "Code linting and formatting for consistent style.",
            kbds: ["0"],
          },
          {
            label: "Husky + Lint-staged",
            icon: "",
            suffix: "Git hooks for automated quality checks.",
            kbds: ["0"],
          },
          {
            label: "Figma",
            icon: "",
            suffix: "Collaborative UI/UX design and prototyping tool.",
            kbds: ["0"],
          },
          {
            label: "Vite",
            icon: "",
            suffix: "Next-generation frontend build tool (used by Nuxt 3).",
            kbds: ["0"],
          },
          {
            label: "Webpack",
            icon: "",
            suffix: "Module bundler (legacy/alternative to Vite).",
            kbds: ["0"],
          },
          {
            label: "Chart.js",
            icon: "",
            suffix: "Simple charting library for dashboards.",
            kbds: ["0"],
          },
          {
            label: "GSAP",
            icon: "",
            suffix: "Professional-grade animation library.",
            kbds: ["0"],
          },
        ],
      },
    ],
  },
  {
    id: "recent",
    label: "Recent",
    items: [
      {
        label: "project.vue",
        suffix: "components/",
        icon: "i-vscode-icons-file-type-vue",
      },
      {
        label: "readme.md",
        suffix: "docs/",
        icon: "i-vscode-icons-file-type-markdown",
      },
      {
        label: "package.json",
        suffix: "root/",
        icon: "i-vscode-icons-file-type-node",
      },
    ],
  },
];
</script>
