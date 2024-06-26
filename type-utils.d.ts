type MaybePromise<T> = T | Promise<T>;
type NullablePartial<T> = { [P in keyof T]?: T[P] | null };
type Writable<T> = { -readonly [P in keyof T]: T[P] };
type Nullable<T> = T | null;
type Optional<T> = T | undefined;
