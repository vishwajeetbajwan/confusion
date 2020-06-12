import React, { useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishdetailComponent from './DishdetailComponent';
//import { connect } from 'react-redux';

const Menu = (props) => {
  const [selectedDish, setSelectedDish] = useState(null);

  const onDishSelect = (dish) => {
    setSelectedDish(dish);
  };

  const menu = props.dishes.map((dish) => {
    return (
      <div className="col-12 col-md-5 m-1">
        <Card key={dish.id} onClick={() => onDishSelect(dish)}>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">{menu}</div>
      {/* <div className="col-12 col-md-5 m-1">{renderDish(selectedDish)}</div> */}
      <DishdetailComponent dish={selectedDish} />
    </div>
  );
};
/*
const mapStateToProps = (state) => ({
  dishes: state.dishes,
});*/

export default Menu;
