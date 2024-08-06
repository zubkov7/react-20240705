import { useGetHeadphonesQuery } from "../../redux/services/api";

export const CartItem = ({ id, amount }) => {
  const { data } = useGetHeadphonesQuery(undefined, {
    selectFromResult: ({ data, ...rest }) => ({
      ...rest,
      data: data?.find((entity) => entity.id === id),
    }),
  });
  const { name } = data || {};

  if (!name) {
    return null;
  }

  return (
    <div>
      {name} - {amount}
    </div>
  );
};
