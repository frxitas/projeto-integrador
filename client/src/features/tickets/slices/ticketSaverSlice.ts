import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

export type TicketDetail = {
  id: number;
  productId: number;
  contact: string;
  subject: string;
  description: string;
  type: number;
  priority: number;
  status: number;
};

interface TicketState {
  ticketSaver: {
    data: boolean | null;
  } & InitialState;
}

type TicketAction = {
  updateTicket: (product: TicketDetail) => Promise<void>;
  createTicket: (product: Omit<TicketDetail, "id">) => Promise<void>;
};

export type TicketSaverSlice = TicketState & TicketAction;

const initialState: TicketState = {
  ticketSaver: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createTicketSaverSlice: StateCreator<TicketSaverSlice, [], [], TicketSaverSlice> = (
  set,
) => ({
  ...initialState,
  updateTicket: async (ticket: TicketDetail) => {
    set({ ticketSaver: { ...initialState.ticketSaver, loading: true } });
    try {
      let data: Omit<TicketDetail, "id"> = {
        productId: ticket.productId,
        contact: ticket.contact,
        subject: ticket.subject,
        description: ticket.description,
        priority: ticket.priority,
        status: ticket.status,
        type: ticket.type,
      };

      const res = await axios.put(`http://localhost:3000/ticket/update/${ticket.id}`, data);

      if (res.status === 200) {
        set({
          ticketSaver: {
            ...initialState.ticketSaver,
            data: true,
            success: true,
          },
        });
      }
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ticketSaver: {
          ...initialState.ticketSaver,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
  createTicket: async (ticket: Omit<TicketDetail, "id">) => {
    set({ ticketSaver: { ...initialState.ticketSaver, loading: true } });
    try {
      let data: Omit<TicketDetail, "id" | "status"> = {
        productId: ticket.productId,
        contact: ticket.contact,
        subject: ticket.subject,
        description: ticket.description,
        priority: ticket.priority,
        type: ticket.type,
      };

      await axios.post(`http://localhost:3000/mail`, data);
      const res = await axios.post(`http://localhost:3000/ticket/create`, data);

      if (res.status === 200) {
        set({
          ticketSaver: {
            ...initialState.ticketSaver,
            data: true,
            success: true,
          },
        });
      }
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ticketSaver: {
          ...initialState.ticketSaver,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
