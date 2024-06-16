import css from './FeedbackItem.module.css';

export default function FeedbackItem({ label, value }) {
  return (
    <span className={css.text}>
      {label}: {value}
    </span>
  );
}
