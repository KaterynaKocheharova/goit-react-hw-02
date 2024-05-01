import css from "./Options.module.css";

export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedbacks,
}) {
  return (
    <div className={css["buttons-container"]}>
      <button
        className={css.button}
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        className={css.button}
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        className={css.button}
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedbacks !== 0 && (
        <button
          className={css.button}
          onClick={() => {
            resetFeedback();
          }}
        >
          Reset
        </button>
      )}
    </div>
  );
}
