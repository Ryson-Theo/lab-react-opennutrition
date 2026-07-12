// src/App.js
import { useState } from 'react';
import { Row, Divider, Button } from 'antd';
import foodsData from './foods.json';
import FoodBox from './components/FoodBox';
import AddFoodForm from './components/AddFoodForm';
import Search from './components/Search';
import './App.css';

function App() {
  const [foods, setFoods] = useState(foodsData);
  const [searchQuery, setSearchQuery] = useState('');
  
 
  const [showForm, setShowForm] = useState(true);

  
  const addNewFood = (newFood) => {
    setFoods([newFood, ...foods]);
  };

  
  const deleteFood = (foodName) => {
    const freshFoods = foods.filter((food) => food.name !== foodName);
    setFoods(freshFoods);
  };

  
  const displayedFoods = foods.filter((food) =>
    food.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="App" style={{ padding: '20px 40px' }}>
      
      
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <Button onClick={() => setShowForm(!showForm)}>
          {showForm ? 'Hide Form' : 'Add New Food'}
        </Button>
      </div>

      {showForm && <AddFoodForm addNewFood={addNewFood} />}

      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      <Divider>Food List</Divider>

  
      {displayedFoods.length === 0 ? (
        <div style={{ textAlign: 'center', padding: '40px 0' }}>
          <p style={{ fontSize: '1.2rem', fontWeight: 'bold' }}>Oops! There is no more content to show.</p>
          <img 
            src="https://cdn-icons-png.flaticon.com/512/5058/5058406.png" 
            alt="empty state" 
            style={{ width: '100px', opacity: 0.5 }} 
          />
        </div>
      ) : (
        <Row gutter={[16, 16]}>
          {displayedFoods.map((food) => (
            <FoodBox 
              key={food.name} 
              food={food} 
              clickToDelete={deleteFood} 
            />
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;