import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          aria-hidden
          src="/rati.webp"
          alt="Rati icon"
          width={600}
          height={600}
          className="object-cover object-center w-[500px] h-[400px]"
        />
      </main>
    </div>
  );
}
