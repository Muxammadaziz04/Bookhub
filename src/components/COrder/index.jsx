import { Button, Form, Input } from 'antd'
import CardItem from '../CardItem';
import cls from './COrder.module.scss'

const COrder = () => {
    return (
        <div className='container'>
            <div className={cls.box}>
                <div className={cls.items}>
                    <CardItem />
                </div>
                <div>
                    <Form
                        name="login-form"
                        initialValues={{ remember: true }}
                    >
                        <Form.Item
                            name="Adress"
                            rules={[{ required: true, message: 'Please input your adress!' }]}
                        >
                            <Input
                                placeholder="Adress"
                            />
                        </Form.Item>

                        <Form.Item
                            name="Phone number"
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
