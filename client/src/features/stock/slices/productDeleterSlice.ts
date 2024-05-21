import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

interface ProductState {
  productDeleter: {
    data: boolean | null;
  } & InitialState;
}

type ProductAction = {
  deleteProduct: (id: number) => Promise<void>;
  clearDeleteProduct: () => void;
};

export type ProductDeleterSlice = ProductState & ProductAction;

const initialState: ProductState = {
  productDeleter: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createProductDeleterSlice: StateCreator<
  ProductDeleterSlice,
  [],
  [],
  ProductDeleterSlice
> = (set) => ({
  ...initialState,
  deleteProduct: async (id: number) => {
    set({ productDeleter: { ...initialState.productDeleter, loading: true } });
    try {
      const res = await axios.delete<boolean>(`http://localhost:3000/product/${id}`);

      if (res.status === 200)
        set({
          productDeleter: {
            ...initialState.productDeleter,
            data: true,
            success: true,
          },
        });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        productDeleter: {
          ...initialState.productDeleter,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
  clearDeleteProduct: () => {
    set(initialState);
  },
});
