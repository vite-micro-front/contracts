export type Brand<T, B extends string> = T & { __brand: B };
export type BoardId = Brand<string, "BoardId">;

export type Board = {
  id: BoardId;
  title: string;
};
