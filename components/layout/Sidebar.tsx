"use client";

import { useState, useCallback, useMemo } from "react";
import { DropResult } from "@hello-pangea/dnd";
import SidebarHeader from "./SidebarHeader";
import MenuList from "../menu/MenuList";
import { MenuItem } from "@/app/generator/page";
import { v4 as uuid } from "uuid";

interface SidebarProps {
  activeMenu: string | null;
  menuItems: MenuItem[];
  handleMenuUpdate: (items: MenuItem[]) => void;
  handleActiveMenuChange: (menu: string | null) => void;
}

export default function Sidebar({
  activeMenu,
  menuItems,
  handleMenuUpdate,
  handleActiveMenuChange,
}: SidebarProps) {
  const [editingTitle, setEditingTitle] = useState<string>("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const handleDragEnd = useCallback(
    (result: DropResult) => {
      if (!result.destination) return;

      const items = Array.from(menuItems);
      const [reorderedItem] = items.splice(result.source.index, 1);
      items.splice(result.destination!.index, 0, reorderedItem);
      handleMenuUpdate(items);
    },
    [menuItems, handleMenuUpdate]
  );

  const handleDelete = useCallback(
    (id: string) => {
      if (activeMenu !== id) return;
      const updatedItems = menuItems.filter((item) => item.id !== id);
      handleMenuUpdate(updatedItems);
    },
    [activeMenu, menuItems, handleMenuUpdate]
  );

  const handleEdit = useCallback(
    (id: string, newTitle: string) => {
      if (activeMenu !== id) return;
      if (newTitle.trim()) {
        const updatedItems = menuItems.map((item) =>
          item.id === id ? { ...item, title: newTitle.trim() } : item
        );
        handleMenuUpdate(updatedItems);
      }
      setEditingId(null);
    },
    [activeMenu, menuItems, handleMenuUpdate]
  );

  const handleAddSection = useCallback(() => {
    const newId = uuid();
    const newSection: MenuItem = {
      id: newId,
      title: "New Section",
    };
    handleMenuUpdate([...menuItems, newSection]);
  }, [menuItems, handleMenuUpdate]);

  const handleEditingTitleChange = useCallback((title: string) => {
    setEditingTitle(title);
  }, []);

  const handleEditingIdChange = useCallback((id: string | null) => {
    setEditingId(id);
  }, []);

  const memoizedMenuList = useMemo(
    () => (
      <MenuList
        menuItems={menuItems}
        activeMenu={activeMenu}
        editingId={editingId}
        editingTitle={editingTitle}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
        handleDragEnd={handleDragEnd}
        handleAddSection={handleAddSection}
        handleEditingTitleChange={handleEditingTitleChange}
        handleEditingIdChange={handleEditingIdChange}
        handleActiveMenuChange={handleActiveMenuChange}
      />
    ),
    [
      menuItems,
      activeMenu,
      editingId,
      editingTitle,
      handleEdit,
      handleDelete,
      handleDragEnd,
      handleAddSection,
      handleEditingTitleChange,
      handleEditingIdChange,
      handleActiveMenuChange,
    ]
  );

  return (
    <div className="w-64 text-cyan-50 ">
      <SidebarHeader />
      <div className="p-4">{memoizedMenuList}</div>
    </div>
  );
}
