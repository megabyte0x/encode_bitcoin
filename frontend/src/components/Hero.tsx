import Image from "next/image";

export default function Hero() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-10">
      <div className="rounded-2xl bg-gradient-to-b from-[#F4BC8D] to-[#FFE6B7] p-8 shadow-lg shadow-[#4659E660]">
        <Image
          src="./logo.svg"
          alt="logo"
          width={40}
          height={40}
          className=""
        />
      </div>
      <div className="flex flex-col items-center gap-5">
        <h1 className="helvetica text-center text-5xl font-normal text-[#353434]">
          Your gateway to the{" "}
          <span className="header font-semibold">New Internet</span>
        </h1>
        <p className="w-[70%] text-center text-[26px] font-normal text-[#595757]">
          Envision a world where the internet and Web3 seamlessly connect,
          creating a unified, innovative experience.
        </p>
      </div>
      <div className="helvetica relative rounded-2xl bg-gradient-to-b from-[#F4BC8D] to-[#FFE6B7] px-20 py-5">
        <button className="">Connect Wallet</button>
        <div className="absolute -bottom-8 -right-14">
          <div className="relative">
            <Image src="./arrow.svg" alt="arrow" width={40} height={40} />
            <p className="nanum absolute -bottom-5 -right-[310px] w-[300px] text-2xl text-[#808080]">
              connect your wallet to continue !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
