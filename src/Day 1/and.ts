import type { Equal, Expect } from "../helper";
import type { And } from "type-fest";

// And는 논리곱을 나타내는 타입입니다. 여러 개의 타입이 모두 true일 때 true를 반환합니다.
// test1에서는 true와 true를 And에 전달했으므로, And는 true를 반환합니다.
type test1 = Expect<Equal<And<true, true>, true>>;

// test2에서는 true와 false를 And에 전달했으므로, And는 false를 반환합니다.
type test2 = Expect<Equal<And<true, false>, false>>;

// 활용 예시
type CanAccessSecretData<A extends boolean, B extends boolean> = 
    And<A, B> extends true 
        ? { secretKey: string; data: string[] }
        : { error: "접근 권한이 없습니다." };

// Case A: 관리자인데 2단계 인증을 안 함 (false)
const userA: CanAccessSecretData<true, false> = {
    error: "접근 권한이 없습니다."
};

// Case B: 관리자도 아니고 인증도 안 함 (false)
const userB: CanAccessSecretData<false, false> = {
    error: "접근 권한이 없습니다."
};

// Case C: 관리자이고 2단계 인증도 완료함 (true)
const userC: CanAccessSecretData<true, true> = {
    secretKey: "KEY-12345",
    data: ["INFO1", "INFO2"]
};