"use client";

import { IntroductionDataType } from "@/types/types";
import { useState } from "react";

interface IntroductionData {
  mainTitle: string; // 대제목
  email: string; // 이메일 주소
  philosophy: string; // 본인의 철학
  description: string; // 상세 소개글
}

const IntroSection = ({
  onChange,
  initialData,
}: {
  onChange: (data: IntroductionData) => void;
  initialData: IntroductionDataType;
}) => {
  const [introData, setIntroData] = useState<IntroductionDataType>(initialData);

  const handleChange = (field: keyof IntroductionData, value: string) => {
    const newData = { ...introData, [field]: value };
    setIntroData(newData);
    onChange(newData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">소개 섹션</h2>

      <div className="space-y-2">
        <input
          type="text"
          placeholder="제목 (예: 반갑습니다, FE 개발자 zztkdfo 입니다.)"
          className="w-full text-lg p-2 border rounded"
          value={introData.mainTitle}
          onChange={(e) => handleChange("mainTitle", e.target.value)}
        />

        <input
          type="email"
          placeholder="이메일 주소"
          className="w-full p-2 text-lg border rounded"
          value={introData.email}
          onChange={(e) => handleChange("email", e.target.value)}
        />

        <textarea
          placeholder={`본인의 가치관, 개발 철학 등을 작성해주세요.\n(이모지를 사용해서 더 멋지게 꾸며보세요😎🚀🤗😁)`}
          className="w-full p-2 text-lg border rounded"
          rows={12}
          value={introData.description}
          onChange={(e) => handleChange("description", e.target.value)}
        />
      </div>
    </div>
  );
};

export default IntroSection;
