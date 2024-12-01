export type Brand<T, B extends string> = T & { __brand: B };
export type BoardId = Brand<string, "BoardId">;
