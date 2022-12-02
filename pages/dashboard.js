import DashBoardRoute from "../components/DashboardRoute";
import NavBar from "../components/NavBar";
import Profile from "../components/Profile";
import CheckUp from "../components/CheckUp";

export default function DashBoard() {
  return (
    <div className="bg-form-bg min-h-screen p-8">
      <NavBar />
      <div className="md:flex md:justify-between">
        <div className="profile-link">
          <Profile />
          <div className="hidden md:flex md:flex-wrap md:justify-between md:w-[340px]">
            <div className="font-outfit w-[160px] h-[140px] p-6 mt-6 bg-connect-blue hover:bg-blue-400">
              <img src="/icon-history.svg"></img>
              <p className="text-white">Medical History check-up</p>
            </div>
            <DashBoardRoute text="Physical check-up" src="/icon-heart.svg" />
            <DashBoardRoute text="Vitals information" src="/icon-body.svg" />
            <DashBoardRoute
              text="Laboratory reports"
              src="/icon-stethoscope.svg"
            />
          </div>
        </div>
        <CheckUp />
      </div>
    </div>
  );
}
