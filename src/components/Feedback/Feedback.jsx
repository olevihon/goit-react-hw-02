import css from './Feedback.module.css';
import FeedbackItem from '../FeedbackItem/FeedbackItem.jsx';

export default function Feedback({
  ratings: { good, neutral, bad },
  totalFeedback,
  positiveFeedback,
}) {
  const feedbackItems = [
    { label: 'Good', value: good },
    { label: 'Neutral', value: neutral },
    { label: 'Bad', value: bad },
    { label: 'Total', value: totalFeedback },
    { label: 'Positive', value: `${positiveFeedback}%` },
  ];

  return (
    <ul className={css.list}>
      {feedbackItems.map((item, index) => (
        <li key={index}>
          <FeedbackItem label={item.label} value={item.value} />
        </li>
      ))}
    </ul>
  );
}
