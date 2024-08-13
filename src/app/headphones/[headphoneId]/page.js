import Link from "next/link";
import { Headphone } from "../../../components/headphone/component";
import { getHeadphoneById } from "../../../api/get-headphone-by-id";

export function generateStaticParams() {
  return [{ headphoneId: "MLXJ2LLA" }, { headphoneId: "M3IEG" }];
}

export async function generateMetadata({ params: { headphoneId } }) {
  const { name } = await getHeadphoneById(headphoneId);

  return {
    title: name,
  };
}

export default async function HeadphonePage({ params: { headphoneId } }) {
  const { id, name } = await getHeadphoneById(headphoneId);

  return (
    <div>
      <Link href='/headphones' prefetch={false}>
        Headphones
      </Link>
      <Headphone id={id} name={name} />
    </div>
  );
}
