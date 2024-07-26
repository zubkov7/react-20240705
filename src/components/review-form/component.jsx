import { Button } from "../button/components";
import { useForm } from "./hooks";

import styles from "./styles.module.css";

export const ReviewForm = () => {
  const { form, updateName, updateText, updateAddress, clear } = useForm();

  const { name, text, address } = form;

  return (
    <div>
      <div>
        <span>Name</span>
        <input
          value={name}
          onChange={(event) => {
            updateName(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Text</span>
        <input
          value={text}
          onChange={(event) => {
            updateText(event.target.value);
          }}
        />
      </div>
      <div>
        <span>Address</span>
        <input
          value={address}
          onChange={(event) => {
            updateAddress(event.target.value);
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
      </div>
    </div>
  );
};
