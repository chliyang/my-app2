import http from "../../utils/http/request";

export const fetchProduct: Promise<any> = http("get", "/products");
export const fetchProductTypes: Promise<any> = http("get", "/products/types");
