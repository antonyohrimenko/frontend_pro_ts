import "./MyInput.css";

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

export default function MyInput({ name, type, placeholder, label }: IMyInput) {
  return (
    <div className="input-group">
      <label htmlFor={name} className="input-label">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        className="input-field"
      />
    </div>
  );
}
