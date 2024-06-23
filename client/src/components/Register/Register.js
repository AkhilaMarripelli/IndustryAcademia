import React, { useState } from 'react';
    import { Form, Button, Card, Container } from 'react-bootstrap';
    import { useNavigate } from 'react-router-dom';
    import { toast, ToastContainer } from 'react-toastify';
    import 'react-toastify/dist/ReactToastify.css';
    import axios from 'axios';
    
    const Register = () => {
        const [form, setForm] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
        });
        const [validated, setValidated] = useState(false);
        const navigate = useNavigate();
    
        const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        });
        };
    
        const handleSubmit = async (e) => {
        e.preventDefault();
        const formElement = e.currentTarget;
        if (formElement.checkValidity() === false || form.password !== form.confirmPassword) {
            e.stopPropagation();
        } else {
            try {
            const response = await axios.post('http://localhost:5000/api/users/register', form, {
                headers: {
                'Content-Type': 'application/json',
                }
            });
            if (response.status === 201) { // Assuming 201 for created user
                toast.success('User registration is successful!');
                setTimeout(() => navigate('/login'), 2000);
            } else {
                toast.error('Try registering again!');
            }
            } catch (error) {
            toast.error('Try registering again!');
            console.error('Error:', error);
            
            }
        }
        setValidated(true);
        };
    
        return (
        <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: '100vh' }}>
            <Card style={{ width: '400px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
            <Card.Body>
                <h2 className="text-center mb-4">Register</h2>
                <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Form.Group id="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                    type="text"
                    name="username"
                    value={form.username}
                    onChange={handleChange}
                    required
                    isInvalid={validated && !form.username}
                    />
                    <Form.Control.Feedback type="invalid">
                    Please provide a username.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group id="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    isInvalid={validated && !form.email}
                    />
                    <Form.Control.Feedback type="invalid">
                    Please provide a valid email.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group id="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="password"
                    value={form.password}
                    onChange={handleChange}
                    required
                    isInvalid={validated && !form.password}
                    />
                    <Form.Control.Feedback type="invalid">
                    Please provide a password.
                    </Form.Control.Feedback>
                </Form.Group>
                <Form.Group id="confirm-password">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control
                    type="password"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    required
                    isInvalid={validated && (form.confirmPassword !== form.password)}
                    isValid={validated && form.confirmPassword === form.password && form.confirmPassword !== ''}
                    />
                    <Form.Control.Feedback type="invalid">
                    {form.confirmPassword !== form.password ? 'Passwords do not match' : 'Please confirm your password.'}
                    </Form.Control.Feedback>
                </Form.Group>
                
                <Button className="w-100 mt-4" type="submit">
                    Register
                </Button>
                
                </Form>
                <div className="text-center mt-3">
                Already have an account? <a href="/login">Login</a>
                </div>
            </Card.Body>
            </Card>
            <ToastContainer />
        </Container>
        );
    };
    
    export default Register;