import { IntroductionType } from "@/types/types";

export const convertIntroductionToMarkdown = (
  data: IntroductionType
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

${
  data.description
    ? `${data.description
        .split("\n")
        .map((line) => `${line}  `)
        .join("\n")} 🍀 ✨`
    : ""
}
${
  data.philosophy
    ? `${data.philosophy
        .split("\n")
        .map((line) => `${line}  `)
        .join("\n")}`
    : ""
}

<img align='right' src='https://github.githubassets.com/images/mona-whisper.gif'  width='200'>`;
};
