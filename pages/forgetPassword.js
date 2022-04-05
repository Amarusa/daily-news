import Link from 'next/link'
import { Alert } from 'react-bootstrap'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useAuth } from '../context/AuthContext'


const forgetPassword = () => {
   const [message, setMessage] = useState()
  const { user, resetPassword } = useAuth()
  const [error, setError] = useState("")
  const [data, setData] = useState({
    email: '',
   
  })

  const handleLogin = async (e) => {
    e.preventDefault()

    console.log(user)
    try {
        setMessage('')
      await resetPassword(data.email)
      setMessage ('Check your inbox further instractions')
   
    } catch (err) {
      setError("Failed to rest password")
    }
  }

  return (
    <div
      style={{
        width: '40%',
        margin: 'auto',
      }}
    >
      <h1 className="text-center my-3 ">Password Reset</h1>
      {error && <Alert variant="danger">{error}</Alert>}
      {message && <Alert variant="success">{message}</Alert>}
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            onChange={(e) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
            required
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Reset Password
        </Button>
      </Form>
      <div className='w-100 text-center mt-3'>
        <Link href='/login'>Login</Link>
      </div>
      <div className='w-100 text-center mt-3'>
        need and account? <Link href='/signup'>Sign Up</Link>
      </div>
    </div>
  )
}

export default forgetPassword