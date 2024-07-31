import ShoppingLogo from "../assets/shoppinglogo.jpg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white rounded-lg p-1.5 m-3  flex flex-row items-center justify-around">
      <div className="">
        <img
          className="size-12 rounded-lg"
          src={ShoppingLogo}
          alt="Shopping App logo"
        />
      </div>
      <ul className="w-1/2 flex flex-row justify-evenly">
        <li className="">
          <Link  to={``}>Home</Link>
        </li>
        <li className="">
        <Link  to={`shop`}>Shop</Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
