import type { TraceResponse, TraceResult } from "../Types/types";

export const getDataCards = async (
  inputValue: string,
): Promise<TraceResult[]> => {
  console.log("📞 getData вызвана");

  if (!inputValue.trim()) {
    alert("Пустое поле ввода");
    throw new Error("Пустое поле ввода");
  }
  try {
    const response = await fetch(
      `https://api.trace.moe/search?url=${encodeURIComponent(inputValue)}`,
    );

    if (!response.ok) {
      throw new Error(`Ошибка сервера: ${response.status}`);
    }

    const responseData: TraceResponse = await response.json();

    return responseData.result;
  } catch (error) {
    console.error("Ошибка в getData:", error);
    throw error;
  }
};
