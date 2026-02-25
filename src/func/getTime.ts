export const getTime = (
  num: number,
): { minute: string; formattedSeconds: string } => {
  const minute = Math.floor(num / 60).toString();

  const formattedSeconds = Math.floor(num / 60)
    .toString()
    .padStart(2, "0");

  return {
    minute,
    formattedSeconds,
  };
};
