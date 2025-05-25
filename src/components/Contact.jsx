// src/components/Contact.jsx
import { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "your_service_id",     // Replace with your EmailJS Service ID
        "your_template_id",    // Replace with your EmailJS Template ID
        form.current,
        "your_public_key"      // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section id="contact" className="bg-[#0f172a] text-white py-16 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Contact Me</h2>
        <p className="text-center text-gray-400 mb-10">
          Have a question or want to work together? Fill out the form and I’ll get back to you soon.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <input
              type="text"
              name="user_name"
              placeholder="Name"
              required
              className="w-full p-4 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              name="user_email"
              placeholder="Email"
              required
              className="w-full p-4 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <textarea
            name="message"
            rows="5"
            placeholder="Your Message"
            required
            className="w-full p-4 rounded-md bg-[#1e293b] text-white border border-gray-600 focus:outline-none focus:ring-2 focus:ring-orange-500"
          ></textarea>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-md shadow-md transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
