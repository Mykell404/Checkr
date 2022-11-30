import NavBar from "../components/NavBar";
import Profile from "../components/Profile";

export default function DashBoard() {
  return (
    <div className="bg-form-bg min-h-screen p-8">
      <NavBar />
      <Profile />
    </div>
  );
}
