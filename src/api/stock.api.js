const basePath = "https://finnhub.io/api/v1";
const apiKey = import.meta.env.VITE_API_KEY;
const keyAlphaVantage = import.meta.env.VITE_ALPHA_VANTAGE_KEY;

export const searchSymbols = async (query) => {
  const url = `${basePath}/search?q=${query}&token=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error occured ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchStockDetails = async (stockSymbol) => {
  const url = `${basePath}/stock/profile2?symbol=${stockSymbol}&token=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error occured ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchStockQuote = async (stockSymbol) => {
  const url = `${basePath}/quote?symbol=${stockSymbol}&token=${apiKey}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error occured ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};

export const fetchHistoricalData = async (stockSymbol, period) => {
  switch (period) {
    case "1D":
      period = "TIME_SERIES_DAILY";
      break;
    case "1W":
      period = "TIME_SERIES_WEEKLY";
      break;
    case "1M":
      period = "TIME_SERIES_MONTHLY";
      break;
  }

  const url = `https://www.alphavantage.co/query?function=${period}&symbol=${stockSymbol}&apikey=${keyAlphaVantage}`;
  const response = await fetch(url);

  if (!response.ok) {
    const message = `An error occured ${response.status}`;
    throw new Error(message);
  }

  return await response.json();
};
