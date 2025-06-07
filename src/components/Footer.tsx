
const Footer = () => {
  return (
    <footer className="bg-green-700 text-white py-6 text-center">
      <div className="max-w-4xl mx-auto">
        <p>&copy; {new Date().getFullYear()} Green City Colony. All rights reserved.</p>
        {/* <p className="text-sm mt-1">Designed by Bhavya</p> */}
      </div>
    </footer>
  );
};

export default Footer;
