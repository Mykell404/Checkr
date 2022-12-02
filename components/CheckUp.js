import CheckUpHistory from "./CheckUpHistory";

export default function CheckUp() {
  return (
    <div className="md:bg-white font-outfit md:px-8 md:py-4 md:w-[850px] ">
      <div className="md:flex justify-between">
        <div className="md:w-[331px]">
          <h2 className="text-white md:text-connect-blue text-2xl md:text-5xl font-medium">
            Medical History Check-up
          </h2>
        </div>
        <div className="bg-connect-blue p-4 mt-4 w-[104px]  flex justify-around md:w-[184px]">
          <p className="text-white text-sm items-center md:text-2xl md:mt-2">
            Filter
          </p>
          <img src="/icon-filter.svg" className="md:w-[30px]"></img>
        </div>
      </div>
      <div className="bg-white w-content h-0.5 mt-8 md:hidden"></div>
      <div className="flex flex-wrap justify-between">
        <CheckUpHistory />
        <CheckUpHistory />
        <CheckUpHistory />
        <CheckUpHistory />
        <CheckUpHistory />
        <CheckUpHistory />
      </div>
    </div>
  );
}
