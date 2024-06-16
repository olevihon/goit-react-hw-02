import { useState, useEffect } from 'react';
import css from './App.module.css';
import Description from '../Description/Description.jsx';
import Options from '../Options/Options.jsx';
import Feedback from '../Feedback/Feedback.jsx';
import Notification from '../Notification/Notification.jsx';

const LOCAL_STORAGE_KEY = 'feedbackRating';

export default function App() {
  const [ratings, setRatings] = useState(() => {
    const savedRatings = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (savedRatings !== null) {
      return JSON.parse(savedRatings);
    }

    return {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  });

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(ratings));
  }, [ratings]);

  const updateFeedback = feedbackType => {
    setRatings(prevRatings => {
      switch (feedbackType) {
        case 'good':
          return { ...prevRatings, good: prevRatings.good + 1 };
        case 'neutral':
          return { ...prevRatings, neutral: prevRatings.neutral + 1 };
        case 'bad':
          return { ...prevRatings, bad: prevRatings.bad + 1 };
        case 'reset':
          return { good: 0, neutral: 0, bad: 0 };
        default:
          return prevRatings;
      }
    });
  };

  const totalFeedback = ratings.good + ratings.neutral + ratings.bad;
  const positiveFeedback = totalFeedback
    ? Math.round((ratings.good / totalFeedback) * 100)
    : 0;

  return (
    <div className={css.container}>
      <Description
        title="Sip Happens Café"
        text="Please leave your feedback about our service by selecting one of the options below."
      />

      <Options handleUpdate={updateFeedback} totalFeedback={totalFeedback} />

      {!totalFeedback ? (
        <Notification text="No feedback yet" />
      ) : (
        <Feedback
          ratings={ratings}
          totalFeedback={totalFeedback}
          positiveFeedback={positiveFeedback}
        />
      )}
    </div>
  );
}
