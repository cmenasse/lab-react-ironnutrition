import './App.css';
import { useState } from 'react';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox'
import AddFoodForm from './components/AddFoodForm'


function App() {
  const [foods, setFoods] = useState(foodsData);

  const addFood = (food) => {
    const updatedFoods = [...foods, food];
    setFoods(updatedFoods);
  };

  return (
  <div className="App">
  <AddFoodForm addFood={addFood}/>
  {foods.map(food => {
    return(<FoodBox food={food}/>);
  })};
  </div>);
}

export default App;