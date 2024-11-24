import { MenuItemType } from "@/types/types";
import Button from "@/components/common/button/Button";
interface HeaderProps {
  menuItems: MenuItemType[];
  activeMenu: string | null;
  handleCopyMarkdown: () => void;
}

const Header = ({ menuItems, activeMenu, handleCopyMarkdown }: HeaderProps) => {
  return (
    <div className="h-16 shadow-sm flex items-center px-8">
      <div className="flex items-center justify-between w-full">
        <div>
          <h2 className="text-2xl font-bold">
            {menuItems.find((item) => item.id === activeMenu)?.title}
          </h2>
        </div>
        <div className="flex gap-2">
          <Button radius="large" onClick={handleCopyMarkdown}>
            🚀 Copy Readme
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
