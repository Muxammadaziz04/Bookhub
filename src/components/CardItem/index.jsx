import { MinusOutlined, PlusOutlined } from '@ant-design/icons';
import cls from './CardItem.module.scss'

const CardItem = () => {
    return (
        <div className={cls.card}>
            <img src="https://media.geeksforgeeks.org/wp-content/uploads/20190709182914/Programming-Python.jpg" alt="" />
            <div>
                <h2>Python </h2>
                <h3>2009</h3>
            </div>
            <div className={cls.counter}>
                <button><PlusOutlined /></button>
                <span>1</span>
                <button><MinusOutlined /></button>
            </div>
        </div>
    );
}

export default CardItem;
