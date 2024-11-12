import Image from "next/image";
import star from "../../../public/star.svg";

const NewMintPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-5">
      <div className="helvetica mt-5 flex min-w-[45%] flex-col gap-5 rounded-2xl px-5 py-3 pb-8 text-[28px] text-[#6A6969] shadow-[0_-8px_13px_2px_#E69A4742]">
        <div className="flex items-center justify-between text-[28px] text-[#E69A47DE]">
          <p className="">Megabyte.cit</p>
          <div>
            <Image src={star} alt="star" width={20} height={20} />
          </div>
        </div>
        <hr className="border-[#F1742838]" />
        <div className="flex flex-col gap-3">
          <div className="helvetica flex items-center justify-between text-[28px] font-normal text-[#656565]">
            <p>Fees</p>
            <p>0.5 cBTC</p>
          </div>
          <div className="helvetica relative mx-auto mt-3 w-[30%] rounded-2xl bg-gradient-to-b from-[#F4BC8D] to-[#FFE6B7] py-2 text-center shadow-[0px_2px_5px_2px_rgba(0,0,0,0.2)]">
            <button>Mint .cit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewMintPage;
