"use client";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import Content from "@/components/Content/Content";

import { useCallback, useMemo, useState } from "react";
import ReactMarkdown from "react-markdown";
import { IntroductionDataType, SkillsDataType } from "@/types/types";
import {
  convertIntroductionToMarkdown,
  convertSkillsToMarkdown,
} from "@/utils/utils";
import rehypeRaw from "rehype-raw";

import IntroSection from "@/components/sections/IntroSection";
import SkillsSection from "@/components/sections/SkillsSection";

export interface MenuItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

export default function Home() {
  // 전체 프로필 데이터를 관리하는 state
  const [profileData, setProfileData] = useState({
    introduction: {
      mainTitle: "",
      email: "",
      philosophy: "",
      description: "",
    },
    skills: {
      skills: [],
    },
    // 다른 섹션들도 필요에 따라 추가
  });

  // 각 섹션별 마크다운을 따로 관리
  const [sectionMarkdowns, setSectionMarkdowns] = useState({
    introduction: "",
    skills: "",
    // 다른 섹션들도 필요에 따라 추가
  });

  // 마크다운 문자열을 저장할 state
  const [markdownPreview, setMarkdownPreview] = useState("");
  // const [markdownOutput, setMarkdownOutput] = useState<string>(""); // 변환된 마크다운

  const [activeMenu, setActiveMenu] = useState<string | null>("1");
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: "1", title: "소개" },
    { id: "2", title: "보유 기술" },
    { id: "3", title: "연락하기" },
    { id: "4", title: "깃허브 통계" },
    { id: "5", title: "최근 블로그 포스트" },
    { id: "6", title: "스포티파이 듣기" },
    { id: "7", title: "방문자 수" },
  ]);

  // 메뉴 아이템 변경 함수
  const handleMenuUpdate = useCallback((updatedItems: MenuItem[]) => {
    setMenuItems(updatedItems);
  }, []);

  // 메뉴 아이템 변경 함수
  const handleActiveMenuChange = useCallback((menu: string | null) => {
    setActiveMenu(menu);
  }, []);

  // 전체 마크다운 업데이트 함수
  const updateMarkdownPreview = useCallback(
    (markdowns: typeof sectionMarkdowns) => {
      const combinedMarkdown = [markdowns.introduction, markdowns.skills]
        .filter(Boolean)
        .join("\n\n");

      setMarkdownPreview(combinedMarkdown);
    },
    []
  );

  const handleIntroductionChange = useCallback(
    (introData: IntroductionDataType) => {
      setProfileData((prev) => ({
        ...prev,
        introduction: introData,
      }));

      const markdown = convertIntroductionToMarkdown(introData);
      setSectionMarkdowns((prev) => ({
        ...prev,
        introduction: markdown,
      }));

      updateMarkdownPreview({
        ...sectionMarkdowns,
        introduction: markdown,
      });
    },
    [sectionMarkdowns, updateMarkdownPreview]
  );

  // handleSkillsChange 함수 추가
  const handleSkillsChange = useCallback(
    (skillsData: SkillsDataType) => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      setProfileData((prev: any) => ({
        ...prev,
        skills: skillsData,
      }));

      const markdown = convertSkillsToMarkdown(skillsData);
      setSectionMarkdowns((prev) => ({
        ...prev,
        skills: markdown,
      }));

      updateMarkdownPreview({
        ...sectionMarkdowns,
        skills: markdown,
      });
    },
    [sectionMarkdowns, updateMarkdownPreview]
  );
  // 마크다운 복사 함수
  const handleCopyMarkdown = useCallback(() => {
    // navigator.clipboard
    //   .writeText(markdownOutput)
    //   .then(() => alert("마크다운이 클립보드에 복사되었습니다!"))
    //   .catch((err) => console.error("복사 실패:", err));
    // }, [markdownOutput]);
  }, []);

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
          <SkillsSection
            onChange={handleSkillsChange}
            initialData={profileData.skills}
          />
        );
        // case "3":
        //   return <ContactSection />;
        // case "4":
        //   return <GithubStatsSection />;
        // case "5":
        //   return <BlogPostsSection />;
        // case "6":
        //   return <SpotifySection />;
        // case "7":
        //   return <VisitorsSection />;
        // default:
        return (
          <IntroSection
            onChange={handleIntroductionChange}
            initialData={profileData.introduction}
          />
        );
    }
  }, [activeMenu, profileData, handleIntroductionChange, handleSkillsChange]);

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 메뉴 영역 */}
      <Sidebar
        menuItems={menuItems}
        activeMenu={activeMenu}
        handleMenuUpdate={handleMenuUpdate}
        handleActiveMenuChange={handleActiveMenuChange}
      />

      {/* 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          menuItems={menuItems}
          activeMenu={activeMenu}
          handleCopyMarkdown={handleCopyMarkdown}
        />

        <Content
          renderActiveSection={renderActiveSection}
          markdownPreview={markdownPreview}
        />
      </div>
    </div>
  );
}
