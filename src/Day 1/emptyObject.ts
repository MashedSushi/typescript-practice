import { Equal, Expect } from "../helper";
import type { EmptyObject } from "type-fest";


// EmptyObject는 빈 객체 타입입니다. 즉, 프로퍼티가 하나도 없는 객체를 나타냅니다.
// {}로 만약 어노테이션을 한다면 모든 객체가 {}에 할당될 수 있기 때문에, EmptyObject는 {}와는 다릅니다.

// @ts-expect-error
type test1 = Expect<Equal<EmptyObject, {}>>;
// EmptyObject는 {}와 다르므로 오류가 발생합니다.

type test2 = Expect<Equal<EmptyObject, EmptyObject>>;
// EmptyObject는 자기 자신과 같으므로 오류가 발생하지 않습니다.

// @ts-expect-error
type test3 = Expect<Equal<EmptyObject, { a: number }>>;
// EmptyObject는 프로퍼티가 없지만 { a: number }는 프로퍼티가 있으므로 오류가 발생합니다.