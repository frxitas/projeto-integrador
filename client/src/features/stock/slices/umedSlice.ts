import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

type Umed = {
  id: number;
  name: string;
  description: string;
};

interface UmedResponse {
  UMED_ID: number;
  UMED_NOME: string;
  UMED_DESC: string;
}

interface UmedState {
  umed: {
    data: Umed[] | null;
  } & InitialState;
}

type UmedAction = {
  getUmeds: () => Promise<void>;
};

export type UmedSlice = UmedState & UmedAction;

const initialState: UmedState = {
  umed: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createUmedSlice: StateCreator<UmedSlice, [], [], UmedSlice> = (set) => ({
  ...initialState,
  getUmeds: async () => {
    set({ ...initialState, umed: { ...initialState.umed, loading: true } });
    try {
      const res = await axios.get<UmedResponse[]>(`http://localhost:3000/unities`);

      let umedAdapted: Umed[] = res.data.map((umed) => {
        return { id: umed.UMED_ID, name: umed.UMED_NOME, description: umed.UMED_DESC };
      });

      set({
        ...initialState,
        umed: {
          ...initialState.umed,
          data: umedAdapted,
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ...initialState,
        umed: {
          ...initialState.umed,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
