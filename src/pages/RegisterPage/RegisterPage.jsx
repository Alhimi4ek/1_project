import styles from './RegisterPage.module.css'
import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { postRegister } from './service/servise'

function RegisterPage() {
    const [user, setUser] = useState({
        email: "",
        password: "",
        name: "",
    });

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value,
        });
    };

    const handleRegister = () => {

        try {
            postRegister(user).then((res) => {
                setUser({
                    email: "",
                    password: "",
                    name: ""
                })
                navigate('/')
            });
        }
        catch (e) {
            console.log(e)
        }
    };

    return (
        <div className={styles.registerpage}>
            <h3>Регистрация</h3>
            <div className={styles.inputs}>
                <input placeholder="email..." name="email" onChange={handleChange} value={user.email} />
                <input placeholder="password..." name="password" onChange={handleChange} value={user.password} />
                <input placeholder="name..." name="name" onChange={handleChange} value={user.name} />
            </div>
            <div className={styles.bottom}>
                <button onClick={handleRegister}>Отправить</button>
                <Link to="/login">У меня уже есть аккаунт</Link>
            </div>
        </div>
    )
}

export default RegisterPage