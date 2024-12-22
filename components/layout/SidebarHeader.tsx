import { useRouter } from "next/navigation";

export default function SidebarHeader() {
  const router = useRouter();

  return (
    <div className="h-16 flex justify-center items-center border-b border-gray-700">
      <h1
        className="text-xl font-bold text-white cursor-pointer"
        onClick={() => {
          router.push("/");
        }}
      >
        어쩌다 Profile Maker
      </h1>
    </div>
  );
}
