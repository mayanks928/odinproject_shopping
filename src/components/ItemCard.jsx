import PropTypes from "prop-types";
import {
  StarIcon,
  ShoppingCartIcon,
  ChevronUpIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import { useState } from "react";
function capitalize(text) {
  return text[0].toUpperCase() + text.substring(1);
}
const cartItem = (item, quantity) => ({
  ...item,
  quantity: quantity,
});
const ItemCard = ({ item, setCart }) => {
  const [itemCount, setItemCount] = useState(0);
  function increaseCount() {
    setItemCount((prevCount) => prevCount + 1);
  }
  function decreaseCount() {
    setItemCount((prevCount) => prevCount - 1);
  }
  function updateCart(item, quantity, increase) {
    if (increase && quantity == 1) {
      setCart((prevCart) => {
        const newCart = [...prevCart];
        newCart.push(cartItem(item, 1));
        return newCart;
      });
    } else if (!increase && quantity == 0) {
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
    <div className="flex bg-white bg-opacity-80 p-5 my-10 rounded-xl">
      <img
        className="basis-1/4 size-36 object-contain"
        src={item.image}
        alt={`Image of item ${item.title}`}
      />
      <div className="basis-1/2 px-3">
        {" "}
        <p className="font-bold text-xl">{item.title}</p>
        <p className="text-sm font-semibold text-slate-500">
          {capitalize(item.category)}
        </p>
        <div>
          <p className="flex">
            <span className="my-auto">{item.rating.rate}</span>
            <StarIcon className="size-4 text-yellow-300 inline-block my-auto" />{" "}
            <span className="px-2 text-slate-600 text-sm my-auto">
              {item.rating.count} Ratings
            </span>
          </p>
        </div>
        <p>{item.description}</p>
      </div>
      <div className="basis-1/4 flex flex-col items-center">
        <p className="font-bold text-xl">${item.price}</p>
        {itemCount == 0 ? (
          <button
            onClick={() => {
              console.log("Button clicked");
              const newCount = itemCount + 1;
              increaseCount();
              updateCart(item, newCount, true);
            }}
            className="bg-yellow-400 text-sm px-5 py-3 rounded-lg"
          >
            <ShoppingCartIcon className="size-4 text-white inline-block my-auto" />
            Add to Cart
          </button>
        ) : (
          <div className="flex items-center gap-4">
            <p className="text-lg">In cart:{itemCount}</p>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => {
                  console.log("Button clicked");
                  const newCount = itemCount + 1;
                  increaseCount();
                  updateCart(item, newCount, true);
                }}
              >
                <ChevronUpIcon className="size-8 rounded-md p-2 bg-slate-700 text-green-400 inline-block my-auto" />
              </button>
              <button
                onClick={() => {
                  const newCount = itemCount - 1;
                  decreaseCount();
                  updateCart(item, newCount, false);
                }}
              >
                <ChevronDownIcon className="size-8 rounded-md  p-2 bg-slate-700 text-red-400 inline-block my-auto" />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
ItemCard.propTypes = {
  item: PropTypes.object.isRequired,
  setCart: PropTypes.func.isRequired,
};

export default ItemCard;
