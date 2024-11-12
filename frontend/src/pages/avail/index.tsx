import Image from "next/image";
import { useState } from "react";
import star from "../../../public/star.svg";

const AvailPage = () => {
  const [name, setName] = useState("");
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <div className="flex w-screen flex-col items-center justify-center gap-5 text-center">
        <h1 className="helvetica text-[52px]">
          Get your{" "}
          <span className="header font-semibold text-[#353434]">
            web3 Username
          </span>
        </h1>
        <p className="helvetica text-center text-3xl">
          Your wallet doesn't hold any{" "}
          <span className="text-[#E69A47]">ENS name</span>, but get one on{" "}
          <br />
          Citrus in few steps !
        </p>
        <div className="helvetica w-[45%]">
          <div className="mt-5 flex min-w-[45%] items-center justify-between rounded-2xl border border-[#B9B9B9] px-5 py-3 text-[28px] text-[#E69A47DE] shadow-[inset_0_2px_4px_2px_rgba(0,0,0,0.2)]">
            <p className="">Megabyte.cit</p>
            <div>
              <Image src={star} alt="star" width={20} height={20} />
            </div>
          </div>
          <div className="helvetica mt-5 flex min-w-[45%] items-center justify-between rounded-2xl border border-[#B9B9B9] px-5 py-3 text-[28px] text-[#6A6969] shadow-[inset_0_2px_4px_2px_rgba(0,0,0,0.2)]">
            <p>Megabyte.cit</p>
            <p className="helvetica rounded-xl bg-[#6CA24D] px-4 text-base font-medium text-white">
              Available
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AvailPage;
