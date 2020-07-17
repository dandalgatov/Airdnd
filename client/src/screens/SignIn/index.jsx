import React from 'react'

export default function SignIn(props) {
    const { handleChange, userData, handleLogin, currentUser, handleRegister } = props

    return (
        <>
            <header>
                Sign In
          {currentUser ?
                    <h2>Hello {currentUser.first_name}</h2> :
                    <>
                        <div className="login">
                            <form onSubmit={handleLogin}>
                                <div className="pair">
                                    <label htmlFor='email'>Email</label>
                                    <input name='email' type='text' value={userData.email} onChange={handleChange} />
                                </div>

                                <div className="pair">
                                    <label htmlFor='password'>Password</label>
                                    <input name='password' type='password' value={userData.password} onChange={handleChange} />
                                </div>

                                <input type='submit' value="Login" />
                            </form>
                        </div>

                        <p>REGISTER</p>
                        <form onSubmit={handleRegister}>
                            <div className="pair">
                                <label htmlFor='first_name'>First Name</label>
                                <input name='first_name' type='text' value={userData.first_name} onChange={handleChange} />
                            </div>
                            <div className="pair">
                                <label htmlFor='last_name'>Last Name</label>
                                <input name='last_name' type='text' value={userData.last_name} onChange={handleChange} />
                            </div>
                            <div className="pair">
                                <label htmlFor='phone'>Phone</label>
                                <input name='phone' type='text' value={userData.phone} onChange={handleChange} />
                            </div>
                            <div className="pair">
                                <label htmlFor='email'>Email</label>
                                <input name='email' type='text' value={userData.email} onChange={handleChange} />
                            </div>
                            <div className="pair">
                                <label htmlFor='password'>Password</label>
                                <input name='password' type='password' value={userData.password} onChange={handleChange} />
                            </div>


                            <input type='submit' value="Register" />
                        </form>
                    </>

                }
            </header>
        </>
    )
}
