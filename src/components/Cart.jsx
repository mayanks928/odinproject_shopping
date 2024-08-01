import PropTypes from "prop-types";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";
import { ShoppingBagIcon } from "@heroicons/react/24/outline";
const Cart = ({ shoppingCart, setShoppingCart }) => {
  if (shoppingCart.length == 0) {
    return (
      <div className="flex flex-col h-screen m-5 rounded-xl bg-white items-center justify-center">
        <ShoppingBagIcon className="size-1/4" />
        <div className="text-lg text-center">
          <p>No Items in Cart</p>
          <p>
            Head to{" "}
            <Link
              className="text-cyan-500 font-semibold underline"
              to={"/shop"}
            >
              Shop
            </Link>{" "}
            to add items.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col-reverse md:flex-row my-5 md:items-start gap-4">
      <div className="md:w-1/2">
        {shoppingCart.map((item) => (
          <CartItem key={item.id} item={item} setCart={setShoppingCart} />
        ))}
      </div>
      <div className="md:w-1/2 bg-white bg-opacity-95 p-5 rounded-xl">
        <p>Price Details</p>
        <hr />
        <div className="flex justify-around">
          <p>Number of Products:</p> <p>{shoppingCart.length}</p>
        </div>
        <div className="font-semibold flex justify-around">
          <p>Total Amount:</p>
          <p>
            $
            {shoppingCart.reduce(
              (total, item) => total + item.quantity * item.price,
              0
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
Cart.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  setShoppingCart: PropTypes.func.isRequired,
};
export default Cart;
