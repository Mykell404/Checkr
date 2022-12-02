export default function NavBar() {
  return (
    <div className="mb-12">
      <nav className="flex justify-between items-center mt-5">
        <h1 className="font-octabrain text-4xl text-white underline underline-offset-8 decoration-1 md:text-6xl flex items-center">
          CHECKR
        </h1>
        <div className="md:font-outfit md:w-3/5 md:flex md:justify-around hidden">
          <div className="w-4/5">
            <label className="relative block">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <img src="/search-icon.svg"></img>
              </span>
              <input
                className="placeholder:text-black block h-12 bg-white w-full border border-slate-300  py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
                placeholder="Search"
                type="text"
                name="search"
              />
            </label>
          </div>
          <div className="bg-white w-12 h-12 mr-8 items-center flex justify-center">
            <img src="/blue_search-icon.svg"></img>
          </div>
        </div>
        <div className="md:bg-white flex font-outfit h-12 p-2 bg-transparent items-center justify-around">
          <div class="space-y-2 md:hidden items-center mr-2 ">
            <span class="block w-8 h-1 bg-white"></span>
            <span class="block w-8 h-1 bg-white"></span>
            <span class="block w-8 h-1 bg-white"></span>
          </div>
          <p className="md:flex md:items-center hidden">0x90d...</p>
          <img
            src="/profile_img.svg"
            className="w-12 border-white border rounded-full"
          />
        </div>
      </nav>
    </div>
  );
}
