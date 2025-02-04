import styles from "./profileCard.module.css";

export interface IProfileCard {
  avatar: string;
  firstName: string;
  lastName: string;
  occupation: string;
  hobby: string;
}

function ProfileCard({
  avatar,
  firstName,
  lastName,
  occupation,
  hobby,
}: IProfileCard): JSX.Element {
  return (
    <div className={styles.profileCard}>
      <img className={styles.profileImage} src={avatar} alt="Profile" />
      <div className={styles.profileInfo}>
        <p className={styles.profileInfoTitle}>Имя:</p>
        <p className={styles.profileInfoText}>{firstName}</p>
      </div>
      <div className={styles.profileInfo}>
        <p className={styles.profileInfoTitle}>Фамилия:</p>
        <p className={styles.profileInfoText}>{lastName}</p>
      </div>
      <div className={styles.profileInfo}>
        <p className={styles.profileInfoTitle}>Род деятельности:</p>
        <p className={styles.profileInfoText}>{occupation}</p>
      </div>
      <div className={styles.profileInfo}>
        <p className={styles.profileInfoTitle}>Хобби:</p>
        <p className={styles.profileInfoText}>{hobby}</p>
      </div>
    </div>
  );
}

export default ProfileCard;
