import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import Lesson12 from "./lessons/lesson12/Lesson12.tsx";
import FormGender from "./homeworks/Homework12/FormGender.tsx";

createRoot(document.getElementById("root")!).render(
  <>
    <App />
    {/* <Lesson12 /> */}
    {/* <FormGender /> */}
  </>
);
