import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

type TicketType = Record<string, string>;

interface TicketTypeState {
  ticketType: {
    data: TicketType | null;
  } & InitialState;
}

type TicketTypeAction = {
  getTicketTypes: () => Promise<void>;
};

export type TicketTypeSlice = TicketTypeState & TicketTypeAction;

const initialState: TicketTypeState = {
  ticketType: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createTicketTypeSlice: StateCreator<TicketTypeSlice, [], [], TicketTypeSlice> = (
  set,
) => ({
  ...initialState,
  getTicketTypes: async () => {
    set({ ...initialState, ticketType: { ...initialState.ticketType, loading: true } });
    try {
      const res = await axios.get<TicketType>(`http://localhost:3000/ticket/types`);

      set({
        ...initialState,
        ticketType: {
          ...initialState.ticketType,
          data: res.data,
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ...initialState,
        ticketType: {
          ...initialState.ticketType,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
