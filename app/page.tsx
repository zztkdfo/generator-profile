"use client";
import { useState } from "react";

interface MenuItem {
  title: string;
  items: string[];
}

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);

  const menuItems: MenuItem[] = [
    {
      title: "프로필",
      items: ["기본 정보", "소개", "연락처"],
    },
    {
      title: "스킬",
      items: ["언어", "프레임워크", "도구"],
    },
    {
      title: "프로젝트",
      items: ["주요 프로젝트", "기여", "저장소"],
    },
  ];

  const toggleMenu = (title: string): void => {
    setActiveMenu(activeMenu === title ? null : title);
  };

  const toggleCollapse = (): void => {
    setIsMenuCollapsed(!isMenuCollapsed);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 왼쪽 메뉴 패널 */}
      <div
        className={`${
          isMenuCollapsed ? "w-16" : "w-64"
        } bg-[#1a1f2c] text-cyan-50 shadow-lg transition-all duration-300`}
      >
        <div className="p-4">
          {/* 헤더 영역: 로고와 접기/펼치기 버튼을 같은 행에 배치 */}
          <div className="flex items-center justify-between mb-4">
            {!isMenuCollapsed && (
              <h1 className="text-xl font-bold">프로필 생성기</h1>
            )}
            <button
              onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
              className="text-gray-400 hover:text-gray-200"
            >
              {isMenuCollapsed ? "▶" : "◀"}
            </button>
          </div>

          <nav className="space-y-2">
            {menuItems.map((section: MenuItem) => (
              <div key={section.title} className="border rounded-lg">
                <button
                  onClick={() => toggleMenu(section.title)}
                  className="w-full p-3 text-left hover:bg-gray-50 flex justify-between items-center"
                >
                  {isMenuCollapsed ? (
                    <span className="mx-auto">{section.title.charAt(0)}</span>
                  ) : (
                    <>
                      <span>{section.title}</span>
                      <span>{activeMenu === section.title ? "▼" : "▶"}</span>
                    </>
                  )}
                </button>
                {!isMenuCollapsed && activeMenu === section.title && (
                  <div className="bg-gray-50 p-2">
                    {section.items.map((item: string) => (
                      <div
                        key={item}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer rounded-md"
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
      <div className="flex-1 p-8">
        <div className="bg-white rounded-lg shadow-lg p-6 min-h-[calc(100vh-4rem)]">
          <h2 className="text-xl font-bold mb-4">콘텐츠 영역</h2>
          {/* 여기에 선택된 메뉴에 따른 콘텐츠가 표시될 예정 */}
        </div>
      </div>
    </div>
  );
}
