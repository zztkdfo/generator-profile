import { MenuItemType, Template } from "@/types/types";
import Button from "@/components/common/button/Button";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { templates } from "../sections/data/templates";

interface HeaderProps {
  hasData: boolean;
  menuItems: MenuItemType[];
  activeMenu: string | null;
  handleCopyMarkdown: () => void;
  handleAutoInputData: () => void;
  handleSaveTemp: () => void;
  handleLoadTemp: () => void;
  handleClearTemp: () => void;
  onTemplateSelect: (template: Template) => void;
}

const Header = ({
  hasData,
  menuItems,
  activeMenu,
  handleCopyMarkdown,
  handleAutoInputData,
  handleSaveTemp,
  handleLoadTemp,
  handleClearTemp,
  onTemplateSelect,
}: HeaderProps) => {
  return (
    <div className="h-auto md:h-16 shadow-sm flex items-center px-4 md:px-8 py-4 md:py-0 bg-white">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-0">
        <div>
          <h2 className="text-xl md:text-2xl font-bold text-gray-800">
            {menuItems.find((item) => item.id === activeMenu)?.title}
          </h2>
        </div>

        <div className="flex gap-2">
          <Menu as="div" className="relative">
            <Menu.Button as={Button} className="flex items-center gap-1">
              <span className="hidden md:inline">💾</span>
              <span className="text-sm md:text-base">임시저장</span>
              <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 md:right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleSaveTemp}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } flex w-full px-4 py-2 text-sm`}
                  >
                    💾 임시저장하기
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleLoadTemp}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } flex w-full px-4 py-2 text-sm`}
                  >
                    📂 임시저장 불러오기
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleClearTemp}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } flex w-full px-4 py-2 text-sm text-red-600`}
                  >
                    🗑️ 임시저장 삭제
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <Menu as="div" className="relative">
            <Menu.Button as={Button} className="flex items-center gap-1">
              <span className="hidden md:inline">📄</span>
              <span className="text-sm md:text-base">문서작성</span>
              <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 md:right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleCopyMarkdown}
                    disabled={!hasData}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } flex w-full px-4 py-2 text-sm ${
                      !hasData ? "opacity-50 cursor-not-allowed" : ""
                    }`}
                  >
                    📋 마크다운 복사
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={handleAutoInputData}
                    className={`${
                      active ? "bg-gray-100" : ""
                    } flex w-full px-4 py-2 text-sm`}
                  >
                    ✨ 샘플 데이터 생성
                  </button>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>

          <Menu as="div" className="relative">
            <Menu.Button as={Button} className="flex items-center gap-1">
              <span className="hidden md:inline">📝</span>
              <span className="text-sm md:text-base">템플릿</span>
              <ChevronDownIcon className="w-4 h-4" />
            </Menu.Button>
            <Menu.Items className="absolute left-0 md:right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
              {templates.map((template) => (
                <Menu.Item key={template.id}>
                  {({ active }) => (
                    <button
                      onClick={() => onTemplateSelect(template)}
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex w-full px-4 py-2 text-sm`}
                    >
                      {template.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default Header;
