import Image from "next/image";

export default function BookCard({ title, image }: { title: string; image: string }) {
  return (
    <div className="flex flex-col items-center  rounded-lg shadow p-4">
      <Image src={image} alt={title} width={80} height={80} className="mb-2" />
      <span className="text-base font-medium text-center">{title}</span>
    </div>
  );
}
