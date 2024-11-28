"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

import { SkillsDataType } from "@/types/types";
import { skillIcons } from "./data/skillIcons";
import { BsBoxArrowUp, BsTrash } from "react-icons/bs";

const SkillsSection = ({
  onChange,
  initialData,
}: {
  onChange: (data: SkillsDataType) => void;
  initialData: SkillsDataType;
}) => {
  const [skillsData, setSkillsData] = useState<SkillsDataType>(initialData);

  const addSkill = () => {
    const newId = Date.now().toString();
    const newSkills = [
      ...skillsData.skills,
      {
        id: newId,
        name: "",
        level: 3,
        category: "Frontend",
      },
    ];
    handleChange("skills", newSkills);
  };

  const removeSkill = (index: number) => {
    if (skillsData.skills[index].name.trim() === "") {
      if (!window.confirm("이름이 비어있는 스킬을 삭제하시겠습니까?")) {
        return;
      }
    }
    const newSkills = skillsData.skills.filter((_, i) => i !== index);
    handleChange("skills", newSkills);
  };

  const handleChange = (
    field: keyof SkillsDataType,
    value: SkillsDataType[keyof SkillsDataType]
  ) => {
    const newData = { ...skillsData, [field]: value };
    setSkillsData(newData);
    onChange(newData);
  };

  const [isIconSelectorOpen, setIsIconSelectorOpen] = useState(false);
  const [selectedSkillIndex, setSelectedSkillIndex] = useState<number | null>(
    null
  );

  // SkillIconSelector 컴포넌트 추가
  const SkillIconSelector = ({
    isOpen,
    onClose,
    onSelect,
  }: {
    isOpen: boolean;
    onClose: () => void;
    onSelect: (skillName: string) => void;
  }) => {
    const categories = ["Frontend", "Backend", "DevOps", "Mobile", "Other"];

    return (
      <Dialog open={isOpen} onClose={onClose} className="relative z-50">
        <div className="fixed inset-0 bg-black/30" aria-hidden="true" />
        <div className="fixed inset-0 flex items-center justify-center p-4">
          <Dialog.Panel className="w-full max-w-3xl bg-white rounded-lg p-6 max-h-[80vh] overflow-y-auto">
            <Dialog.Title className="text-lg font-bold mb-4">
              스킬 선택
            </Dialog.Title>

            {categories.map((category, index) => (
              <div key={category}>
                <div className="mb-6">
                  <h3 className="font-medium text-lg mb-3">{category}</h3>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">
                    {Object.entries(skillIcons)
                      .filter(([_, value]) => value.category === category)
                      .map(([skillName, { icon }]) => (
                        <button
                          key={skillName}
                          onClick={() => {
                            onSelect(skillName);
                            onClose();
                          }}
                          className="flex flex-col items-center p-2 hover:bg-gray-100 rounded transition"
                        >
                          {icon}
                          <span className="text-sm mt-1">{skillName}</span>
                        </button>
                      ))}
                  </div>
                </div>
                {index < categories.length - 1 && (
                  <div className="border-b border-gray-200 my-4" />
                )}
              </div>
            ))}
          </Dialog.Panel>
        </div>
      </Dialog>
    );
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">스킬 섹션</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">스킬 목록</h3>
          {skillsData.skills.map((skill, index) => (
            <div key={skill.id} className="flex items-center gap-2 mb-2">
              <div className="w-8">
                {(skill.name && skillIcons[skill.name]?.icon) || (
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                )}
              </div>
              <div className="flex-1 flex items-center gap-2">
                <input
                  type="text"
                  placeholder="스킬 이름"
                  className="flex-1 p-2 border rounded"
                  value={skill.name}
                  onChange={(e) => {
                    const newSkills = [...skillsData.skills];
                    newSkills[index].name = e.target.value;
                    handleChange("skills", newSkills);
                  }}
                />
                <button
                  onClick={() => {
                    setSelectedSkillIndex(index);
                    setIsIconSelectorOpen(true);
                  }}
                  className="p-2 text-gray-500 hover:text-gray-600 transition rounded-full hover:bg-gray-50"
                  title="아이콘 선택"
                >
                  <BsBoxArrowUp className="w-5 h-5" />
                </button>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-sm w-8">{skill.level}/5</span>
                <input
                  type="range"
                  min="1"
                  max="5"
                  value={skill.level}
                  onChange={(e) => {
                    const newSkills = [...skillsData.skills];
                    newSkills[index].level = Number(e.target.value);
                    handleChange("skills", newSkills);
                  }}
                  className="w-24"
                />
              </div>
              <button
                onClick={() => removeSkill(index)}
                className="p-2 text-red-500 hover:text-red-600 transition rounded-full hover:bg-red-50"
                title="삭제"
              >
                <BsTrash className="w-5 h-5" />
              </button>
            </div>
          ))}
          <button
            onClick={addSkill}
            className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            스킬 추가
          </button>
        </div>
      </div>
      <SkillIconSelector
        isOpen={isIconSelectorOpen}
        onClose={() => setIsIconSelectorOpen(false)}
        onSelect={(skillName) => {
          if (selectedSkillIndex !== null) {
            const newSkills = [...skillsData.skills];
            newSkills[selectedSkillIndex].name = skillName;
            newSkills[selectedSkillIndex].category =
              skillIcons[skillName].category;
            handleChange("skills", newSkills);
          }
        }}
      />
    </div>
  );
};

export default SkillsSection;
