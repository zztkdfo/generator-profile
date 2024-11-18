"use client";
import { useState } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

interface MenuItem {
  title: string;
  icon?: React.ReactNode;
}

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    // 메뉴 변경 및 컨텐츠 추가 할 것.
    { title: "소개" },
    { title: "보유 기술" },
    { title: "연락하기" },
    { title: "깃허브 통계" },
    { title: "최근 블로그 포스트" },
    { title: "스포티파이 듣기" },
    { title: "방문자 수" },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 왼쪽 메뉴 패널 */}
      <div
        className={`${
          isMenuCollapsed ? "w-24" : "w-64"
        } bg-[#1a1f2c] text-cyan-50 shadow-lg transition-all duration-300`}
      >
        {/* 로고 영역 - h-16으로 헤더와 높이 맞춤 */}
        <div className="h-16 flex items-center px-4 border-b border-gray-700 text-center">
          <h1 className="text-xl font-bold text-white">어쩌다 Profile Maker</h1>
        </div>

        <div className="p-4">
          <nav className="space-y-2 mt-3">
            {menuItems.map((item) => (
              <div
                key={item.title}
                className={`rounded-md transition-colors duration-150 ${
                  activeMenu === item.title
                    ? "bg-blue-600"
                    : "hover:bg-[#2a2f3c]"
                }`}
              >
                <button
                  onClick={() => setActiveMenu(item.title)}
                  className="w-full p-3 text-left text-gray-300 flex items-center"
                >
                  <span className="flex items-center gap-2">{item.title}</span>
                </button>
              </div>
            ))}

            {/* 섹션 추가 버튼 */}
            <button className="w-full mt-4 p-3 text-gray-300 border border-dashed border-gray-600 rounded-md hover:border-gray-400 transition-colors duration-150 flex items-center justify-center gap-2">
              <span>+ 섹션</span>
            </button>
          </nav>
        </div>
      </div>

      {/* 오른쪽 콘텐츠 영역 */}
      <div className="flex-1">
        {/* 상단 헤더 바 - h-16으로 로고와 높이 동일 */}
        <div className="h-16 shadow-sm flex items-center px-4">
          <button
            onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {isMenuCollapsed ? (
              <FiChevronRight className="w-6 h-6" />
            ) : (
              <FiChevronLeft className="w-6 h-6" />
            )}
          </button>
          <div className="flex items-center">
            <h2 className="text-xl font-bold px-4">콘텐츠 영역</h2>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="p-7">
          <div className="bg-white rounded-lg shadow-lg p-6 min-h-[calc(100vh-4rem)]">
            <h2 className="text-xl font-bold mb-4">UI / Markdown 편집기</h2>
            {/* 여기에 선택된 메뉴에 따른 콘텐츠가 표시될 예정 */}
          </div>
        </div>
      </div>
    </div>
  );
}
