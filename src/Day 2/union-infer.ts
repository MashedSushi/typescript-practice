import type { Equal, Expect } from "../helper";

const parser_A = {
    parse: () => 1
};

const parser_B = () => "hi";

const parser_C = {
    parse: () => true
};

type GetParserResult<T> = T extends {
        parse: () => infer R
    }
    ? R
    : T extends () => infer R
        ? R
        : T extends {
                extract: () => infer R
            }
            ? R
            : never;

type test = Expect<
    Equal<GetParserResult<typeof parser_A>, number> &
    Equal<GetParserResult<typeof parser_B>, string> &
    Equal<GetParserResult<typeof parser_C>, boolean>
>;