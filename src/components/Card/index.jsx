import { useRouter } from 'next/router';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';

const Card = ({
    id = '',
    image = '',
    title = '',
    year = '',
    summ = 0,
}) => {
    const router = useRouter()
    const dispatch = useDispatch()

    return (
        <div className="card">
            <div className="card__img">
                <img id="img" src={image} alt={title} />
            </div>
            <h4 className="card__title" id="title">
                {title}
            </h4>
            <p className="card__author" id="author" />
            <p className="card__year" id="year">
                {year}
                <span>{summ}$</span>
            </p>
            <div className="card__btns">
                <button className="card__bookmark__btn card__btn" data-task="bookmark" onClick={() => dispatch(cartActions.addBook({id, title, image, year, count: 1, summ}))}>
                    Add to cart
                </button>
                <button className="card__info__btn card__btn" data-task="moreInfo" onClick={() => router.push(`/books/${id}`)}>
                    More Info
                </button>
            </div>
        </div>
    );
}

export default Card;
