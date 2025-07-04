import React from 'react';
import { useContext, useEffect, useState } from "react";
import {
  Area,    
  XAxis,
  YAxis,
  ResponsiveContainer,
  AreaChart,
  Tooltip,
} from "recharts";
import Card from "./Card";
import { chartConfig } from "../constants/config";
import ChartFilter from "./ChartFilter";
import ThemeContext from "../context/ThemeContext";
import { fetchHistoricalData } from "../api/stock.api";
import StockContext from "../context/StockContext";

const Chart = () => {
  const [data, setData] = useState({});

  const [filter, setFilter] = useState("1W");

  const { darkMode } = useContext(ThemeContext);
  const { stockSymbol } = useContext(StockContext)

  useEffect(() => {
       const getChartData = async () => {
          const result = await fetchHistoricalData(stockSymbol,filter)
          setData(result);
       }
       getChartData()
  },[stockSymbol,filter])
  return (
    <Card>
      <ul className="flex absolute top-2 right-2 z-40">
        {Object.keys(chartConfig).map((item) => (
          <li key={item}>
            <ChartFilter
              text={item}
              active={filter === item}
              onClick={() => {
                setFilter(item);
              }}
            />
          </li>
        ))}
      </ul>
      <ResponsiveContainer>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="chartColor" x1="0" y1="0" x2="0" y2="1">
              <stop
                offset="5%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0.8}
              />
              <stop
                offset="95%"
                stopColor={darkMode ? "#312e81" : "rgb(199 210 254)"}
                stopOpacity={0}
              />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke="#312e81"
            fillOpacity={1}
            fill="url(#chartColor)"
            strokeWidth={0.5}
          />
          <Tooltip
            contentStyle={darkMode ? { backgroundColor: "#111827" } : null}
            itemStyle={darkMode ? { color: "#818cf8" } : null}
          />
          <XAxis dataKey="date" />
          <YAxis domain={["dataMin", "dataMax"]} />
        </AreaChart>
      </ResponsiveContainer>
    </Card>
  );
};

export default Chart;