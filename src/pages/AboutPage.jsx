import React from "react";

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#f7f8fa] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">
            Your trusted partner in quality products and exceptional service
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Story</h2>
          <div className="prose max-w-none text-gray-700">
            <p className="mb-4">
              Founded with a vision to revolutionize online shopping, our eCommerce platform
              brings together quality products from trusted suppliers worldwide. We believe
              in making shopping accessible, enjoyable, and reliable for everyone.
            </p>
            <p className="mb-4">
              Our journey began with a simple idea: to create a marketplace where customers
              can find everything they need in one place, with transparent pricing,
              genuine reviews, and exceptional customer service.
            </p>
            <p>
              Today, we serve thousands of satisfied customers across the globe, offering
              a wide range of products from electronics to home goods, all carefully
              curated to meet the highest standards of quality.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl text-blue-600 mb-4">🚚</div>
            <h3 className="text-xl font-semibold mb-2">Fast Delivery</h3>
            <p className="text-gray-600">
              Quick and reliable shipping to get your orders to you as fast as possible.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl text-green-600 mb-4">🛡️</div>
            <h3 className="text-xl font-semibold mb-2">Quality Assurance</h3>
            <p className="text-gray-600">
              Every product is carefully inspected to ensure it meets our quality standards.
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6 text-center">
            <div className="text-4xl text-purple-600 mb-4">💬</div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600">
              Our customer service team is always ready to help with any questions or concerns.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Customer First</h3>
              <p className="text-gray-600 mb-4">
                We put our customers at the heart of everything we do, ensuring every
                interaction is positive and every purchase exceeds expectations.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">Innovation</h3>
              <p className="text-gray-600 mb-4">
                We continuously improve our platform and services to provide the best
                possible shopping experience using the latest technology.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">Sustainability</h3>
              <p className="text-gray-600 mb-4">
                We're committed to environmentally responsible practices and work with
                suppliers who share our values for a sustainable future.
              </p>

              <h3 className="text-lg font-medium text-gray-900 mb-3">Community</h3>
              <p className="text-gray-600">
                We believe in giving back to the communities we serve through charitable
                initiatives and support for local businesses.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">Ready to Shop?</h2>
          <p className="text-gray-600 mb-6">
            Discover our wide range of products and experience shopping like never before.
          </p>
          <a
            href="/"
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-md hover:bg-blue-700 font-medium"
          >
            Start Shopping
          </a>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;