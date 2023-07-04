import Image from "next/image";
const MainMenu = (props) => {
  return (
    <div className="bg-slate-800 text-white px-5 h-16 sticky top-0 z-20 flex">
      <Image src="/House.svg" alt="logo" width={30} height={30} />
    </div>
  );
};

export default MainMenu;
