import { HashRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import RandomFoxHW from "./homeworks/Homework08/RandomfoxHW";
import Layout from "./layout/Layout";
import Lesson05 from "./lessons/lesson05/Lesson05";
import NoPage from "./components/noPage/NoPage";
import Lesson04 from "./lessons/lesson04/Lesson04";
import Lesson06 from "./lessons/lesson06/Lesson06";
import Lesson07 from "./lessons/lesson07/Lesson07";
import Lesson08 from "./lessons/lesson08/Lesson08";
import Lesson09 from "./lessons/lesson09/Lesson09";
import SpaceMission from "./homeworks/Homework06/SpaceMission";
import Sandwich from "./homeworks/Homework07/Sandwich";
import Homework05 from "./homeworks/Homework05/Homework05";
import FormGender from "./homeworks/Homework12/FormGender";
import Lesson12 from "./lessons/lesson12/Lesson12";
import Homework11 from "./homeworks/Homework11/Homework11";
import Lesson13 from "./lessons/lesson13/Lesson13";
import AuthForms from "./homeworks/Homework13/AuthForms";
import Lesson14 from "./lessons/lesson14/Lesson14";
import ProductPage from "./components/productPage/ProductPage";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    // ! обернули все приложение в CartProvider с контекстом чтобы иметь доступ к данным корзины
    <CartProvider>
      {/* оборачиваем все приложение в особый компонент HashRouter из библиотеки React Router */}
    {/* // оборачиваем все приложение в особый компонент HashRouter из библиотеки React Router */}
    <HashRouter>
      {/* оборачиваем компонент Routes (пути вокруг всех элементов) */}
      <Routes>
        {/* следующая обертка над элементами - компонент Route */}
        {/* передаем два props: path - строчное значение пути до компонента в URL, 
        element - компонент который 'прописываем' по выбранному пути */}

        <Route path="/" element={<Layout />}>
        <Route path="/" element={<h3>Дом, милый дом 🏡</h3>} />
        <Route path="fetch-fox" element={<RandomFoxHW />} />
        <Route path="fellowship" element={<Lesson05 />} />

        <Route path="lesson04" element={<Lesson04 />} />
        <Route path="lesson05" element={<Lesson05 />} />
        <Route path="lesson06" element={<Lesson06 />} />
        <Route path="lesson07" element={<Lesson07 />} />
        <Route path="lesson08" element={<Lesson08 />} />
        <Route path="lesson09" element={<Lesson09 />} />
        <Route path="lesson12" element={<Lesson12 />} />
        <Route path="lesson13" element={<Lesson13 />} />
        <Route path="lesson14" element={<Lesson14 />} />
        <Route path="lesson14/:id" element={<ProductPage />} />


        <Route path="homework05" element={<Homework05 />} />
        <Route path="homework06" element={<SpaceMission />} />
        <Route path="homework07" element={<Sandwich />} />
        <Route path="homework08" element={<RandomFoxHW />} />
        <Route path="homework11" element={<Homework11 />} />
        <Route path="homework12" element={<FormGender />} />
        <Route path="homework13" element={<AuthForms />} />


        <Route path="*" element={<NoPage/>}/>
        
        </Route>
      </Routes>
    </HashRouter>
  </CartProvider>
  );
}

export default App;
