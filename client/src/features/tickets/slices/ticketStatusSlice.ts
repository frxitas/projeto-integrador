import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

type TicketStatus = Record<string, string>;

interface TicketStatusState {
  ticketStatus: {
    data: TicketStatus | null;
  } & InitialState;
}

type TicketStatusAction = {
  getTicketStatus: () => Promise<void>;
};

export type TicketStatusSlice = TicketStatusState & TicketStatusAction;

const initialState: TicketStatusState = {
  ticketStatus: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createTicketStatusSlice: StateCreator<TicketStatusSlice, [], [], TicketStatusSlice> = (
  set,
) => ({
  ...initialState,
  getTicketStatus: async () => {
    set({ ...initialState, ticketStatus: { ...initialState.ticketStatus, loading: true } });
    try {
      const res = await axios.get<TicketStatus>(`http://localhost:3000/ticket/status`);

      set({
        ...initialState,
        ticketStatus: {
          ...initialState.ticketStatus,
          data: res.data,
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ...initialState,
        ticketStatus: {
          ...initialState.ticketStatus,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
