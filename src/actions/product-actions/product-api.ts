import http from "../../utils/http/request";

export const fetchProduct = (): Promise<any> => http("get", "/products");
export const fetchProductTypes = (): Promise<any> =>
  http("get", "/products/types");
export const updateProduct = (id: string, data: any): Promise<any> =>
  http("patch", `/products/${id}`, {}, data);
