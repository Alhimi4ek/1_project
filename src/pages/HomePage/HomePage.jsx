import { useEffect,useState } from "react";
import { getHomeById } from "./service/service";
import { useParams } from "react-router-dom";
import styles from "./HomePage.module.css"

const HomePage = () => {
    const {id} = useParams();
    const [home, setHome] = useState({name: "", img: "", price: 0});
        useEffect(() => {
        getHomeById(id).then((res) => setHome(res.data));
    }, []);
    return (
        <div className={styles.home}>
            <img src={home.img} alt="home" />
            <p>Дом: {home.name}</p>
            <p>Цена: {home.price}</p>
        </div>
    );
};
export default HomePage;
