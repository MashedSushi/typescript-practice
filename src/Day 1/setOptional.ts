import type { SetOptional } from "type-fest";

interface User {
    id: number;
    name: string;
    email: string;
}

// SetOptional을 사용하여 User 타입에서 name과 email을 선택적으로 만드는 OptionalUser 타입을 정의합니다.
type OptionalUser = SetOptional<User, "name" | "email">;

// OptionalUser 타입에서는 name과 email이 선택적이므로 오류가 발생하지 않습니다.
const user: OptionalUser = {
    id: 1
}