import React, { useState } from "react";
import mailbox from "../assets/mailbox.png";
import facebook from "../assets/facebook.png";
import instagram from "../assets/instagram.png";
import linkedin from "../assets/linkedin.png";
import tele from "../assets/tele.png";
import mail from "../assets/mail.png";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email && message) {
      // Here you would typically send the data to a server
      console.log("Form submitted with data:", { name, email, message });
      setSubmitted(true);
      // Clear form fields
      setName("");
      setEmail("");
      setMessage("");
    } else {
      alert("Please fill in all fields.");
    }
  };

  return (
    <section id="contact" className="bg-gray-800 py-10 px-5 md:px-0">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold mb-8 text-white lg:text-left lg:mx-12 text-center">
          Get in Touch
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="md:w-1/2 text-center">
            <p className="mb-4 text-white/80">
              I'm open to new opportunities and collaboration. Feel free to
              reach out!
            </p>
            <div className="flex justify-center space-x-4 mb-8">
              <a
                href="https://web.facebook.com/?_rdc=1&_rdr"
                className="text-foreground/60 hover:text-foreground/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={facebook}
                  alt="facebook"
                  className="h-6 w-6 bg-white rounded-md"
                />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-foreground/60 hover:text-foreground/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={instagram}
                  alt="instagram"
                  className="h-6 w-6 bg-white rounded-md"
                />
              </a>
              <a
                href="https://www.linkedin.com/in/mohammed-thanis-096b31267"
                className="text-foreground/60 hover:text-foreground/80"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={linkedin}
                  alt="linkedin"
                  className="h-6 w-6 bg-white rounded-md"
                />
              </a>
            </div>
            <img
              src={mailbox}
              alt="Contact Us"
              className="w-[500px] mx-auto lg:w-[500px] rounded-lg"
            />

            <div className="flex items-center mt-5 gap-4 ml-1 h-10 w-fit lg:ml-14 ">
              <p className="bg-white rounded-md w-fit   flex">
                <img src={tele} alt="Contact Us" className="w-5" />
              </p>
              <p className="text-white font-bold">+94 76 307 5074</p>
            </div>
            <div className="flex items-center mt-5 gap-4 ml-1 h-10 w-fit lg:ml-14 ">
              <p className="bg-white rounded-md w-6 flex items-center justify-center">
                <img src={mail} alt="Contact Us" className="w-5" />
              </p>
              <p className="text-white font-bold">Thanis7168t@gmail.com</p>
            </div>
          </div>
          <form
            action="https://formspree.io/f/xovqlnyd" // Replace 'your_form_id' with the Formspree form URL ID
            method="POST"
            className="w-full md:w-1/2 bg-gray-100 rounded-lg border border-red-300 shadow-lg shadow-red-500 p-10 mr-0 lg:mr-4"
          >
            <h1 className="text-gray-900 text-4xl font-bold mb-7">
              Contact Me
            </h1>
            {submitted && (
              <p className="mb-4 text-green-500">
                Thank you for Attention, Keep Connect!
              </p>
            )}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Full Name
              </label>
              <input
                type="text"
                name="name" // Ensure the 'name' attribute matches Formspree requirements
                placeholder="Full Name"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                name="email" // Ensure the 'name' attribute matches Formspree requirements
                placeholder="Email"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message
              </label>
              <textarea
                name="message" // Ensure the 'name' attribute matches Formspree requirements
                placeholder="Enter Your Message"
                className="mt-1 p-2 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-red-500 text-white px-3 py-2 rounded-lg"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
