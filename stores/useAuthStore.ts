import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
      user: {
        firstName: "",
        lastName: "",
        email: "",
      },
    };
  },
  getters: {
    isLogin: (state) => state.token !== "",
  },
  actions: {
    setNewToken(token: string) {
      this.token = token;
    },
    setUser(firstName: string, lastName: string, email: string) {
      this.user.firstName = firstName;
      this.user.lastName = lastName;
      this.user.email = email;
    },
    clear() {
      this.token = "";
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.email = "";
    },
  },
  persist: true,
});
