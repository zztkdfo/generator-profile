"use client";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Topbar from "@/components/layout/Topbar";
import Content from "@/components/Content/Content";

import { useCallback, useMemo, useState, useEffect } from "react";
import {
  HelloWordDataType,
  IntroductionDataType,
  SkillsDataType,
  ArticlesDataType,
} from "@/types/types";
import {
  convertHelloWorldToMarkdown,
  convertIntroductionToPreview,
  convertHelloWorldToPreview,
  convertIntroductionToMarkdown,
  convertSkillsToMarkdown,
  convertArticlesToMarkdown,
} from "@/utils/utils";

import IntroSection from "@/components/sections/IntroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import HelloWorldSection from "@/components/sections/HelloWorldSection";
import ArticlesSection from "@/components/sections/Articles";

export interface MenuItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

export default function Home() {
  // 전체 프로필 데이터를 관리하는 state
  const [profileData, setProfileData] = useState<{
    introduction: IntroductionDataType;
    helloWorld: HelloWordDataType;
    skills: SkillsDataType;
    articles: ArticlesDataType;
  }>({
    introduction: {
      mainTitle: "",
      email: "",
      description: "",
      showImage: false,
      imageSrc:
        "https://camo.githubusercontent.com/a5e9c18e7f1a0431fd04228a283f222f87ff0c7423c071ab6afb7ce86ce4be9c/68747470733a2f2f6f63746f6465782e6769746875622e636f6d2f696d616765732f68756c615f6c6f6f705f6f63746f64657830332e676966",
    },
    helloWorld: {
      words: [],
      showImage: false,
      imageSrc:
        "https://images.squarespace-cdn.com/content/v1/5769fc401b631bab1addb2ab/1541580611624-TE64QGKRJG8SWAIUS7NS/ke17ZwdGBToddI8pDm48kPoswlzjSVMM-SxOp7CV59BZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZamWLI2zvYWH8K3-s_4yszcp2ryTI0HqTOaaUohrI8PI6FXy8c9PWtBlqAVlUS5izpdcIXDZqDYvprRqZ29Pw0o/coding-freak.gif",
    },
    skills: {
      skills: [],
    },
    articles: {
      mainBlog: "",
      articles: [],
    },
  });

  // 각 섹션별 마크다운을 따로 관리
  const [, setSectionMarkdowns] = useState({
    introduction: "",
    skills: "",
    helloWorld: "",
    articles: "",
  });

  // 마크다운 문자열을 저장할 state
  const [markdownPreview, setMarkdownPreview] = useState("");
  const [markdownForCopy, setMarkdownForCopy] = useState(""); // 복사용

  const [activeMenu, setActiveMenu] = useState<string | null>("1");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: "1", title: "Introduction" },
    { id: "2", title: "Hello World" },
    { id: "3", title: "Skills" },
    { id: "4", title: "Latest Articles" },
  ]);
  const STORAGE_KEY = "github-profile-generator-data";

  // 임시 저장 함수
  const handleSaveTemp = useCallback(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(profileData));
      alert("임시 저장되었습니다!");
    } catch (error) {
      console.error("저장 실패:", error);
      alert("저장에 실패했습니다.");
    }
  }, [profileData]);

  // 임시 저장된 데이터 불러오기 함수
  const handleLoadTemp = useCallback(() => {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);
      if (!savedData) {
        alert("저장된 데이터가 없습니다.");
        return;
      }

      if (window.confirm("저장된 데이터를 불러오시겠습니까?")) {
        const parsedData = JSON.parse(savedData);
        // 현재 활성화된 메뉴 저장
        const currentMenu = activeMenu;
        // 메뉴를 잠시 null로 설정했다가 다시 원래 값으로 설정
        setActiveMenu(null);
        setTimeout(() => {
          setProfileData(parsedData);
          setActiveMenu(currentMenu);
        }, 0);

        alert("저장된 데이터를 불러왔습니다.");
      }
    } catch (error) {
      console.error("불러오기 실패:", error);
      alert("데이터 불러오기에 실패했습니다.");
    }
  }, []);

  // 임시 저장된 데이터 삭제 함수
  const handleClearTemp = useCallback(() => {
    if (window.confirm("임시 저장된 데이터를 삭제하시겠습니까?")) {
      localStorage.removeItem(STORAGE_KEY);
      alert("임시 저장된 데이터가 삭제되었습니다.");
    }
  }, []);

  // 메뉴 아이템 변경 함수
  const handleMenuUpdate = useCallback((updatedItems: MenuItem[]) => {
    setMenuItems(updatedItems);
  }, []);

  // 메뉴 아이템 변경 함수
  const handleActiveMenuChange = useCallback((menu: string | null) => {
    setActiveMenu(menu);
  }, []);

  // 전체 마크다운 업데이트 함수 수정
  const updateMarkdownPreview = useCallback(
    (newMarkdowns: {
      introduction: string;
      skills: string;
      helloWorld: string;
      articles: string;
    }) => {
      // 웹 미리보기용 마크다운
      const previewMarkdown = [
        convertIntroductionToPreview(profileData.introduction),
        convertHelloWorldToPreview(profileData.helloWorld),
        newMarkdowns.skills,
        newMarkdowns.articles,
      ]
        .filter(Boolean)
        .join("\n\n");

      // GitHub 복사용 마크다운
      const copyMarkdown = [
        convertIntroductionToMarkdown(profileData.introduction),
        convertHelloWorldToMarkdown(profileData.helloWorld),
        newMarkdowns.skills,
        newMarkdowns.articles,
      ]
        .filter(Boolean)
        .join("\n\n");

      setMarkdownPreview(previewMarkdown);
      setMarkdownForCopy(copyMarkdown);
    },
    [profileData]
  );

  // 공통 데이터 업데이트 함수
  const updateProfileDataAndMarkdown = useCallback(
    <T extends keyof typeof profileData>(
      section: T,
      data: (typeof profileData)[T],
      convertToMarkdown: (data: (typeof profileData)[T]) => string
    ) => {
      setProfileData((prev) => ({
        ...prev,
        [section]: data,
      }));

      const markdown = convertToMarkdown(data);

      setSectionMarkdowns((prev) => {
        const newMarkdowns = {
          ...prev,
          [section]: markdown,
        };
        updateMarkdownPreview(newMarkdowns);
        return newMarkdowns;
      });
    },
    [updateMarkdownPreview]
  );

  // 인트로 섹션 변경 함수
  const handleIntroductionChange = useCallback(
    (introData: IntroductionDataType) => {
      updateProfileDataAndMarkdown(
        "introduction",
        introData,
        convertIntroductionToMarkdown
      );
    },
    [updateProfileDataAndMarkdown]
  );

  // 스킬 섹션 변경 함수
  const handleSkillsChange = useCallback(
    (skillsData: SkillsDataType) => {
      updateProfileDataAndMarkdown(
        "skills",
        skillsData,
        convertSkillsToMarkdown
      );
    },
    [updateProfileDataAndMarkdown]
  );

  // 아티클 섹션 변경 함수
  const handleArticlesChange = useCallback(
    (articlesData: ArticlesDataType) => {
      updateProfileDataAndMarkdown(
        "articles",
        articlesData,
        convertArticlesToMarkdown
      );
    },
    [updateProfileDataAndMarkdown]
  );

  // Hello World 섹션 변경 함수
  const handleHelloWorldChange = useCallback(
    (data: HelloWordDataType) => {
      updateProfileDataAndMarkdown(
        "helloWorld",
        data,
        convertHelloWorldToMarkdown
      );
    },
    [updateProfileDataAndMarkdown]
  );

  // 마크다운 복사 함수 수정
  const handleCopyMarkdown = useCallback(() => {
    console.log("markdownForCopy", markdownForCopy);

    navigator.clipboard
      .writeText(markdownForCopy) // markdownPreview 대신 markdownForCopy 사용
      .then(() => alert("마크다운이 클립보드에 복사되었습니다!"))
      .catch((err) => console.error("복사 실패:", err));
  }, [markdownForCopy]);

  const handleAutoInputData = useCallback(() => {
    // 인트로 섹션 자동 데이터 입력
    const intro: IntroductionDataType = {
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
    };

    const skills: SkillsDataType = {
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
    };
    // 아티클 섹션 자동 데이터 입력
    const articles: ArticlesDataType = {
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
    };

    // 헬로드 섹션 자동 데이터 입력
    const helloWorld: HelloWordDataType = {
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
          text: "🌱 I’m currently learning AI, 개발, 퍼스널 브랜딩, 대화, 마인드 셋 등등",
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
    };

    // 모든 마크다운을 한번에 생성
    const newMarkdowns = {
      introduction: convertIntroductionToMarkdown(intro),
      skills: convertSkillsToMarkdown(skills),
      articles: convertArticlesToMarkdown(articles),
      helloWorld: convertHelloWorldToMarkdown(helloWorld),
    };

    // 현재 활성화된 메뉴 저장
    const currentMenu = activeMenu;

    // 메뉴를 잠시 null로 설정했다가 다시 원래 값으로 설정
    setActiveMenu(null);
    setTimeout(() => {
      setProfileData({
        introduction: intro,
        skills: skills,
        helloWorld: helloWorld,
        articles: articles,
      });
      setActiveMenu(currentMenu);
    }, 0);

    setSectionMarkdowns(newMarkdowns);
    updateMarkdownPreview(newMarkdowns);

    // 개별 updateProfileDataAndMarkdown 호출 제거
  }, [activeMenu, updateMarkdownPreview]);

  // profileData가 변경될 때마다 마크다운 미리보기를 업데이트
  useEffect(() => {
    const newMarkdowns = {
      introduction: convertIntroductionToMarkdown(profileData.introduction),
      skills: convertSkillsToMarkdown(profileData.skills),
      helloWorld: convertHelloWorldToMarkdown(profileData.helloWorld),
      articles: convertArticlesToMarkdown(profileData.articles),
    };
    updateMarkdownPreview(newMarkdowns);
  }, [profileData, updateMarkdownPreview]);

  // 현재 선택된 메뉴에 따라 섹션을 렌더링하는 함수
  const renderActiveSection = useMemo(() => {
    switch (activeMenu) {
      case "1":
        return (
          <IntroSection
            onChange={handleIntroductionChange}
            initialData={profileData.introduction}
          />
        );
      case "2":
        return (
          <HelloWorldSection
            initialData={profileData.helloWorld}
            onChange={handleHelloWorldChange}
          />
        );
      case "3":
        return (
          <SkillsSection
            onChange={handleSkillsChange}
            initialData={profileData.skills}
          />
        );
      case "4":
        return (
          <ArticlesSection
            onChange={handleArticlesChange}
            initialData={profileData.articles}
          />
        );
    }
  }, [
    activeMenu,
    profileData.introduction,
    profileData.helloWorld,
    profileData.skills,
    profileData.articles,
    handleIntroductionChange,
    handleSkillsChange,
    handleHelloWorldChange,
    handleArticlesChange,
  ]);

  // 데이터 존재 여부 확인
  const hasData = useMemo(() => {
    return (
      !!profileData.introduction.mainTitle ||
      !!profileData.introduction.email ||
      !!profileData.introduction.description ||
      profileData.helloWorld.words.length > 0 ||
      profileData.skills.skills.length > 0 ||
      !!profileData.articles.mainBlog ||
      profileData.articles.articles.length > 0
    );
  }, [profileData]);

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-screen bg-gray-100">
      {/* Topbar - 모바일에서만 표시 */}
      <Topbar
        menuItems={menuItems}
        activeMenu={activeMenu}
        handleActiveMenuChange={handleActiveMenuChange}
      />

      {/* Sidebar - 데스크톱에서만 표시 */}
      <div className="hidden md:block md:h-screen bg-[#1a1f2c] shadow-lg">
        <Sidebar
          menuItems={menuItems}
          activeMenu={activeMenu}
          handleMenuUpdate={handleMenuUpdate}
          handleActiveMenuChange={handleActiveMenuChange}
        />
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          hasData={hasData}
          menuItems={menuItems}
          activeMenu={activeMenu}
          handleCopyMarkdown={handleCopyMarkdown}
          handleAutoInputData={handleAutoInputData}
          handleSaveTemp={handleSaveTemp} // 새로운 prop
          handleLoadTemp={handleLoadTemp} // 새로운 prop
          handleClearTemp={handleClearTemp}
        />

        <Content
          renderActiveSection={renderActiveSection}
          markdownPreview={markdownPreview}
        />
      </div>
    </div>
  );
}
