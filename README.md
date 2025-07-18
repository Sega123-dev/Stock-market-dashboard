# Stock Market Dashboard

This is a web application that shows most important data from a stock.Users can search for a stock,see the graph,change the graph filters(1 day,1 month,1 week),get the fetched data of the stock(prices,changes etc) and subscribe to a newsletter to get stock info about stocks from Apple,Meta and Google.Here are the features:

- Graph section
- Section for price and price change
- Stock Details section
- Newsletter pop up modal
- Dark mode
- Responsive website
- Tailwind based design

# Demo

There is a demo website with all core functionalities,uploaded via Vercel [here](https://stock-market-dashboard-ewpx-git-main-sega123-devs-projects.vercel.app/)

### Installing the app locally

Download the Zip file or clone the repository,after that run the following command in the terminal:

```
npm install heroicons
```

I used icons from this library so you have to install them.Heroicons is an icon React library(v1 is used for this project)

```
npm install recharts
```

This is a powerful React library for making charts in React.

```
npm install emailjs
```

Used for automated emails about the stock data(Supporting only Gmail).

```
npm install dotenv
```

Install the library for environment variables.You have to get your own Finnhub API key and Alpha Vantage key,and put the keys in .env file.(Make sure to load them and import them).
You can get FinnhubAPI key from this [link](https://finnhub.io/) and Alpha Vantage key for getting stock chart data can be get [here](https://www.alphavantage.co/)

### Installing tailwind for vite

This section will explain how to install tailwindCSS in vite bundler.Add the following command:

```
npm install tailwindcss @tailwindcss/vite
```

This will install tailwind on your machine.Other commands are not necessary but if you encounter issues,check the Tailwind's official [guide](https://tailwindcss.com/docs/installation/using-vite) on how to install TailwindCSS on Vite.
# Built with:
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

