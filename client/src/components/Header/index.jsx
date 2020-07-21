import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { Input, Menu, Dropdown, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import SignIn from '../../components/SignIn'
import { removeToken } from '../../services/auth'

export default function Header(props) {

    const { currentUser, setCurrentUser } = props
    const [search, setSearch] = useState()
    const history = useHistory()

    const viewProfile = () => {
        history.push('/profile')
    }

    const handleChange = (e, data) => {
        setSearch({
            ...search,
            [data.name]: data.value
        })
    }

    const handleSignOut = () => {
        setCurrentUser(null)
        localStorage.removeItem('authToken');
        removeToken();
        history.push('/')
    }



    return (

        <div>
            <Menu secondary attached='top' color='purple' inverted >

                <Menu.Item onClick={() => history.push('/')}>
                    <Image src={process.env.PUBLIC_URL + '/airdnd_logo.png'} size='mini' />
                </Menu.Item>

                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input
                            icon='search'
                            name='address_search'
                            onChange={handleChange}
                            placeholder='address'
                            size='small'
                        />
                    </Menu.Item>
                    {currentUser ?
                        <Dropdown item size='big'
                            trigger={
                                currentUser.profile_picture ?
                                    <Image avatar src={currentUser.profile_picture} /> :
                                    <Icon name='user circle' size='large' />
                            }
                        >
                            <Dropdown.Menu >
                                <Dropdown.Item onClick={viewProfile}>
                                    <Icon name='user circle' />
                                    <span className='text'>Profile</span>
                                </Dropdown.Item>
                                <Dropdown.Item onClick={handleSignOut}>
                                    <Icon name='sign-out' />
                                    <span className='text'>Sign Out</span>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> :
                        <SignIn currentUser={currentUser} setCurrentUser={setCurrentUser} />
                    }
                </Menu.Menu>

            </Menu>
        </div>

    )
}