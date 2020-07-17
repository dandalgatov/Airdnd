import React, { useState } from 'react'
import { Input, Menu, Dropdown, Segment, Icon, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import { LogoIcon } from '../../assets/logo_icon.svg'

export default function Header() {

    const [search, setSearch] = useState()

    const handleChange = (e, data) => {
        setSearch({
            ...search,
            [data.name]: data.value
        })
    }

    const trigger = (
        <span>
            <Image avatar src='https://picsum.photos/300/200' />
        </span>
    )

    const options = [
        { key: 'user', text: 'Account', icon: 'user' },
        { key: 'settings', text: 'Settings', icon: 'settings' },
        { key: 'sign-out', text: 'Sign Out', icon: 'sign out' },
    ]

    return (

        <div>
            <Menu attached='top' color='red' >
                {/* <Icon name='home' color='teal' size='huge' /> */}
                <Icon.Group size='huge'>
                    <Icon name='home' color='teal'  />
                    <Icon corner name='heart' size='small' color='red'/>
                </Icon.Group>



                <Menu.Menu position='right'>
                    <Menu.Item>
                        <Input
                            icon='search'
                            name='address_search'
                            onChange={handleChange}
                            placeholder='address'
                        />
                    </Menu.Item>
                    <Dropdown item trigger={trigger} size='big' fitted simple>
                        <Dropdown.Menu >
                            <Dropdown.Item>
                                <Icon name='user circle' />
                                <span className='text'>Profile</span>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Icon name='sign-out' />
                                <span className='text'>Sign Out</span>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    {/* <Dropdown
                        trigger={trigger}
                        options={options}
                        pointing='middle'
                        icon={null}
                    /> */}
                </Menu.Menu>

            </Menu>
        </div>

    )
}