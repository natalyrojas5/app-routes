
export const createAuthSlice = (set, get) => ({
  token: '',
  user: '',
  status: 'unauthorized',

  getUser: () => {
    const { token, user, status } = get();
    return { token, user, status };
  },

  loginUser: () => {
    set({ user: 'TEST-USER', token: 'ABC-123', status: 'authorized' });
  },

  logoutUser: () => {
    set({ user: '', token: '', status: "unauthorized" })
  }
})
