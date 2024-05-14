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

interface ProductState {
  productSaver: {
    data: boolean | null;
  } & InitialState;
}

type ProductAction = {
  updateProduct: (product: ProductDetail) => Promise<void>;
  createProduct: (product: Omit<ProductDetail, "id">) => Promise<void>;
};

export type ProductSaverSlice = ProductState & ProductAction;

const initialState: ProductState = {
  productSaver: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createProductSaverSlice: StateCreator<ProductSaverSlice, [], [], ProductSaverSlice> = (
  set,
) => ({
  ...initialState,
  updateProduct: async (product: ProductDetail) => {
    set({ productSaver: { ...initialState.productSaver, loading: true } });
    try {
      let data = {
        name: product.name,
        description: product.description,
        price: product.price,
        um_id: product.umed,
        group_id: product.group,
        manufacturer_id: product.manufacturer,
      };

      const res = await axios.put(`http://localhost:3000/product/${product.id}`, data);

      if (res.status === 200) {
        set({
          productSaver: {
            ...initialState.productSaver,
            data: true,
            success: true,
          },
        });
      }
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        productSaver: {
          ...initialState.productSaver,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
  createProduct: async (product: Omit<ProductDetail, "id">) => {
    set({ productSaver: { ...initialState.productSaver, loading: true } });
    try {
      let data = {
        name: product.name,
        description: product.description,
        price: product.price,
        um_id: product.umed,
        group_id: product.group,
        manufacturer_id: product.manufacturer,
      };

      const res = await axios.post(`http://localhost:3000/product`, data);

      if (res.status === 200) {
        set({
          productSaver: {
            ...initialState.productSaver,
            data: true,
            success: true,
          },
        });
      }
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        productSaver: {
          ...initialState.productSaver,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
