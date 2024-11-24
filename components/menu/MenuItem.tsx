import { FiEdit2, FiTrash2, FiCheck } from "react-icons/fi";
import { Draggable } from "@hello-pangea/dnd";
import { MenuItemType } from "@/types/types";

interface MenuItemProps {
  item: MenuItemType;
  index: number;
  activeMenu: string | null;
  editingId: string | null;
  editingTitle: string;

  handleDelete: (id: string) => void;
  handleEdit: (id: string, title: string) => void;
  handleEditingTitleChange: (title: string) => void;
  handleEditingIdChange: (id: string | null) => void;
  handleActiveMenuChange: (menu: string | null) => void;
}

export default function MenuItem({
  item,
  index,
  activeMenu,
  editingId,
  editingTitle,

  handleEdit,
  handleDelete,
  handleEditingIdChange,
  handleActiveMenuChange,
  handleEditingTitleChange,
}: MenuItemProps) {
  return (
    <Draggable key={item.id} draggableId={item.id} index={index}>
      {(provided) => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`rounded-md transition-colors duration-150 mb-2 cursor-pointer ${
            activeMenu === item.id ? "bg-primary" : "hover:bg-secondary"
          }`}
          onClick={() => {
            handleActiveMenuChange(item.id);
            handleEditingIdChange(null);
          }}
        >
          <div className="w-full p-3 text-left text-gray-300 flex items-center justify-between">
            {editingId === item.id ? (
              <input
                type="text"
                value={editingTitle}
                onChange={(e) => handleEditingTitleChange(e.target.value)}
                onBlur={() => handleEdit(item.id, editingTitle)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    handleEdit(item.id, editingTitle);
                  } else if (e.key === "Escape") {
                    handleEditingIdChange(null);
                  }
                }}
                className="bg-[#2a2f3c] text-gray-300 px-2 py-1 rounded outline-none focus:ring-2 focus:ring-blue-500 w-[calc(100%-60px)] max-w-[200px]"
                autoFocus
                onClick={(e) => e.stopPropagation()}
              />
            ) : (
              <span
                className={`flex items-center gap-2 truncate transition-all duration-300 ${"text-base max-w-[200px]"}`}
              >
                {item.title}
              </span>
            )}
            <div
              className={`flex gap-2 transition-opacity ${
                activeMenu === item.id
                  ? "opacity-100"
                  : "opacity-0 pointer-events-none"
              }`}
            >
              {editingId === item.id ? (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleEdit(item.id, editingTitle);
                  }}
                  className="p-1 hover:text-green-400 transition-colors"
                  disabled={activeMenu !== item.id}
                >
                  <FiCheck size={16} />
                </button>
              ) : (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (activeMenu === item.id) {
                      handleEditingIdChange(item.id);
                      handleEditingTitleChange(item.title);
                    }
                  }}
                  className="p-1 hover:text-blue-400 transition-colors"
                  disabled={activeMenu !== item.id}
                >
                  <FiEdit2 size={16} />
                </button>
              )}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (
                    activeMenu === item.id &&
                    confirm("정말 삭제하시겠습니까?")
                  ) {
                    handleDelete(item.id);
                  }
                }}
                className="p-1 hover:text-red-400 transition-colors"
                disabled={activeMenu !== item.id}
              >
                <FiTrash2 size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}
