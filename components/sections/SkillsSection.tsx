"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

import { SkillsDataType } from "@/types/types";
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
} from "react-icons/si";

const SkillsSection = ({
  onChange,
  initialData,
}: {
  onChange: (data: SkillsDataType) => void;
  initialData: SkillsDataType;
}) => {
  const [skillsData, setSkillsData] = useState<SkillsDataType>(initialData);

  const addSkill = () => {
    const newId = Date.now().toString();
    const newSkills = [
      ...skillsData.skills,
      {
        id: newId,
        name: "",
        level: 3,
        category: "Frontend",
      },
    ];
    handleChange("skills", newSkills);
  };

  const removeSkill = (index: number) => {
    if (skillsData.skills[index].name.trim() === "") {
      if (!window.confirm("이름이 비어있는 스킬을 삭제하시겠습니까?")) {
        return;
      }
    }
    const newSkills = skillsData.skills.filter((_, i) => i !== index);
    handleChange("skills", newSkills);
  };

  const handleChange = (
    field: keyof SkillsDataType,
    value: SkillsDataType[keyof SkillsDataType]
  ) => {
    const newData = { ...skillsData, [field]: value };
    setSkillsData(newData);
    onChange(newData);
  };

  const skillIcons: { [key: string]: { icon: JSX.Element; category: string } } =
    {
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
    };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">스킬 섹션</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">스킬 목록</h3>
          {skillsData.skills.map((skill, index) => (
            <div key={skill.id} className="flex items-center gap-2 mb-2">
              <div className="w-8">
                {(skill.name && skillIcons[skill.name]?.icon) || (
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                )}
              </div>
              <input
                type="text"
                placeholder="스킬 이름"
                className="flex-1 p-2 border rounded"
                value={skill.name}
                onChange={(e) => {
                  const newSkills = [...skillsData.skills];
                  newSkills[index].name = e.target.value;
                  if (skillIcons[e.target.value]) {
                    newSkills[index].category =
                      skillIcons[e.target.value].category;
                  }
                  handleChange("skills", newSkills);
                }}
                list="skill-suggestions"
                required
              />
              <datalist id="skill-suggestions">
                {Object.keys(skillIcons).map((skillName) => (
                  <option key={skillName} value={skillName} />
                ))}
              </datalist>
              <input
                type="range"
                min="1"
                max="5"
                value={skill.level}
                onChange={(e) => {
                  const newSkills = [...skillsData.skills];
                  newSkills[index].level = Number(e.target.value);
                  handleChange("skills", newSkills);
                }}
              />
              <button
                onClick={() => removeSkill(index)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                삭제
              </button>
            </div>
          ))}
          <button
            onClick={addSkill}
            className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            스킬 추가
          </button>
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
