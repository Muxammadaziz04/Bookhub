import { Button, Form, Input } from 'antd'
import axios from 'axios';
import { useRouter } from 'next/router';
import { parseCookies } from 'nookies';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { cartActions } from '../../store/cart';
import CardItem from '../CardItem'
import Loader from '../Loader';
import cls from './COrder.module.scss'

const COrder = () => {
    const [loading, setLoading] = useState(false)
    const items = useSelector(state => state.cart) || []
    const router = useRouter()
    const dispatch = useDispatch()

    const onFinish = async (data) => {
      try {
        setLoading(true)
        const cookies = parseCookies()
        if(!cookies.token) {
            router.push('/auth/register')
        } else {

            const body ={
                data:  {
                    summ: items?.reduce((acc, book) => acc + book.count * book.summ, 0),
                    books: items.map(item => item.id),
                    user: Number(cookies.user_id),
                    clientName: cookies.clientName,
                    ...data
                }
            }

            const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/api/orders`, body, {
                headers: {
                    Authorization: `Bearer ${cookies.token}`
                }
            })
            
            if(res.status === 200) {
                dispatch(cartActions.removeBooks())
            }
            alert(res.status === 200 ? 'your order is accepted' : "Somethink went wrong")
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false)
      }
    }
    return (
        <div className='container'>
            {loading && <Loader />}
            <div className={cls.box}>
                <div className={cls.items}>
                    {
                        items?.length > 0 ? items.map(book =>
                            <CardItem
                                id={book.id}
                                key={book.id}
                                title={book?.title}
                                image={book.image}
                                year={book.year}
                                count={book.count}
                            />
                        ) : <h3 style={{ padding: "10px", textAlign: 'center' }}>cart is empty</h3>
                    }
                    <p style={{margin: "22px"}}>Total: {items?.reduce((acc, book) => acc + (book.summ * book.count), 0)}$</p> 
                </div>
                <div>
                    <Form
                        name="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                    >
                        <Form.Item
                            name="adress"
                            rules={[{ required: true, message: 'Please input your adress!' }]}
                        >
                            <Input
                                placeholder="adress"
                            />
                        </Form.Item>

                        <Form.Item
                            name="phoneNumber"
                            rules={[{ required: true, message: 'Please input your phone number!' }]}
                        >
                            <Input
                                type='number'
                                placeholder="Phone number"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Order
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </div>   
        </div>
    );
}

export default COrder;
