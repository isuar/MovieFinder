export const useUser = defineStore("user", {
  state: () => {
    return {
      isLoggedIn: false,
    };
  },
  getters: {},
  actions: {
    login() {
      // Simulate a login action
      this.isLoggedIn = true;
      useRouter().push("/");
    },
  },
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
