
const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-green-700 mb-6">Contact Us</h2>
        <p className="text-gray-700 mb-6">
          Reach out to us for any queries, feedback, or support. We’d love to hear from you!
        </p>

        <div className="text-black space-y-4">
          <p><strong>Email:</strong> Not Availablae</p>
          <p><strong>Phone:</strong> +91 70141 10172</p>
          <p><strong>Address:</strong> Green City, Hanumangarh Rd, Ellenabad, Haryana 125102</p>
        </div>

        {/* Optional: Contact form */}
        <form className="mt-8 space-y-4 text-black">
          <input type="text" placeholder="Your Name" className="w-full px-4 py-2 border rounded" />
          <input type="phone" placeholder="Your Phone Number" className="w-full px-4 py-2 border rounded" />
          <textarea placeholder="Message" className="w-full px-4 py-2 border rounded h-32" />
          <button className="bg-green-700 px-6 py-2 rounded hover:bg-green-800 transition text-white">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
