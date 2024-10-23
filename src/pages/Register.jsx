// src/pages/Register/Register.jsx
import React, { useState } from 'react';
import { Form, Input, Button, Alert } from 'antd'; // Import Ant Design components
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

const Register = () => {
    const [alert, setAlert] = useState({ message: '', type: '' });
    const [buttonColor, setButtonColor] = useState('success'); // Set initial button color to success
    const navigate = useNavigate();

    const handleFinish = (values) => {
        // Simulate successful registration
        setAlert({ message: 'Registration successful!', type: 'success' });
        setTimeout(() => {
            navigate('/login'); // Navigate to login after registration
        }, 2000);
    };

    return (
        <div className="container mt-5 pt-5 d-flex justify-content-center">
            <div className="shadow p-4 mt-5 bg-white rounded col-12 col-md-7"> {/* Full width on small screens, col-8 on medium and larger */}
                <h2 className="text-center font-weight-bolder">Sign <span className='text-success'>Up</span></h2>
              
                {alert.message && (
                    <Alert message={alert.message} type={alert.type} />
                )}
                <Form onFinish={handleFinish}>
                    <Form.Item
                        name="name"
                        rules={[{ required: true, message: 'Please input your name!' }]}
                    >
                        <Input placeholder="Name" className="form-control" />
                    </Form.Item>
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
                        <Button
                            type="success" // Keep this as primary, we'll change color on click
                            htmlType="submit"
                            className="btn btn-success w-100" // Set button to full width
                            onClick={() => setButtonColor('success')} // Change button color on click
                        >
                            Register
                        </Button>
                    </Form.Item>
                </Form>
                <div className="mt-3 text-center">
                    Already have an account?{' '}
                    <a href="/login" className='' style={{ textDecoration: 'none' }}>Login here</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
