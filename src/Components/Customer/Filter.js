// Filter page
import { useEffect, useState } from "react";
// import Menu from "../../Menu";
import FilterCard from "./FilterCard";
import Food from "./Food";

const Filter = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [filterCategory, setFilterCategory] = useState("");

  // useEffect(() => {
  //   setMenuItems(Menu);
  // }, []);

  useEffect(() => {
    setMenuItems([]);
  }, []);

  return (
    <section className="container filter rounded animate__animated animate__fadeIn">
      <hr></hr>
      <Food setFilterCategory={setFilterCategory} />
      <div className="row">
        {filterCategory === ""
          ? menuItems.map((item) => {
            return (
              <div className="p-1 col-12 col-md-4 col-lg-3">
                <FilterCard
                  name={item.name}
                  type={item.type}
                  price={item.price}
                />
              </div>
            );
          })
          : menuItems
            .filter((item) => item.type === filterCategory)
            .map((filteredMenu) => {
              return (
                <div className="p-1 col-12 col-md-4 col-lg-3">
                  <FilterCard
                    name={filteredMenu.name}
                    type={filteredMenu.type}
                    price={filteredMenu.price}
                  />
                </div>
              );
            })}
      </div>
    </section>
  );
};

export default Filter;
