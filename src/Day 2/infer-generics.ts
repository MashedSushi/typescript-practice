import type { Equal, Expect } from "../helper";

interface User<Event, Context, Name, Point> {
    getEvent:   () => Event;
    getContext: () => Context;
    getName:    () => Name;
    getPoint:   () => Point;
}

type ExampleUser = User<string, { ip: string }, string, number>;

type GetName<T> = T extends User<any, any, infer Name, any> ? Name : never;

type test1 = Expect<Equal<GetName<ExampleUser>, string>>;
// ExampleUser는 User<string, { ip: string }, string, number>이므로, GetName은 string을 반환합니다.

type test2 = Expect<Equal<GetName<number>, never>>;
// number는 User 타입이 아니므로, GetName은 never를 반환합니다.