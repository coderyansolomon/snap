import React from 'react';

const sectionStyle = 'h-screen text-white flex flex-col justify-center items-center snap-start p-8';
const buttonStyle = 'block w-full text-center py-3 px-4 rounded-md border border-transparent bg-gray-700 hover:bg-gray-600 transform hover:scale-105 transition duration-300';

export default function Home() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <div className="w-1/6 bg-gray-900 text-white fixed h-full flex items-center justify-center">
        <nav className="space-y-4">
          <a href="#section1" className={buttonStyle}>
            Section 1
          </a>
          <a href="#section2" className={buttonStyle}>
            Section 2
          </a>
          <a href="#section3" className={buttonStyle}>
            Section 3
          </a>
          <a href="#section4" className={buttonStyle}>
            Section 4
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="w-5/6 ml-auto overflow-auto snap-y snap-mandatory h-screen">
        
        {/* Section 1 */}
        <section id="section1" className={`bg-black ${sectionStyle}`}>
          <h1 className="text-4xl mb-6">Section 1: Introduction</h1>
          <p className="mb-4">
            Welcome to Section 1. This section serves as an introduction to our topic. Here we discuss the basics and provide some context. The goal is to give you a solid understanding of what we’ll cover in the upcoming sections.
          </p>
          <p className="mb-4">
            We aim to provide clear and concise information. By the end of this section, you should have a good grasp of the foundational concepts. We encourage you to take notes and refer back to this section as needed.
          </p>
          <p className="mb-4">
            Remember, this is just the beginning. There’s much more to explore, and we’re excited to take you on this journey. Let’s dive in and start with the basics!
          </p>
        </section>
        
        {/* Section 2 */}
        <section id="section2" className={`bg-gray-800 ${sectionStyle}`}>
          <h1 className="text-4xl mb-6">Section 2: Key Concepts</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl mb-2">Concept 1</h2>
              <p>
                Concept 1 is all about understanding the core principles. These principles form the backbone of everything we do. By mastering these, you’ll be well-prepared to tackle more complex ideas.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl mb-2">Concept 2</h2>
              <p>
                Concept 2 dives deeper into the details. We explore specific applications and provide examples to illustrate how these concepts work in real-world scenarios.
              </p>
            </div>
            <div className="bg-gray-700 p-4 rounded-lg shadow-lg">
              <h2 className="text-2xl mb-2">Concept 3</h2>
              <p>
                Concept 3 is where we start connecting the dots. This section ties together the ideas from Concept 1 and 2, showing you how they interrelate and build upon each other.
              </p>
            </div>
          </div>
        </section>
        
        {/* Section 3 */}
        <section id="section3" className={`bg-black ${sectionStyle}`}>
          <h1 className="text-4xl mb-6">Section 3: Practical Applications</h1>
          <p className="mb-4">
            In Section 3, we focus on practical applications. We believe that the best way to learn is by doing, so this section is filled with examples and exercises. You’ll have the chance to apply what you’ve learned in real-world scenarios.
          </p>
          <p className="mb-4">
            We’ve designed these exercises to be challenging yet rewarding. By working through them, you’ll gain hands-on experience and build confidence in your skills. Don’t worry if you make mistakes—that’s part of the learning process!
          </p>
          <p className="mb-4">
            Take your time with these exercises. We encourage you to experiment and explore different approaches. The more you practice, the more comfortable you’ll become with these concepts.
          </p>
        </section>
        
        {/* Section 4 */}
        <section id="section4" className={`bg-gray-800 ${sectionStyle}`}>
          <h1 className="text-4xl mb-6">Section 4: Conclusion</h1>
          <p className="mb-4">
            We’ve reached the final section of our journey. Section 4 provides a summary of everything we’ve covered. It’s a chance to review the key points and reflect on what you’ve learned.
          </p>
          <p className="mb-4">
            This section also looks ahead to what’s next. Learning is an ongoing process, and there’s always more to discover. We hope this content has inspired you to continue exploring and expanding your knowledge.
          </p>
          <p className="mb-4">
            Thank you for joining us on this journey. We’re excited to see where your newfound knowledge takes you. Keep learning, stay curious, and never stop growing.
          </p>
        </section>
        
      </div>
    </div>
  );
}
