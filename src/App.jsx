import { useState, useEffect } from "react";
import Description from "./components/Description/Description";
import Options from "./components/Options/Options";
import Feedback from "./components/Feedback/Feedback";
import Notification from "./components/Notification/Notification";
import cup1x from "./img/cup1x.png";
import beans1x from "./img/beans1x.png";
import css from "./App.module.css";

export default function App() {
  const localStorageFeedbacksKey = "feedbacks";

  const [feedbacks, setFeedbacks] = useState(() => {
    const savedFeedbacks = localStorage.getItem(localStorageFeedbacksKey);
    if (savedFeedbacks !== null) {
      return JSON.parse(savedFeedbacks);
    } else {
      return {
        good: 0,
        neutral: 0,
        bad: 0,
      };
    }
  });

  useEffect(() => {
    localStorage.setItem(localStorageFeedbacksKey, JSON.stringify(feedbacks));
  }, [feedbacks]);

  function updateFeedback(type) {
    switch (type) {
      case "good":
        setFeedbacks({
          ...feedbacks,
          good: feedbacks.good + 1,
        });
        break;
      case "bad":
        setFeedbacks({
          ...feedbacks,
          bad: feedbacks.bad + 1,
        });
        break;
      default:
        setFeedbacks({
          ...feedbacks,
          neutral: feedbacks.neutral + 1,
        });
    }
  }

  function resetFeedback() {
    setFeedbacks({
      good: 0,
      neutral: 0,
      bad: 0,
    });
  }

  const totalFeedbacks = feedbacks.good + feedbacks.bad + feedbacks.neutral;
  const positiveFeedbackPercentage =
    totalFeedbacks !== 0
      ? Math.round((feedbacks.good / totalFeedbacks) * 100)
      : 0;

  return (
    <section className={css.section}>
      <div className={css.container}>
        <Description />
        <Options
          updateFeedback={updateFeedback}
          resetFeedback={resetFeedback}
          totalFeedbacks={totalFeedbacks}
        />
        <div className={css["bottom-container"]}>
          <img src={cup1x} alt="a cup of coffee" width="108" height="107" />
          {totalFeedbacks !== 0 && positiveFeedbackPercentage !== undefined ? (
            <Feedback
              feedbacks={feedbacks}
              totalFeedbacks={totalFeedbacks}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            />
          ) : (
            <Notification />
          )}
          <img srcSet={beans1x} alt="coffee beans" width="108" height="107" />
        </div>
      </div>
    </section>
  );
}
