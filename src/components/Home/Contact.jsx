import { useState } from "react";
import { FiSend } from "react-icons/fi";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          subject: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus("Failed to send message.");
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus("An error occurred while sending the message.");
    }
  };

  return (
    <div
      id="contact"
      className="px-4 sans py-12 bg-[#F6FBFF] pt-[10vh] h-full flex justify-center items-center"
    >
      <div className="w-full max-w-4xl mx-auto text-center">
        <div className="mb-10 lg:mb-14">
          <p className="text-[34px] font-semibold ysabeau">Contact Us</p>
          <div className="w-24 h-1.5 mt-5 mb-10 mx-auto rounded-3xl bg-[#066aab]">
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
            <div className="h-1.5 w-1.5 float-left mx-0.5 my-0 title-border-inner"></div>
          </div>
        </div>
        <div className="bg-[#066aab] p-8 lg:p-14 rounded-lg shadow-sm">
          <form onSubmit={handleSubmit} className="grid gap-6 lg:grid-cols-2">
            <input
              className="bg-[#F6FBFF] px-3 py-2 rounded-md border focus:outline-none focus:border-[#00AEEF]"
              type="text"
              placeholder="Your Name"
              id="name"
              name="name"
              onChange={handleChange}
              value={formData.name}
            />
            <input
              type="email"
              className="bg-[#F6FBFF] px-3 py-2 rounded-md border focus:outline-none focus:border-[#00AEEF]"
              placeholder="Email Address"
              id="email"
              name="email"
              onChange={handleChange}
              value={formData.email}
            />
            <input
              className="bg-[#F6FBFF] px-3 py-2 rounded-md border focus:outline-none focus:border-[#00AEEF]"
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              onChange={handleChange}
              value={formData.subject}
            />
            <input
              className="bg-[#F6FBFF] px-3 py-2 rounded-md border focus:outline-none focus:border-[#00AEEF]"
              type="tel"
              placeholder="Phone Number"
              id="phone"
              name="phone"
              onChange={handleChange}
              value={formData.phone}
            />
            <textarea
              aria-label="Message"
              className="bg-[#F6FBFF] p-3 rounded-md border focus:outline-none focus:border-[#00AEEF] lg:col-span-2"
              placeholder="Type your message..."
              name="message"
              id="message"
              onChange={handleChange}
              value={formData.message}
            ></textarea>
            <div className="flex justify-center lg:justify-end lg:col-span-2">
              <button
                className="bg-[#00AEEF] hover:bg-blue-600 flex items-center gap-3 w-full lg:w-auto px-6 py-3 rounded-xl text-white transition duration-300"
                type="submit"
              >
                <span className="hidden lg:inline ysabeau">Send Message</span>
                <span className="lg:hidden text-center">Send Message</span>
              </button>
            </div>
          </form>
          {status && <p className="text-white mt-4">{status}</p>}
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
