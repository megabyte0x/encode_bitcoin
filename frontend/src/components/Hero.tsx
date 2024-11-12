import Image from "next/image";
import logoShadow from "../../public/logo-shadow.svg";
import WalletConnect from "./WalletConnect";

export default function Hero() {
  return (
    <div className="flex h-full flex-col items-center justify-center gap-5">
      <Image src={logoShadow} alt="logo" width={100} height={100} />
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
      <div>
        <WalletConnect />
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
