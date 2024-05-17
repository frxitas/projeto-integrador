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
import {
  ProductTicketFetcherSlice,
  createProductTicketFetcherSlice,
} from "@/features/stock/slices/productTicketsFetcherSlice";
import {
  TicketStatusSlice,
  createTicketStatusSlice,
} from "@/features/tickets/slices/ticketStatusSlice";
import {
  TicketPrioritySlice,
  createTicketPrioritySlice,
} from "@/features/tickets/slices/ticketPrioritySlice";
import { TicketTypeSlice, createTicketTypeSlice } from "@/features/tickets/slices/ticketTypeSlice";
import {
  TicketListFetcherSlice,
  createTicketListFetcherSlice,
} from "@/features/tickets/slices/ticketListFetcherSlice";
import {
  TicketCountSlice,
  createTicketCountSlice,
} from "@/features/tickets/slices/ticketCountFetcherSlice";
import {
  TicketSaverSlice,
  createTicketSaverSlice,
} from "@/features/tickets/slices/ticketSaverSlice";
import {
  TicketFetcherSlice,
  createTicketFetcherSlice,
} from "@/features/tickets/slices/ticketFetcherSlice";

export const useStore = create<
  ProductListFetcherSlice &
    ProductFetcherSlice &
    ProductSaverSlice &
    ProductDeleterSlice &
    ProductTicketFetcherSlice &
    UmedSlice &
    GroupSlice &
    ManufecturerSlice &
    TicketStatusSlice &
    TicketPrioritySlice &
    TicketTypeSlice &
    TicketListFetcherSlice &
    TicketCountSlice &
    TicketSaverSlice &
    TicketFetcherSlice
>((...a) => ({
  ...createProductFetcherSlice(...a),
  ...createProductListFetcherSlice(...a),
  ...createProductSaverSlice(...a),
  ...createProductDeleterSlice(...a),
  ...createProductTicketFetcherSlice(...a),
  ...createUmedSlice(...a),
  ...createGroupSlice(...a),
  ...createManufecturerSlice(...a),
  ...createTicketStatusSlice(...a),
  ...createTicketPrioritySlice(...a),
  ...createTicketTypeSlice(...a),
  ...createTicketListFetcherSlice(...a),
  ...createTicketCountSlice(...a),
  ...createTicketSaverSlice(...a),
  ...createTicketFetcherSlice(...a),
}));
