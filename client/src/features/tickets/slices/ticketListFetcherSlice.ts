import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";
import { Ticket, TicketResponse } from "@/features/tickets/@types/ticketTypes";
import { InitialState } from "@/store/@types/slicesTypes";

interface TicketState {
  ticketList: {
    data: {
      tickets: Ticket[];
      total: number;
    } | null;
  } & InitialState;
}

interface GetTicketsReponse {
  tickets: TicketResponse[];
  total: number;
}

type TicketAction = {
  getTickets: (skip?: number, take?: number, subject?: string, orderBy?: string) => Promise<void>;
};

export type TicketListFetcherSlice = TicketState & TicketAction;

const initialState: TicketState = {
  ticketList: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createTicketListFetcherSlice: StateCreator<
  TicketListFetcherSlice,
  [],
  [],
  TicketListFetcherSlice
> = (set) => ({
  ...initialState,
  getTickets: async (skip = 0, take = 10, subject: string = "", orderBy: string = "") => {
    set({ ticketList: { ...initialState.ticketList, loading: true } });
    try {
      const res = await axios.get<GetTicketsReponse>(`http://localhost:3000/ticket/list`, {
        params: {
          skip,
          take,
          subject,
          orderBy,
        },
      });
      set({
        ticketList: {
          ...initialState.ticketList,
          data: {
            tickets: res.data.tickets.map((ticket) => {
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
            total: res.data.total,
          },
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ticketList: {
          ...initialState.ticketList,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
