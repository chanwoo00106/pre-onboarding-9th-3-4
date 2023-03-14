type ServiceResponseType<T> = Promise<
  | {
      status: number | undefined;
      ok: true;
      data: T;
    }
  | {
      status: number | undefined;
      ok: false;
      data: undefined;
    }
>;

export default ServiceResponseType;
