// Experience section component

import React from "react";
import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="group" data-aos="fade-up">
      <div className="flex items-center gap-4 mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-purple-200 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
          <div className="relative p-4 rounded-2xl bg-gradient-to-br from-purple-100 to-white text-purple-600 group-hover:scale-110 transition-transform">
            <GraduationCap className="w-8 h-8" />
          </div>
        </div>
        <h2 className="text-4xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
          Experience
        </h2>
      </div>

      <div className="relative space-y-12">
        {/* Trip Store Holidays */}
        <div className="relative group/exp">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover/exp:opacity-100 transition-all" />
          <div className="relative flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-4 text-white">
              <Briefcase className="w-8 h-8" />
            </div>
            <div className="flex-grow space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Senior Software Engineer
                  </h3>
                  <p className="text-purple-600">Trip Store Holidays, Mumbai</p>
                </div>
                <span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  May 2024 - Present
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "Implemented new features and enhanced user experience for tripstoreholidays.com",
                  "Redesigned homepage with modern UI and integrated new APIs",
                  "Developed self-service booking system and integrated Razorpay payment gateway",
                  "Created advanced filtering system for tours and destinations",
                ].map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 group/point"
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Faarms Global Tech Ventures */}
        <div className="relative group/exp">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover/exp:opacity-100 transition-all" />
          <div className="relative flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-4 text-white">
              <Briefcase className="w-8 h-8" />
            </div>
            <div className="flex-grow space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Software Development Engineer
                  </h3>
                  <p className="text-purple-600">
                    Faarms Global Tech Ventures Pvt Ltd, Bengaluru
                  </p>
                </div>
                <span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  March 2022 - April 2024
                </span>
              </div>
              <div className="space-y-6">
                {/* E-commerce Platform */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    E-commerce Platform for Farmers
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Spearheaded the development of a robust e-commerce platform aimed at empowering farmers by providing access to agricultural products and tools",
                      "Created intuitive and mobile-responsive UIs to ensure ease of use for farmers, considering accessibility and simplicity as core design principles",
                      "Integrated APIs for dynamic product listings, search functionality, and secure payment gateways",
                    ].map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 group/point"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Admin Panel */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Faarms Admin Panel
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Designed and developed the frontend UI for the Faarms Admin Panel to facilitate internal operations, inventory management, and order tracking",
                      "Built a highly modular and scalable UI using React.js, ensuring maintainability and easy updates for future requirements",
                      "Enhanced the admin panel's usability by implementing features like advanced search, data visualization, and bulk actions",
                    ].map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 group/point"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Logistics Platform */}
                <div className="space-y-2">
                  <h4 className="text-lg font-semibold text-gray-800">
                    Frontend Development for Logistics Platform (Leap Supply)
                  </h4>
                  <ul className="space-y-3">
                    {[
                      "Developed and deployed the frontend UI for the logistics platform using React.js to create a seamless user experience",
                      "Built a responsive logistics platform with features like real-time tracking and route optimization",
                      "Collaborated closely with backend teams to ensure smooth integration and synchronization of logistics data",
                      "Implemented BBPS Features for mobile applications, enabling secure utility bill payments",
                    ].map((point, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3 group/point"
                      >
                        <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                        <span className="text-gray-600">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Efaarms Solutions */}
        <div className="relative group/exp">
          <div className="absolute -inset-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl opacity-0 group-hover/exp:opacity-100 transition-all" />
          <div className="relative flex gap-8">
            <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-600 to-blue-600 p-4 text-white">
              <Briefcase className="w-8 h-8" />
            </div>
            <div className="flex-grow space-y-4">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Software Development Engineer
                  </h3>
                  <p className="text-purple-600">
                    Efaarms Solutions Pvt Ltd., Bengaluru
                  </p>
                </div>
                <span className="px-4 py-1 rounded-full text-sm font-medium bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  Dec 2021 - March 2022
                </span>
              </div>
              <ul className="space-y-3">
                {[
                  "Built the Seller Web App frontend using React.js, enabling sellers to manage their product listings and track orders",
                  "Delivered a user-friendly interface with intuitive navigation and efficient workflows",
                  "Integrated REST APIs for real-time data updates and improved performance through optimized React components",
                ].map((point, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 group/point"
                  >
                    <div className="w-2 h-2 mt-2 rounded-full bg-purple-600 group-hover/point:scale-125 transition-transform" />
                    <span className="text-gray-600">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
