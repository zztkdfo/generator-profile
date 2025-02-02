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
  // Core Development
  "Node.js": {
    icon: <FaNodeJs className="w-6 h-6 text-[#339933]" />,
    category: "Core Development",
  },
  Express: {
    icon: <SiExpress className="w-6 h-6 text-black dark:text-white" />,
    category: "Core Development",
  },
  NestJS: {
    icon: <SiNestjs className="w-6 h-6 text-[#E0234E]" />,
    category: "Core Development",
  },
  Python: {
    icon: <FaPython className="w-6 h-6 text-[#3776AB]" />,
    category: "Core Development",
  },
  Django: {
    icon: <SiDjango className="w-6 h-6 text-[#092E20]" />,
    category: "Core Development",
  },
  Flask: {
    icon: <SiFlask className="w-6 h-6 text-black dark:text-white" />,
    category: "Core Development",
  },
  Java: {
    icon: <FaJava className="w-6 h-6 text-[#007396]" />,
    category: "Core Development",
  },
  Spring: {
    icon: <SiSpring className="w-6 h-6 text-[#6DB33F]" />,
    category: "Core Development",
  },
  PHP: {
    icon: <FaPhp className="w-6 h-6 text-[#777BB4]" />,
    category: "Core Development",
  },
  Laravel: {
    icon: <SiLaravel className="w-6 h-6 text-[#FF2D20]" />,
    category: "Core Development",
  },
  GraphQL: {
    icon: <SiGraphql className="w-6 h-6 text-[#E10098]" />,
    category: "Core Development",
  },
  Prisma: {
    icon: <SiPrisma className="w-6 h-6 text-[#2D3748]" />,
    category: "Core Development",
  },
  Sequelize: {
    icon: <SiSequelize className="w-6 h-6 text-[#52B0E7]" />,
    category: "Core Development",
  },
  Firebase: {
    icon: <SiFirebase className="w-6 h-6 text-[#FFCA28]" />,
    category: "Core Development",
  },
  RabbitMQ: {
    icon: <SiRabbitmq className="w-6 h-6 text-[#FF6600]" />,
    category: "Core Development",
  },
  Kafka: {
    icon: <SiApachekafka className="w-6 h-6 text-[#231F20]" />,
    category: "Core Development",
  },
  Celery: {
    icon: <SiCelery className="w-6 h-6 text-[#37814A]" />,
    category: "Core Development",
  },
  FastAPI: {
    icon: <SiFastapi className="w-6 h-6 text-[#009688]" />,
    category: "Core Development",
  },
  Ruby: {
    icon: <SiRuby className="w-6 h-6 text-[#CC342D]" />,
    category: "Core Development",
  },
  "Ruby on Rails": {
    icon: <SiRubyonrails className="w-6 h-6 text-[#CC0000]" />,
    category: "Core Development",
  },
  MongoDB: {
    icon: <SiMongodb className="w-6 h-6 text-[#47A248]" />,
    category: "Core Development",
  },
  PostgreSQL: {
    icon: <SiPostgresql className="w-6 h-6 text-[#336791]" />,
    category: "Core Development",
  },
  MySQL: {
    icon: <SiMysql className="w-6 h-6 text-[#4479A1]" />,
    category: "Core Development",
  },
  Redis: {
    icon: <SiRedis className="w-6 h-6 text-[#DC382D]" />,
    category: "Core Development",
  },
  Elasticsearch: {
    icon: <SiElasticsearch className="w-6 h-6 text-[#005571]" />,
    category: "Core Development",
  },
  MariaDB: {
    icon: <SiMariadb className="w-6 h-6 text-[#003545]" />,
    category: "Core Development",
  },
  SQLite: {
    icon: <SiSqlite className="w-6 h-6 text-[#003B57]" />,
    category: "Core Development",
  },
  Neo4j: {
    icon: <SiNeo4J className="w-6 h-6 text-[#008CC1]" />,
    category: "Core Development",
  },
  Couchbase: {
    icon: <SiCouchbase className="w-6 h-6 text-[#EA2328]" />,
    category: "Core Development",
  },

  // Development Tools
  Docker: {
    icon: <FaDocker className="w-6 h-6 text-[#2496ED]" />,
    category: "Development Tools",
  },
  Kubernetes: {
    icon: <SiKubernetes className="w-6 h-6 text-[#326CE5]" />,
    category: "Development Tools",
  },
  AWS: {
    icon: <FaAws className="w-6 h-6 text-[#232F3E]" />,
    category: "Development Tools",
  },
  EC2: {
    icon: <SiAmazonec2 className="w-6 h-6 text-[#FF9900]" />,
    category: "Development Tools",
  },
  S3: {
    icon: <SiAmazons3 className="w-6 h-6 text-[#569A31]" />,
    category: "Development Tools",
  },
  "Google Cloud": {
    icon: <SiGooglecloud className="w-6 h-6 text-[#4285F4]" />,
    category: "Development Tools",
  },
  Azure: {
    icon: <SiMicrosoftazure className="w-6 h-6 text-[#0078D4]" />,
    category: "Development Tools",
  },
  Jenkins: {
    icon: <SiJenkins className="w-6 h-6 text-[#D24939]" />,
    category: "Development Tools",
  },
  Linux: {
    icon: <FaLinux className="w-6 h-6 text-black dark:text-white" />,
    category: "Development Tools",
  },
  Nginx: {
    icon: <SiNginx className="w-6 h-6 text-[#009639]" />,
    category: "Development Tools",
  },
  Apache: {
    icon: <SiApache className="w-6 h-6 text-[#D22128]" />,
    category: "Development Tools",
  },
  Vercel: {
    icon: <SiVercel className="w-6 h-6 text-black dark:text-white" />,
    category: "Development Tools",
  },
  Netlify: {
    icon: <SiNetlify className="w-6 h-6 text-[#00C7B7]" />,
    category: "Development Tools",
  },
  Heroku: {
    icon: <SiHeroku className="w-6 h-6 text-[#430098]" />,
    category: "Development Tools",
  },
  Ansible: {
    icon: <SiAnsible className="w-6 h-6 text-[#EE0000]" />,
    category: "Development Tools",
  },
  Terraform: {
    icon: <SiTerraform className="w-6 h-6 text-[#7B42BC]" />,
    category: "Development Tools",
  },
  Grafana: {
    icon: <SiGrafana className="w-6 h-6 text-[#F46800]" />,
    category: "Development Tools",
  },
  Prometheus: {
    icon: <SiPrometheus className="w-6 h-6 text-[#E6522C]" />,
    category: "Development Tools",
  },
  SonarQube: {
    icon: <SiSonarqube className="w-6 h-6 text-[#4E9BCD]" />,
    category: "Development Tools",
  },
  VirtualBox: {
    icon: <SiVirtualbox className="w-6 h-6 text-[#183A61]" />,
    category: "Development Tools",
  },
  VMware: {
    icon: <SiVmware className="w-6 h-6 text-[#607078]" />,
    category: "Development Tools",
  },
  "New Relic": {
    icon: <SiNewrelic className="w-6 h-6 text-[#008C99]" />,
    category: "Development Tools",
  },
  Datadog: {
    icon: <SiDatadog className="w-6 h-6 text-[#632CA6]" />,
    category: "Development Tools",
  },
  Sentry: {
    icon: <SiSentry className="w-6 h-6 text-[#362D59]" />,
    category: "Development Tools",
  },
  GitHub: {
    icon: <FaGithub className="w-6 h-6 text-black dark:text-white" />,
    category: "Development Tools",
  },
  GitLab: {
    icon: <FaGitlab className="w-6 h-6 text-[#FCA121]" />,
    category: "Development Tools",
  },
  Markdown: {
    icon: <SiMarkdown className="w-6 h-6 text-black dark:text-white" />,
    category: "Development Tools",
  },
  Maven: {
    icon: <SiApachemaven className="w-6 h-6 text-[#C71A36]" />,
    category: "Development Tools",
  },
  Gradle: {
    icon: <SiGradle className="w-6 h-6 text-[#02303A]" />,
    category: "Development Tools",
  },

  // Collaboration Tools
  Figma: {
    icon: <FaFigma className="w-6 h-6 text-[#F24E1E]" />,
    category: "Collaboration Tools",
  },
  Jira: {
    icon: <FaJira className="w-6 h-6 text-[#0052CC]" />,
    category: "Collaboration Tools",
  },
  Slack: {
    icon: <SiSlack className="w-6 h-6 text-[#4A154B]" />,
    category: "Collaboration Tools",
  },
  Notion: {
    icon: <SiNotion className="w-6 h-6 text-black dark:text-white" />,
    category: "Collaboration Tools",
  },
  Confluence: {
    icon: <SiConfluence className="w-6 h-6 text-[#0052CC]" />,
    category: "Collaboration Tools",
  },
  Trello: {
    icon: <SiTrello className="w-6 h-6 text-[#0052CC]" />,
    category: "Collaboration Tools",
  },
  Asana: {
    icon: <SiAsana className="w-6 h-6 text-[#F06A6A]" />,
    category: "Collaboration Tools",
  },

  // Core Development
  "Next.js": {
    icon: <SiNextdotjs className="w-6 h-6 text-black dark:text-white" />,
    category: "Core Development",
  },
  TypeScript: {
    icon: <SiTypescript className="w-6 h-6 text-[#3178C6]" />,
    category: "Core Development",
  },
  JavaScript: {
    icon: <SiJavascript className="w-6 h-6 text-[#F7DF1E]" />,
    category: "Core Development",
  },
  HTML5: {
    icon: <SiHtml5 className="w-6 h-6 text-[#E34F26]" />,
    category: "Core Development",
  },
  CSS3: {
    icon: <SiCss3 className="w-6 h-6 text-[#1572B6]" />,
    category: "Core Development",
  },
  Vue: {
    icon: <FaVuejs className="w-6 h-6 text-[#4FC08D]" />,
    category: "Core Development",
  },
  Angular: {
    icon: <FaAngular className="w-6 h-6 text-[#DD0031]" />,
    category: "Core Development",
  },
  Redux: {
    icon: <SiRedux className="w-6 h-6 text-[#764ABC]" />,
    category: "Core Development",
  },
  "React Query": {
    icon: <SiReactquery className="w-6 h-6 text-[#FF4154]" />,
    category: "Core Development",
  },
  Sass: {
    icon: <FaSass className="w-6 h-6 text-[#CC6699]" />,
    category: "Core Development",
  },
  "Tailwind CSS": {
    icon: <SiTailwindcss className="w-6 h-6 text-[#06B6D4]" />,
    category: "Core Development",
  },
  Bootstrap: {
    icon: <FaBootstrap className="w-6 h-6 text-[#7952B3]" />,
    category: "Core Development",
  },
  Storybook: {
    icon: <SiStorybook className="w-6 h-6 text-[#FF4785]" />,
    category: "Core Development",
  },
  Vite: {
    icon: <SiVite className="w-6 h-6 text-[#646CFF]" />,
    category: "Core Development",
  },
  Svelte: {
    icon: <SiSvelte className="w-6 h-6 text-[#FF3E00]" />,
    category: "Core Development",
  },
  Astro: {
    icon: <SiAstro className="w-6 h-6 text-[#BC52EE]" />,
    category: "Core Development",
  },
  "Chakra UI": {
    icon: <SiChakraui className="w-6 h-6 text-[#319795]" />,
    category: "Core Development",
  },
  "Material UI": {
    icon: <SiMui className="w-6 h-6 text-[#007FFF]" />,
    category: "Core Development",
  },
  "Ant Design": {
    icon: <SiAntdesign className="w-6 h-6 text-[#0170FE]" />,
    category: "Core Development",
  },
  "Framer Motion": {
    icon: <SiFramer className="w-6 h-6 text-black dark:text-white" />,
    category: "Core Development",
  },
  GSAP: {
    icon: <SiGreensock className="w-6 h-6 text-[#88CE02]" />,
    category: "Core Development",
  },
  "Three.js": {
    icon: <SiThreedotjs className="w-6 h-6 text-black dark:text-white" />,
    category: "Core Development",
  },
  "D3.js": {
    icon: <SiD3Dotjs className="w-6 h-6 text-[#F9A03C]" />,
    category: "Core Development",
  },
  WebGL: {
    icon: <SiWebgl className="w-6 h-6 text-[#990000]" />,
    category: "Core Development",
  },
  "Radix UI": {
    icon: <SiRadixui className="w-6 h-6 text-[#808080]" />,
    category: "Core Development",
  },
  "shadcn/ui": {
    icon: <SiShadcnui className="w-6 h-6 text-black dark:text-white" />,
    category: "Core Development",
  },

  // Development Tools
  Git: {
    icon: <SiGit className="w-6 h-6 text-[#F05032]" />,
    category: "Development Tools",
  },
  "VS Code": {
    icon: <SiVisualstudiocode className="w-6 h-6 text-[#007ACC]" />,
    category: "Development Tools",
  },
  Webpack: {
    icon: <SiWebpack className="w-6 h-6 text-[#8DD6F9]" />,
    category: "Development Tools",
  },
  Jest: {
    icon: <SiJest className="w-6 h-6 text-[#C21325]" />,
    category: "Development Tools",
  },
  ESLint: {
    icon: <SiEslint className="w-6 h-6 text-[#4B32C3]" />,
    category: "Development Tools",
  },
  Prettier: {
    icon: <SiPrettier className="w-6 h-6 text-[#F7B93E]" />,
    category: "Development Tools",
  },
  npm: {
    icon: <FaNpm className="w-6 h-6 text-[#CB3837]" />,
    category: "Development Tools",
  },
  Yarn: {
    icon: <FaYarn className="w-6 h-6 text-[#2C8EBB]" />,
    category: "Development Tools",
  },
  Babel: {
    icon: <SiBabel className="w-6 h-6 text-[#F9DC3E]" />,
    category: "Development Tools",
  },
  Cypress: {
    icon: <SiCypress className="w-6 h-6 text-[#17202C]" />,
    category: "Development Tools",
  },
  Postman: {
    icon: <SiPostman className="w-6 h-6 text-[#FF6C37]" />,
    category: "Development Tools",
  },
  Swagger: {
    icon: <SiSwagger className="w-6 h-6 text-[#85EA2D]" />,
    category: "Development Tools",
  },
  WebStorm: {
    icon: <SiWebstorm className="w-6 h-6 text-[#00D8FF]" />,
    category: "Development Tools",
  },
  IntelliJ: {
    icon: <SiIntellijidea className="w-6 h-6 text-[#000000]" />,
    category: "Development Tools",
  },
  Eclipse: {
    icon: <SiEclipseide className="w-6 h-6 text-[#2C2255]" />,
    category: "Development Tools",
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
};
