export interface IOptions {
  size: string,
  count: string,
  id: number,
}

export interface IOptionsStoreState {
  optionsArr: IOptions[],
  loading: boolean
  error: unknown[];
}