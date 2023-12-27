// src/components/Footer.js

const Footer = () => {
  return (
    <footer className="bg-gray-900 p-4 text-white text-center bottom-0 w-full font-extralight text-sm">
      <p>&copy; BOOKSTORE </p>
      <div className="border-t border-gray-500 m-4"></div>
      <div className="grid grid-cols-2">
        <div className="font-extralight">2024 Made by <strong>Utku Kaba</strong></div>
        <div>
          github
        </div>
      </div>
    </footer>
  );
};

export default Footer;
