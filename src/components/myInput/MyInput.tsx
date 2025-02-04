import styles from './myInput.module.css'

interface IMyInput {
  name: string;
  type:
    | "text"
    | "password"
    | "radio"
    | "checkbox"
    | "hidden"
    | "image"
    | "file"
    | "submit"
    | "reset"
    | "email";
  placeholder: string;
  label: string;
}

export default function MyInput({
  name,
  type,
  placeholder,
  label,
}: IMyInput): JSX.Element {
  return (
    <div className={styles.inputGroup}>
      <label htmlFor={name} className={styles.inputLabel}>
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className={styles.inputField}
      />
    </div>
  );
}
