import { useState } from "react";
import { Divider, Input } from 'antd';

// Iteration 4
function AddFoodForm(props) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);

  const handleNameInput = e => setName(e.target.value);
  const handleImageInput = e => setImage(e.target.value);
  const handleCaloriesInput = e => setCalories(e.target.value);
  const handleServingsInput = e => setHasOscars(e.target.checked);
 
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={image} type="text" onChange={() => {}} />

      <label>Calories</label>
      <Input value={calories} type="number" min="1" onChange={() => {}} />

      <label>Servings</label>
      <Input value={servings} type="number" min="0" onChange={() => {}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;