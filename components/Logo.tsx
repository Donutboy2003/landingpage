import Image from "next/image";

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      <Image
        src="/Tuk.png"  // put your logo in public/tuk-logo.png
        alt="Tuk Logo"
        width={40}
        height={40}
      />
      <span className="font-semibold text-lg">Tuk</span>
    </div>
  );
}