const CheckPage = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-10">
      <div>
        <h1 className="helvetica text-[52px]">
          Get your{" "}
          <span className="header font-semibold text-[#353434]">
            web3 Username
          </span>
        </h1>
        <p className="helvetica text-3xl">
          Your wallet doesn't hold any <span>ENS name</span>, but get one on
          Citrus in few steps !
        </p>
      </div>
    </div>
  );
};

export default CheckPage;
