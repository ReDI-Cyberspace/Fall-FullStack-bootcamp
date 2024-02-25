import styles from "./SpinnerStyle.css";

export default function Spinner() {
  return (
    <div class='spinner-container'>
      <span>Loading</span>
      <div className="lds-dual-ring"></div>
    </div>
  );
}
