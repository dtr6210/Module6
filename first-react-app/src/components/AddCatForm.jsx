import { useState } from "react";

function AddCatForm({ onAddCat }) {
  const [catData, setCatData] = useState({
    name: "",
    latinName: "",
    image: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat(catData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={catData.name}
          onChange={(e) => setCatData({ ...catData, name: e.target.value })}
        />
      </label>
      <label>
        Latin Name:
        <input
          type="text"
          name="latinName"
          value={catData.latinName}
          onChange={(e) =>
            setCatData({ ...catData, latinName: e.target.value })
          }
        />
      </label>
      <label>
        Image:
        <input
          type="text"
          name="image"
          value={catData.image}
          onChange={(e) => setCatData({ ...catData, image: e.target.value })}
        />
      </label>
      <button>Add Cat</button>
    </form>
  );
}

export default AddCatForm;
