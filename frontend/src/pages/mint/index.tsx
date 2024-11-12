import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import megabyte from "../../../public/megabyte.png";
import { useRouter } from "next/navigation";

const MintPage: NextPage = () => {
  const router = useRouter();

  return (
    <div className="mx-auto flex h-screen w-[80%] flex-col items-center justify-center gap-10">
      <div className="rounded-2xl bg-gradient-to-b from-[#F4BC8D] to-[#FFE6B7] p-px">
        <div className="relative flex h-[150px] w-[300px] items-end justify-center rounded-2xl bg-white p-1">
          <Image
            src={megabyte}
            alt="loader"
            width={100}
            height={100}
            className="absolute -top-20 left-[50%] z-50 size-40 -translate-x-[50%]"
          />
          <div className="mb-5 flex flex-col items-center justify-center gap-2">
            <h1 className="bg-gradient-to-tl from-[#E69A47] to-[#1E1E1E] bg-clip-text text-xl font-bold uppercase text-transparent">
              Megabyte.eth
            </h1>
          </div>
        </div>
      </div>
      <div className="helvetica flex flex-col gap-3 text-center text-4xl font-normal">
        <p>
          Yayy!{" "}
          <span className="font-medium text-[#E69A47]">Megabyte.cit </span> has
          been Minted on
        </p>
        <p>your Wallet Address.</p>
      </div>
    </div>
  );
};

export default MintPage;
