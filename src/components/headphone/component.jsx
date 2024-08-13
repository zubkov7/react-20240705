import { Reviews } from "../reviews/component";
import { Codecs } from "../codecs/component";

export const Headphone = ({ name, id }) => {
  return (
    <div>
      <h2>
        {name} - {id}
      </h2>
      <h3>Reviews</h3>
      <Reviews headphoneId={id} />
      <h3>Codecs</h3>
      <Codecs headphoneId={id} />
    </div>
  );
};
