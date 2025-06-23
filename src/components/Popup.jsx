import emailjs from '@emailjs/browser';
import { useRef } from 'react';

const Popup = () => {
  const form = useRef();

  const serviceID = import.meta.env.VITE_SERVICE_ID;
  const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
  const templateID = import.meta.env.VITE_TEMPLATE_ID;

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(serviceID, templateID, form.current, publicKey)
      .then((result) => {
        console.log('Email sent!', result.text);
      }, (error) => {
        console.error('Error:', error.text);
      });

    // Optional: reset form after sending
    e.target.reset();
  };

  return (
    <div className="bg-indigo-600 text-white rounded-lg quicksand p-6 transition duration-500 animation">
      <h1 className="xl:text-4xl text-center">Subscribe to our newsletter</h1>
      <form ref={form} onSubmit={sendEmail}>
        <input
          type="text"
          name="user_email"
          className="border-white border-2 rounded-sm xl:text-2xl mt-4 outline-none placeholder:text-white p-2 text-lg w-full"
          placeholder="Your E-mail..."
          required
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