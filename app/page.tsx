"use client";

import { useRouter } from "next/navigation";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
}

interface StepCardProps {
  step: string;
  title: string;
  description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => (
  <div className="p-6 bg-white rounded-lg shadow-md">
    <div className="text-2xl font-bold text-indigo-600 mb-4">Step {step}</div>
    <h3 className="text-xl font-semibold mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default function LandingPage(): React.ReactNode {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero 섹션 */}
      <section className="bg-gradient-to-r from-[rgb(75,81,97)] to-[rgb(10,12,17)] text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold mb-4">
            GitHub 프로필을 손쉽게 만들어보세요
          </h1>
          <p className="text-xl mb-8">
            Template을 통해 전문가처럼 보이는 GitHub README를 단 몇 분 만에
            제작할 수 있습니다
          </p>
          <button
            onClick={() => router.push("/generator")}
            className="bg-white text-indigo-700 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
          >
            시작하기
          </button>
        </div>
      </section>

      {/* 주요 기능 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">주요 기능</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="템플릿 기반 설정"
              description="미리 준비된 템플릿으로 쉽고 빠르게 작성하세요"
              icon="📝"
            />
            <FeatureCard
              title="실시간 미리보기"
              description="입력한 내용이 어떻게 보여질지 실시간으로 확인하세요"
              icon="👀"
            />
            <FeatureCard
              title="원클릭 복사"
              description="작성된 마크다운을 클립보드에 바로 복사하여 GitHub에 붙여넣으세요"
              icon="✨"
            />
          </div>
        </div>
      </section>

      {/* 사용 방법 섹션 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">사용 방법</h2>
          <div className="grid md:grid-cols-4 gap-6">
            <StepCard
              step="1"
              title="섹션 선택"
              description="원하는 섹션을 선택하여 시작하세요"
            />
            <StepCard
              step="2"
              title="내용 입력"
              description="각 섹션에 맞는 내용을 입력하세요"
            />
            <StepCard
              step="3"
              title="미리보기"
              description="실시간으로 결과물을 확인하세요"
            />
            <StepCard
              step="4"
              title="복사 및 적용"
              description="생성된 마크다운을 GitHub에 적용하세요"
            />
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            지금 바로 나만의 GitHub 프로필을 만들어보세요
          </h2>
          <button className="bg-[rgb(26,31,44)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(36,41,54)] transition-colors">
            무료로 시작하기
          </button>
        </div>
      </section>
    </div>
  );
}
