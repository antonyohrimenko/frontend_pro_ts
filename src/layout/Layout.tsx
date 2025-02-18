import { NavLink, Outlet } from "react-router-dom";
import styles from "./layout.module.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* Добавил панель навигации, хз удобно или нет, если что потом переделаю  :) */}
        <aside className={styles.sidebar}>
          <ul>

          <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="homework13"
              >
                Homework: Lesson13
              </NavLink>
            </li>


          <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="homework12"
              >
                Homework: FormGender
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="homework11"
              >
                Homework: Lesson11
              </NavLink>
            </li>


            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="fellowship"
              >
                🔥HOT: Fellowship
              </NavLink>
            </li>
            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="fetch-fox"
              >
                🔥HOT: Random Fox
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="homework08"
              >
                Homework: Lesson08
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="homework07"
              >
                Homework: Lesson07
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="homework06"
              >
                Homework: Lesson06
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="homework05"
              >
                Homework: Lesson05
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="lesson13"
              >
                Classwork: Lesson13
              </NavLink>
            </li>


            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="lesson12"
              >
                Classwork: Lesson12
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="lesson09"
              >
                Classwork: Lesson09
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="lesson08"
              >
                Classwork: Lesson08
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="lesson07"
              >
                Classwork: Lesson07
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="lesson06"
              >
                Classwork: Lesson06
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="lesson05"
              >
                Classwork: Lesson05
              </NavLink>
            </li>

            <li>
              <NavLink
                className={({ isActive }) =>
                  isActive ? styles.linkActive : ""
                }
                to="lesson04"
              >
                Classwork: Lesson04
              </NavLink>
            </li>
          </ul>
        </aside>

        {/* для контента */}
        <section className={styles.content}>
          <Outlet />
        </section>
      </main>
      <Footer />
    </>
  );
}
