import { useState } from "react";
import Cat from "./SingleCat";

function CatList() {
  const cats = [
    {
      name: "Cheetah",
      latinName: "Acinonyx jubatus",
      image: "../images/cheetah.jpg",
    },
    {
      name: "Cougar",
      latinName: "Puma concolor",
      image: "../images/cougar.jpg",
    },
    {
      name: "Jaguar",
      latinName: "Panthera onca",
      image: "../images/jaguar.jpg",
    },
    {
      name: "Leopard",
      latinName: "Panthera pardus",
      image: "../images/leopard.jpg",
    },
    { name: "Lion", latinName: "Panthera leo", image: "../images/lion.jpg" },
    {
      name: "Snow leopard",
      latinName: "Panthera uncia",
      image: "../images/snowleopard.jpg",
    },
    {
      name: "Tiger",
      latinName: "Panthera tigris",
      image: "../images/tiger.jpg",
    },
  ];

  const [currentCats, setCurrentCats] = useState(cats);

  const catItemsComponent = currentCats.map((cat) => (
    <Cat
      key={cat.name}
      name={cat.name}
      latinName={cat.latinName}
      image={cat.image}
    />
  ));

  const handleSortCatsByName = () => {
    console.log("Handlesortcats");
    let newCats = [...currentCats];
    newCats.reverse();
    //sort compares a to b in arrow function
    newCats.sort((a, b) => a.name.localeCompare(b.name));
    setCurrentCats(newCats);
  };

  const handleReverseCats = () => {
    console.log("Handlereversecats");
    let newCats = [...currentCats];
    newCats.reverse();
    setCurrentCats(newCats);
  };

  const handleFilterPantheraCats = () => {
    console.log("HandleFilterPantheraCats");
    let pantheraCats = cats.filter((cat) => cat.latinName.includes("Panthera"));
    setCurrentCats(pantheraCats);
  };

  const handleResetCats = () => {
    console.log("HandleResetCats")
    setCurrentCats(cats);
  }


  return (
    <div>
      <ul>{catItemsComponent}</ul>
      <button onClick={handleReverseCats}>Reverse Cats!</button>
      <button onClick={handleSortCatsByName}>Sort Cats by Name!!</button>
      <button onClick={handleFilterPantheraCats}>Filter Panthera Family</button>
      <button onClick={handleResetCats}>Reset Cat List</button>
    </div>
  );
}

export default CatList;
