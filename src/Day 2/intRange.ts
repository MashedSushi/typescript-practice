import type { Equal, Expect } from "../helper";
import type { IntRange } from "type-fest";

// IntRange는 주어진 범위 내의 정수 타입을 생성하는 타입입니다.
type test1 = Expect<Equal<IntRange<0, 5>, 0 | 1 | 2 | 3 | 4>>;
// IntRange<0, 5>는 0부터 4까지의 정수 유니언을 생성합니다. 따라서 IntRange<0, 5>는 0 | 1 | 2 | 3 | 4와 같습니다.

type test3 = Expect<Equal<IntRange<0, 10, 2>, 0 | 2 | 4 | 6 | 8>>;
// IntRange<0, 10, 2>는 0부터 9까지의 정수 중에서 2씩 증가하는 정수 유니언을 생성합니다.

// 예시
type int8 = IntRange<-128, 128>;
