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
  Template,
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

  const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(
    null
  );

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

  // 템플릿 선택 핸들러 수정
  const handleTemplateSelect = useCallback(
    (template: Template) => {
      if (
        window.confirm(
          "템플릿을 적용하시겠습니까? 현재 작성 중인 내용은 사라집니다."
        )
      ) {
        const currentMenu = activeMenu;
        setActiveMenu(null);
        setSelectedTemplateId(template.id); // 템플릿 ID 저장

        setTimeout(() => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const newProfileData: any = {
            introduction:
              template.sections.find((s) => s.id === "1")?.initialData ||
              profileData.introduction,
            helloWorld:
              template.sections.find((s) => s.id === "2")?.initialData ||
              profileData.helloWorld,
            skills:
              template.sections.find((s) => s.id === "3")?.initialData ||
              profileData.skills,
            articles:
              template.sections.find((s) => s.id === "4")?.initialData ||
              profileData.articles,
          };

          setProfileData(newProfileData);
          setActiveMenu(currentMenu);
        }, 0);
      }
    },
    [activeMenu, profileData]
  );

  return (
    <div className="flex flex-col md:flex-row min-h-screen h-screen bg-gray-100">
      {/* Topbar - 모바일에서만 표시 */}
      {selectedTemplateId && (
        <Topbar
          menuItems={menuItems}
          activeMenu={activeMenu}
          handleActiveMenuChange={handleActiveMenuChange}
        />
      )}

      {/* Sidebar - 데스크톱에서만 표시 */}
      <div className="hidden md:block md:h-screen bg-[#1a1f2c] shadow-lg">
        {selectedTemplateId && (
          <Sidebar
            menuItems={menuItems}
            activeMenu={activeMenu}
            handleMenuUpdate={handleMenuUpdate}
            handleActiveMenuChange={handleActiveMenuChange}
          />
        )}
      </div>

      {/* 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          hasData={hasData}
          selectedTemplateId={selectedTemplateId}
          handleCopyMarkdown={handleCopyMarkdown}
          handleSaveTemp={handleSaveTemp}
          handleLoadTemp={handleLoadTemp}
          handleClearTemp={handleClearTemp}
          onTemplateSelect={handleTemplateSelect}
        />

        {!selectedTemplateId ? (
          <div className="flex-1 overflow-y-auto bg-gradient-to-b from-gray-50 to-white">
            <div className="min-h-full flex items-center justify-center p-4">
              <div className="text-center space-y-6 p-4 sm:p-8 max-w-3xl w-full my-8">
                <div className="animate-bounce text-6xl mb-6">✨</div>
                <h2 className="text-3xl font-bold text-gray-800 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  멋진 GitHub 프로필을 만들어보세요!
                </h2>
                <p className="text-gray-600 text-lg">
                  상단의 템플릿을 선택하여 나만의 특별한 프로필을 쉽고 빠르게
                  생성할 수 있습니다.
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-8">
                  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">🎨</div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      다양한 템플릿
                    </h3>
                    <p className="text-gray-600 text-sm">
                      취향에 맞는 템플릿을 선택하세요
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">⚡️</div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      빠른 생성
                    </h3>
                    <p className="text-gray-600 text-sm">
                      클릭 몇 번으로 완성하세요
                    </p>
                  </div>
                  <div className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
                    <div className="text-3xl mb-3">🔄</div>
                    <h3 className="font-semibold text-gray-800 mb-2">
                      실시간 미리보기
                    </h3>
                    <p className="text-gray-600 text-sm">바로바로 확인하세요</p>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 shadow-sm">
                  <h3 className="font-bold text-xl text-gray-800 mb-4">
                    간단한 사용 방법 🚀
                  </h3>
                  <div className="grid md:grid-cols-4 gap-4 relative">
                    {[
                      { icon: "🎯", text: "템플릿 선택하기" },
                      { icon: "✏️", text: "내용 수정하기" },
                      { icon: "📋", text: "마크다운 복사하기" },
                      { icon: "✅", text: "GitHub에 붙여넣기" },
                    ].map((step, index) => (
                      <div key={index} className="relative">
                        {/* 순서 표시 원형 배지 */}
                        <div className="absolute -top-3 -left-3 w-6 h-6 rounded-full bg-blue-600 text-white text-sm flex items-center justify-center font-bold z-10">
                          {index + 1}
                        </div>

                        <div className="flex flex-col items-center p-4 bg-white rounded-lg relative">
                          <div className="text-2xl mb-2">{step.icon}</div>
                          <div className="text-sm text-gray-700">
                            {step.text}
                          </div>
                        </div>

                        {/* 진행 표시줄 (모바일) */}
                        {index < 3 && (
                          <div className="md:hidden h-8 w-0.5 bg-gray-200 absolute left-1/2 transform -translate-x-1/2 top-full" />
                        )}
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 p-4 bg-white rounded-lg border border-blue-100 text-left">
                    <div className="text-blue-500 mt-1"></div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">
                        💡 GitHub 프로필 설정 방법
                      </h4>
                      <ol className="text-sm text-gray-600 space-y-1 list-decimal list-inside">
                        <li>
                          GitHub에서 새로운 저장소 생성 (이름:
                          username/username)
                        </li>
                        <li>README.md 파일 생성 선택</li>
                        <li>복사한 마크다운을 README.md에 붙여넣기</li>
                        <li>변경사항 저장하면 프로필에 바로 반영!</li>
                      </ol>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Content
            renderActiveSection={renderActiveSection}
            markdownPreview={markdownPreview}
          />
        )}
      </div>
    </div>
  );
}
