import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";
import { InitialState } from "@/store/@types/slicesTypes";

interface TicketCountState {
  ticketCount: {
    data: {
      count: number[];
    } | null;
  } & InitialState;
}

type TicketCountAction = {
  getTicketCount: (status: number[]) => Promise<void>;
};

export type TicketCountSlice = TicketCountState & TicketCountAction;

const initialState: TicketCountState = {
  ticketCount: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createTicketCountSlice: StateCreator<TicketCountSlice, [], [], TicketCountSlice> = (
  set,
) => ({
  ...initialState,
  getTicketCount: async (status: number[]) => {
    set({ ticketCount: { ...initialState.ticketCount, loading: true } });
    try {
      const res = await axios.get<number[]>(`http://localhost:3000/ticket/count/status`, {
        params: { status },
      });
      set({
        ticketCount: {
          ...initialState.ticketCount,
          data: { count: res.data },
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ticketCount: {
          ...initialState.ticketCount,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
