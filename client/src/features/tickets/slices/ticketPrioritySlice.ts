import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

type TicketPriority = Record<string, string>;

interface TicketPriorityState {
  ticketPriority: {
    data: TicketPriority | null;
  } & InitialState;
}

type TicketPriorityAction = {
  getTicketPriority: () => Promise<void>;
};

export type TicketPrioritySlice = TicketPriorityState & TicketPriorityAction;

const initialState: TicketPriorityState = {
  ticketPriority: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createTicketPrioritySlice: StateCreator<
  TicketPrioritySlice,
  [],
  [],
  TicketPrioritySlice
> = (set) => ({
  ...initialState,
  getTicketPriority: async () => {
    set({ ticketPriority: { ...initialState.ticketPriority, loading: true } });
    try {
      const res = await axios.get<TicketPriority>(`http://localhost:3000/ticket/priority`);

      set({
        ticketPriority: {
          ...initialState.ticketPriority,
          data: res.data,
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ticketPriority: {
          ...initialState.ticketPriority,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
