import React, { useState } from "react";
import { SiGithub, SiLinkedin, SiMailboxdotorg, SiWhatsapp } from "react-icons/si";
import { send } from 'emailjs-com';

const SendMail = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    try {
        await send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            {
            name: form.name,
            email: form.email,
            time: new Date().toLocaleString(),
            message: form.message,
            },
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        );
        setStatus("Message sent! Thank you for reaching out.");
        setForm({ name: "", email: "", message: "" });
    } catch (error) {
        setStatus("Failed to send message. Please try again later.");
    }
  };
 

  return (
    <section className="p-8 py-8 flex flex-col justify-center items-center bg-gradient-to-br from-white via-indigo-50 to-purple-50 rounded-3xl shadow-2xl">
      <div className="flex items-center justify-center mb-8">
        <span className="block w-16 h-1 bg-gradient-to-r from-sky-400 to-purple-500 rounded-full mr-4"></span>
        <h2 className="text-center text-2xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-purple-600 tracking-wide uppercase drop-shadow-lg">
            Contact Me
        </h2>
        <span className="block w-16 h-1 bg-gradient-to-l from-sky-400 to-purple-500 rounded-full ml-4"></span>
      </div>
      <div className="flex flex-col md:flex-row gap-12 py-16 items-center w-11/12 max-w-5xl mx-auto">
        {/* Left: Text */}
        <div className="md:w-1/2 w-full mb-10 md:mb-0">
          <h2 className="mb-4 text-gray-900 tracking-tight font-extrabold text-4xl drop-shadow-sm">
            Let&apos;s Connect!
          </h2>
          <p className="text-gray-700 text-lg mb-6 leading-relaxed">
            Have a question, project idea, or just want to say hello? <br />
            Fill out the form and I&apos;ll get back to you as soon as possible.
          </p>
          <ul className="text-gray-600 text-base space-y-3">
            <li className="flex items-center gap-2">
                <span className="text-green-500 text-xl"><SiWhatsapp></SiWhatsapp></span>
                <span className="font-medium">WhatsApp:</span>
                <a
                    href="https://wa.me/8801884481000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:underline text-green-700"
                >
                    +8801884-481000
                </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-indigo-500 text-xl"><SiMailboxdotorg></SiMailboxdotorg></span>
              <span className="font-medium">Email:</span>
              <a
                href="mailto:arif.rabbani.dev@gmail.com"
                className="hover:underline text-indigo-700"
              >
                arif.rabbani.dev@gmail.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-blue-600 text-xl"><SiLinkedin></SiLinkedin></span>
              <span className="font-medium">LinkedIn:</span>
              <a
                href="https://www.linkedin.com/in/arif-rabbani-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                arif-rabbani-dev
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-gray-800 text-xl"><SiGithub></SiGithub></span>
              <span className="font-medium">GitHub:</span>
              <a
                href="https://github.com/Arif-Rabbani-188"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-gray-900"
              >
                Arif-Rabbani-188
              </a>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-purple-600 text-xl">📄</span>
              <span className="font-medium">Resume:</span>
              <a
                href="/Arif_Resume.pdf"
                className="text-purple-700 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download PDF
              </a>
            </li>
          </ul>
        </div>
        {/* Right: Form */}
        <div className="md:w-1/2 w-full bg-white/90 rounded-2xl shadow-lg p-8 border border-indigo-100">
          <form onSubmit={handleSubmit} autoComplete="off">
            <div className="mb-6">
              <label className="block mb-2 text-gray-800 font-semibold tracking-wide">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-base outline-none transition-colors focus:border-indigo-400 bg-slate-50 shadow-sm"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-800 font-semibold tracking-wide">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="you@email.com"
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-base outline-none transition-colors focus:border-indigo-400 bg-slate-50 shadow-sm"
              />
            </div>
            <div className="mb-6">
              <label className="block mb-2 text-gray-800 font-semibold tracking-wide">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Type your message here..."
                className="w-full px-4 py-3 border border-slate-300 rounded-lg text-base outline-none resize-vertical transition-colors focus:border-indigo-400 bg-slate-50 shadow-sm"
              />
            </div>
            <button
              type="submit"
              disabled={status === "Sending..."}
              className={`w-full py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white border-none rounded-lg text-lg font-bold cursor-pointer shadow-lg transition-all duration-200 hover:from-indigo-600 hover:to-purple-700 focus:ring-2 focus:ring-indigo-300 focus:outline-none ${
                status === "Sending..." ? "opacity-60 cursor-not-allowed" : ""
              }`}
            >
              {status === "Sending..." ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                      fill="none"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                    />
                  </svg>
                  Sending...
                </span>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
          {status && (
            <p
              className={`mt-6 text-center font-semibold text-base tracking-wide transition-colors duration-200 ${
                status === "Sending..." ? "text-indigo-500" : "text-green-600"
              }`}
            >
              {status}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default SendMail;
