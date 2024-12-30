import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaAws,
  FaGithub,
  FaGitlab,
  FaPhp,
  FaPython,
  FaJava,
  FaLinux,
  FaNpm,
  FaYarn,
  FaSass,
  FaAngular,
  FaVuejs,
  FaBootstrap,
  FaFigma,
  FaJira,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiMysql,
  SiRedis,
  SiGraphql,
  SiSpring,
  SiDjango,
  SiFlask,
  SiLaravel,
  SiNestjs,
  SiExpress,
  SiTailwindcss,
  SiCss3,
  SiHtml5,
  SiKubernetes,
  SiJenkins,
  SiGit,
  SiRedux,
  SiVite,
  SiWebpack,
  SiElasticsearch,
  SiNginx,
  SiApache,
  SiSwift,
  SiKotlin,
  SiFlutter,
  SiReactquery,
  SiPrisma,
  SiSequelize,
  SiVercel,
  SiNetlify,
  SiHeroku,
  SiAmazonec2,
  SiAmazons3,
  SiGooglecloud,
  SiMicrosoftazure,
  SiStorybook,
  SiJest,
  SiCypress,
  SiPostman,
  SiSwagger,
  SiWebstorm,
  SiVisualstudiocode,
  SiIntellijidea,
  SiEclipseide,
  SiSlack,
  SiNotion,
  SiConfluence,
  SiTrello,
  SiAsana,
  SiUbuntu,
  SiMarkdown,
  SiFirebase,
  SiAnsible,
  SiTerraform,
  SiGrafana,
  SiPrometheus,
  SiSonarqube,
  SiVirtualbox,
  SiVmware,
  SiNewrelic,
  SiDatadog,
  SiSentry,
  SiRabbitmq,
  SiApachemaven,
  SiGradle,
  SiBabel,
  SiEslint,
  SiPrettier,
  SiApachekafka,
  SiCelery,
  SiFastapi,
  SiMariadb,
  SiSqlite,
  SiNeo4J,
  SiCouchbase,
  SiRuby,
  SiRubyonrails,
  SiSvelte,
  SiAstro,
  SiChakraui,
  SiMui,
  SiAntdesign,
  SiFramer,
  SiGreensock,
  SiThreedotjs,
  SiD3Dotjs,
  SiWebgl,
  SiRadixui,
  SiShadcnui,
} from "react-icons/si";

