"use client";

import { useState } from "react";
import {
  FiChevronLeft,
  FiChevronRight,
  FiEdit2,
  FiTrash2,
  FiCheck,
} from "react-icons/fi";
import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "@hello-pangea/dnd";

interface MenuItem {
  id: string;
  title: string;
  icon?: React.ReactNode;
}

export default function Home() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMenuCollapsed, setIsMenuCollapsed] = useState<boolean>(false);
  const [menuItems, setMenuItems] = useState<MenuItem[]>([
    { id: "1", title: "소개" },
    { id: "2", title: "보유 기술" },
    { id: "3", title: "연락하기" },
    { id: "4", title: "깃허브 통계" },
    { id: "5", title: "최근 블로그 포스트" },
    { id: "6", title: "스포티파이 듣기" },
    { id: "7", title: "방문자 수" },
  ]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingTitle, setEditingTitle] = useState<string>("");

  const handleDragEnd = (result: DropResult) => {
    if (!result.destination) return;

    const items = Array.from(menuItems);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);

    setMenuItems(items);
  };

  const handleDelete = (id: string) => {
    if (activeMenu !== menuItems.find((item) => item.id === id)?.title) return;
    setMenuItems(menuItems.filter((item) => item.id !== id));
  };

  const handleEdit = (id: string, newTitle: string) => {
    if (activeMenu !== menuItems.find((item) => item.id === id)?.title) return;
    if (newTitle.trim()) {
      setMenuItems(
        menuItems.map((item) =>
          item.id === id ? { ...item, title: newTitle.trim() } : item
        )
      );
    }
    setEditingId(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* 왼쪽 메뉴 패널 */}
      <div
        className={`${
          isMenuCollapsed ? "w-24" : "w-64"
        } bg-[#1a1f2c] text-cyan-50 shadow-lg transition-all duration-300`}
      >
        {/* 로고 영역 - h-16으로 헤더와 높이 맞춤 */}
        <div className="h-16 flex items-center px-4 border-b border-gray-700 text-center">
          <h1 className="text-xl font-bold text-white">어쩌다 Profile Maker</h1>
        </div>

        <div className="p-4">
          <nav className="space-y-2 mt-3">
            <DragDropContext onDragEnd={handleDragEnd}>
              <Droppable droppableId="menu-items">
                {(provided) => (
                  <div {...provided.droppableProps} ref={provided.innerRef}>
                    {menuItems.map((item, index) => (
                      <Draggable
                        key={item.id}
                        draggableId={item.id}
                        index={index}
                      >
                        {(provided) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`rounded-md transition-colors duration-150 mb-2 cursor-pointer ${
                              activeMenu === item.title
                                ? "bg-blue-600"
                                : "hover:bg-[#2a2f3c]"
                            }`}
                            onClick={() => {
                              setActiveMenu(item.title);
                              setEditingId(null);
                            }}
                          >
                            <div className="w-full p-3 text-left text-gray-300 flex items-center justify-between">
                              {editingId === item.id ? (
                                <input
                                  type="text"
                                  value={editingTitle}
                                  onChange={(e) =>
                                    setEditingTitle(e.target.value)
                                  }
                                  onBlur={() =>
                                    handleEdit(item.id, editingTitle)
                                  }
                                  onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                      handleEdit(item.id, editingTitle);
                                    } else if (e.key === "Escape") {
                                      setEditingId(null);
                                    }
                                  }}
                                  className="bg-[#2a2f3c] text-gray-300 px-2 py-1 rounded outline-none focus:ring-2 focus:ring-blue-500 w-[calc(100%-60px)] max-w-[200px]"
                                  autoFocus
                                  onClick={(e) => e.stopPropagation()}
                                />
                              ) : (
                                <span className="flex items-center gap-2 truncate max-w-[200px]">
                                  {item.title}
                                </span>
                              )}
                              <div
                                className={`flex gap-2 transition-opacity ${
                                  activeMenu === item.title
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
                                    disabled={activeMenu !== item.title}
                                  >
                                    <FiCheck size={16} />
                                  </button>
                                ) : (
                                  <button
                                    onClick={(e) => {
                                      e.stopPropagation();
                                      if (activeMenu === item.title) {
                                        setEditingId(item.id);
                                        setEditingTitle(item.title);
                                      }
                                    }}
                                    className="p-1 hover:text-blue-400 transition-colors"
                                    disabled={activeMenu !== item.title}
                                  >
                                    <FiEdit2 size={16} />
                                  </button>
                                )}
                                <button
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    if (
                                      activeMenu === item.title &&
                                      confirm("정말 삭제하시겠습니까?")
                                    ) {
                                      handleDelete(item.id);
                                    }
                                  }}
                                  className="p-1 hover:text-red-400 transition-colors"
                                  disabled={activeMenu !== item.title}
                                >
                                  <FiTrash2 size={16} />
                                </button>
                              </div>
                            </div>
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>

            {/* 섹션 추가 버튼 */}
            <button className="w-full mt-4 p-3 text-gray-300 border border-dashed border-gray-600 rounded-md hover:border-gray-400 transition-colors duration-150 flex items-center justify-center gap-2">
              <span>+ 섹션</span>
            </button>
          </nav>
        </div>
      </div>

      {/* 오른쪽 콘텐츠 영역 */}
      <div className="flex-1 flex flex-col">
        {/* 상단 헤더 바 - h-16으로 로고와 높이 동일 */}
        <div className="h-16 shadow-sm flex items-center px-4">
          <button
            onClick={() => setIsMenuCollapsed(!isMenuCollapsed)}
            className="text-gray-500 hover:text-gray-700 transition-colors duration-200"
          >
            {isMenuCollapsed ? (
              <FiChevronRight className="w-6 h-6" />
            ) : (
              <FiChevronLeft className="w-6 h-6" />
            )}
          </button>
          <div className="flex items-center">
            <h2 className="text-xl font-bold px-4">콘텐츠 영역</h2>
          </div>
        </div>

        {/* 콘텐츠 영역 */}
        <div className="flex-1 p-7">
          <div className="bg-white rounded-lg shadow-lg p-6 h-full">
            <h2 className="text-xl font-bold mb-4">UI / Markdown 편집기</h2>
            {/* 여기에 선택된 메뉴에 따른 콘텐츠가 표시될 예정 */}
          </div>
        </div>
      </div>
    </div>
  );
}
