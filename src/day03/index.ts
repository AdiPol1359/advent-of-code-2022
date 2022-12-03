const foo = <T>(array: Array<T>) => {
  const items = array.filter((value, index) => index % 2 === 0);

  return items;
};

const arr: number[] = [1, 2, 3, 4];
const res = foo(arr);
