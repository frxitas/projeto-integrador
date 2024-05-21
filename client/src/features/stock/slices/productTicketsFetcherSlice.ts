import { Ticket, TicketResponse } from "@/features/tickets/@types/ticketTypes";
import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

interface ProductState {
  productTicket: {
    data: Ticket[] | null;
  } & InitialState;
}

type ProductAction = {
  getProductTicket: (id: number, subject?: string) => Promise<void>;
};

export type ProductTicketFetcherSlice = ProductState & ProductAction;

const initialState: ProductState = {
  productTicket: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createProductTicketFetcherSlice: StateCreator<
  ProductTicketFetcherSlice,
  [],
  [],
  ProductTicketFetcherSlice
> = (set) => ({
  ...initialState,
  getProductTicket: async (id: number, subject: string = "") => {
    set({ productTicket: { ...initialState.productTicket, loading: true } });
    try {
      const res = await axios.get<TicketResponse[]>(
        `http://localhost:3000/ticket/list/product?id=${id}&subject=${subject}`,
      );
      set({
        productTicket: {
          ...initialState.productTicket,
          data: res.data.map((ticket) => {
            return {
              id: ticket.TICKET_ID,
              description: ticket.TICKET_DESCRIPTION,
              priority: ticket.TICKET_PRIORITY,
              productId: ticket.PRODUCT_ID,
              status: ticket.TICKET_STATUS,
              subject: ticket.TICKET_SUBJECT,
              type: ticket.TICKET_TYPE,
              created_at: ticket.CREATED_AT,
              updated_at: ticket.UPDATED_AT,
            };
          }),
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        productTicket: {
          ...initialState.productTicket,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
