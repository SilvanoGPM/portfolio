export type IntersectingTypes<T, U> = {
  [K in Extract<keyof T, keyof U>]: T[K];
};
