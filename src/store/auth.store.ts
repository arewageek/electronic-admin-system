import { create } from "zustand";

type TUser = {
  id: string;
  email: string;
  role: string;
  name: string;
  tel: string;
  bio: string;
};

export type IAuthStore = {
  id: string;
  email: string;
  name: string;
  role: string;
  tel: string;
  bio: string;
  updateInfo: ({ id, email, role, name, tel, bio }: TUser) => void;
};

export const useAuthStore = create<IAuthStore>((set, get) => ({
  id: "",
  email: "",
  name: "",
  role: "",
  tel: "",
  bio: "",
  updateInfo: ({ id, email, role, tel, name, bio }) => {
    set({ id, email, name, role, tel, bio });
  },
}));
