
import { useState } from 'react'
import userProvider from '../../../utils/provider/userProvider/userProvider';
import style from './UserAdmin.module.css'
import { Link } from 'react-router-dom'


const UserAdmin = () => {

    const [userAdmin, setUserAdmin] = useState({
        name: '',
        email: '',
        password: ''
    })

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUserAdmin({
            ...userAdmin,
            [name]: value
        })
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const newUser = await userProvider.postUserAdmin(userAdmin)
            setUserAdmin({
                name: '',
                email: '',
                password: ''
            })
            return window.alert('User created');
        } catch (error) {
            return error.message
        }

    }
    return (
        <div className={style.containerCreateProject}>
            <div className={style.flyerWebDevelop}>
                <div className={style.containerImage}>
                    <img src='./images/logo-nav.png' alt="" />
                    <span>By developers</span>
                </div>
                <Link to='/admin'><button className={style.buttonBack}>Back</button></Link>
            </div>
            <form onSubmit={handleSubmit} className={style.form}>
                <div className={style.titleProject}>
                    <h3>Create User</h3>
                </div>
                <label htmlFor="user">User: </label>
                <input type="text" name='name' value={userAdmin.name} onChange={handleChange} />
                <label htmlFor="user">Email: </label>
                <input type="text" name='email' value={userAdmin.email} onChange={handleChange} />
                <label htmlFor="password">Password: </label>
                <input type="password" name='password' value={userAdmin.password} onChange={handleChange} />
                <div className={style.containerButton}>
                    <button type='submit'>Create</button>
                </div>
            </form>
        </div>
    )
}

export default UserAdmin;