import { Template } from "@/types/types";
import Button from "@/components/common/button/Button";
import { Menu } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { templates } from "../sections/data/templates";

interface HeaderProps {
  hasData: boolean;
  selectedTemplateId: string | null;
  handleCopyMarkdown: () => void;
  handleSaveTemp: () => void;
  handleLoadTemp: () => void;
  handleClearTemp: () => void;
  onTemplateSelect: (template: Template) => void;
}

const Header = ({
  hasData,
  selectedTemplateId,
  handleCopyMarkdown,
  handleSaveTemp,
  handleLoadTemp,
  handleClearTemp,
  onTemplateSelect,
}: HeaderProps) => {
  return (
    <header className="bg-white shadow-sm p-4">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2">
          <h1 className="text-xl font-semibold text-gray-800">
            {templates.find((t) => t.id === selectedTemplateId)?.name}
          </h1>
        </div>

        <div className="flex gap-2">
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
                      disabled={!template.isAvailable}
                      className={`${
                        active ? "bg-gray-100" : ""
                      } flex w-full px-4 py-2 text-sm ${
                        !template.isAvailable
                          ? "opacity-50 cursor-not-allowed text-gray-400"
                          : ""
                      }`}
                    >
                      {template.name}
                    </button>
                  )}
                </Menu.Item>
              ))}
            </Menu.Items>
          </Menu>

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

          <Button
            onClick={handleCopyMarkdown}
            disabled={!hasData}
            className="flex items-center gap-1"
          >
            <span className="hidden md:inline">📄</span>
            <span className="text-sm md:text-base">마크다운 복사</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
