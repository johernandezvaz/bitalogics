import Image from "next/image";

export default function FounderPhoto() {
  return (
    <div className="w-[46px] h-[46px] rounded-full overflow-hidden shrink-0 border border-paper/20 relative bg-paper/10">
      <Image
        src="/jose-headshot.jpg"
        alt="Fundador de Bitalogics"
        width={46}
        height={46}
        className="w-full h-full object-cover"
      />
    </div>
  );
}
