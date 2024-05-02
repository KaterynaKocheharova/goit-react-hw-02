import css from "./Feedback.module.css";

export default function Feedback({
  feedbacks: { good, bad, neutral },
  totalFeedbacks,
  positiveFeedbackPercentage,
}) {
  return (
    <ul className={css["feedback-list"]}>
      <li className={css["feedback-item"]}>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedbacks}</li>
      <li>Positive: {positiveFeedbackPercentage}% </li>
    </ul>
  );
}
