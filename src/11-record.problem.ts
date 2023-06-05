import { expect, it } from "vitest";

const createCache = () => {
  // Solution ONE
  interface Cache {
    [id: string]: string
  }
  const cache: Cache = {};
  // Solution TWO https://www.typescriptlang.org/docs/handbook/utility-types.html#recordkeys-type
  // const cache: Record<string, string> = {};
  // Solution THREE
  // const cache: {
  //   [index: number]: string;
  // } = {};

  const add = (id: string, value: string) => {
    cache[id] = value;
  };

  const remove = (id: string) => {
    delete cache[id];
  };

  return {
    cache,
    add,
    remove,
  };
};

it("Should add values to the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");

  expect(cache.cache["123"]).toEqual("Matt");
});

it("Should remove values from the cache", () => {
  const cache = createCache();

  cache.add("123", "Matt");
  cache.remove("123");

  expect(cache.cache["123"]).toEqual(undefined);
});
