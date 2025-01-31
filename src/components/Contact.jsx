import React from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "860a2c49-d276-45b5-970a-9dd6265feed7");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };

  return (
    <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
      <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">
        Get in Touch <span className="underline underline-offset-4 decoration-1 under font-light">With Us</span>
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">
        Contact Krishna Earthmovers for expert support and solutions
      </p>

      <motion.div
        className="max-w-2xl mx-auto text-gray-600 pt-8"
        initial={{ x: '-100%' }}
        whileInView={{ x: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 25 }}
        viewport={{ once: true }} // Ensures the animation only happens once when it comes into view
      >
        <form onSubmit={onSubmit}>
          <div className="flex flex-wrap">
            <div className="w-full md:w-1/2 text-left">
              Your Name
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="text"
                name="Name"
                placeholder="Your Name"
                required
              />
            </div>
            <div className="w-full md:w-1/2 text-left md:pl-4">
              Your Email
              <input
                className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
                type="email"
                name="Email"
                placeholder="Your Email"
              />
            </div>
          </div>
          <div className="my-6 text-left">
            Message
            <textarea
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
              name="Message"
              placeholder="Message"
              required
            ></textarea>
          </div>
          <button className="bg-orange-600 text-white py-2 px-12 mb-10 rounded">
            {result ? result : "Send Message"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
