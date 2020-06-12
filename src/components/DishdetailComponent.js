import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

const RenderComments = ({ comments }) => {
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

const RenderDish = ({ dish }) => {
  if (dish != null)
    return (
      <Card>
        <CardImg top src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
          {/*<CardText>
            <RenderComments dish={dish.comments} />
          </CardText>*/}
        </CardBody>
      </Card>
    );
  else return <div></div>;
};

const DishdetailComponent = (props) => {
  console.log(props.dish);
  return (
    <div className="row">
      <RenderDish dish={props.dish} />
      {/*<RenderComments dish={props.dish.comments} />*/}
    </div>
  );
};

export default DishdetailComponent;
