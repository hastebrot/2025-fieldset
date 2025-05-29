export const Console = {
  debug(...data: any[]) {
    if (process.env.NODE_ENV === "development") {
      console.debug(...data);
    }
  },

  error(...data: any[]) {
    console.error(...data);
  },
};
