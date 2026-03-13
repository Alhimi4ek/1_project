import { use, useEffect, useState } from 'react'
import HomeTemplate from './Components/homeTemplate'
import styles from './MainPage.module.css'
import { getListHomes } from './service/service'


const MainPage = () => {
    const [home, setHome] = useState([])

    useEffect(() => {
      getListHomes().then((res) => setHome(res.data))
    }, [])

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