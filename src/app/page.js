import Image from 'next/image'
import styles from './page.module.css'
import hero from './../../public/img/design.png'
export default function Home() {
  return (
    <div>

      <div className={styles.container}>
        <div className={styles.item}>

          <h1 className={styles.title}>Start Read aswsome Books today!</h1>
          <p className={styles.desc}>Try to read books as much as you can to gain new ideas </p>
          <button className={styles.button}>See our Books</button>
         
        </div>
        <div className={styles.item}><Image className={styles.img} src={hero}/></div>
      </div>
    </div>
  )
}
