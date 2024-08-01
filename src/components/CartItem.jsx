import PropTypes from "prop-types";
import {
  StarIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
function capitalize(text) {
  return text[0].toUpperCase() + text.substring(1);
}
const CartItem = ({ item, setCart }) => {
  function updateCart(item, quantity, increase) {
    if (!increase && quantity == 0) {
      setCart((prevCart) => {
        return prevCart.filter((cartItem) => cartItem.id != item.id);
      });
    } else {
      setCart((prevCart) => {
        const newCart = [...prevCart];
        const position = newCart.findIndex(
          (cartItem) => cartItem.id == item.id
        );
        newCart[position].quantity = quantity;
        return newCart;
      });
    }
  }
  return (
    <div className="flex bg-white bg-opacity-95 p-5 rounded-xl">
      <img
        className="basis-1/4 size-28 object-contain"
        src={item.image}
        alt={`Image of item ${item.title}`}
      />
      <div className="basis-1/2 px-3">
        {" "}
        <p className="font-bold md:text-xl">{item.title}</p>
        <p className="text-sm font-semibold text-slate-500">
          {capitalize(item.category)}
        </p>
        <div>
          <p className="flex">
            <span className="my-auto text-sm md:text-base">{item.rating.rate}</span>
            <StarIcon className="size-4 text-yellow-300 inline-block my-auto" />{" "}
            <span className="px-2 text-slate-600 text-xs md:text-sm my-auto">
              {item.rating.count} Ratings
            </span>
          </p>
        </div>
      </div>
      <div className="basis-1/4 flex flex-col items-center">
        <p className="font-bold md:text-lg">${item.price}</p>
        <div className="flex items-center gap-4">
          <p className="text-sm md:text-lg">In cart:{item.quantity}</p>
          <div className="flex flex-col gap-2">
            <button
              onClick={() => {
                console.log("Button clicked");
                const newCount = item.quantity + 1;
                updateCart(item, newCount, true);
              }}
            >
              <ChevronUpIcon className="size-8 rounded-md p-2 bg-slate-700 hover:bg-green-400 text-green-400 hover:text-slate-700 inline-block my-auto" />
            </button>
            <button
              onClick={() => {
                const newCount = item.quantity - 1;
                updateCart(item, newCount, false);
              }}
            >
              <ChevronDownIcon className="size-8 rounded-md  p-2 bg-slate-700 hover:bg-red-400 text-red-400 hover:text-slate-700 inline-block my-auto" />
            </button>
          </div>
        </div>
        <p className="font-bold md:text-lg">
          Total: ${item.price * item.quantity}
        </p>
      </div>
    </div>
  );
};
CartItem.propTypes = {
  item: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};
export default CartItem;
