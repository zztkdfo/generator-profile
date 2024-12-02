import {
  HelloWordDataType,
  IntroductionDataType,
  SkillsDataType,
} from "@/types/types";
import { techColors } from "@/components/sections/data/techColors";
export const convertIntroductionToMarkdown = (
  data: IntroductionDataType
): string => {
  if (!data.mainTitle && !data.email && !data.philosophy && !data.description) {
    return "# Welcome to my GitHub Profile!\n\n_프로필 정보를 입력해주세요._";
  }

  const emails =
    data.email
      ?.split(",")
      .map((email) => {
        const trimmedEmail = email.trim();
        if (trimmedEmail.includes("@gmail.com")) {
          return `<img width="200" src="https://img.shields.io/badge/Gmail-${trimmedEmail}-EA4335?style=flat-square&logo=Gmail&logoColor=white"/>`;
        } else if (trimmedEmail.includes("@naver.com")) {
          return `<img width="200" src="https://img.shields.io/badge/Naver-${trimmedEmail}-03C75A?style=flat-square&logo=Naver&logoColor=white"/>`;
        }
        return `📧 ${trimmedEmail}`;
      })
      .join(" ") || "";

  return `# ${
    data.mainTitle
  } <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30">

${emails}

<div style="display: flex; align-items: flex-start; gap: 20px;">
  <div style="white-space: pre-line;">
    ${data.description ? `${data.description}` : ""}
    ${data.philosophy ? `\n${data.philosophy}` : ""}
  </div>
  <img src='https://github.githubassets.com/images/mona-whisper.gif' width='200'>
</div>\n`;
};

export const convertHelloWorldToMarkdown = (
  helloWordData: HelloWordDataType
): string => {
  if (!helloWordData?.words || helloWordData.words.length === 0) {
    return "";
  }

  const userContent = helloWordData.words
    .map((word) => `• ${word.text}`)
    .join("\n");

  return `## Hello World!! 🤔

<div style="display: flex; align-items: flex-start; justify-content: space-between; ">
  <div style="white-space: pre-line;">
    ${userContent}
  </div>
  <img align="right" alt="코딩" width="320" src="https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o/coding-freak.gif" />
</div>

`;
};

export const convertSkillsToMarkdown = (skillsData: SkillsDataType): string => {
  if (!skillsData?.skills || skillsData.skills.length === 0) {
    return "";
  }

  let markdown = "## 기술 스택\n\n";

  const skillsByCategory: { [key: string]: typeof skillsData.skills } = {};

  skillsData.skills.forEach((skill) => {
    if (!skillsByCategory[skill.category]) {
      skillsByCategory[skill.category] = [];
    }
    skillsByCategory[skill.category].push(skill);
  });

  Object.entries(skillsByCategory).forEach(([category, skills]) => {
    markdown += `### ${category}\n`;
    markdown += `<div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">\n`;
    skills.forEach((skill) => {
      if (skill.name) {
        const color = techColors[skill.name] || "232F3E";
        const logoName = skill.name
          .toLowerCase()
          .replace(/\s+/g, "")
          .replace(/\./g, "")
          .replace("react native", "react");

        const imageUrl = `https://img.shields.io/badge/${skill.name
          .replace("-", "--")
          .replace(
            " ",
            "%20"
          )}-${color}?style=for-the-badge&logo=${logoName}&logoColor=white`;

        const styleAttr = imageUrl.includes("img.shields.io")
          ? ` style="height: 30px !important; max-height: 30px !important; display: inline-block !important;"`
          : "";

        markdown += `<img src="${imageUrl}" height="30"${styleAttr}/>\n`;
      }
    });
    markdown += `</div>`;
  });

  return markdown;
};
