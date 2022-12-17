import localforage from "localforage"
import { LoginPayload } from "../types/user";

let _userStore: LocalForage;

const createStore = () => {
  return {
    async setUser (username: string, user: LoginPayload) {
      await  _userStore.setItem(username, user);
      return true;
    },
    async getUser (username: string) {
      return (await _userStore.getItem(username)) as LoginPayload || null;
    }
  }
}

export const userStore = createStore();