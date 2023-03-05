import {CloseOutlined} from '@ant-design/icons'
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import CardItem from '../CardItem';
import cls from './Buscket.module.scss'

const Buscket = ({setOpen}) => {
    const items = useSelector(state => state.cart)
    const router = useRouter()
    
    return (
        <div className={cls.wrapper}>
            <div className={cls.wrapper__nav}>
                <button onClick={() => setOpen(false)}><CloseOutlined /></button>
            </div>
            <div className={cls.body}>
                {
                    items?.length > 0 ? items.map(book => 
                        <CardItem 
                            id={book.id}
                            key={book.id}
                            title={book.title}
                            image={book.image}
                            year={book.year}
                            count={book.count}
                        />                        
                    ) : <h3 style={{padding: "10px", textAlign: 'center'}}>cart is empty</h3>
                }
            </div>
            <p style={{margin: "22px"}}>Total: {items?.reduce((acc, book) => acc + (book.summ * book.count), 0)}$</p>
            {items?.length > 0 && <button className={cls.btn} onClick={() => {router.push('/order'); setOpen(false)}}>Order</button>}
        </div>
    );
}

export default Buscket;
