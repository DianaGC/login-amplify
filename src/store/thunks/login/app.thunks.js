
  const register = createAsyncThunk(
    "app/register",
    async (payload) => {
      const response = await Auth.signUp({
        username,
        password,
        attributes: {
          email: username,
        },
        autoSignIn: {
          enabled: false,
        }
      });

    }
  );

  export {
    register
  }