import React from 'react';

const HeroSection = () => (
  <section className="hero-bg text-gray-800 py-20">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn Any Room into a Magical, Interactive Experience</h1>
      <p className="text-lg md:text-xl mb-8">WizzyRoom is a turnkey solution that brings walls to life with sound, stories, and immersive learning.</p>
      <div className="flex justify-center space-x-4">
        <a href="#video" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white">See How It Works</a>
        <a href="#video" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-800 hover:text-white">Watch the Magic Happen</a>
      </div>
    </div>
  </section>
);

const VideoSection = () => (
  <section id="video" className="py-16 bg-white">
    <div className="container mx-auto px-4 text-center">
      <div className="bg-gray-200 h-64 flex items-center justify-center rounded-lg mb-6">
        <img src="child-interacting-wall-illustration-video.png" alt="Child interacting with wall" className="h-full" />
      </div>
      <p className="text-lg italic">Children touch, the wall responds. It's learning, play, and wonder in one experience.</p>
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose WizzyRoom?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img src="designers.png" alt="Designers" className="inline-block w-8 h-8 mr-2 align-middle" />
            <h3 className="text-xl font-semibold align-middle">Designers</h3>
          </div>
          <p>Create unforgettable spaces with immersive storytelling and sound. Easy to install, big visual impact.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img src="builders.png" alt="Builders" className="inline-block w-8 h-8 mr-2 align-middle" />
            <h3 className="text-xl font-semibold align-middle">Builders & Renovators</h3>
          </div>
          <p>Offer a high-value upgrade that sets your vacation homes apart. Minimal setup, maximum delight.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img src="homeowners.png" alt="Homeowners" className="inline-block w-8 h-8 mr-2 align-middle" />
            <h3 className="text-xl font-semibold align-middle">Homeowners</h3>
          </div>
          <p>Increase bookings and reviews by offering families a magical, tech-enhanced kids room.</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img src="managers.png" alt="Property Managers" className="inline-block w-8 h-8 mr-2 align-middle" />
            <h3 className="text-xl font-semibold align-middle">Property Managers</h3>
          </div>
          <p>Keep your properties competitive with interactive features kids love—and parents remember.</p>
        </div>
      </div>
    </div>
  </section>
);

const ThemesSection = () => (
  <section className="py-16 bg-white themes-bg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Explore Our Themes</h2>
      <p className="text-center mb-8">From dinosaurs to galaxies, undersea worlds to enchanted forests.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="theme-card bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <img src="dinosaurs-illustration.png" alt="Dinosaurs Theme" className="mx-auto mb-4 rounded" />
          <h3 className="text-lg font-semibold">Dinosaurs</h3>
        </div>
        <div className="theme-card bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <img src="space-illustration.png" alt="Space Theme" className="mx-auto mb-4 rounded" />
          <h3 className="text-lg font-semibold">Space</h3>
        </div>
        <div className="theme-card bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <img src="enchanted-forest-illustration.png" alt="Enchanted Forest Theme" className="mx-auto mb-4 rounded" />
          <h3 className="text-lg font-semibold">Enchanted Forest</h3>
        </div>
        <div className="theme-card bg-gray-100 p-6 rounded-lg shadow-md text-center">
          <img src="ocean-illustration.png" alt="Ocean Theme" className="mx-auto mb-4 rounded" />
          <h3 className="text-lg font-semibold">Ocean</h3>
        </div>
      </div>
      <div className="text-center mt-12">
        <a href="#catalog" className="cta-button">Download the Full Catalog</a>
      </div>
    </div>
  </section>
);

const CatalogForm = () => (
  <section id="catalog" className="py-16 bg-gray-100">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Get the Catalog</h2>
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Your Name</label>
          <input type="text" id="name" className="mt-1 block w-full p-2 border rounded-md" placeholder="Your Name" />
        </div>
        <div className="mt-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Your Email</label>
          <input type="email" id="email" className="mt-1 block w-full p-2 border rounded-md" placeholder="Your Email" />
        </div>
        <div className="mt-4">
          <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Your Role</label>
          <select id="role" className="mt-1 block w-full p-2 border rounded-md">
            <option>Designer</option>
            <option>Builder/Renovator</option>
            <option>Homeowner</option>
            <option>Property Manager</option>
          </select>
        </div>
        <div className="mt-6 text-center">
          <button className="cta-button">Download Catalog</button>
        </div>
      </div>
    </div>
  </section>
);

const TestimonialsSection = () => (
  <section className="py-16 testimonial-bg">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic">“Since installing WizzyRoom, our bookings increased 30%.”</p>
          <p className="mt-4 font-semibold">— Laura, Property Owner in Kissimmee</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic">“My clients love the wow-factor. It makes my projects stand out.”</p>
          <p className="mt-4 font-semibold">— Jorge, Interior Designer</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="italic">“Parents are amazed. Kids are obsessed. It’s now our biggest selling point.”</p>
          <p className="mt-4 font-semibold">— Anna, Rental Manager</p>
        </div>
      </div>
    </div>
  </section>
);

const FAQSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Is installation difficult?</h3>
          <p>Not at all. Each kit includes instructions and remote support is available.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Does it require power or Wi-Fi?</h3>
          <p>Only a basic power outlet. No internet required for interaction.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Can I update the theme later?</h3>
          <p>Yes, we offer theme expansion packs you can swap out easily.</p>
        </div>
        <div className="mb-6">
          <h3 className="text-lg font-semibold">Is it safe for kids?</h3>
          <p>Absolutely. All materials are child-safe and durable.</p>
        </div>
      </div>
    </div>
  </section>
);

const CTASection = () => (
  <section className="py-16 bg-indigo-600 text-white">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Ready to Create Your First WizzyRoom?</h2>
      <p className="text-lg mb-8">Let’s bring immersive storytelling to your next project.</p>
      <div className="flex justify-center space-x-4">
        <a href="#catalog" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600">I'm a Designer / Builder</a>
        <a href="#catalog" className="border-2 border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-indigo-600">I Own / Manage a Property</a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-gray-800 text-white">
    <div className="container mx-auto px-4 text-center">
      <p>© 2025 WizzyRoom. All rights reserved.</p>
    </div>
  </footer>
);

const WizzyRoomLandingPage = () => (
  <div>
    <HeroSection />
    <VideoSection />
    <WhyChooseSection />
    <ThemesSection />
    <CatalogForm />
    <TestimonialsSection />
    <FAQSection />
    <CTASection />
    <Footer />
  </div>
);

export default WizzyRoomLandingPage;