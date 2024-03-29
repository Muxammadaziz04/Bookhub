import { Button, Form, Input } from 'antd'
import axios from 'axios';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { setCookie } from 'nookies';
import toast, { Toaster } from 'react-hot-toast';

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };


const Login = () => {
    const router = useRouter()

    const onFinish = async values => {
        let res = null
        try {
            toast.loading('Loading...')
            res = await axios.post(`${process.env.NEXT_PUBLIC_API}/api/auth/local/`, {identifier: values.email, password: values.password})
            if(res.status === 200) {
                setCookie(null, 'token', res.data.jwt, {path: '/'})
                setCookie(null, 'user_id', res.data.user.id, {path: '/'})
                setCookie(null, 'clientName', res.data.user?.FirstName, {path: '/'})
                router.push('/order')
            } else {
                alert('Somethink went wrong')
            }
        } catch (error) {
            
        } finally {
            toast.dismiss()
            res?.status === 200 ? toast.success('Successful logined') : toast.error('Somethink went wrong')
        }
    };

    return (
        <>
        <Toaster />
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
                        <p className="form-title">Welcome back</p>
                        <p>Login to the Bookhub</p>

                        <Form.Item
                            name="email"
                            rules={[{ required: true, message: 'Please input your username!' }]}
                        >
                            <Input
                                placeholder="Email"
                            />
                        </Form.Item>

                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: 'Please input your password!' }]}
                        >
                            <Input.Password
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                LOGIN
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Link href='/auth/register'>
                                or Register
                            </Link>
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </>
    );
}

export default Login;
