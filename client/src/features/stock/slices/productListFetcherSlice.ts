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
  products: {
    PROD_DESC: string;
    PROD_FABRICANTE_ID: number;
    PROD_GRUPO_ID: number;
    PROD_ID: number;
    PROD_NOME: string;
    PROD_UMED_ID: number;
    PROD_VALOR: number;
  }[];
  total: number;
}

interface ProductState {
  productList: {
    data: {
      products: ProductList[];
      total: number;
    } | null;
  } & InitialState;
}

type ProductAction = {
  getProductList: (skip: number, take: number, name?: string) => Promise<void>;
  clearProductList: () => void;
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
  getProductList: async (skip = 0, take = 10, name = "") => {
    set({ productList: { ...initialState.productList, loading: true } });
    try {
      const res = await axios.get<ProductListResponse>(`http://localhost:3000/product/list`, {
        params: { skip, take, name },
      });
      set({
        productList: {
          ...initialState.productList,
          data: {
            products: res.data.products.map((product) => {
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
            total: res.data.total,
          },
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
  clearProductList: () => {
    set(initialState);
  },
});
