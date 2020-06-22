export const getTime = () => {
  return Math.round(new Date().getTime() / 1000);
};

export const getHistoryTime = (time: number) => {
  return Math.round((Math.round(new Date().getTime() / 1000) - time) / 60);
  //   return Math.floor(new Date().getTime() / 60) - Math.floor(time / 60);
};
