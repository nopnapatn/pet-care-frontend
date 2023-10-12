import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => {
    return {
      token: "",
      user: {
        id: "",
        firstName: "",
        lastName: "",
        email: "",
        role: "",
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
    setUser(
      id: string,
      firstName: string,
      lastName: string,
      email: string,
      role: string
    ) {
      this.user.id = id;
      this.user.firstName = firstName;
      this.user.lastName = lastName;
      this.user.email = email;
      this.user.role = role;
    },
    clear() {
      this.token = "";
      this.user.id = "";
      this.user.firstName = "";
      this.user.lastName = "";
      this.user.email = "";
      this.user.role = "";
    },
  },
  persist: true,
});
