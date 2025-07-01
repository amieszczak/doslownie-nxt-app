import Image from "next/image";

export default function Metric({ src, alt, title, description}: {src: string, alt: string, title: string, description: string}) {
  return (
    <div className="flex flex-col items-center">
      <div>
        <Image src={src} alt={alt} width={70} height={70} />
      </div>
      <div className="flex flex-col items-center">
        <h2 className="text-xl font-bold py-5">{title}</h2>
        <p>{description}</p>
      </div>
    </div>
  );
}