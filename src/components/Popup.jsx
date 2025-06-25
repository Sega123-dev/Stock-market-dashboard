import React from 'react';
import emailjs from '@emailjs/browser';
import { useEffect, useRef, useState } from 'react';
import { getQuote } from '../api/stock.api';

const Popup = () => {
  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;
  const form = useRef();
  const [email,setEmail] = useState("");
  
  const sendEmail = async (e) => {
  e.preventDefault();

  try {
    const metaQuote = await getQuote("META");
    const googleQuote = await getQuote("GOOG");
    const appleQuote = await getQuote("AAPL");

    const message = `Hello! This is your information about most important stocks of the big 3 companies:

    META Platforms Inc
    Stock symbol: META
    Price: ${metaQuote.pc}
    Stock change: ${metaQuote.d}%

    Google
    Stock symbol: GOOG
    Price: ${googleQuote.pc}
    Stock change: ${googleQuote.d}%

    Apple
    Stock symbol: AAPL
    Price: ${appleQuote.pc}
    Stock change: ${appleQuote.d}%
`;

    emailjs.send(serviceID, templateID, {
      user_email: email,
      message: message
    }, publicKey)
    .then((result) => {
      console.log('Email sent!', result.text);
    }, (error) => {
      console.error('Error:', error.text);
    });

    e.target.reset();
  } catch (err) {
    console.error("Error sending stock data:", err);
  }
};
  return (
    <div className="bg-indigo-600 text-white rounded-lg quicksand p-6 transition duration-500 animation">
      <h1 className="xl:text-4xl text-center text-2xl">Subscribe to our newsletter</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_email"
          className="border-white border-2 rounded-sm xl:text-2xl mt-4 outline-none placeholder:text-white p-2 text-lg w-full"
          placeholder="Your E-mail..."
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <div className='flex justify-center'>
          <button className="bg-white text-gray-800 cursor-pointer p-2 pl-4 pr-4 xl:text-xl ml-2 rounded-3xl text-lg mt-4">
          Subscribe
        </button>
        </div>
      </form>
    </div>
  );
};

export default Popup;