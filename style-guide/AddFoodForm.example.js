import { useState } from "react";
import { Divider, Input } from 'antd';

function AddFoodForm(props) {

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(0);


  const handleSubmit = (e) => {       
    e.preventDefault();
    const newFood= { name, image, calories, servings };
    props.addFood(newFood);       
 
  return (
    <form>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Image</label>
      <Input value={undefined} type="text" onChange={() => {}} />

      <label>Calories</label>
      <Input value={undefined} type="number" min="1" onChange={() => {}} />

      <label>Servings</label>
      <Input value={undefined} type="number" min="1" onChange={() => {}} />

      <button type="submit">Create</button>
    </form>
  );
}

export default AddFoodForm;
