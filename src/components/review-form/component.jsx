import { Button } from "../button/components";
import { useForm } from "./hooks";

import styles from "./styles.module.css";

export const ReviewForm = ({ isReviewLoading, onSave, text }) => {
  const { form, updateText } = useForm({
    text,
  });

  const { text: formText } = form;

  return (
    <div>
      <div>
        <span>Text</span>
        <input
          value={formText}
          onChange={(event) => {
            updateText(event.target.value);
          }}
        />
      </div>
      <div className={styles.closeButtonWrapper}>
        <Button
          className={styles.button}
          viewVariant='small'
          text='save'
          onClick={() => onSave(form)}
          disabled={isReviewLoading}
        />
      </div>
    </div>
  );
};
