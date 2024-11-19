interface AddSectionButtonProps {
  onClick: () => void;
}

export default function AddSectionButton({ onClick }: AddSectionButtonProps) {
  return (
    <button
      onClick={onClick}
      className="w-full mt-4 p-3 text-gray-300 border border-dashed border-gray-600 rounded-md hover:border-gray-400 transition-colors duration-150 flex items-center justify-center gap-2"
    >
      <span>+ 섹션</span>
    </button>
  );
}
