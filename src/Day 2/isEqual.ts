import type { Expect } from "../helper";
import type { IsEqual, Tagged } from "type-fest";

// IsEqual는 두 타입이 일치하는지 확인하는 타입입니다.
// test1에서는 A와 B가 정확히 일치하므로, IsEqual는 true를 반환합니다.
type A = { a: number };
type B = { a: number };
type C = { a: number; b: string };

type taggedA = Tagged<A, "A">;
type taggedB = Tagged<B, "B">;
type taggedC = Tagged<C, "C">;

// @ts-expect-error
type test1 = Expect<IsEqual<taggedA, taggedB>>;
// A와 B는 구조적으로는 같지만, Tagged를 사용하여 고유한 타입으로 만들었기 때문에 일치하지 않습니다.
// 따라서 IsEqual는 false를 반환합니다.

// @ts-expect-error
type test2 = Expect<IsEqual<A, C>>;
// A와 C는 구조적으로 다르므로 일치하지 않습니다. 따라서 IsEqual는 false를 반환합니다.

type test3 = Expect<IsEqual<A, A>>;
// A와 A는 일치하므로 IsEqual는 true를 반환합니다.

type test4 = Expect<IsEqual<taggedA, taggedA>>;
// taggedA와 taggedA는 일치하므로 IsEqual는 true를 반환합니다.