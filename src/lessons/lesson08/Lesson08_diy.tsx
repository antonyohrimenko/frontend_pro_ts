import { useEffect, useState } from "react";
import styles from './lesson08_diy.module.css'
import MyButton from "../../components/myButton/MyButton";

export default function RandomFox() {
  const [foxImage, setFoxImage] = useState<string>("");
  // const [refresh, setRefresh] = useState<number>(0);

  // const handleRefresh = () => {
  //   setRefresh((prev) => prev + 1);
  // };

  const fetchRandomFox = async () => {
    try {
      const response = await fetch("https://randomfox.ca/floof/");
      const data = await response.json();
      setFoxImage(data.image);
    } catch (error) {
      console.error("Error fetching fox image:", error);
    }
  };

  useEffect(() => {
    // const fetchRandomFox = async () => {
    //   try {
    //     const response = await fetch("https://randomfox.ca/floof/");
    //     const data = await response.json();
    //     setFoxImage(data.image);
    //   } catch (error) {
    //     console.error("Error fetching fox image:", error);
    //   }
    // };
    fetchRandomFox();
  }, []);

  return (
    <div className={styles.randomFoxContainer}>
      <h2>Random Fox 🦊</h2>
      {foxImage ? (
        <div className={styles.foxWrapper}>
          <img src={foxImage} alt="some random fox" />
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <MyButton text="Refresh 🔄" func={fetchRandomFox} />
    </div>
  );
}
