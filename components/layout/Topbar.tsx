import React from "react";
import { MenuItem } from "@/app/generator/page";

interface TopbarProps {
  menuItems: MenuItem[];
  activeMenu: string | null;
  handleActiveMenuChange: (menu: string | null) => void;
}

const Topbar = ({
  menuItems,
  activeMenu,
  handleActiveMenuChange,
}: TopbarProps) => {
  return (
    <div className="md:hidden w-full bg-white shadow-sm">
      <div className="flex overflow-x-auto">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleActiveMenuChange(item.id)}
            className={`px-4 py-3 whitespace-nowrap ${
              activeMenu === item.id
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-600"
            }`}
          >
            {item.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Topbar;
