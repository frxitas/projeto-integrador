import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

export type ProductList = {
  id: number;
  name: string;
  description: string;
  price: number;
  umed: number;
  group: number;
  manufacturer: number;
};

interface ProductListResponse {
  PROD_DESC: string;
  PROD_FABRICANTE_ID: number;
  PROD_GRUPO_ID: number;
  PROD_ID: number;
  PROD_NOME: string;
  PROD_UMED_ID: number;
  PROD_VALOR: number;
}

interface ProductState {
  productList: {
    data: ProductList[] | null;
  } & InitialState;
}

type ProductAction = {
  getProductList: () => Promise<void>;
};

export type ProductListFetcherSlice = ProductState & ProductAction;

const initialState: ProductState = {
  productList: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createProductListFetcherSlice: StateCreator<
  ProductListFetcherSlice,
  [],
  [],
  ProductListFetcherSlice
> = (set) => ({
  ...initialState,
  getProductList: async () => {
    set({ productList: { ...initialState.productList, loading: true } });
    try {
      const res = await axios.get<ProductListResponse[]>(`http://localhost:3000/product/list`);
      set({
        productList: {
          ...initialState.productList,
          data: res.data.map((product) => {
            return {
              description: product.PROD_DESC,
              group: product.PROD_GRUPO_ID,
              id: product.PROD_ID,
              manufacturer: product.PROD_FABRICANTE_ID,
              name: product.PROD_NOME,
              price: product.PROD_VALOR,
              umed: product.PROD_UMED_ID,
            };
          }),
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        productList: {
          ...initialState.productList,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
