const list = ["beach", "holiday", "market"];

const promiseMaker = (result: any): Promise<any> =>
  new Promise((res) => res(result));

export const getList = async (): Promise<Array<string>> =>
  await promiseMaker(list);

export const setList = async (item: string): Promise<Array<string>> =>
  await promiseMaker(list.push(item));
