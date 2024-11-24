interface IntroSectionProps {
  text?: string;
}

const IntroSection = ({}: IntroSectionProps) => {
  return (
    <section className="flex flex-col items-center gap-6 py-12">
      <h1 className="text-3xl font-bold">
        안녕하세요 FE 개발자 OOO 입니다! 👋
      </h1>

      <div className="flex gap-2"></div>

      <div className="mt-8 text-center">
        <p>
          문제의 본질을 파악하고 해결하는 데 가치를 두는 개발자입니다. ⭐ ✨
        </p>
        <p>함께 의미 있는 변화를 만들어 갈 기회를 기다리고 있습니다! 🚀</p>
      </div>
    </section>
  );
};

export default IntroSection;
