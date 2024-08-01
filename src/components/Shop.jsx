import { useState,useEffect } from "react";
import ItemCard from "./ItemCard";
import PropTypes from "prop-types";

const Shop = ({ shoppingCart, setShoppingCart }) => {
  const [items, setItems] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async (url) => {
      try {
        const res= await fetch(url)
        if(!res.ok){
          throw new Error(`HTTP error: Status ${res.status}`)
        }
        const data=await res.json()
        setItems(data);
        setError(null)
      } catch (err) {
        console.error(err)
        setError(err.message);
        setItems(null)
      }finally{
        setLoading(false);
      }
    };
    fetchData('https://fakestoreapi.com/products');
  }, []);

  return (
    <div className="mx-2">
      {loading && (
        <div>Loading...</div>
      )}
      {error && (
        <div>Error:{error}</div>
      )}
      {items && items.map((item) => (
        <ItemCard
          key={item.id}
          item={item}
          cart={shoppingCart}
          setCart={setShoppingCart}
        />
      ))}
    </div>
  );
};
Shop.propTypes = {
  shoppingCart: PropTypes.array.isRequired,
  setShoppingCart: PropTypes.func.isRequired,
};
export default Shop;
