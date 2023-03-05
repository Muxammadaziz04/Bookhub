import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { cartActions } from '../../store/cart';
import cls from './CardItem.module.scss'

const CardItem = ({
    id = '',
    title = '',
    image = '',
    year = '',
    count = 1
}) => {
    const dispatch = useDispatch()

    return (
        <div className={cls.card}>
            <img src={image} alt={title} />
            <div>
                <h2>{title} </h2>
                <h3>{year}</h3>
            </div>
            <div className={cls.counter}>
                <button onClick={() => dispatch(cartActions.addCount({id}))}><PlusOutlined /></button>
                <span>{count}</span>
                <button onClick={() => dispatch(cartActions.removeCount({id}))}><MinusOutlined /></button>
            </div>
        </div>
    );
}

export default CardItem;
