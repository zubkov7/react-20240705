import Link from "next/link";
import { getHeadphones } from "../../api/get-headphones";

export const Headphones = async () => {
  const data = await getHeadphones();

  return (
    <div>
      {data?.map(({ id, name }) => (
        <div key={id}>
          <Link href={`headphones/${id}`} prefetch={false}>
            {name}
          </Link>
        </div>
      ))}
    </div>
  );
};
