import IntroSection from "@/components/sections/IntroSection";
import HelloWorldSection from "@/components/sections/HelloWorldSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ArticlesSection from "@/components/sections/Articles";
// 추가 섹션들 import...
import { Template } from "@/types/types";

export const templates: Template[] = [
  {
    id: "template1",
    name: "💡 기본 프로필",
    sections: [
      {
        id: "1",
        title: "Introduction",
        component: IntroSection,
        initialData: {
          mainTitle: "반갑습니다, 저는 개발자 OOO 입니다.",
          email: "xxx@gmail.com",
          description: `안녕하세요, 반갑습니다. 🤗
저는 현재 프리랜서 및 퍼스널브랜딩에 관심이 많은 프론트엔드 개발자 입니다. 🚀
지금은 취업 준비생, 대학생, 비전공자들에게 작게나마 도움을 주는 일을 하고 있습니다. 🤝

<i><strong>매일 매일 아무것도 아닌 일을 꾸준히 하다보면 취미가 되고, 일이 되며, 나의 적성이 된다.</strong></i>
`,
          showImage: true,
          imageSrc:
            "https://camo.githubusercontent.com/a5e9c18e7f1a0431fd04228a283f222f87ff0c7423c071ab6afb7ce86ce4be9c/68747470733a2f2f6f63746f6465782e6769746875622e636f6d2f696d616765732f68756c615f6c6f6f705f6f63746f64657830332e676966",
        },
      },
      {
        id: "2",
        title: "Hello World",
        component: HelloWorldSection,
        initialData: {
          words: [
            {
              id: "1733421296449",
              text: "💬 무엇이든 편하게 물어보세요. 함께 성장하는 대화를 나누고 싶습니다.",
              placeholder: "예: 💬 무엇이든 편하게 물어보세요.",
            },
            {
              id: "1733421318699",
              text: "📫 Ask me about 프론트엔드 개발, 취업 준비, 이력서 작성법, 고민",
              placeholder: "예: 🎨 창의적인 아이디어를 공유하세요.",
            },
            {
              id: "1733421323491",
              text: "🌱 I'm currently learning AI, 개발, 퍼스널 브랜딩, 대화, 마인드 셋 등등",
              placeholder: "예: 📚 최근 읽은 책에 대해 이야기해보세요.",
            },
            {
              id: "1733421327463",
              text: "⚡ Fun fact 개발, 독서, 운동, 러닝, 상담, 잡담 등등",
              placeholder: "예:⚡ 개발에 몰입하면 시간 가는 줄 모릅니다!",
            },
            {
              id: "1733421330579",
              text: "✨ Trust 꾸준함, 과정, 습관, 경험, 배움",
              placeholder:
                "예:📝 학습 경험을 꾸준히 기록하며, 기술 팁과 프로젝트 경험을 나눕니다.",
            },
            {
              id: "1733421333255",
              text: "🔍 데이터 분석을 활용해 문제를 이해하고, 효율적인 솔루션을 설계합니다.",
              placeholder:
                "예:🔍 기술과 데이터 분석을 활용해 문제를 이해하고, 효율적인 솔루션을 설계합니다.",
            },
            {
              id: "1733421335798",
              text: "🚀 진행 중인 프로젝트를 통해 학습한 기술을 실전에 적용하고 있습니다.",
              placeholder:
                "예:🚀 꾸준히 진행 중인 프로젝트를 통해 학습한 기술을 실전에 적용하고 있습니다.",
            },
          ],
          showImage: true,
          imageSrc:
            "https://github.com/user-attachments/assets/eb7ea291-99db-4225-b84b-2d597dd20370",
        },
      },
      {
        id: "3",
        title: "Skills",
        component: SkillsSection,
        initialData: {
          skills: [
            {
              id: "1733422063831",
              name: "React",
              level: 3,
              category: "Frontend",
            },
            {
              id: "1733422066313",
              name: "Next.js",
              level: 3,
              category: "Frontend",
            },
            {
              id: "1733422084435",
              name: "TypeScript",
              level: 3,
              category: "Frontend",
            },
            {
              id: "1733422087358",
              name: "JavaScript",
              level: 3,
              category: "Frontend",
            },
            {
              id: "1733422089003",
              name: "Tailwind CSS",
              level: 3,
              category: "Frontend",
            },
            {
              id: "1733422090690",
              name: "React Query",
              level: 3,
              category: "Frontend",
            },
            {
              id: "1733422096451",
              name: "Node.js",
              level: 3,
              category: "Backend",
            },
            {
              id: "1733422098722",
              name: "Python",
              level: 3,
              category: "Backend",
            },
            {
              id: "1733422100874",
              name: "Spring",
              level: 3,
              category: "Backend",
            },
            {
              id: "1733422111649",
              name: "Git",
              level: 3,
              category: "Other",
            },
            {
              id: "1733422115500",
              name: "VS Code",
              level: 3,
              category: "Other",
            },
            {
              id: "1733422120622",
              name: "Swagger",
              level: 3,
              category: "Other",
            },
            {
              id: "1733422123189",
              name: "Slack",
              level: 3,
              category: "Other",
            },
            {
              id: "1733422127529",
              name: "Figma",
              level: 3,
              category: "Other",
            },
          ],
        },
      },
      {
        id: "4",
        title: "Articles",
        component: ArticlesSection,
        initialData: {
          mainBlog: "https://disquiet.io/@zztkdfo/articles",
          articles: [
            {
              id: "1",
              title: "스타트업 3년의 기록: 설레임, 도전, 그리고 새로운 시작",
              url: "https://disquiet.io/@zztkdfo/makerlog/%EC%8A%A4%ED%83%80%ED%8A%B8%EC%97%85-3%EB%85%84%EC%9D%98-%EA%B8%B0%EB%A1%9D-%EC%84%A4%EB%A0%88%EC%9E%84-%EB%8F%84%EC%A0%84-%EA%B7%B8%EB%A6%AC%EA%B3%A0-%EC%83%88%EB%A1%9C%EC%9A%B4-%EC%8B%9C%EC%9E%91",
            },
            {
              id: "2",
              title: "성숙함의 6가지 명확한 징후: 삶의 깊이를 더하는 지혜",
              url: "https://disquiet.io/@zztkdfo/makerlog/%EC%84%B1%EC%88%99%ED%95%A8%EC%9D%98-6%EA%B0%80%EC%A7%80-%EB%AA%85%ED%99%95%ED%95%9C-%EC%A7%95%ED%9B%84-%EC%82%B6%EC%9D%98-%EA%B9%8A%EC%9D%B4%EB%A5%BC-%EB%8D%94%ED%95%98%EB%8A%94-%EC%A7%80%ED%98%9C",
            },
            {
              id: "3",
              title: "나만의 길을 만들어가는 첫 걸음, 꾸준히 그리고 나답게",
              url: "https://disquiet.io/@zztkdfo/makerlog/%EC%84%B1%EC%88%99%ED%95%A8%EC%9D%98-6%EA%B0%80%EC%A7%80-%EB%AA%85%ED%99%95%ED%95%9C-%EC%A7%95%ED%9B%84-%EC%82%B6%EC%9D%98-%EA%B9%8A%EC%9D%B4%EB%A5%BC-%EB%8D%94%ED%95%98%EB%8A%94-%EC%A7%80%ED%98%9C",
            },
          ],
        },
      },
    ],
  },
  {
    id: "template2",
    name: "💻 프론트엔드 개발자",
    sections: [
      // 다른 구성의 섹션들
    ],
  },
  {
    id: "template3",
    name: "⚙️ 백엔드 개발자",
    sections: [
      // 다른 구성의 섹션들
    ],
  },
  {
    id: "template4",
    name: "📊 데이터 엔지니어",
    sections: [
      // 다른 구성의 섹션들
    ],
  },
];
