import { Link } from "react-router-dom";
import styles from './noPage.module.css'

export default function NoPage() {
  return (
    <div className={styles.noPage}>
      <h3>Error 404:</h3>
      <p> Ну что ж ты за рукожоп 😵‍💫</p>
      <Link to='/'>to home page 🏡</Link>
    </div>
  )
}
