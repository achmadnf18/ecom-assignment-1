/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/jsx-no-useless-fragment */

type Props = {
  count: number;
  Item: React.ElementType;
  [x: string]: any;
};

export function LoopItem({ count, Item, ...props }: Props) {
  const datas = getArray(count);

  return (
    <>
      {datas?.map((data, index) => (
        <Item key={index} {...props} />
      ))}
    </>
  );
}

const getArray = (count: number) => {
  if (typeof count === 'number' && count > 0) {
    const arr = Array(count);
    for (let i = 0; i < count; i + 1) {
      arr[i] = i + 1;
    }
    return arr;
  }

  return null;
};
