export declare namespace API {
  export type Response<T> = {
    data: T;
    error?: string;
  };

  export type ErrorResponse = Response<null>;

  export type Status = {
    success: true;
  };

  export type Error = {
    message: string;
    path: string;
    statusCode: number;
    timestamp: number;
  };

  export type List<T> = {
    list: T[];
    meta?: {
      total?: number;
      hasMore?: boolean;
    };
  };

  export type SortingValues = 'asc' | 'desc' | null;

  export type Sorting<T> = {
    [key in keyof T]?: SortingValues;
  };
}
