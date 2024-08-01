import ShoppingLogo from "../assets/shoppinglogo.jpg";
import { Link } from "react-router-dom";
import { HomeIcon } from "@heroicons/react/24/outline";
import { BuildingStorefrontIcon } from "@heroicons/react/24/outline";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import PropTypes from "prop-types";
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
        <NavItem Icon={HomeIcon} name="Home" path="" />
        <NavItem Icon={BuildingStorefrontIcon} name="Shop" path="shop" />
        <NavItem Icon={ShoppingCartIcon} name="Cart" path="cart" />
      </ul>
    </nav>
  );
};
const NavItem = ({ Icon, name, path }) => {
  return (
    <li className="px-3 py-1 rounded-md hover:text-cyan-400 hover:bg-slate-950">
      <Link className="flex flex-col items-center" to={path}>
        <Icon className="size-4" /> <p className="text-xs">{name}</p>
      </Link>
    </li>
  );
};
NavItem.propTypes = {
  Icon: PropTypes.elementType.isRequired,
  name: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
export default Navbar;
