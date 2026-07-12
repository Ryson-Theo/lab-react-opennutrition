// src/components/FoodBox.js
import { Card, Col, Button } from 'antd';

function FoodBox({ food, clickToDelete }) {
  const totalCalories = food.calories * food.servings;

  return (
    <Col xs={24} sm={12} md={8} lg={6}>
      <Card title={food.name} style={{ margin: 10 }}>
        <img src={food.image} height={60} alt={food.name} style={{ display: 'block', margin: '0 auto 10px auto' }} />
        <p>Calories: {food.calories}</p>
        <p>Servings: <strong>{food.servings}</strong></p>
        <p>
          <b>Total Calories: {totalCalories} </b> kcal
        </p>
        <Button type="primary" danger onClick={() => clickToDelete(food.name)}>
          Delete
        </Button>
      </Card>
    </Col>
  );
}

export default FoodBox;