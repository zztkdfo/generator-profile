"use client";

import { useState } from "react";
import { Dialog } from "@headlessui/react";

import { SkillsDataType } from "@/types/types";
import { skillIcons } from "./data/skillIcons";
import { BsBoxArrowUp, BsTrash } from "react-icons/bs";
import Button from "../common/button/Button";

const SkillsSection = ({
  onChange,
  initialData,
}: {
  onChange: (data: SkillsDataType) => void;
  initialData: SkillsDataType;
}) => {
  const [skillsData, setSkillsData] = useState<SkillsDataType>(initialData);

  const addSkill = () => {
    setSelectedSkillIndex(skillsData.skills.length);
    setIsIconSelectorOpen(true);
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
    const categories = [
      "Core Development",
      "Development Tools",
      "Collaboration Tools",
    ];

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
                      // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
          <p className="text-sm text-gray-600 mb-2">
            본인의 기술 스택을 선택해 보세요.
          </p>
          {skillsData.skills.map((skill, index) => (
            <div
              key={skill.id || `skill-${index}`}
              className="flex flex-wrap items-center gap-2 mb-2"
            >
              <div className="w-8 shrink-0">
                {(skill.name && skillIcons[skill.name]?.icon) || (
                  <div className="w-6 h-6 bg-gray-200 rounded-full" />
                )}
              </div>
              <div className="flex-1 min-w-[200px] flex items-center gap-1">
                <input
                  type="text"
                  placeholder="스킬 이름"
                  className="flex-1 p-2 border rounded w-full"
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
                  className="p-1 shrink-0 text-gray-500 hover:text-gray-600 transition rounded-full hover:bg-gray-50"
                  title="아이콘 선택"
                >
                  <BsBoxArrowUp className="w-5 h-5" />
                </button>
              </div>

              <button
                onClick={() => removeSkill(index)}
                className="p-1 shrink-0 text-red-500 hover:text-red-600 transition rounded-full hover:bg-red-50"
                title="삭제"
              >
                <BsTrash className="w-5 h-5" />
              </button>
            </div>
          ))}
          <Button onClick={addSkill} className="w-full mt-2 px-4 py-2">
            스킬 추가
          </Button>
        </div>
      </div>
      <SkillIconSelector
        isOpen={isIconSelectorOpen}
        onClose={() => setIsIconSelectorOpen(false)}
        onSelect={(skillName) => {
          const newSkills = [...skillsData.skills];
          if (selectedSkillIndex !== null) {
            // 기존 스킬 업데이트
            newSkills[selectedSkillIndex] = {
              ...newSkills[selectedSkillIndex],
              name: skillName,
              category: skillIcons[skillName].category,
            };
          } else {
            // 새 스킬 추가
            const newId = Date.now().toString();
            newSkills.push({
              id: newId,
              name: skillName,
              level: 3,
              category: skillIcons[skillName].category,
            });
          }
          handleChange("skills", newSkills);
          setSelectedSkillIndex(null); // 인덱스 초기화
        }}
      />
    </div>
  );
};

export default SkillsSection;
