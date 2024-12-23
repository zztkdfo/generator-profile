import { MenuItemType } from "@/types/types";
import Button from "@/components/common/button/Button";
interface HeaderProps {
  hasData: boolean;
  menuItems: MenuItemType[];
  activeMenu: string | null;
  handleCopyMarkdown: () => void;
  handleAutoInputData: () => void;
}

const Header = ({
  hasData,
  menuItems,
  activeMenu,
  handleCopyMarkdown,
  handleAutoInputData,
}: HeaderProps) => {
  return (
    <div className="h-16 shadow-sm flex items-center px-8">
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="text-2xl font-bold">
            {menuItems.find((item) => item.id === activeMenu)?.title}
          </h2>
        </div>
        <div className="flex gap-2">
          <Button
            disabled={!hasData}
            radius="large"
            onClick={handleCopyMarkdown}
          >
            🚀 Copy Readme
          </Button>
          <Button radius="large" onClick={handleAutoInputData}>
            ⚙️ Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
