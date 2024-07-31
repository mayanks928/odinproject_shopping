import Navbar from "../components/Navbar";
import BackGroundImage from "../assets/hhhorizon.svg";
import { Outlet } from "react-router-dom";
function Root() {
  return (
    <div
      style={{ "--image-url": `url(${BackGroundImage})` }}
      className="min-h-svh bg-[image:var(--image-url)] h-100 container p-1.5 mx-auto"
    >
      <header>
        <Navbar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Root;
