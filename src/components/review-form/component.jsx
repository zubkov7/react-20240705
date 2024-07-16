import { useForm } from "./hooks";

export const ReviewForm = () => {
  const { form, updateName, updateText, updateAddress } = useForm();

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
    </div>
  );
};
