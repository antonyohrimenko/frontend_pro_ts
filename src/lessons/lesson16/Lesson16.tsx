// import styles from './Lesson16.module.css'

import { useFormik } from "formik";
import ChildrenButton from "../../components/childrenButton/ChildrenButton";
import ChildrenProps from '../../components/childrenProps/ChildrenProps';
import MyButton from "../../components/myButton/MyButton";
import MyInput from "../../components/myInput/MyInput";

export default function Lesson16(): JSX.Element {

  const formik = useFormik({
    initialValues: {
      password: '12345',
      login: 'user'
    } as { password: string, login: string; },
    initialErrors: {
      login: 'login error 🫣',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
    }
  });


  return (
    <div>
      <h2>Lesson 16: react practice 🙇‍♂️</h2>
      {/* 1. в эту кнопку мы передаем текст через оборачивание в теги и встречаем в компоненте по ключу children (в документации react прописано что этим ключом нужно встречать все оборачиваемые в компонент данные) */}
      <ChildrenProps text="переданный текст через обычный синтаксис props">
        <ChildrenButton
          onClick={() => console.log('click')}
        >кнопка c props children</ChildrenButton>

        {/* 2. эта наша старая кнопка с классическим props через передачу данных внутри самозакрывающегося тега */}
        <MyButton text="кнопка без props children" />

        <ul>
          <li style={{ color: 'red' }}>🌞 данные из lesson 16</li>
          <li style={{ color: 'red' }}>переданы через props children</li>
        </ul>
      </ChildrenProps>

      {/* <ChildrenProps text="обычный props">
        <h4 style={{ color: 'red' }}>🌛 а это уже другие данные из lesson 16</h4>
      </ChildrenProps> */}
      {/* <ChildrenProps>
        <p style={{ color: 'red' }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, eius quas. Aliquid incidunt nisi quas ea unde, aspernatur ab blanditiis quod similique cum fugit ad dolorem quam omnis dignissimos libero.
          Dicta debitis velit perferendis omnis repellat reprehenderit quam neque, facere itaque, provident iusto officiis maxime dignissimos quibusdam aspernatur ex reiciendis voluptates accusantium tempore perspiciatis quos architecto soluta. Nobis, accusantium iste.
        </p>
      </ChildrenProps> */}
      <form onSubmit={formik.handleSubmit}>
        <MyInput formik={formik} placeholder="login" name="login" label="type your login:" type="text" />
        <MyInput formik={formik} placeholder="password" name="password" label="type your pass:" type="password" />
        <MyButton text="send" />
      </form>

    </div>
  );
}
