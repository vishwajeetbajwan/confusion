import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const DishdetailComponent = ({ dishes }) => {
  const renderComments = (comments) => {
    const Comments = comments.map((comment) => {
      return (
        <li key={comment.id}>
          <p>{comment.comment}</p>
          <p>
            -- {comment.author}, &nbsp;
            {new Intl.DateTimeFormat('pt-BR', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            }).format(new Date(comment.date))}
          </p>
        </li>
      );
    });
    return (
      <div className="col-12 col-md-5 m-1">
        <h4> Comments </h4>
        <ul className="list-unstyled">{Comments}</ul>
      </div>
    );
  };

  const renderDish = ({ dish }) => {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div></div>;
  };

  const dish = dishes;
  console.log(dish);
  const dishId = renderDish(dish);
  const commentDish = renderComments(dish.comments);
  return (
    <div className="row">
      {dishId}
      {commentDish}
    </div>
  );
};

export default DishdetailComponent;
