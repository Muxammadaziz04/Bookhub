import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import cls from './SingleItem.module.scss'

const SingleItem = ({
    id = '',
    image = '',
    title = '',
    desc = '',
    author = '',
    year = '',
    summ = 0
}) => {
    const dispatch = useDispatch()

    return (
        <div className='container'>
            <div className={cls.box}>
                <div className={cls.box__image}>
                    <img src={image} alt={image} />
                </div>
                <div className={cls.box__info}>
                    <div className={cls.text}><span>Name:</span> {title}</div>
                    <div className={cls.text}><span>Author:</span> {author}</div>
                    <div className={cls.text}><span>Year:</span> {year}</div>
                    <div className={cls.text}><span>Description:</span> {desc}</div>
                    <div className={cls.text}><span>Price:</span> {summ}$</div>
                    <button className={cls.btn} onClick={() => dispatch(cartActions.addBook({id, image, title, year, count: 1, summ}))}>Add to cart</button>
                </div>
            </div>
        </div>
    );
}

export default SingleItem;
