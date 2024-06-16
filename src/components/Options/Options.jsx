import css from './Options.module.css';

export default function Options({ handleUpdate, totalFeedback }) {
  return (
    <div className={css.container}>
      <button
        onClick={() => handleUpdate('good')}
        className={css.btn}
        type="button"
      >
        Good
      </button>
      <button
        onClick={() => handleUpdate('neutral')}
        className={css.btn}
        type="button"
      >
        Neutral
      </button>
      <button
        onClick={() => handleUpdate('bad')}
        className={css.btn}
        type="button"
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button
          onClick={() => handleUpdate('reset')}
          className={css.btn}
          type="button"
        >
          Reset
        </button>
      )}
    </div>
  );
}
