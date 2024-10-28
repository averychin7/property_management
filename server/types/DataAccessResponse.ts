export type DataAccessResponse<Data, Error> =
  | ErrorResponse<Error>
  | SuccessResponse<Data>;

type ErrorResponse<Error> = {
  success: false;
  errMessage: string;
  errDetails: Error;
};

type SuccessResponse<Data> = {
  success: true;
  data: Data;
  message?: string;
};
