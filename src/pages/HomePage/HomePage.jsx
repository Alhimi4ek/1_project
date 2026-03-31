import { use, useEffect, useState } from "react";
import { getHomeById } from "./service/service";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteHome, patchHome } from "./service/service";
import styles from "./HomePage.module.css"
import { FaArrowLeftLong } from "react-icons/fa6";


const HomePage = () => {
    const { id } = useParams();
    const [home, setHome] = useState({ name: "", img: "", price: 0 });
    const [isEdit, setIsEdit] = useState(false);

    const navigate = useNavigate();

    useEffect(() => {
        getHomeById(id).then((res) => setHome(res.data));
    }, []);


    const [payload, setPayload] = useState({
        name: '',
        price: 0,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setPayload({
            ...payload,
            [name]: value,
        });
    };

    const patchHandler = async () => {
        if (
            payload.name === "" ||
            payload.name === undefined ||
            payload.name === null
        ) {
            alert("Введите название дома");
        } else {
            await patchHome(id, payload);
            await getHomeById(id).then((res) => setHome(res.data));
            setIsEdit(false)
        }
    };

    const deleteHomeFunc = () => {
        deleteHome(id).then(() => {
            alert('Дом удален!');
            navigate('/')
        });

    }

    return (
        <div>
            <div  className={styles.arrow}>
                <Link to="/" className ={styles.link}>
                    <FaArrowLeftLong />
                    <p>
                        Назад
                    </p>
                </Link>
            </div>
            <div className={styles.home}>
                <img src={home.img} alt="home" />

                {
                    isEdit ? (
                        <div className={styles.isEdit}>
                            <input
                                placeholder="Название..."
                                value={payload.name}
                                onChange={handleChange}
                                name="name"
                            />
                            <input
                                placeholder="Цена..."
                                value={payload.price}
                                onChange={handleChange}
                                name="price"
                            />
                            <div className={styles.buttons}>
                                <button onClick={patchHandler}>Сохранить</button>
                                <button onClick={() => setIsEdit(false)}>Отмена</button>
                            </div>
                        </div>
                    ) : (
                        <>
                            <p>Название: {home.name}</p>
                            <p>Цена: {home.price}</p>
                            <div className={styles.buttons}>
                                <button onClick={() => setIsEdit(true)}>Редактировать</button>
                                <button onClick={deleteHomeFunc}>Удалить</button>
                            </div>
                        </>
                    )
                }


            </div>
        </div>
    );
};

export default HomePage
