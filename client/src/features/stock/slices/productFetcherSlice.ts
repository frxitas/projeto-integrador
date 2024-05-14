import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

export type ProductDetail = {
  id: number;
  name: string;
  description: string;
  price: number;
  umed: number;
  group: number;
  manufacturer: number;
};

interface ProductDetailResponse {
  PROD_DESC: string;
  PROD_FABRICANTE_ID: number;
  PROD_GRUPO_ID: number;
  PROD_ID: number;
  PROD_NOME: string;
  PROD_UMED_ID: number;
  PROD_VALOR: number;
}

interface ProductState {
  product: {
    data: ProductDetail | null;
  } & InitialState;
}

type ProductAction = {
  getProductDetail: (id: number) => Promise<void>;
};

export type ProductFetcherSlice = ProductState & ProductAction;

const initialState: ProductState = {
  product: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createProductFetcherSlice: StateCreator<
  ProductFetcherSlice,
  [],
  [],
  ProductFetcherSlice
> = (set) => ({
  ...initialState,
  getProductDetail: async (id: number) => {
    set({ product: { ...initialState.product, loading: true } });
    try {
      const res = await axios.get<ProductDetailResponse>(`http://localhost:3000/product/${id}`);
      set({
        product: {
          ...initialState.product,
          data: {
            description: res.data.PROD_DESC,
            group: res.data.PROD_GRUPO_ID,
            id: res.data.PROD_ID,
            manufacturer: res.data.PROD_FABRICANTE_ID,
            name: res.data.PROD_NOME,
            price: res.data.PROD_VALOR,
            umed: res.data.PROD_UMED_ID,
          },
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        product: {
          ...initialState.product,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
