import { useParams } from "react-router-dom";
import { Headphone } from "../headphone/component";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();

  const id = searchParams.get("id");

  useEffect(
    () => setSearchParams((prev) => ({ ...prev, id: 123 })),
    [setSearchParams]
  );

  return (
    <div>
      {id && <div>{id}</div>}
      <Headphone id={headphoneId} />
    </div>
  );
};
