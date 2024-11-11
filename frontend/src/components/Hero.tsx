import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex h-full flex-col items-center justify-center">
      <div className="rounded-2xl bg-gradient-to-b from-[#F4BC8D] to-[#FFE6B7] p-8">
        <Image
          src="./logo.svg"
          alt="logo"
          width={40}
          height={40}
          className=""
        />
      </div>
      <h1 className="helvetica text-5xl font-normal text-[#353434]">
        Your gateway to the{" "}
        <span className="header font-semibold">New Internet</span>
      </h1>
      <p className="text-[26px] font-normal text-[#595757]">
        Envision a world where the internet and Web3 seamlessly connect,
        creating a unified, innovative experience.
      </p>
      <div></div>
    </div>
  );
}
