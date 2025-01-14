import { useState } from "react";
import Title from "./Title";
import menu from "./data";
import Menu from "./Menu";
import Categories from "./Categories";

const App = () => {
  //allow you to modify the data and have those changes automatically reflected in the rendered output
  const [menuItems, setMenuItems] = useState(menu);

  //get all the unique categories.
  // const tempCategories = menu.map((item) => item.category);
  // const temSet = new Set(tempCategories);
  // const tempItems = ["all", ...temSet];

  const allCategories = ["all", ...new Set(menu.map((item) => item.category))];
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    const newItems = () => {
      if (category === "all") {
        return menu;
      } else return menu.filter((item) => item.category === category);
    };
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="our menu" />
        <Categories categories={categories} filterItems={filterItems} />
        <Menu menuItems={menuItems} />
      </section>
    </main>
  );
};
export default App;
