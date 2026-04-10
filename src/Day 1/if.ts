import type { If } from "type-fest";
import type { Equal, Expect } from "../helper";

// If는 조건부 타입으로, 첫 번째 인자가 true이면 두 번째 인자를 반환하고, false이면 세 번째 인자를 반환합니다.
// test1에서는 true나 false가 아닌 boolean 타입이 첫 번째 인자로 전달되었으므로, If는 string과 number의 유니언 타입을 반환합니다.
type test1 = Expect< Equal< If<boolean, string, number>, string | number > >

// test2에서는 true가 첫 번째 인자로 전달되었으므로, If는 string을 반환합니다.
type test2 = Expect< Equal< If<true, string, number>, string > >

// test3에서는 false가 첫 번째 인자로 전달되었으므로, If는 number를 반환합니다.
type test3 = Expect< Equal< If<false, string, number>, number > >
