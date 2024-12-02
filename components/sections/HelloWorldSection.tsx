"use client";

import { useState, useCallback, useMemo } from "react";
import { BsTrash } from "react-icons/bs";
import Button from "@/components/common/button/Button"; // Button 컴포넌트 import 추가

import { HelloWordDataType } from "@/types/types";

const HelloWordSection = ({
  onChange,
  initialData,
}: {
  onChange: (data: HelloWordDataType) => void;
  initialData: HelloWordDataType;
}) => {
  const [helloWordData, setHelloWordData] =
    useState<HelloWordDataType>(initialData);

  // 플레이스홀더 목록 정의
  const placeholders = useMemo(
    () => [
      "예: 💬 무엇이든 편하게 물어보세요.",
      "예: 🎨 창의적인 아이디어를 공유하세요.",
      "예: 📚 최근 읽은 책에 대해 이야기해보세요.",
      "예:⚡ 개발에 몰입하면 시간 가는 줄 모릅니다!",
      "예:📝 학습 경험을 꾸준히 기록하며, 기술 팁과 프로젝트 경험을 나눕니다.",
      "예:🔍 기술과 데이터 분석을 활용해 문제를 이해하고, 효율적인 솔루션을 설계합니다.",
      "예:🚀 꾸준히 진행 중인 프로젝트를 통해 학습한 기술을 실전에 적용하고 있습니다.",
      "예:🌱 매일 조금씩 배우고 실험하며, 꾸준한 노력으로 성장해 나가고 있습니다.",
    ],
    []
  );

  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  const handleChange = useCallback(
    (
      field: keyof HelloWordDataType,
      value: HelloWordDataType[keyof HelloWordDataType]
    ) => {
      const newData = { ...helloWordData, [field]: value };
      setHelloWordData(newData);
      onChange(newData);
    },
    [helloWordData, onChange]
  );
  const addWord = useCallback(() => {
    if (helloWordData.words.length >= 7) {
      return;
    }
    const newId = Date.now().toString();
    const newWords = [
      ...helloWordData.words,
      {
        id: newId,
        text: "",
        // 현재 인덱스의 플레이스홀더 설정
        placeholder: placeholders[placeholderIndex],
      },
    ];
    handleChange("words", newWords);

    // 인덱스 업데이트
    setPlaceholderIndex((prevIndex) => (prevIndex + 1) % placeholders.length);
  }, [helloWordData, placeholderIndex, handleChange, placeholders]);

  const removeWord = useCallback(
    (index: number) => {
      if (helloWordData.words[index].text.trim() === "") {
        if (!window.confirm("내용이 비어있는 항목을 삭제하시겠습니까?")) {
          return;
        }
      }
      const newWords = helloWordData.words.filter((_, i) => i !== index);
      handleChange("words", newWords);
    },
    [helloWordData, handleChange]
  );

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">Hello World 섹션</h2>

      <div className="space-y-4">
        <div>
          <h3 className="font-medium mb-2">
            자신의 이력서, 관심, 취미, 운동, 좋아하는 것 등을 작성해주세요.
          </h3>
          {helloWordData.words.map((word, index) => (
            <div key={word.id} className="flex items-center gap-2 mb-2">
              <div className="flex-1">
                <input
                  type="text"
                  // 각 인풋에 플레이스홀더 설정
                  placeholder={
                    word.placeholder || "💬 무엇이든 편하게 물어보세요."
                  }
                  className="w-full p-2 border rounded"
                  value={word.text}
                  onChange={(e) => {
                    const newWords = [...helloWordData.words];
                    newWords[index].text = e.target.value;
                    handleChange("words", newWords);
                  }}
                />
              </div>
              <button
                onClick={() => removeWord(index)}
                className="p-2 text-red-500 hover:text-red-600 transition rounded-full hover:bg-red-50"
                title="삭제"
              >
                <BsTrash className="w-5 h-5" />
              </button>
            </div>
          ))}
          <Button
            onClick={addWord}
            disabled={helloWordData.words.length >= 7}
            className="w-full mt-2 px-4 py-2 bg-blue-500 text-white rounded"
          >
            내용 추가
          </Button>
        </div>
      </div>
    </div>
  );
};

export default HelloWordSection;
