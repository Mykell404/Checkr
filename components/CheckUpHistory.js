export default function CheckUpHistory() {
  return (
    <div className="w-40 mt-20 md:w-52">
      <div className="bg-white  border-connect-blue border-2 p-1">
        <div className="flex justify-around">
          <img src="/doctor.svg"></img>
          <div className=" flex flex-col justify-end">
            <p className="text-sm">Dr Beautrice</p>
            <p className="text-[10px] font-light">0xb5....d0</p>
          </div>
        </div>
      </div>
      <div className="bg-white border-connect-blue border-2 border-t-0">
        <div className="flex flex-col items-left p-2">
          <p className="font-bold text-[8px]">14-11-2022</p>
          <p className="text-sm mt-2">Physical Medicine and Rehabilitation</p>
          <p className="text-[10px] font-normal mt-2">Artrithis</p>
        </div>
      </div>
      <div className="bg-connect-blue text-white items-center flex justify-center h-12 hover:bg-blue-400">
        <p>View full reports</p>
      </div>
    </div>
  );
}
