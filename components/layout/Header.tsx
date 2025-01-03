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
    <div className="h-auto md:h-16 shadow-sm flex items-center px-4 md:px-8 py-4 md:py-0">
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full gap-4 md:gap-0">
        <div>
          <h2 className="text-xl md:text-2xl font-bold">
            {menuItems.find((item) => item.id === activeMenu)?.title}
          </h2>
        </div>
        <div className="flex w-full md:w-auto gap-2">
          <Button
            disabled={!hasData}
            radius="large"
            onClick={handleCopyMarkdown}
            className="flex-1 md:flex-none"
          >
            🚀 Copy Readme
          </Button>
          <Button
            radius="large"
            onClick={handleAutoInputData}
            className="flex-1 md:flex-none"
          >
            ⚙️ Template
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
