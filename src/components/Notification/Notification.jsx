import css from './Notification.module.css';

export default function Notification({ text }) {
  return <div className={css.text}>{text}</div>;
}
