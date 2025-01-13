"use client";

import Link from "next/link";
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

// interface StatProps {
//   number: string;
//   label: string;
// }

// const StatCard: React.FC<StatProps> = ({ number, label }) => (
//   <div className="text-center">
//     <div className="text-4xl font-bold text-indigo-600 mb-2">{number}</div>
//     <div className="text-gray-600">{label}</div>
//   </div>
// );

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
}) => (
  <div className="p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
    <div className="inline-block p-4 bg-indigo-50 rounded-lg text-4xl mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const StepCard: React.FC<StepCardProps> = ({ step, title, description }) => (
  <div className="relative p-8 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
    <div className="absolute -top-4 left-8 px-4 py-2 bg-indigo-600 text-white rounded-full text-sm font-bold">
      Step {step}
    </div>
    <h3 className="text-xl font-bold mb-3 mt-4">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

export default function LandingPage(): React.ReactNode {
  const router = useRouter();

  return (
    <div className="min-h-screen">
      {/* Hero 섹션 */}
      <section className="relative bg-gradient-to-tl from-indigo-400 to-blue-600 text-white py-12 sm:py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <div className="inline-block px-3 md:px-4 py-2 bg-white/10 rounded-full text-xs md:text-sm font-medium mb-4 md:mb-6">
            ✨ GitHub 프로필 생성기 v1.0 출시
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight">
            GitHub 프로필을
            <br />
            손쉽게 만들어보세요
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-indigo-100 max-w-2xl mx-auto">
            Template을 통해 전문가처럼 보이는
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-8 md:mb-10 text-indigo-100 max-w-2xl mx-auto">
            GitHub README를 단 몇 분 만에 제작할 수 있습니다.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.push("/generator")}
              className="w-full sm:w-auto bg-white text-indigo-600 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-indigo-50 transition-colors"
            >
              무료로 시작하기
            </button>
            <Link
              href="https://github.com/zztkdfo"
              className="w-full sm:w-auto"
            >
              <button className="w-full border border-white px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                데모 보기
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* 주요 기능 섹션 */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">
            주요 기능
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
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

      {/* 업데이트 예정 섹션 */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-semibold mb-4">
              Coming Soon
            </span>
            <h2 className="text-3xl font-bold">업데이트 예정 기능</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl mb-4">🎨</div>
              <h3 className="font-bold mb-2">다양한 템플릿</h3>
              <p className="text-gray-600">
                더 많은 프로필 템플릿과 커스터마이징 옵션이 추가될 예정입니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl mb-4">📊</div>
              <h3 className="font-bold mb-2">프로젝트 쇼케이스</h3>
              <p className="text-gray-600">
                주요 프로젝트를 시각적으로 돋보이게 표시합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl mb-4">🏆</div>
              <h3 className="font-bold mb-2">뱃지 컬렉션</h3>
              <p className="text-gray-600">
                기술 스택, 자격증, 수상 경력 등을 뱃지로 표현합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl mb-4">⚡️</div>
              <h3 className="font-bold mb-2">실시간 마크다운</h3>
              <p className="text-gray-600">
                실시간으로 마크다운 데이터를 확인하고 수정할 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  업데이트 적용
                </span>
              </div>
              <div className="text-2xl mb-4">💾</div>
              <h3 className="font-bold mb-2">임시저장 기능</h3>
              <p className="text-gray-600">
                작업 중인 프로필을 브라우저 localStorage에 저장하고 나중에
                불러올 수 있습니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="text-2xl mb-4">🎯</div>
              <h3 className="font-bold mb-2">GitHub 통계 연동</h3>
              <p className="text-gray-600">
                자동으로 GitHub 통계와 활동 데이터를 가져와 표시합니다.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 relative">
              <div className="absolute top-4 right-4">
                <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-semibold rounded-full">
                  업데이트 적용
                </span>
              </div>
              <div className="text-2xl mb-4">📱</div>
              <h3 className="font-bold mb-2">반응형 디자인</h3>
              <p className="text-gray-600">
                모바일부터 데스크톱까지 모든 디바이스에서 최적화된 화면을
                제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 섹션 */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            지금 바로 나만의 GitHub 프로필을 만들어보세요
          </h2>

          <button
            onClick={() => router.push("/generator")}
            className="bg-[rgb(26,31,44)] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[rgb(36,41,54)] transition-colors"
          >
            무료로 시작하기
          </button>
        </div>
      </section>

      {/* Footer 섹션 */}
      <footer className="bg-gray-50 py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex items-center space-x-2 text-gray-600">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>

              <div>zztkdfo@gmail.com</div>
            </div>
            <p className="text-sm text-gray-500">
              © {new Date().getFullYear()} GitHub Profile Generator. All rights
              reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
