import { useState } from "react";

const CheckPage = () => {
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
        <input
          type="text"
          onChange={(e) => setName(e.currentTarget.value)}
          placeholder="Search for a Name"
          className="helvetica mt-5 w-[45%] rounded-2xl border border-[#B9B9B9] px-5 py-3 text-[28px] text-[#E69A47DE] shadow-[inset_0_2px_4px_2px_rgba(0,0,0,0.2)] placeholder:text-[#E69A47DE] focus:outline-none"
        />
      </div>
    </div>
  );
};

export default CheckPage;
