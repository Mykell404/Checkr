import Image from "next/image";

export default function Profile() {
  return (
    <div className="hidden md:bg-white md:flex md:flex-col p-4 w-fit font-outfit">
      <img src="/big_profile-img.png"></img>
      <div className="flex mt-4 justify-around">
        <p className="">0x90d4F7D90761E2a3..... </p>
        <Image src="/icon-copy.svg" width={18} height={20}></Image>
      </div>
      <p className="mt-2 text-center">Yetunde Olufemi</p>
      <div className="p-4">
        <div className="text-center flex justify-around mb-2">
          <p>Date of birth:</p>
          <p>April 17,2002(18 years)</p>
        </div>
        <div className="text-center flex justify-around">
          <p>Sex:</p>
          <p>Female</p>
        </div>
      </div>
    </div>
  );
}
