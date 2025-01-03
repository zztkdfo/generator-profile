"use client";

import { DragDropContext, Droppable, DropResult } from "@hello-pangea/dnd";
import MenuItem from "./MenuItem";

interface MenuItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

interface MenuListProps {
  menuItems: MenuItem[];
  activeMenu: string | null;
  editingId: string | null;
  editingTitle: string;
  handleEdit: (id: string, title: string) => void;
  handleDelete: (id: string) => void;
  handleDragEnd: (result: DropResult) => void;
  handleAddSection: () => void;
  handleEditingTitleChange: (title: string) => void;
  handleEditingIdChange: (id: string | null) => void;
  handleActiveMenuChange: (menu: string | null) => void;
}

export default function MenuList({
  menuItems,
  activeMenu,
  editingId,
  editingTitle,
  handleEdit,
  handleDelete,
  handleDragEnd,
  // handleAddSection,
  handleEditingTitleChange,
  handleEditingIdChange,
  handleActiveMenuChange,
}: MenuListProps) {
  return (
    <nav className="space-y-2 mt-3">
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="menu-items">
          {(provided, snapshot) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className={`${
                snapshot.isDraggingOver ? "bg-[#2a2f3c]/20 rounded-md" : ""
              }`}
            >
              {menuItems.map((item, index) => (
                <MenuItem
                  key={item.id}
                  item={item}
                  index={index}
                  activeMenu={activeMenu}
                  editingId={editingId}
                  editingTitle={editingTitle}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                  handleEditingIdChange={handleEditingIdChange}
                  handleActiveMenuChange={handleActiveMenuChange}
                  handleEditingTitleChange={handleEditingTitleChange}
                />
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {/* 섹션 추가 버튼 */}
      {/* <button
        onClick={handleAddSection}
        className="w-full mt-4 p-3 text-gray-300 border border-dashed border-gray-600 rounded-md hover:border-gray-400 transition-colors duration-150 flex items-center justify-center gap-2"
      >
        <span>+ 섹션</span>
      </button> */}
    </nav>
  );
}
