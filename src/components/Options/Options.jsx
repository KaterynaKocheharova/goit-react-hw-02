export default function Options({
  updateFeedback,
  resetFeedback,
  totalFeedbacks,
}) {
  return (
    <div>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {totalFeedbacks !== 0 && (
        <button
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
