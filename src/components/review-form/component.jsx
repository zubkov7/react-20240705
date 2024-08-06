import { Button } from "../button/components";
import { useForm } from "./hooks";

import styles from "./styles.module.css";

export const ReviewForm = ({ headphoneId }) => {
  const { form, updateText, clear, addReview, isReviewLoading } = useForm({
    headphoneId,
  });

  const { text } = form;

  return (
    <div>
      <div>
        <span>Text</span>
        <input
          value={text}
          onChange={(event) => {
            updateText(event.target.value);
          }}
        />
      </div>
      <div className={styles.closeButtonWrapper}>
        <Button
          className={styles.button}
          viewVariant='small'
          text='clear'
          onClick={clear}
        />
        <Button
          className={styles.button}
          viewVariant='small'
          text='save'
          onClick={addReview}
          disabled={isReviewLoading}
        />
      </div>
    </div>
  );
};
