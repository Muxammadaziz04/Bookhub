import React from 'react';

const Card = () => {
    return (
        <div className="card">
            <div className="card__img">
                <img id="img" src="https://media.geeksforgeeks.org/wp-content/uploads/20190709182914/Programming-Python.jpg" alt="" />
            </div>
            <h4 className="card__title" id="title">
                Python
            </h4>
            <p className="card__author" id="author" />
            <p className="card__year" id="year">
                2009
            </p>
            <div className="card__btns">
                <button className="card__bookmark__btn card__btn" data-task="bookmark">
                    Add to cart
                </button>
                <button className="card__info__btn card__btn" data-task="moreInfo">
                    More Info
                </button>
            </div>
        </div>
    );
}

export default Card;
