import { create } from "zustand";

import {
  ProductFetcherSlice,
  createProductFetcherSlice,
} from "@/features/stock/slices/productFetcherSlice";
import {
  ProductSaverSlice,
  createProductSaverSlice,
} from "@/features/stock/slices/productSaverSlice";
import { UmedSlice, createUmedSlice } from "@/features/stock/slices/umedSlice";
import { GroupSlice, createGroupSlice } from "@/features/stock/slices/groupsSlice";
import {
  ManufecturerSlice,
  createManufecturerSlice,
} from "@/features/stock/slices/manufacturerSlice";
import {
  ProductListFetcherSlice,
  createProductListFetcherSlice,
} from "@/features/stock/slices/productListFetcherSlice";
import {
  ProductDeleterSlice,
  createProductDeleterSlice,
} from "@/features/stock/slices/productDeleterSlice";

export const useStore = create<
  ProductListFetcherSlice &
    ProductFetcherSlice &
    ProductSaverSlice &
    ProductDeleterSlice &
    UmedSlice &
    GroupSlice &
    ManufecturerSlice
>((...a) => ({
  ...createProductFetcherSlice(...a),
  ...createProductListFetcherSlice(...a),
  ...createProductSaverSlice(...a),
  ...createProductDeleterSlice(...a),
  ...createUmedSlice(...a),
  ...createGroupSlice(...a),
  ...createManufecturerSlice(...a),
}));
