import Image from "next/image";

export default function Header() {
  return (
    <div className="fixed flex gap-2 px-3 py-3">
      <Image src="./logo.svg" alt="logo" width={30} height={30} className="" />
      <h2 className="header w-fit text-3xl font-semibold">Cit</h2>
    </div>
  );
}
