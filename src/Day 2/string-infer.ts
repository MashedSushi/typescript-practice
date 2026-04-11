import type { Equal, Expect } from "../helper";

type strings = [
    "A 1",
    "A 2",
    "A 3",
    "B 1",
    "B 2",
    "B 3",
    "C 1",
    "C 2",
    "C 3"
]

type GetStringType<T> = T extends `${string} ${infer N}` ? N : never;


type test = Expect<
    Equal<
        GetStringType<strings[number]>, "1" | "2" | "3"
    >
>;