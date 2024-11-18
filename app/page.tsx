"use client";
import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiChevronDown,
  FiUser,
  FiCode,
  FiFolder,
} from "react-icons/fi";

interface MenuItem {
  title: string;
  items: string[];
  icon: React.ReactNode;
}

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    {
      title: "프로필",
      items: ["기본 정보", "소개", "연락처"],
      icon: <FiUser className="w-5 h-5" />,
    },
    {
      title: "스킬",
      items: ["언어", "프레임워크", "도구"],
      icon: <FiCode className="w-5 h-5" />,
    },
    {
      title: "프로젝트",
      items: ["주요 프로젝트", "기여", "저장소"],
      icon: <FiFolder className="w-5 h-5" />,
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 왼쪽 메뉴 패널 */}
      <div
        className={`${
          isMenuCollapsed ? "w-24" : "w-64"
        } bg-[#1a1f2c] text-cyan-50 shadow-lg transition-all duration-300`}
      >
        <div className="p-4">
          {/* 헤더 영역: 로고만 표시 */}
          <div className="flex items-center justify-center mb-20">
            {isMenuCollapsed ? (
              <h2 className="text-md font-bold ml-2">어프생</h2>
            ) : (
              <h1 className="text-xl font-bold ml-2">어쩌다 Profile Maker</h1>
            )}
          </div>

          <nav className="space-y-2">
            {menuItems.map((section) => (
              <div
                key={section.title}
                className="border border-gray-700 rounded-lg"
              >
                <button
                  onClick={() =>
                    setActiveMenu(
                      activeMenu === section.title ? null : section.title
                    )
                  }
                  className="w-full p-3 text-left text-gray-300 hover:bg-[#2a2f3c] flex justify-between items-center"
                >
                  {isMenuCollapsed ? (
                    <span className="mx-auto">{section.icon}</span>
                  ) : (
                    <>
                      <span className="flex items-center gap-2">
                        {section.icon}
                        {section.title}
                      </span>
                      <FiChevronDown
                        className={`transform transition-transform duration-200 ${
                          activeMenu === section.title ? "rotate-180" : ""
                        }`}
                      />
                    </>
                  )}
                </button>
                {!isMenuCollapsed && activeMenu === section.title && (
                  <div className="bg-[#2a2f3c] p-2">
                    {section.items.map((item) => (
                      <div
                        key={item}
                        className="px-4 py-2 text-gray-400 hover:text-gray-200 hover:bg-[#353a47] cursor-pointer rounded-md transition-colors duration-150 flex items-center gap-2"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>
        </div>
      </div>

      {/* 오른쪽 콘텐츠 영역 */}
      <div className="flex-1">
        {/* 상단 헤더 바 추가 */}
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
        <div className="p-8">
          <div className="bg-white rounded-lg shadow-lg p-6 min-h-[calc(100vh-4rem)]">
            <h2 className="text-xl font-bold mb-4">UI / Markdown 편집기</h2>
            {/* 여기에 선택된 메뉴에 따른 콘텐츠가 표시될 예정 */}
          </div>
        </div>
      </div>
    </div>
  );
}
