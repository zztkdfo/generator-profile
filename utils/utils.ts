import {
  HelloWordDataType,
  IntroductionDataType,
  SkillsDataType,
  ArticlesDataType,
} from "@/types/types";
import { techColors } from "@/components/sections/data/techColors";

export const convertIntroductionToPreview = (
  data: IntroductionDataType
): string => {
  if (!data.mainTitle && !data.email && !data.description) {
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
      .join("\n\n") || "";

  const formattedDescription = data.description
    ? data.description.split("\n").join("  \n")
    : "";

  const imageSection = data.showImage
    ? `<img src="${data.imageSrc}" width="200" />`
    : "";

  return `# ${data.mainTitle} <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="30"> \n\n
<div style="display: flex; align-items: center; gap: 20px;">
<div align="left">
${emails}\n\n
${formattedDescription}
</div>
${imageSection}
</div>\n\n`;
};

// GitHub 복사용
export const convertIntroductionToMarkdown = (
  data: IntroductionDataType
): string => {
  if (!data.mainTitle && !data.email && !data.description) {
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
      .join("\n") || "";

  const formattedDescription = data.description
    ? data.description.split("\n").join("<br />")
    : "";

  const imageSection = data.showImage
    ? `\n\n<img align="right" alt="코딩" width="200" src="${data.imageSrc}"/>`
    : "";

  return `## ${data.mainTitle} <img src="https://raw.githubusercontent.com/ABSphreak/ABSphreak/master/gifs/Hi.gif" width="24"/>\n
${imageSection}

${emails}\n
${formattedDescription}

<br />
<br />
`;
};

// 웹 프리뷰용
export const convertHelloWorldToPreview = (
  helloWordData: HelloWordDataType
): string => {
  if (!helloWordData?.words || helloWordData.words.length === 0) {
    return "";
  }

  const userContent = helloWordData.words
    .map((word) => `• ${word.text}`)
    .join("\n");

  const imageSection =
    helloWordData.showImage && helloWordData.imageSrc
      ? `<img align="right" alt="코딩" width="320" src="${helloWordData.imageSrc}" />`
      : ``;

  return `## Hello World!! 🤔

<div style="display: flex; align-items: flex-start; gap: 50px;">
  <div style="white-space: pre-line;">
    ${userContent}
  </div>
  ${imageSection}
</div>
`;
};

// GitHub 복사용
export const convertHelloWorldToMarkdown = (
  helloWordData: HelloWordDataType
): string => {
  if (!helloWordData?.words || helloWordData.words.length === 0) {
    return "";
  }

  const userContent = helloWordData.words
    .map((word) => `• ${word.text}  `)
    .join("\n");

  const imageSection =
    helloWordData.showImage && helloWordData.imageSrc
      ? `<img align="right" alt="코딩" width="320" src="${helloWordData.imageSrc}" />`
      : ``;

  return `## Hello World!! 🤔\n\n
${imageSection}\n\n
${userContent}
<br />
<br />
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
    markdown += `### ${category}\n\n`;
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

        markdown += `<img src="${imageUrl}" height="30" /> `;
      }
    });
    markdown += `\n\n`;
  });

  return markdown;
};

export const convertArticlesToMarkdown = (
  articlesData: ArticlesDataType
): string => {
  if (!articlesData?.articles || articlesData.articles.length === 0) {
    return "";
  }

  const userContent = articlesData.articles
    .map((article) => {
      const title = article.title.trim();
      const url = article.url.trim();
      return `- [${title}](${url}) `;
    })
    .join("\n");

  return `## Blogs

<!-- BLOG-POST-LIST:START -->
${userContent}
<!-- BLOG-POST-LIST:END -->

➡️ [more articles...](https://disquiet.io/@zztkdfo/articles)`;
};
