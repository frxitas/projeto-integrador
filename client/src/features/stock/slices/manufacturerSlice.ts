import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

type Manufecturer = {
  id: number;
  name: string;
  cnpj: string;
};

interface ManufecturerResponse {
  FABRICANTE_ID: number;
  FABRICANTE_NOME: string;
  FABRICANTE_CNPJ: string;
}

interface ManufecturerState {
  manufacturer: {
    data: Manufecturer[] | null;
  } & InitialState;
}

type ManufecturerAction = {
  getManufecturers: () => Promise<void>;
};

export type ManufecturerSlice = ManufecturerState & ManufecturerAction;

const initialState: ManufecturerState = {
  manufacturer: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createManufecturerSlice: StateCreator<ManufecturerSlice, [], [], ManufecturerSlice> = (
  set,
) => ({
  ...initialState,
  getManufecturers: async () => {
    set({ ...initialState, manufacturer: { ...initialState.manufacturer, loading: true } });
    try {
      const res = await axios.get<ManufecturerResponse[]>(`http://localhost:3000/manufacturers`);

      let manufacturerAdapted: Manufecturer[] = res.data.map((manufacturer) => {
        return {
          id: manufacturer.FABRICANTE_ID,
          name: manufacturer.FABRICANTE_NOME,
          cnpj: manufacturer.FABRICANTE_CNPJ,
        };
      });

      set({
        ...initialState,
        manufacturer: {
          ...initialState.manufacturer,
          data: manufacturerAdapted,
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ...initialState,
        manufacturer: {
          ...initialState.manufacturer,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
