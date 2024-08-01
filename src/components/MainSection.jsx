import Image1 from "../assets/mainsection1.jpg";
import Image2 from "../assets/mainsection2.jpg";
import Image3 from "../assets/mainsection3.jpg";

const headerContent = [
  {
    title: "Welcome to ShopEase",
    text: "Your one-stop destination for all your shopping needs!",
  },
  {
    title: "Discover Your Style",
    text: "Find the latest trends and styles, curated just for you.",
  },
  {
    title: "Shop the Summer Sale",
    text: "Up to 50% off on selected items! Don’t miss out.",
  },
  {
    title: "New Arrivals Are Here!",
    text: "Explore the latest collections from top brands.",
  },
];
const Section1 = (
  <section>
    <ul className="flex flex-col">
      {headerContent.map((item) => (
        <li
          className="p-5 my-2 w-1/2 even:self-end text-center bg-white rounded-xl bg-opacity-65"
          key={item.title}
        >
          <p className="font-bold text-2xl">{item.title}</p>
          <p className="text-lg">{item.text}</p>
        </li>
      ))}
    </ul>
  </section>
);
const Section2Images = [
  { url: Image1, description: "Fashion and Apparel" },
  { url: Image2, description: "Home and Living" },
  { url: Image3, description: "Electronics and Gadgets" },
];
const Section2 = (
  <section>
    <div className="mt-5 py-5 mb-10 flex flex-row justify-evenly max-h-[500px] bg-white bg-opacity-80 rounded-xl">
      {Section2Images.map((item) => (
        <img
          key={item.description}
          src={item.url}
          className="w-1/4 object-cover rounded-2xl odd:mt-20 even:mb-20"
          alt={item.description}
        />
      ))}
    </div>
  </section>
);
const MainSection = () => {
  return (
    <div>
      {Section1}
      {Section2}
    </div>
  );
};
export default MainSection;
