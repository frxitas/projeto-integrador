import { InitialState } from "@/store/@types/slicesTypes";
import axios, { AxiosError } from "axios";
import { StateCreator } from "zustand";

type Group = {
  id: number;
  name: string;
  description: string;
  category: number;
};

interface GroupResponse {
  GRUPO_ID: number;
  GRUPO_NOME: string;
  GRUPO_DESC: string;
  GRUPO_CATEGORIA_ID: number;
}

interface GroupState {
  group: {
    data: Group[] | null;
  } & InitialState;
}

type GroupAction = {
  getGroups: () => Promise<void>;
};

export type GroupSlice = GroupState & GroupAction;

const initialState: GroupState = {
  group: { loading: false, success: false, error: false, data: null, errorData: null },
};

export const createGroupSlice: StateCreator<GroupSlice, [], [], GroupSlice> = (set) => ({
  ...initialState,
  getGroups: async () => {
    set({ ...initialState, group: { ...initialState.group, loading: true } });
    try {
      const res = await axios.get<GroupResponse[]>(`http://localhost:3000/groups`);

      let groupAdapted: Group[] = res.data.map((group) => {
        return {
          id: group.GRUPO_ID,
          name: group.GRUPO_NOME,
          description: group.GRUPO_DESC,
          category: group.GRUPO_CATEGORIA_ID,
        };
      });

      set({
        ...initialState,
        group: {
          ...initialState.group,
          data: groupAdapted,
          success: true,
        },
      });
    } catch (err) {
      let errors = err as Error | AxiosError;
      set({
        ...initialState,
        group: {
          ...initialState.group,
          error: true,
          errorData: errors.message,
        },
      });
    }
  },
});
