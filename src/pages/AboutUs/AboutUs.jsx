import React from "react";

const AboutUs = () => {
  return (
    <section className="py-12 bg-gray-50">
      {/* Section Title */}
      <div className="text-center mb-12">
        <h2 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-4">
          About Us
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          At [Your Website Name], we are dedicated to transforming English learning into an engaging, interactive, and personalized experience. Our mission is to empower learners worldwide to achieve fluency with confidence.
        </p>
      </div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-center mb-12">
        {/* Left Side: Image */}
        <div>
          <img
            src="https://i.ibb.co.com/pvrGyF2t/writing-essay-1098-14201.jpg"
            alt="About Us"
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Our Mission
          </h3>
          <p className="text-gray-600 leading-relaxed mb-6">
            We believe that learning English should be accessible to everyone, regardless of location or background. Our platform connects learners with certified tutors who provide one-on-one lessons tailored to individual goals. Whether you're preparing for exams, improving conversational skills, or mastering grammar, we've got you covered.
          </p>
          <ul className="list-disc pl-5 space-y-2 text-gray-700 mb-6">
            <li>Interactive live sessions</li>
            <li>Personalized learning plans</li>
            <li>Experienced native tutors</li>
            <li>Flexible scheduling</li>
          </ul>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-[#B4D57E] py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8">
            Our Impact
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-800">10K+</p>
              <p className="text-green-800 font-semibold">Happy Learners</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-800">500+</p>
              <p className="text-green-800 font-semibold">Certified Tutors</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-800">20+</p>
              <p className="text-green-800 font-semibold">Countries Served</p>
            </div>
            <div>
              <p className="text-4xl sm:text-5xl font-bold text-gray-800">98%</p>
              <p className="text-green-800 font-semibold">Success Rate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
          What Our Learners Say
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 leading-relaxed mb-4">
              "This platform has completely transformed my English skills. The tutors are amazing, and the lessons are tailored to my needs."
            </p>
            <p className="font-semibold text-gray-800">- Sarah L.</p>
          </div>
          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 leading-relaxed mb-4">
              "I love the flexibility of the schedule and the interactive sessions. Highly recommend it!"
            </p>
            <p className="font-semibold text-gray-800">- John D.</p>
          </div>
          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 leading-relaxed mb-4">
              "The best platform for learning English online. The tutors are patient and supportive."
            </p>
            <p className="font-semibold text-gray-800">- Emily R.</p>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 text-center mb-8">
          Meet Our Team
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Team Member 1 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/1.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="font-semibold text-gray-800">Jane Doe</p>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          {/* Team Member 2 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/1.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="font-semibold text-gray-800">John Smith</p>
            <p className="text-gray-600">Lead Tutor</p>
          </div>
          {/* Team Member 3 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/women/2.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="font-semibold text-gray-800">Emily Johnson</p>
            <p className="text-gray-600">Content Specialist</p>
          </div>
          {/* Team Member 4 */}
          <div className="text-center">
            <img
              src="https://randomuser.me/api/portraits/men/2.jpg"
              alt="Team Member"
              className="w-24 h-24 rounded-full mx-auto mb-4"
            />
            <p className="font-semibold text-gray-800">Michael Brown</p>
            <p className="text-gray-600">Technical Lead</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;