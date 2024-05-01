import css from "./Description.module.css";

export default function Description() {
  return (
    <div className={css["descr-card"]}>
      <h2 className={css.title}>Sip Happens Café</h2>
      <p className={css.text}>
        Please leave your feedback about our service by selecting one of the
        options below.
      </p>
    </div>
  );
}
