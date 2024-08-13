import { getCodecsByHeadphoneId } from "../../api/get-codecs-by-headphone-id";
import { Codec } from "../codec/component";

export const Codecs = async ({ headphoneId }) => {
  const data = await getCodecsByHeadphoneId(headphoneId);

  return (
    <div>
      <ul>
        {data.map(({ type, id }) => (
          <li key={id}>
            <Codec type={type} />
          </li>
        ))}
      </ul>
    </div>
  );
};
