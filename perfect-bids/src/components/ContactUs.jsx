import { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    // Replace these with your actual EmailJS keys
    const serviceID = "service_qfi9swg";
    const templateID = "template_9w4pxw5";
    const publicKey = "cuMllMIw7yzga_JYn";

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setIsSubmitted(true); // Show success message
        setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form
        setError(null); // Clear any previous errors
      })
      .catch((err) => {
        console.error("FAILED...", err);
        setError("There was an error sending the message. Please try again."); // Show error message
      });
  };

  return (
    <div className="min-h-screen bg-slate flex flex-col items-center justify-center py-20">
      {/* Page Header Section */}
      <div className="text-center max-w-3xl mb-12">
        <h1 className="text-5xl font-bold text-headerBlue text-gray-800 mb-4">
          Contact Us
        </h1>
        <p className="text-lg text-white">
          Have any questions or want to get in touch with us? We&apos;d love to
          hear from you. Fill out the form below and we&apos;ll get back to you
          as soon as possible.
        </p>
      </div>

      {/* Contact Form Section */}
      <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Get in Touch
        </h2>

        {isSubmitted ? (
          <p className="text-green-600 text-center">
            Thank you! Your message has been sent.
          </p>
        ) : (
          <form onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email Input */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Subject Input */}
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message Input */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 h-32"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300"
            >
              Submit
            </button>

            {error && <p className="text-red-600 mt-4 text-center">{error}</p>}
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
