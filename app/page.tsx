"use client";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";

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

  const handleIntroductionChange = (introData: IntroductionDataType) => {
    setProfileData((prev) => ({
      ...prev,
      introduction: introData,
    }));

    // 마크다운 변환 및 미리보기 업데이트
    const markdown = convertIntroductionToMarkdown(introData);
    setSectionMarkdowns((prev) => ({
      ...prev,
      introduction: markdown,
    }));

    // 전체 마크다운 업데이트
    updateMarkdownPreview({
      ...sectionMarkdowns,
      introduction: markdown,
    });
  };

  // handleSkillsChange 함수 추가
  const handleSkillsChange = (skillsData: SkillsDataType) => {
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

    // 전체 마크다운 업데이트
    updateMarkdownPreview({
      ...sectionMarkdowns,
      skills: markdown,
    });
  };
  // 전체 마크다운 업데이트 함수
  const updateMarkdownPreview = (markdowns: typeof sectionMarkdowns) => {
    // 모든 섹션의 마크다운을 순서대로 결합
    const combinedMarkdown = [
      markdowns.introduction,
      markdowns.skills,
      // 다른 섹션들의 마크다운도 순서대로 추가
    ]
      .filter(Boolean)
      .join("\n\n");

    setMarkdownPreview(combinedMarkdown);
  };

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
      {/* 왼쪽 메뉴 패널 */}
      <Sidebar
        menuItems={menuItems}
        activeMenu={activeMenu}
        handleMenuUpdate={handleMenuUpdate}
        handleActiveMenuChange={handleActiveMenuChange}
      />

      {/* 오른쪽 콘텐츠 영역 - overflow-hidden 추가 */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header
          menuItems={menuItems}
          activeMenu={activeMenu}
          handleCopyMarkdown={handleCopyMarkdown}
        />

        {/* 콘텐츠 영역 - overflow-auto 추가 */}
        <div className="flex-1 p-7 overflow-auto">
          <div className="h-full">
            <div className="flex gap-6">
              {/* 왼쪽 영역 */}
              <div className="w-[600px] min-w-[600px] bg-white rounded-lg shadow p-4">
                {renderActiveSection}
              </div>

              {/* 오른쪽 영역 */}
              <div className="flex-1 bg-white rounded-lg shadow p-4 overflow-hidden">
                {/* overflow-hidden 추가 */}
                <ReactMarkdown
                  rehypePlugins={[rehypeRaw]}
                  components={{
                    img: ({ src, alt, ...props }) => {
                      console.log(src, alt, props);

                      // 실제 alt 텍스트에서 크기 정보 제거
                      const cleanAlt =
                        alt?.replace(/=\d+x\d+/, "").trim() || "";

                      // shields.io 배지인지 확인
                      const isShieldsBadge = src?.includes("img.shields.io");

                      return (
                        <Image
                          src={src || ""}
                          alt={cleanAlt}
                          width={parseInt(props.width as string) || 100}
                          height={
                            parseInt(props.height as string) ||
                            (isShieldsBadge ? 30 : 100)
                          }
                          style={{
                            display: isShieldsBadge ? "inline-block" : "inline",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            ...(isShieldsBadge
                              ? {
                                  height: "30px",
                                  maxHeight: "30px",
                                }
                              : {
                                  height: "auto",
                                }),
                          }}
                          unoptimized
                        />
                      );
                    },
                    hr: () => <hr className="my-8 border-t border-gray-300" />,
                    h1: ({ ...props }) => (
                      <h1 className="text-2xl font-bold mb-4" {...props} />
                    ),
                    p: ({ ...props }) => <p className="mb-4" {...props} />,

                    h2: ({ ...props }) => (
                      <h2 className="text-xl font-bold mb-3" {...props} />
                    ),
                    ul: ({ ...props }) => (
                      <ul className="list-disc pl-5 mb-4" {...props} />
                    ),
                    li: ({ ...props }) => <li className="mb-2" {...props} />,
                  }}
                  className="prose prose-slate max-w-none break-words prose-img:my-0" // prose-img:my-0 추가
                >
                  {/* break-words 추가 */}
                  {markdownPreview}
                </ReactMarkdown>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
