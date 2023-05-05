/* eslint-disable react/no-unescaped-entities */
import React from "react";
import image from '../../assets/img/istockphoto-1359979543-612x612.jpg'

const AboutPage = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
        About Our Restaurant
      </h2>
      <div className="flex flex-col md:flex-row">
        <div className="md:w-1/2 pr-4">
          <img
            src={image}
            alt="Sushi Rolls"
            className="rounded-lg mb-4"
          />
          <p className="text-gray-700 mb-4">
            We are a family-owned Japanese restaurant in the heart of the city.
            Our chefs have years of experience preparing traditional Japanese
            dishes, including sushi, sashimi, and tempura. We use only the
            freshest ingredients to ensure that every dish is delicious and
            authentic.
          </p>
          <p className="text-gray-700 mb-4">
            We believe that food is an art form and that every dish should be
            prepared with care and attention to detail. That's why we take the
            time to source the best ingredients and prepare them with the
            respect they deserve.
          </p>
        </div>
        <div className="md:w-1/2 pl-4">
          <h3 className="text-xl font-bold mb-4">Our History</h3>
          <p className="text-gray-700 mb-4">
            Our restaurant was founded in 1985 by Mr. and Mrs. Nakamura, who
            moved to the city from Tokyo. They wanted to bring the taste of
            authentic Japanese cuisine to the local community, and they quickly
            gained a following among foodies and sushi lovers.
          </p>
          <p className="text-gray-700 mb-4">
            Today, their son Taro Nakamura is the head chef, and he continues to
            uphold his parents' legacy of excellence. He is committed to
            preserving the traditions of Japanese cuisine while also pushing
            the boundaries and experimenting with new flavors and techniques.
          </p>
          <h3 className="text-xl font-bold mb-4">Our Philosophy</h3>
          <p className="text-gray-700 mb-4">
            At our restaurant, we believe that food should not only nourish the
            body but also feed the soul. That's why we put so much care and
            attention into every dish we serve. We want our customers to leave
            feeling satisfied, happy, and inspired.
          </p>
          <p className="text-gray-700 mb-4">
            We also believe in supporting our local community and using
            sustainable practices whenever possible. We source our ingredients
            from local farmers and fishers whenever we can, and we strive to
            minimize waste and reduce our carbon footprint.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
