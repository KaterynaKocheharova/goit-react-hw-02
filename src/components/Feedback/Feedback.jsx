export default function Feedback({
  feedbacks: { good, bad, neutral },
  totalFeedbacks,
  positiveFeedbackPercentage,
}) {
  return (
    <ul>
      <li>Good: {good}</li>
      <li>Neutral: {neutral}</li>
      <li>Bad: {bad}</li>
      <li>Total: {totalFeedbacks}</li>
      <li>Positive: {positiveFeedbackPercentage}% </li>
    </ul>
  );
}
