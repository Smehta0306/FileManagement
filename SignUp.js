import React, {useRef, useState} from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap'
import {useAuth} from '../contexts/AuthContext'
import {Link, useNavigate } from 'react-router-dom'
import CenteredContainer from './CenteredContainer';
import {FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

 export default function SignUp() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwoedConfirmationRef = useRef()
    const { signup } = useAuth() 
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    async function handleSubmit(e) {
        e.preventDefault()

        if(passwordRef.current.value !== passwoedConfirmationRef.current.value) {
            return setError('Passwords do not match')
        }

        try {
            setError('')
            setLoading(true)
            await signup(emailRef.current.value, passwordRef.current.value)
            navigate("/")
        }
        catch {
            setError('Failed to create an account')
        }s
        setLoading(false)
       
    }

    return(
        <CenteredContainer>
        <Card>
            <Card.Body>
            <h2 className='text-center mb-4'><FontAwesomeIcon icon={faUser} />Sign Up</h2>
            {error && <Alert variant='danger'>{error}</Alert>}
            <Form onSubmit={handleSubmit}>
               <Form.Group id="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type='email' ref={emailRef} required />
                </Form.Group> 

                <Form.Group id="password">
                <Form.Label>Password</Form.Label>
                <Form.Control type='password' ref={passwordRef} required />
                </Form.Group>

                <Form.Group id="password-confirmation">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type='password' ref={passwoedConfirmationRef} required />
                </Form.Group>
                <br></br>

                <Button disabled={loading} className="w-100" type='submit'>Sign Up</Button>
            </Form>
            </Card.Body>
        </Card>
        <div className='w-100 text-center mt-2'>
            Already have an account?<Link to="/login">Log in</Link>
        </div>
        </CenteredContainer>
    )
 }