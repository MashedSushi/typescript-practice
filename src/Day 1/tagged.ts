import type { Equal, Expect } from "../helper";
import type { Tagged } from "type-fest";

// Tagged 타입을 사용하여 UserId를 정의합니다. UserId는 number이지만, Tagged를 사용하여 고유한 타입으로 만듭니다.
type UserId = Tagged<number, "UserId">;

type returnUserId = () => UserId;

//@ts-expect-error
type test1 = Expect<Equal<UserId, number>>;
// UserId는 number이지만 UserId가 아니므로 오류가 나옵니다.

type test2 = Expect<Equal<returnUserId, () => UserId>>;
// returnUserId는 UserId를 반환하므로 오류가 나지 않습니다.