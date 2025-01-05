// Utitlity type to make properties optional
type Optional<T> = {
  [P in keyof T]?: T[P];
};

// Another utility to make properties required
type RequiredFields<T> = {
  [P in keyof T]-?: T[P];
};

// Define RequestModel such that specified options are required
export type RequestModel<
  T extends Partial<{
    path: object;
    queryParameters: object;
    headers: object;
    payload: object;
  }>,
> = {
  path: T["path"] extends object ? RequiredFields<T["path"]> : undefined;
  queryParameters?: T["queryParameters"] extends object
    ? Optional<T["queryParameters"]>
    : undefined;
  headers?: T["headers"] extends object ? Optional<T["headers"]> : undefined;
  payload?: T["payload"] extends object ? Optional<T["payload"]> : undefined;
};
