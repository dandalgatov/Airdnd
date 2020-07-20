import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Segment, Form, Button, Modal } from 'semantic-ui-react'
import { signInUser, registerUser } from '../../services/auth'

export default function SignIn(props) {
    const { currentUser, setCurrentUser } = props
    const [register, setRegister] = useState(false)
    const [userData, setUserData] = useState({})
    const [modalOpen, setModalOpen] = useState(false)
    const history = useHistory()

    const registerTrigger = () => {
        setRegister(!register)
    }

    const handleChange = (event) => {
        const { name, value } = event.target
        setUserData({ ...userData, [name]: value })
    }

    const handleSignIn = async (e) => {
        e.preventDefault()
        setCurrentUser(await signInUser(userData))
    }

    const handleRegister = async (e) => {
        e.preventDefault()
        if (userData.password === userData.confirm_password) {
            delete userData.confirm_password
            setCurrentUser(await registerUser(userData))
            setModalOpen(false)
        } else {
            alert('Your passwords don\'t match')
        }
        history.push('/profile')

    }

    return (
        <Modal size='tiny' open={modalOpen} onOpen={() => setModalOpen(true)} trigger={<Button>Sign In</Button>}>
            <Modal.Header>
                Sign in
            </Modal.Header>
            <Modal.Content>
                <Form onChange={handleChange}>
                    {register ?
                        <Form.Group widths='equal'>
                            <Form.Field required>
                                <label>First Name</label>
                                <input placeholder='First Name' name='first_name'/>
                            </Form.Field>
                            <Form.Field >
                                <label>Last Name</label>
                                <input placeholder='Last Name' name='last_name'/>
                            </Form.Field>
                        </Form.Group> : ''
                    }
                    <Form.Field required >
                        <label>Email</label>
                        <input placeholder='Email' name='email' />
                    </Form.Field>
                    <Form.Field required>
                        <label>Password</label>
                        <input type='password' placeholder='Password' name='password'/>
                    </Form.Field>
                    {register ?
                        <Form.Field required>
                            <label>Confirm Password</label>
                            <input type='password' placeholder='Confirm Password' name='confirm_password'/>
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
