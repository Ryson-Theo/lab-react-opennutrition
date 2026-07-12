// src/components/AddFoodForm.js
import { useState } from 'react';
import { Divider, Input, Button } from 'antd';

function AddFoodForm({ addNewFood }) {
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [calories, setCalories] = useState(0);
  const [servings, setServings] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Pass the new food object to the parent handler
    addNewFood({ name, image, calories, servings });

    // Reset fields
    setName('');
    setImage('');
    setCalories(0);
    setServings(1);
  };

  return (
    <form onSubmit={handleSubmit} style={{ width: '400px', margin: '0 auto 20px auto' }}>
      <Divider>Add Food Entry</Divider>

      <label>Name</label>
      <Input value={name} type="text" onChange={(e) => setName(e.target.value)} style={{ marginBottom: '10px' }} />

      <label>Image URL</label>
      <Input value={image} type="text" onChange={(e) => setImage(e.target.value)} style={{ marginBottom: '10px' }} />

      <label>Calories</label>
      <Input value={calories} type="number" onChange={(e) => setCalories(Number(e.target.value))} style={{ marginBottom: '10px' }} />

      <label>Servings</label>
      <Input value={servings} type="number" onChange={(e) => setServings(Number(e.target.value))} style={{ marginBottom: '15px' }} />

      <Button type="primary" htmlType="submit" style={{ width: '100%' }}>Create</Button>
    </form>
  );
}

export default AddFoodForm;