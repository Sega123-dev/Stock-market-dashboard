import React from 'react';
import Header from "./Header"
import Overview from "./Overview"
import Details from "./Details"
import Chart from "./Chart"
import { useContext, useEffect, useState } from "react"
import ThemeContext from "../context/ThemeContext"
import StockContext from "../context/StockContext"
import { fetchStockQuote, fetchStockDetails } from "../api/stock.api"
const Dashboard = () => {
    const {darkMode} = useContext(ThemeContext);
    const {stockSymbol} =useContext(StockContext);

    const [stockDetails,setStockDetails] = useState({});
    const [quote,setQuote] = useState({})

    useEffect(() => {
        const updateStockDetails = async () => {
            try {
                const result = await fetchStockDetails(stockSymbol);
                setStockDetails(result)
            } catch (error) {
                setStockDetails({});
                console.log(error)
            }
        };
        const updateStockOverview = async () => {
            try {
                const result = await fetchStockQuote(stockSymbol);
                setQuote(result)
            } catch (error) {
                setQuote({})
                console.log(error)
            }
        };
        updateStockDetails();
        updateStockOverview();
    },[stockSymbol])

    return <div className={`h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-10 quicksand ${darkMode ? "bg-gray-900 text-gray-300" : "bg-neutral-100"}`}>
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start items-center">
            <Header name={stockDetails.name ? stockDetails.name : "No data"} />
        </div>
        <div className="md:col-span-2 row-span-4">
            <Chart/>
        </div>
        <div>
        <Overview
          symbol={stockSymbol}
          price={quote.pc ? quote.pc : "No data"}
          change={quote.d}
          changePercent={quote.dp}
          currency={stockDetails.currency}
        />
        </div>
        <div className="row-span-4 xl:row-span-3 xl:mt-0 mt-4">
            <Details details={stockDetails}/>
        </div>
    </div>
}
export default Dashboard