import { use, useState } from 'react'
import HomeTemplate from './Components/homeTemplate'
import styles from './MainPage.module.css'

const MainPage = () => {
    const [home, setHome] = useState([
        {name: 'Из Газобетона', img: './home2.svg', id: 1},
        {name: 'Из Кирпича', img: './home1.svg', id: 2},
        {name: 'Из Кирпича', img: './home2.svg', id: 3},
        {name: 'Из Бетона', img: './home1.svg', id: 4}
    ])
  return (
    <div className={styles.MainPage}>
      <h1 className={styles.title}>Строительство коттеджей</h1>
      <div className={styles.wrapper}>
        {
            home.map((h)=> (
                <HomeTemplate name={h.name} img={h.img} key={h.id}/>
            ))
        }
      </div>
    </div>
  )
}

  export default MainPage