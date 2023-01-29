import {CloseOutlined} from '@ant-design/icons'
import CardItem from '../CardItem';
import cls from './Buscket.module.scss'

const Buscket = ({setOpen}) => {
    return (
        <div className={cls.wrapper}>
            <div className={cls.wrapper__nav}>
                <button onClick={() => setOpen(false)}><CloseOutlined /></button>
            </div>
            <div className={cls.body}>
                <CardItem />
                <CardItem />
                <CardItem />
            </div>
        </div>
    );
}

export default Buscket;
