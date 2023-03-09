import { Button, Form, Input } from 'antd'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';


const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
};


const Login = () => {
    const router = useRouter()
    const onFinish = async values => {
        console.log('Success:', values);
        console.log(`${process.env.NEXT_PUBLIC_API}/api/auth/local/register`);
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API}/api/auth/local/register`, values)
        if(res.status === 200) {
            setCookie(null, 'token', res.data.jwt)
            setCookie(null, 'user_id', res.data.user.id)
            setCookie(null, 'clientName', res.data.user.FirstName)
            router.back()
        } else {
            alert('Somethink went wrong')
        }
    };
    return (
        <>
            <div className="login-page">
                <div className="login-box">
                    <div className="illustration-wrapper">
                        <img src="https://mixkit.imgix.net/art/preview/mixkit-left-handed-man-sitting-at-a-table-writing-in-a-notebook-27-original-large.png?q=80&auto=format%2Ccompress&h=700" alt="Login" />
                    </div>
                    <Form
                        name="login-form"
                        initialValues={{ remember: true }}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}
                    >
                        <p className="form-title" style={{marginBottom: '10px'}}>Welcome to Bookhub</p>
                        <Form.Item
                            name="FirstName"
                            rules={[{ required: true, message: 'Please input your First name!' }]}
                        >
                            <Input
                                placeholder="First name"
                            />
                        </Form.Item>

                        <Form.Item
                            name="LastName"
                            rules={[{ required: true, message: 'Please input your last name!' }]}
                        >
                            <Input
                                placeholder="Last name"
                            />
                        </Form.Item>

                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input
                                placeholder="User Name"
                            />
                        </Form.Item>

                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your email!' }]}
                        >
                            <Input
                                placeholder="Email"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!', min: 6}]}
                        >
                            <Input.Password
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Register
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link href='/auth/login'>or login</Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Login;
