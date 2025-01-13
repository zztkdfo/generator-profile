import IntroSection from "@/components/sections/IntroSection";
import HelloWorldSection from "@/components/sections/HelloWorldSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ArticlesSection from "@/components/sections/Articles";
// 추가 섹션들 import...
import { Template } from "@/types/types";

export const templates: Template[] = [
  {
    id: "template1",
    name: "기본 프로필",
    sections: [
      {
        id: "1",
        title: "Introduction",
        component: IntroSection,
        initialData: {
          mainTitle: "",
          email: "",
          description: "",
          showImage: false,
          imageSrc: "default_image_url",
        },
      },
      {
        id: "2",
        title: "Hello World",
        component: HelloWorldSection,
        initialData: {
          words: [],
          showImage: false,
          imageSrc: "default_image_url",
        },
      },
      {
        id: "3",
        title: "Introduction",
        component: SkillsSection,
        initialData: {
          mainTitle: "",
          email: "",
          description: "",
          showImage: false,
          imageSrc: "default_image_url",
        },
      },
      {
        id: "4",
        title: "Hello World",
        component: ArticlesSection,
        initialData: {
          words: [],
          showImage: false,
          imageSrc: "default_image_url",
        },
      },
      // ... 다른 섹션들
    ],
  },
  {
    id: "template2",
    name: "개발자 포트폴리오",
    sections: [
      // 다른 구성의 섹션들
    ],
  },
];
