import { useEffect, useState } from 'react'
import HomeTemplate from './Components/homeTemplate'
import styles from './MainPage.module.css'
import { getListHomes, sendHomeData } from './service/service'


const MainPage = () => {
  const [home, setHome] = useState([])

  useEffect(() => {
    getData()
  }, [])

  const getData = () => {
    getListHomes().then((res) => setHome(res.data))
  }

  const [payload, setPayload] = useState({
    name: '',
    price: 0,
    img: "./home1.svg"
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPayload({
      ...payload,
      [name]: value,
    });
  };

  const handleSend = async() => {
    try {
      if (
        payload.name === "" ||
        payload.name === undefined ||
        payload.name === null
      ) {
        alert("Введите название дома");
      } else {
         await sendHomeData(payload)
        setPayload({
          name: '',
          price: 0,
          img: "./home1.svg"
        })
        await getData()
      }
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={styles.MainPage}>
      <div className={styles.top__container}>
        <h1 className={styles.title}>Строительство коттеджей</h1>
        <div className={styles.form}>
          <input
            placeholder="Название>.."
            value={payload.name}
            onChange={handleChange}
            name="name"
          />
          <input
            placeholder="Цена>.."
            type="number"
            value={payload.price}
            onChange={handleChange}
            name="price"
          />
          <button onClick={handleSend}>Отправить</button>
        </div>
      </div>
      <div className={styles.wrapper}>
        {
          home.map((h) => (
            <HomeTemplate name={h.name} img={h.img} id={h.id} key={h.id} />
          ))
        }
      </div>
    </div>
  )
}

export default MainPage