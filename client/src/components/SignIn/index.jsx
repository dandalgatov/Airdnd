import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Form, Button, Modal } from 'semantic-ui-react'
import { signInUser, registerUser } from '../../services/auth'

export default function SignIn(props) {
    const { setCurrentUser } = props
    const [register, setRegister] = useState(false)
    const [userData, setUserData] = useState({})
    const [modalOpen, setModalOpen] = useState(false)
    const history = useHistory()

    const regExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/


    const registerTrigger = () => {
        setRegister(!register)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSignIn = async (e, data) => {
        e.preventDefault()
        if (regExp.test(userData.email) && userData.password.length >= 6) {
            try {
                setCurrentUser(await signInUser(userData))
            } catch (error) {
                alert('Unable to authorize. Please check credentials.')
            }
        } else {
            alert('You must enter a valid email, and your password must be atleast 6 characters long')
        }
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        const { first_name, email, password, confirm_password } = userData
        if (regExp.test(email) === false) {
            alert('You must enter a valid email!')
        } else if (password !== confirm_password) {
            alert('Your passwords don\'t match')
        } else if (!first_name || !password || !confirm_password) {
            alert('Please fill out all required fields')
        } else {
            delete userData.confirm_password
            try {
                setCurrentUser(await registerUser(userData))
                setModalOpen(false)
                history.push('/profile')
            } catch (error) {
                alert('Unable to register')
            }
        }
    }

    return (
        <Modal
            size='tiny'
            open={modalOpen}
            onOpen={() => setModalOpen(true)}
            onClose={() => setModalOpen(false)}
            trigger={<Button style={{ backgroundColor: "white" }}>Sign In</Button>}
        >

            <Modal.Header>
                Sign in
            </Modal.Header>
            <Modal.Content>
                <Form onChange={handleChange}>
                    {register ?
                        <Form.Group widths='equal'>
                            <Form.Field required>
                                <label>First Name</label>
                                <input placeholder='First Name' name='first_name' />
                            </Form.Field>
                            <Form.Field >
                                <label>Last Name</label>
                                <input placeholder='Last Name' name='last_name' />
                            </Form.Field>
                        </Form.Group> : ''
                    }
                    <Form.Field required >
                        <label>Email</label>
                        <input type='email' placeholder='Email' name='email' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <input type='password' placeholder='Password' name='password' />
                    </Form.Field>
                    {register ?
                        <Form.Field required>
                            <label>Confirm Password</label>
                            <input type='password' placeholder='Confirm Password' name='confirm_password' />
                        </Form.Field> : ''
                    }
                </Form>
            </Modal.Content>
            <Modal.Actions>
                {register ?
                    <Button basic color='blue' onClick={registerTrigger}>Sign In</Button> :
                    <Button basic color='blue' onClick={registerTrigger}>Register</Button>
                }
                <Button color='green' onClick={register ? handleRegister : handleSignIn}>Submit</Button>
            </Modal.Actions>
        </Modal>
    )
}
