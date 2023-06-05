import { expect, it } from "vitest";

const tryCatchDemo = (state: "fail" | "succeed") => {
  try {
    if (state === "fail") {
      throw new Error("Failure!");
    }
  } catch (e) {
    if (e instanceof Error) {
      return  e.message;
    }
  }
  // Solution TWO: not ideal since we dont know what type message will be
  // } catch (e: any) {
  //   return e.message;
  // }
  // Solution THREE
  // } catch (e) {
  //   return ( e as Error).message;
  // }
};

it("Should return the message when it fails", () => {
  expect(tryCatchDemo("fail")).toEqual("Failure!");
});
