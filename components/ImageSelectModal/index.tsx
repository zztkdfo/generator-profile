import { PROFILE_IMAGES } from "../sections/data/images";

interface ImageSelectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (imageSrc: string) => void;
  selectedImage?: string;
}

const ImageSelectModal = ({
  isOpen,
  onClose,
  onSelect,
  selectedImage,
}: ImageSelectModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg w-[80%] max-w-4xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-bold">이미지 선택</h3>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {PROFILE_IMAGES.map((image) => (
            <div
              key={image.id}
              className={`cursor-pointer hover:opacity-80 transition ${
                selectedImage === image.src
                  ? "ring-4 ring-blue-500 rounded-lg"
                  : ""
              }`}
              onClick={() => {
                onSelect(image.src);
                onClose();
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-auto rounded-lg"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSelectModal;