export const skillIcons: {
  [key: string]: { icon: JSX.Element; category: string };
} = {
  // Frontend
  React: {
    icon: <FaReact className="w-6 h-6 text-[#61DAFB]" />,
    category: "Frontend",
  },
  "Next.js": {
    icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
    category: "Frontend",
  },
  TypeScript: {
    icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" />,
    category: "Frontend",
  },
  JavaScript: {
    icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
    category: "Frontend",
  },
  "Vue.js": {
    icon: <FaVuejs className="w-6 h-6 text-[#4FC08D]" />,
    category: "Frontend",
  },
  Angular: {
    icon: <FaAngular className="w-6 h-6 text-[#DD0031]" />,
    category: "Frontend",
  },
  Redux: {
    icon: <SiRedux className="w-6 h-6 text-[#764ABC]" />,
    category: "Frontend",
  },
  "React Query": {
    icon: <SiReactquery className="w-6 h-6 text-[#FF4154]" />,
    category: "Frontend",
  },
  HTML5: {
    icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" />,
    category: "Frontend",
  },
  CSS3: {
    icon: <SiCss3 className="w-6 h-6 text-[#1572B6]" />,
    category: "Frontend",
  },
  Sass: {
    icon: <FaSass className="w-6 h-6 text-[#CC6699]" />,
    category: "Frontend",
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
    category: "Frontend",
  },
  Bootstrap: {
    icon: <FaBootstrap className="w-6 h-6 text-[#7952B3]" />,
    category: "Frontend",
  },
  Storybook: {
    icon: <SiStorybook className="w-6 h-6 text-[#FF4785]" />,
    category: "Frontend",
  },
  Vite: {
    icon: <SiVite className="w-6 h-6 text-[#646CFF]" />,
    category: "Frontend",
  },
  Webpack: {
    icon: <SiWebpack className="w-6 h-6 text-[#8DD6F9]" />,
    category: "Frontend",
  },
  Svelte: {
    icon: <SiSvelte className="w-6 h-6 text-[#FF3E00]" />,
    category: "Frontend",
  },
  Astro: {
    icon: <SiAstro className="w-6 h-6 text-[#BC52EE]" />,
    category: "Frontend",
  },
  "Chakra UI": {
    icon: <SiChakraui className="w-6 h-6 text-[#319795]" />,
    category: "Frontend",
  },
  "Material UI": {
    icon: <SiMui className="w-6 h-6 text-[#007FFF]" />,
    category: "Frontend",
  },
  "Ant Design": {
    icon: <SiAntdesign className="w-6 h-6 text-[#0170FE]" />,
    category: "Frontend",
  },
  "Framer Motion": {
    icon: <SiFramer className="w-6 h-6 text-black dark:text-white" />,
    category: "Frontend",
  },
  GSAP: {
    icon: <SiGreensock className="w-6 h-6 text-[#88CE02]" />,
    category: "Frontend",
  },
  "Three.js": {
    icon: <SiThreedotjs className="w-6 h-6 text-black dark:text-white" />,
    category: "Frontend",
  },
  "D3.js": {
    icon: <SiD3Dotjs className="w-6 h-6 text-[#F9A03C]" />,
    category: "Frontend",
  },
  WebGL: {
    icon: <SiWebgl className="w-6 h-6 text-[#990000]" />,
    category: "Frontend",
  },
  "Radix UI": {
    icon: <SiRadixui className="w-6 h-6 text-[#808080]" />,
    category: "Frontend",
  },
  "shadcn/ui": {
    icon: <SiShadcnui className="w-6 h-6 text-black dark:text-white" />,
    category: "Frontend",
  },

  // Backend
  "Node.js": {
    icon: <FaNodeJs className="w-6 h-6 text-[#339933]" />,
    category: "Backend",
  },
  Express: {
    icon: <SiExpress className="w-6 h-6 text-black dark:text-white" />,
    category: "Backend",
  },
  NestJS: {
    icon: <SiNestjs className="w-6 h-6 text-[#E0234E]" />,
    category: "Backend",
  },
  Python: {
    icon: <FaPython className="w-6 h-6 text-[#3776AB]" />,
    category: "Backend",
  },
  Django: {
    icon: <SiDjango className="w-6 h-6 text-[#092E20]" />,
    category: "Backend",
  },
  Flask: {
    icon: <SiFlask className="w-6 h-6 text-black dark:text-white" />,
    category: "Backend",
  },
  Java: {
    icon: <FaJava className="w-6 h-6 text-[#007396]" />,
    category: "Backend",
  },
  Spring: {
    icon: <SiSpring className="w-6 h-6 text-[#6DB33F]" />,
    category: "Backend",
  },
  PHP: {
    icon: <FaPhp className="w-6 h-6 text-[#777BB4]" />,
    category: "Backend",
  },
  Laravel: {
    icon: <SiLaravel className="w-6 h-6 text-[#FF2D20]" />,
    category: "Backend",
  },
  GraphQL: {
    icon: <SiGraphql className="w-6 h-6 text-[#E10098]" />,
    category: "Backend",
  },
  Prisma: {
    icon: <SiPrisma className="w-6 h-6 text-[#2D3748]" />,
    category: "Backend",
  },
  Sequelize: {
    icon: <SiSequelize className="w-6 h-6 text-[#52B0E7]" />,
    category: "Backend",
  },
  Firebase: {
    icon: <SiFirebase className="w-6 h-6 text-[#FFCA28]" />,
    category: "Backend",
  },
  RabbitMQ: {
    icon: <SiRabbitmq className="w-6 h-6 text-[#FF6600]" />,
    category: "Backend",
  },
  Kafka: {
    icon: <SiApachekafka className="w-6 h-6 text-[#231F20]" />,
    category: "Backend",
  },
  Celery: {
    icon: <SiCelery className="w-6 h-6 text-[#37814A]" />,
    category: "Backend",
  },
  FastAPI: {
    icon: <SiFastapi className="w-6 h-6 text-[#009688]" />,
    category: "Backend",
  },
  Ruby: {
    icon: <SiRuby className="w-6 h-6 text-[#CC342D]" />,
    category: "Backend",
  },
  "Ruby on Rails": {
    icon: <SiRubyonrails className="w-6 h-6 text-[#CC0000]" />,
    category: "Backend",
  },
  // Database
  MongoDB: {
    icon: <SiMongodb className="w-6 h-6 text-[#47A248]" />,
    category: "Backend",
  },
  PostgreSQL: {
    icon: <SiPostgresql className="w-6 h-6 text-[#336791]" />,
    category: "Backend",
  },
  MySQL: {
    icon: <SiMysql className="w-6 h-6 text-[#4479A1]" />,
    category: "Backend",
  },
  Redis: {
    icon: <SiRedis className="w-6 h-6 text-[#DC382D]" />,
    category: "Backend",
  },
  Elasticsearch: {
    icon: <SiElasticsearch className="w-6 h-6 text-[#005571]" />,
    category: "Backend",
  },
  MariaDB: {
    icon: <SiMariadb className="w-6 h-6 text-[#003545]" />,
    category: "Backend",
  },
  SQLite: {
    icon: <SiSqlite className="w-6 h-6 text-[#003B57]" />,
    category: "Backend",
  },
  Neo4j: {
    icon: <SiNeo4J className="w-6 h-6 text-[#008CC1]" />,
    category: "Backend",
  },
  Couchbase: {
    icon: <SiCouchbase className="w-6 h-6 text-[#EA2328]" />,
    category: "Backend",
  },

  // DevOps
  Docker: {
    icon: <FaDocker className="w-6 h-6 text-[#2496ED]" />,
    category: "DevOps",
  },
  Kubernetes: {
    icon: <SiKubernetes className="w-6 h-6 text-[#326CE5]" />,
    category: "DevOps",
  },
  AWS: {
    icon: <FaAws className="w-6 h-6 text-[#232F3E]" />,
    category: "DevOps",
  },
  EC2: {
    icon: <SiAmazonec2 className="w-6 h-6 text-[#FF9900]" />,
    category: "DevOps",
  },
  S3: {
    icon: <SiAmazons3 className="w-6 h-6 text-[#569A31]" />,
    category: "DevOps",
  },
  "Google Cloud": {
    icon: <SiGooglecloud className="w-6 h-6 text-[#4285F4]" />,
    category: "DevOps",
  },
  Azure: {
    icon: <SiMicrosoftazure className="w-6 h-6 text-[#0078D4]" />,
    category: "DevOps",
  },
  Jenkins: {
    icon: <SiJenkins className="w-6 h-6 text-[#D24939]" />,
    category: "DevOps",
  },
  Linux: {
    icon: <FaLinux className="w-6 h-6 text-black dark:text-white" />,
    category: "DevOps",
  },
  Nginx: {
    icon: <SiNginx className="w-6 h-6 text-[#009639]" />,
    category: "DevOps",
  },
  Apache: {
    icon: <SiApache className="w-6 h-6 text-[#D22128]" />,
    category: "DevOps",
  },
  Vercel: {
    icon: <SiVercel className="w-6 h-6 text-black dark:text-white" />,
    category: "DevOps",
  },
  Netlify: {
    icon: <SiNetlify className="w-6 h-6 text-[#00C7B7]" />,
    category: "DevOps",
  },
  Heroku: {
    icon: <SiHeroku className="w-6 h-6 text-[#430098]" />,
    category: "DevOps",
  },
  Ansible: {
    icon: <SiAnsible className="w-6 h-6 text-[#EE0000]" />,
    category: "DevOps",
  },
  Terraform: {
    icon: <SiTerraform className="w-6 h-6 text-[#7B42BC]" />,
    category: "DevOps",
  },
  Grafana: {
    icon: <SiGrafana className="w-6 h-6 text-[#F46800]" />,
    category: "DevOps",
  },
  Prometheus: {
    icon: <SiPrometheus className="w-6 h-6 text-[#E6522C]" />,
    category: "DevOps",
  },
  SonarQube: {
    icon: <SiSonarqube className="w-6 h-6 text-[#4E9BCD]" />,
    category: "DevOps",
  },
  VirtualBox: {
    icon: <SiVirtualbox className="w-6 h-6 text-[#183A61]" />,
    category: "DevOps",
  },
  VMware: {
    icon: <SiVmware className="w-6 h-6 text-[#607078]" />,
    category: "DevOps",
  },
  "New Relic": {
    icon: <SiNewrelic className="w-6 h-6 text-[#008C99]" />,
    category: "DevOps",
  },
  Datadog: {
    icon: <SiDatadog className="w-6 h-6 text-[#632CA6]" />,
    category: "DevOps",
  },
  Sentry: {
    icon: <SiSentry className="w-6 h-6 text-[#362D59]" />,
    category: "DevOps",
  },

  // Mobile
  "React Native": {
    icon: <FaReact className="w-6 h-6 text-[#61DAFB]" />,
    category: "Mobile",
  },
  Swift: {
    icon: <SiSwift className="w-6 h-6 text-[#FA7343]" />,
    category: "Mobile",
  },
  Kotlin: {
    icon: <SiKotlin className="w-6 h-6 text-[#7F52FF]" />,
    category: "Mobile",
  },
  Flutter: {
    icon: <SiFlutter className="w-6 h-6 text-[#02569B]" />,
    category: "Mobile",
  },

  // Tools & Others
  Git: {
    icon: <SiGit className="w-6 h-6 text-[#F05032]" />,
    category: "Other",
  },
  GitHub: {
    icon: <FaGithub className="w-6 h-6 text-black dark:text-white" />,
    category: "Other",
  },
  GitLab: {
    icon: <FaGitlab className="w-6 h-6 text-[#FCA121]" />,
    category: "Other",
  },
  npm: {
    icon: <FaNpm className="w-6 h-6 text-[#CB3837]" />,
    category: "Other",
  },
  Yarn: {
    icon: <FaYarn className="w-6 h-6 text-[#2C8EBB]" />,
    category: "Other",
  },
  Jest: {
    icon: <SiJest className="w-6 h-6 text-[#C21325]" />,
    category: "Other",
  },
  Cypress: {
    icon: <SiCypress className="w-6 h-6 text-[#17202C]" />,
    category: "Other",
  },
  Postman: {
    icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" />,
    category: "Other",
  },
  Swagger: {
    icon: <SiSwagger className="w-6 h-6 text-[#85EA2D]" />,
    category: "Other",
  },
  "VS Code": {
    icon: <SiVisualstudiocode className="w-6 h-6 text-[#007ACC]" />,
    category: "Other",
  },
  WebStorm: {
    icon: <SiWebstorm className="w-6 h-6 text-[#00D8FF]" />,
    category: "Other",
  },
  IntelliJ: {
    icon: <SiIntellijidea className="w-6 h-6 text-[#000000]" />,
    category: "Other",
  },
  Eclipse: {
    icon: <SiEclipseide className="w-6 h-6 text-[#2C2255]" />,
    category: "Other",
  },
  Figma: {
    icon: <FaFigma className="w-6 h-6 text-[#F24E1E]" />,
    category: "Other",
  },
  Jira: {
    icon: <FaJira className="w-6 h-6 text-[#0052CC]" />,
    category: "Other",
  },
  Slack: {
    icon: <SiSlack className="w-6 h-6 text-[#4A154B]" />,
    category: "Other",
  },
  Notion: {
    icon: <SiNotion className="w-6 h-6 text-black dark:text-white" />,
    category: "Other",
  },
  Confluence: {
    icon: <SiConfluence className="w-6 h-6 text-[#0052CC]" />,
    category: "Other",
  },
  Trello: {
    icon: <SiTrello className="w-6 h-6 text-[#0052CC]" />,
    category: "Other",
  },
  Asana: {
    icon: <SiAsana className="w-6 h-6 text-[#F06A6A]" />,
    category: "Other",
  },
  Ubuntu: {
    icon: <SiUbuntu className="w-6 h-6 text-[#E95420]" />,
    category: "DevOps",
  },
  Markdown: {
    icon: <SiMarkdown className="w-6 h-6 text-black dark:text-white" />,
    category: "Other",
  },
  Maven: {
    icon: <SiApachemaven className="w-6 h-6 text-[#C71A36]" />,
    category: "Other",
  },
  Gradle: {
    icon: <SiGradle className="w-6 h-6 text-[#02303A]" />,
    category: "Other",
  },
  Babel: {
    icon: <SiBabel className="w-6 h-6 text-[#F9DC3E]" />,
    category: "Frontend",
  },
  ESLint: {
    icon: <SiEslint className="w-6 h-6 text-[#4B32C3]" />,
    category: "Other",
  },
  Prettier: {
    icon: <SiPrettier className="w-6 h-6 text-[#F7B93E]" />,
    category: "Other",
  },
};
