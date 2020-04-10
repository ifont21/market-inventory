import React from "react";
import "./category-card.styles.scss";
import { withRouter } from "react-router-dom";

const CategoryCard = ({ items, img, name, history, match }) => {
  const existence = items.filter((item) => item.exist);

  const onClickedCard = () =>
    history.push(`${match.path}${name.toLowerCase()}`);

  return (
    <div className="category-card__wrapper">
      <div className="category-card__card" onClick={onClickedCard}>
        <div className="category-card__title">
          <div className="category-card__img-container">
            <img src={img} alt={name} />
          </div>
          <h2>{name}</h2>
        </div>
        <div className="category-card__description">
          <div className="category-card__amount">
            <span>Existence</span>
            <span>{existence.length}</span>
          </div>
          <div className="category-card__amount">
            <span>Registered</span>
            <span>{items.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default withRouter(CategoryCard);
