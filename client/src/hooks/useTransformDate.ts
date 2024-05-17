export const useTransformDate = (date: number) => {
  return new Date(date * 1000)
    .toLocaleString("pt-br", {
      timeZone: "UTC",
    })
    .split(",");
};
