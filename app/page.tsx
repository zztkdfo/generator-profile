"use client";
import Image from "next/image";
import Header from "@/components/layout/Header";
import Sidebar from "@/components/layout/Sidebar";
import IntroSection from "@/components/sections/IntroSection";
import { useCallback, useState } from "react";
import ReactMarkdown from "react-markdown";
import { IntroductionType } from "@/types/types";
import { convertIntroductionToMarkdown } from "@/utils/utils";
import rehypeRaw from "rehype-raw";

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
    // 나중에 다른 섹션들이 추가될 수 있음
    // skills: {},
    // projects: {},
    // etc...
  });

  // 마크다운 문자열을 저장할 state
  const [markdownPreview, setMarkdownPreview] = useState("");

  const [templateData, setTemplateData] = useState<string>(""); // 템플릿 데이터
  const [markdownOutput, setMarkdownOutput] = useState<string>(""); // 변환된 마크다운

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

  const handleIntroductionChange = (introData: IntroductionType) => {
    setProfileData((prev) => ({
      ...prev,
      introduction: introData,
    }));

    // 마크다운 변환 및 미리보기 업데이트
    const markdown = convertIntroductionToMarkdown(introData);
    setMarkdownPreview(markdown);
  };

  // 마크다운 변환 함수
  const handleConvertToMarkdown = useCallback((data: string) => {
    return data;
  }, []);

  // 템플릿 데이터가 변경될 때 마크다운으로 변환하는 함수
  const handleTemplateChange = useCallback(
    (data: string) => {
      setTemplateData(data);
      // 여기서 데이터를 마크다운으로 변환하는 로직 추가
      const convertedMarkdown = handleConvertToMarkdown(data); // 변환 함수는 별도 구현 필요
      setMarkdownOutput(convertedMarkdown);
    },
    [handleConvertToMarkdown]
  );

  // 마크다운 복사 함수
  const handleCopyMarkdown = useCallback(() => {
    navigator.clipboard
      .writeText(markdownOutput)
      .then(() => alert("마크다운이 클립보드에 복사되었습니다!"))
      .catch((err) => console.error("복사 실패:", err));
  }, [markdownOutput]);

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
                <h2 className="text-xl font-bold mb-4">
                  <IntroSection onChange={handleIntroductionChange} />
                </h2>
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

                      return (
                        <Image
                          src={src || ""}
                          alt={cleanAlt}
                          width={parseInt(props.width as string) || 100}
                          height={parseInt(props.height as string) || 100}
                          style={{
                            display: "inline",
                            verticalAlign: "middle",
                            maxWidth: "100%",
                            height: "auto",
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
