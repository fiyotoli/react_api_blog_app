// src/pages/Login/Login.jsx
import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd'; // Import Ant Design components
import { useNavigate,Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Login = () => {
    const [alert, setAlert] = useState({ message: '', type: '' });
    const navigate = useNavigate();

    const handleFinish = (values) => {
        // Navigate to home after successful login
        navigate('/home');
    };

    return (
        <div className="container mt-5 d-flex justify-content-center pt-5">
            <div className="col-md-6 col-12 mt-3 shadow p-4 bg-white rounded">
                <h2 className="text-center font-weight-bolder">Sign <span className='text-success'>In</span> </h2>
                {alert.message && (
                    <Alert message={alert.message} type={alert.type} />
                )}
                <Form onFinish={handleFinish}>
                    <Form.Item
                        name="email"
                        rules={[{ required: true, message: 'Please input your email!' }]}
                    >
                        <Input placeholder="Email" className="form-control" />
                    </Form.Item>
                    <Form.Item
                        name="password"
                        rules={[{ required: true, message: 'Please input your password!' }]}
                    >
                        <Input.Password placeholder="Password" className="form-control" />
                    </Form.Item>
                    <Form.Item>
                        <Button type="success" htmlType="submit" className="btn btn-success w-100">
                            Login
                        </Button>
                    </Form.Item>
                </Form>
                <div className="mt-3 text-center">
                    Don't have an account?{' '}
                    <Link to ="/register">register here</Link>
                    </div>
            </div>
        </div>
    );
};

export default Login;
