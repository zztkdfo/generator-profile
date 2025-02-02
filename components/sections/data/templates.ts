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
    isAvailable: true,
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
            // Core Development
            { id: "1", name: "React", level: 5, category: "Core Development" },
            {
              id: "2",
              name: "Next.js",
              level: 4,
              category: "Core Development",
            },
            {
              id: "3",
              name: "TypeScript",
              level: 4,
              category: "Core Development",
            },
            {
              id: "4",
              name: "JavaScript",
              level: 5,
              category: "Core Development",
            },
            {
              id: "5",
              name: "HTML/CSS",
              level: 5,
              category: "Core Development",
            },
            {
              id: "6",
              name: "Redux",
              level: 4,
              category: "Core Development",
            },
            {
              id: "7",
              name: "React Query",
              level: 4,
              category: "Core Development",
            },
            {
              id: "8",
              name: "Jotai",
              level: 4,
              category: "Core Development",
            },
            {
              id: "9",
              name: "Zustand",
              level: 4,
              category: "Core Development",
            },

            // Development Tools
            { id: "10", name: "Git", level: 4, category: "Development Tools" },
            {
              id: "11",
              name: "VS Code",
              level: 5,
              category: "Development Tools",
            },
            {
              id: "12",
              name: "Webpack/Vite",
              level: 3,
              category: "Development Tools",
            },
            {
              id: "13",
              name: "Jest/RTL",
              level: 3,
              category: "Development Tools",
            },
            {
              id: "14",
              name: "ESLint/Prettier",
              level: 4,
              category: "Development Tools",
            },

            // Collaboration Tools
            {
              id: "15",
              name: "Figma",
              level: 4,
              category: "Collaboration Tools",
            },
            {
              id: "16",
              name: "Swagger",
              level: 4,
              category: "Collaboration Tools",
            },
            {
              id: "17",
              name: "Jira",
              level: 3,
              category: "Collaboration Tools",
            },
            {
              id: "18",
              name: "Slack",
              level: 4,
              category: "Collaboration Tools",
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
    isAvailable: true,
    sections: [
      {
        id: "1",
        title: "Introduction",
        component: IntroSection,
        initialData: {
          mainTitle: "프론트엔드 개발자 OOO입니다",
          email: "frontend@email.com",
          description: `최신 프론트엔드 기술을 활용하여 사용자 경험을 극대화하는 개발자입니다. 🎨
React와 Next.js를 기반으로 한 웹 애플리케이션 개발에 전문성을 가지고 있으며, TypeScript와 Tailwind CSS를 적극 활용합니다. 💻
빠른 빌드 도구인 Vite를 사용하여 개발 효율성을 높이고 있습니다. ⚡

<i><strong>모던 웹 기술로 사용자 중심의 인터페이스를 구현합니다.</strong></i>`,
          showImage: true,
          imageSrc:
            "https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif", // 프로그래밍 언어 아이콘 이미지
        },
      },
      {
        id: "2",
        title: "Hello World",
        component: HelloWorldSection,
        initialData: {
          words: [
            {
              id: "1",
              text: "🎨 UI/UX에 대한 깊은 이해를 바탕으로 사용자 친화적인 인터페이스를 구현합니다",
              placeholder: "UI/UX 소개",
            },
            {
              id: "2",
              text: "⚡ React, Next.js, TypeScript 기반의 웹 애플리케이션 개발",
              placeholder: "주요 기술 스택",
            },
            {
              id: "3",
              text: "🔍 웹 성능 최적화와 SEO 개선에 대한 경험이 풍부합니다",
              placeholder: "전문 분야",
            },
            {
              id: "4",
              text: "📱 반응형 웹 디자인과 크로스 브라우징 호환성을 고려한 개발",
              placeholder: "개발 방식",
            },
            {
              id: "5",
              text: "🌱 현재 WebGL, Three.js를 학습하며 인터랙티브 웹 개발에 도전 중입니다",
              placeholder: "학습 중인 기술",
            },
            {
              id: "6",
              text: "🔧 코드 품질과 테스트 자동화에 대한 높은 관심을 가지고 있습니다",
              placeholder: "코드 품질 관리",
            },
            {
              id: "7",
              text: "👥 기술 블로그 운영과 학습을 통해 꾸준히 성장하고 있습니다",
              placeholder: "기술 블로그 운영",
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
            // Core Development
            { id: "1", name: "React", level: 5, category: "Core Development" },
            {
              id: "2",
              name: "Next.js",
              level: 5,
              category: "Core Development",
            },
            {
              id: "3",
              name: "TypeScript",
              level: 5,
              category: "Core Development",
            },
            {
              id: "4",
              name: "Tailwind CSS",
              level: 4,
              category: "Core Development",
            },
            { id: "5", name: "Vite", level: 4, category: "Development Tools" },
            {
              id: "6",
              name: "Redux/Recoil",
              level: 4,
              category: "Core Development",
            },
            {
              id: "7",
              name: "React Query",
              level: 4,
              category: "Core Development",
            },
            {
              id: "8",
              name: "Jotai",
              level: 4,
              category: "Core Development",
            },
            {
              id: "9",
              name: "Zustand",
              level: 4,
              category: "Core Development",
            },

            // Development Tools
            { id: "10", name: "Git", level: 4, category: "Development Tools" },
            {
              id: "11",
              name: "VS Code",
              level: 5,
              category: "Development Tools",
            },
            {
              id: "12",
              name: "Webpack/Vite",
              level: 3,
              category: "Development Tools",
            },
            {
              id: "13",
              name: "Jest/RTL",
              level: 3,
              category: "Development Tools",
            },
            {
              id: "14",
              name: "ESLint/Prettier",
              level: 4,
              category: "Development Tools",
            },

            // Collaboration Tools
            {
              id: "15",
              name: "Figma",
              level: 4,
              category: "Tools",
            },
            {
              id: "16",
              name: "Swagger",
              level: 4,
              category: "Tools",
            },
            {
              id: "17",
              name: "Jira",
              level: 3,
              category: "Tools",
            },
            {
              id: "18",
              name: "Slack",
              level: 4,
              category: "Tools",
            },
          ],
        },
      },
      {
        id: "4",
        title: "Articles",
        component: ArticlesSection,
        initialData: {
          mainBlog: "https://frontend-blog.dev",
          articles: [
            {
              id: "1",
              title: "React 성능 최적화: 실전 가이드",
              url: "https://frontend-blog.dev/react-performance",
            },
            {
              id: "2",
              title: "Next.js 13의 새로운 기능과 App Router 전환기",
              url: "https://frontend-blog.dev/nextjs-13",
            },
            {
              id: "3",
              title: "프론트엔드 개발자의 웹 접근성 고려사항",
              url: "https://frontend-blog.dev/web-accessibility",
            },
          ],
        },
      },
    ],
  },
  {
    id: "template3",
    name: "⚙️ 백엔드 개발자",
    isAvailable: true,
    sections: [
      {
        id: "1",
        title: "Introduction",
        component: IntroSection,
        initialData: {
          mainTitle: "백엔드 개발자 OOO입니다",
          email: "backend@email.com",
          description: `안녕하세요, 최신 백엔드 기술을 활용하는 개발자입니다. 서버 아키텍처 설계와 데이터베이스 최적화에 전문성을 가지고 있습니다. 🔧
Node.js와 Express를 기반으로 한 서버 개발에 능숙하며, NestJS와 GraphQL을 활용하여 효율적인 API를 설계합니다. 📊
Docker와 Kubernetes를 사용하여 안정적인 시스템을 구축하고, AWS를 통해 클라우드 서비스를 활용합니다. 🤝

<i><strong>안정성과 확장성을 고려한 백엔드 시스템을 설계합니다.</strong></i>`,
          showImage: true,
          imageSrc:
            "https://user-images.githubusercontent.com/74038190/212284087-bbe7e430-757e-4901-90bf-4cd2ce3e1852.gif", // 프로그래밍 언어 아이콘 이미지
        },
      },
      {
        id: "2",
        title: "Hello World",
        component: HelloWorldSection,
        initialData: {
          words: [
            {
              id: "1",
              text: "🔧 Node.js, Express 기반의 서버 개발",
              placeholder: "주요 기술 스택",
            },
            {
              id: "2",
              text: "📊 데이터베이스 설계 및 최적화 경험",
              placeholder: "전문 분야",
            },
            {
              id: "3",
              text: "🔍 RESTful API 및 GraphQL 설계",
              placeholder: "API 설계",
            },
            {
              id: "4",
              text: "🌐 클라우드 서비스(AWS, GCP) 활용",
              placeholder: "클라우드 서비스",
            },
            {
              id: "5",
              text: "🔒 보안 및 인증 시스템 구현",
              placeholder: "보안",
            },
            {
              id: "6",
              text: "📈 성능 모니터링 및 로깅 시스템 구축",
              placeholder: "성능 모니터링",
            },
            {
              id: "7",
              text: "👥 팀 협업과 코드 리뷰를 통한 지속적인 개선",
              placeholder: "팀 협업",
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
            // Core Development
            { id: "1", name: "Spring", level: 4, category: "Core Development" },
            {
              id: "2",
              name: "Node.js",
              level: 5,
              category: "Core Development",
            },
            {
              id: "3",
              name: "Express",
              level: 4,
              category: "Core Development",
            },
            { id: "4", name: "NestJS", level: 4, category: "Core Development" },
            {
              id: "5",
              name: "GraphQL",
              level: 4,
              category: "Core Development",
            },
            { id: "6", name: "Docker", level: 4, category: "Core Development" },
            {
              id: "7",
              name: "Kubernetes",
              level: 3,
              category: "Core Development",
            },
            { id: "8", name: "AWS", level: 4, category: "Development Tools" },
            // 추가된 기술
            { id: "9", name: "MySQL", level: 4, category: "Core Development" },
            {
              id: "10",
              name: "PostgreSQL",
              level: 4,
              category: "Core Development",
            },
            {
              id: "11",
              name: "MongoDB",
              level: 3,
              category: "Core Development",
            },
            // Development Tools
            { id: "12", name: "Git", level: 4, category: "Development Tools" },
            {
              id: "13",
              name: "VS Code",
              level: 5,
              category: "Development Tools",
            },
            {
              id: "16",
              name: "IntelliJ",
              level: 4,
              category: "Development Tools",
            },
            {
              id: "17",
              name: "Spring Tool Suite",
              level: 4,
              category: "Development Tools",
            },
            // Collaboration Tools
            {
              id: "17",
              name: "Jira",
              level: 3,
              category: "Collaboration Tools",
            },
            {
              id: "18",
              name: "Confluence",
              level: 4,
              category: "Collaboration Tools",
            },
            {
              id: "19",
              name: "Slack",
              level: 4,
              category: "Collaboration Tools",
            },
          ],
        },
      },
      {
        id: "4",
        title: "Articles",
        component: ArticlesSection,
        initialData: {
          mainBlog: "https://backend-blog.dev",
          articles: [
            {
              id: "1",
              title: "Node.js 성능 최적화: 실전 가이드",
              url: "https://backend-blog.dev/nodejs-performance",
            },
            {
              id: "2",
              title: "Docker와 Kubernetes를 활용한 배포 전략",
              url: "https://backend-blog.dev/docker-kubernetes",
            },
            {
              id: "3",
              title: "백엔드 개발자의 데이터베이스 설계 고려사항",
              url: "https://backend-blog.dev/database-design",
            },
          ],
        },
      },
    ],
  },
  {
    id: "template4",
    name: "📊 데이터 엔지니어",
    isAvailable: false,
    sections: [
      // 다른 구성의 섹션들
    ],
  },
];
