import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";
import { Ticket, TicketResponse } from "@/features/tickets/@types/ticketTypes";
import { InitialState } from "@/store/@types/slicesTypes";

interface TicketState {
  ticket: {
    data: Ticket | null;
  } & InitialState;
}

type TicketAction = {
  getTicketById: (id: number) => Promise<void>;
  clearTicket: () => void;
};

export type TicketFetcherSlice = TicketState & TicketAction;

const initialState: TicketState = {
  ticket: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createTicketFetcherSlice: StateCreator<
  TicketFetcherSlice,
  [],
  [],
  TicketFetcherSlice
> = (set) => ({
  ...initialState,
  getTicketById: async (id: number) => {
    set({ ticket: { ...initialState.ticket, loading: true } });
    try {
      const res = await axios.get<TicketResponse>(`http://localhost:3000/ticket/retrieve/${id}`);

      set({
        ticket: {
          ...initialState.ticket,
          data: {
            id: res.data.TICKET_ID,
            created_at: res.data.CREATED_AT,
            updated_at: res.data.UPDATED_AT,
            description: res.data.TICKET_DESCRIPTION,
            priority: res.data.TICKET_PRIORITY,
            productId: res.data.PRODUCT_ID,
            status: res.data.TICKET_STATUS,
            subject: res.data.TICKET_SUBJECT,
            type: res.data.TICKET_TYPE,
            contact: res.data.TICKET_CONTACT,
          },
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ticket: {
          ...initialState.ticket,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
  clearTicket: () => {
    set(initialState);
  },
});
