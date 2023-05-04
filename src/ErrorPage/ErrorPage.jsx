import React from "react";
import errorImage from "../assets/img/error.webp";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <img src={errorImage} alt="Error" className="w-50 h-50 mb-10" />
      <h1 className="text-4xl font-bold text-red-500">Oops! Something went wrong.</h1>
      <p className="text-lg font-medium text-gray-500 mt-4">We apologize for the inconvenience.</p>
    </div>
  );
}

export default ErrorPage;
