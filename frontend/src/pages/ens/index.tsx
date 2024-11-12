import type { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import megabyte from "../../../public/megabyte.png";
import { useRouter } from "next/navigation";

const EnsPage: NextPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  if (loading) {
    return (
      <div className="mx-auto flex h-screen w-[80%] flex-col items-center justify-center gap-10">
        <div className="animate-spin">
          <Image src="./loader.svg" alt="loader" width={50} height={50} />
        </div>
        <p className="helvetica flex flex-col gap-3 text-center text-4xl font-normal">
          Please wait a while , for the meantime we verify if your <br />
          <span className="font-medium text-[#E69A47]">
            wallet address holds any ENS name.
          </span>
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto flex h-screen w-[80%] flex-col items-center justify-center gap-10">
      <div className="rounded-2xl bg-gradient-to-b from-[#F4BC8D] to-[#FFE6B7] p-px">
        <div className="relative flex h-[200px] w-[300px] items-end justify-center rounded-2xl bg-white p-1 shadow-[0px_5px_15px_5px_rgba(0,0,0,0.2)]">
          <Image
            src={megabyte}
            alt="loader"
            width={100}
            height={100}
            className="absolute -top-20 left-[50%] z-50 size-40 -translate-x-[50%] rounded-[22px] shadow-[0px_3px_5px_2px_rgba(0,0,0,0.2)]"
          />
          <div className="mb-5 flex flex-col items-center justify-center gap-2">
            <h1 className="bg-gradient-to-tl from-[#E69A47] to-[#1E1E1E] bg-clip-text text-xl font-bold uppercase text-transparent">
              Megabyte.eth
            </h1>
            <button
              onClick={() => router.push("/mint")}
              className="helvetica relative rounded-2xl bg-gradient-to-b from-[#F4BC8D] to-[#FFE6B7] px-16 py-2"
            >
              Mint .cit
            </button>
          </div>
        </div>
      </div>
      <p className="helvetica mt-5 flex flex-col gap-3 text-center text-4xl font-normal">
        Please wait a while , for the meantime we verify if your <br />
        <span className="font-medium text-[#E69A47]">
          wallet address holds any ENS name.
        </span>
      </p>
    </div>
  );
};

export default EnsPage;
