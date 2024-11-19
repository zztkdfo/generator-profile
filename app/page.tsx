"use client";

import Sidebar from "@/components/layout/Sidebar";
import { useCallback, useState } from "react";
export interface MenuItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
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
        <div className="h-16 shadow-sm flex items-center px-4">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">콘텐츠 영역</h2>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1 p-7">
          <div className="h-full">
            <div className="flex gap-6">
              {/* 왼쪽 영역 */}
              <div className="flex-1 bg-white rounded-lg shadow p-4">
                <h2 className="text-xl font-bold mb-4">
                  {menuItems.find((item) => item.id === activeMenu)?.title}
                </h2>
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
