import React from "react";


function Footer (){
  return (
    <footer className="bg-green-50 py-8 px-4 sm:px-6 lg:px-8 border-t border-indigo-100">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between">
        <div className="text-center sm:text-left mb-4 sm:mb-0">
          <p className="text-green-900  font-medium text-sm">
            Designed & Built by Derick Akaho © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
