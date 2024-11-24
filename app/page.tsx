"use client";

import Sidebar from "@/components/layout/Sidebar";
import { useCallback, useState } from "react";
import Button from "@/components/common/button/Button";
export interface MenuItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

export default function Home() {
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

  const handleMenuUpdate = useCallback((updatedItems: MenuItem[]) => {
    setMenuItems(updatedItems);
  }, []);

  const handleActiveMenuChange = useCallback((menu: string | null) => {
    setActiveMenu(menu);
  }, []);

  // 템플릿 데이터가 변경될 때 마크다운으로 변환하는 함수
  const handleTemplateChange = useCallback((data: string) => {
    setTemplateData(data);
    // 여기서 데이터를 마크다운으로 변환하는 로직 추가
    const convertedMarkdown = convertToMarkdown(data); // 변환 함수는 별도 구현 필요
    setMarkdownOutput(convertedMarkdown);
  }, []);

  const convertToMarkdown = useCallback((data: string) => {
    return data;
  }, []);

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

      {/* 오른쪽 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col">
        {/* 상단 헤더 바 */}
        <div className="h-16 shadow-sm flex items-center px-8">
          <div className="flex items-center justify-between w-full">
            <div>
              <h2 className="text-2xl font-bold">
                {menuItems.find((item) => item.id === activeMenu)?.title}
              </h2>
            </div>
            <div>
              <Button radius="large" onClick={handleCopyMarkdown}>
                🚀 Copy Readme
              </Button>
            </div>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1 p-7">
          <div className="h-full">
            <div className="flex gap-6">
              {/* 왼쪽 영역 */}
              <div className="flex-1 bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-bold mb-4"></h2>
              </div>

              {/* 오른쪽 영역 */}
              <div className="flex-1 bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-bold mb-4">My Profile</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
