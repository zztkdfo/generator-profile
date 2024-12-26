"use client";

import { IntroductionDataType } from "@/types/types";
import { useState } from "react";
import ImageSelectModal from "@/components/ImageSelectModal";
const IntroSection = ({
  onChange,
  initialData,
}: {
  onChange: (data: IntroductionDataType) => void;
  initialData: IntroductionDataType;
}) => {
  const [introData, setIntroData] = useState<IntroductionDataType>(initialData);
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

  const handleChange = (
    field: keyof IntroductionDataType,
    value: string | boolean
  ) => {
    const newData = { ...introData, [field]: value };
    setIntroData(newData);
    onChange(newData);
  };

  const handleImageSelect = (imageSrc: string) => {
    const newData = { ...introData, imageSrc };
    setIntroData(newData);
    onChange(newData);
  };

  return (
    <div className="space-y-4">
      <h2 className="text-xl font-bold">소개 섹션</h2>
      <p className="text-sm text-gray-600">
        본인을 소개하는 섹션입니다. 임펙트 있는 설명을 작성해 보세요.
      </p>
      <div className="flex items-center space-x-2 mt-4">
        <input
          type="checkbox"
          id="showImage"
          className="w-4 h-4"
          checked={introData.showImage}
          onChange={(e) => handleChange("showImage", e.target.checked)}
        />
        <label htmlFor="showImage" className="text-sm text-gray-700">
          프로필 이미지 표시
        </label>
        {introData.showImage && (
          <button
            onClick={() => setIsImageModalOpen(true)}
            className="ml-4 px-3 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            이미지 선택
          </button>
        )}
      </div>

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

      <ImageSelectModal
        isOpen={isImageModalOpen}
        onClose={() => setIsImageModalOpen(false)}
        onSelect={handleImageSelect}
        selectedImage={introData.imageSrc}
      />
    </div>
  );
};

export default IntroSection;
