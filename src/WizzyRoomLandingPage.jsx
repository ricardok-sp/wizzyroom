import React, { useState } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import WatchMagicSection from './WatchMagicSection';

// Fixed CTA button
const FixedCTAButton = () => (
  <a href="#catalog" className="fixed top-4 right-4 z-50 bg-yellowLogo text-darkPurpleLogo px-6 py-3 rounded-full font-bold shadow-lg hover:bg-darkPurpleLogo hover:text-yellowLogo transition-all">
    💫 Download Catalog
  </a>
);

const HeroSection = () => (
  <section className="hero-bg bg-purpleLogo text-darkPurpleLogo py-20">
    <div className="container mx-auto px-4 text-center">
      <img 
        src="/wizzyroom.svg" 
        alt="WizzyRoom logo" 
        className="mx-auto mt-2 mb-12 max-w-xs md:max-w-md w-full h-auto object-contain animate-pulse"
      />
      <h1 className="text-4xl md:text-5xl font-bold mb-4">Turn Any Room into a Magical, Interactive Experience</h1>
      <p className="text-lg md:text-xl mb-8">WizzyRoom is a turnkey solution that brings walls to life with sound, stories, and immersive learning.</p>
      <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
        <a href="#video" className="border-2 border-darkPurpleLogo text-darkPurpleLogo bg-yellowLogo px-6 py-3 rounded-full font-semibold hover:bg-darkPurpleLogo hover:text-yellowLogo transition shadow-md hover:shadow-xl">See How It Works</a>
        <a href="#magic" className="border-2 border-darkPurpleLogo text-darkPurpleLogo bg-yellowLogo px-6 py-3 rounded-full font-semibold hover:bg-darkPurpleLogo hover:text-yellowLogo transition shadow-md hover:shadow-xl">Watch the Magic Happen</a>
      </div>
    </div>
  </section>
);

const VideoSection = () => (
  <section id="video" className="py-16 bg-blueLogo/10">
    <div className="container mx-auto px-4">
      <div className="bg-gray-200 h-64 w-full flex flex-col md:flex-row items-center justify-center rounded-lg mb-6 md:mb-0 px-4">
  <img src="child-interacting-wall-illustration-video.png" alt="Child interacting with wall" className="h-full max-h-48 md:max-h-56 mr-0 md:mr-6 mb-4 md:mb-0 pl-0 md:pl-8" />
  <p className="text-2xl md:text-4xl font-light font-sans text-center w-full leading-tight">
  <span className="italic text-darkPurpleLogo">Children <span className="text-darkPurpleLogo">touch</span>, the wall <span className="text-blueLogo">responds</span>.</span><br/>
  <span className="text-darkPurpleLogo">It's <span className="text-darkPurpleLogo">learning</span>, play, and <span className="text-blueLogo">wonder</span> in one experience.</span>
</p>
</div>
    </div>
  </section>
);

const WhyChooseSection = () => (
  <section className="py-16 bg-purpleLogo/10">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Why Choose WizzyRoom?</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="bg-white/80 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img src="designers.png" alt="Designers" className="inline-block w-8 h-8 mr-2 align-middle" />
            <h3 className="text-xl font-semibold align-middle">Designers</h3>
          </div>
          <p>Create unforgettable spaces with immersive storytelling and sound. Easy to install, big visual impact.</p>
        </div>
        <div className="bg-white/80 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img src="builders.png" alt="Builders" className="inline-block w-8 h-8 mr-2 align-middle" />
            <h3 className="text-xl font-semibold align-middle">Builders & Renovators</h3>
          </div>
          <p>Offer a high-value upgrade that sets your vacation homes apart. Minimal setup, maximum delight.</p>
        </div>
        <div className="bg-white/80 p-6 rounded-lg shadow-md">
          <div className="flex items-center mb-2">
            <img src="homeowners.png" alt="Homeowners" className="inline-block w-8 h-8 mr-2 align-middle" />
            <h3 className="text-xl font-semibold align-middle">Homeowners</h3>
          </div>
          <p>Increase bookings and reviews by offering families a magical, tech-enhanced kids room.</p>
        </div>
        <div className="bg-white/80 p-6 rounded-lg shadow-md">
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

const ThemesSection = () => {
  const themes = [
    { img: 'dinosaurs-illustration.png', label: 'Dinosaurs' },
    { img: 'space-illustration.png', label: 'Space' },
    { img: 'travel-illustration.png', label: 'Travel' },
    { img: 'ocean-illustration.png', label: 'Ocean' },
    { img: 'enchanted-forest-illustration.png', label: 'Enchanted Forest' },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0); // para desktop
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  // Carrossel desktop: mostra 4 por vez
  const visibleThemes = isMobile ? [] : themes.slice(carouselIndex, carouselIndex + 4);
  // Carrossel infinito desktop
  const canScrollPrev = !isMobile;
  const canScrollNext = !isMobile;

  const handleCarouselPrev = () => {
    if (carouselIndex === 0) {
      setCarouselIndex(themes.length - 4);
    } else {
      setCarouselIndex(carouselIndex - 1);
    }
  };
  const handleCarouselNext = () => {
    if (carouselIndex + 4 >= themes.length) {
      setCarouselIndex(0);
    } else {
      setCarouselIndex(carouselIndex + 1);
    }
  };

  const handlePrev = () => setCurrentIndex((prev) => (prev === 0 ? themes.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === themes.length - 1 ? 0 : prev + 1));

  return (
    <section className="py-16 bg-yellowLogo/10 themes-bg">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Explore Our Themes</h2>
        <p className="text-center mb-8">From dinosaurs to galaxies, undersea worlds to enchanted forests.</p>
        <div className="relative">
          {isMobile ? (
            <div className="relative flex items-center justify-center">
              <button onClick={handlePrev} className="absolute left-0 z-10 p-2 bg-white rounded-full shadow-md">
                <FaChevronLeft />
              </button>
              <div className="theme-card bg-[#FFFBEE] p-6 rounded-lg shadow-md text-center mx-8">
                <img src={themes[currentIndex].img} alt={themes[currentIndex].label} className="mx-auto mb-4 rounded" />
                <h3 className="text-lg font-semibold">{themes[currentIndex].label}</h3>
              </div>
              <button onClick={handleNext} className="absolute right-0 z-10 p-2 bg-white rounded-full shadow-md">
                <FaChevronRight />
              </button>
            </div>
          ) : (
            <div className="relative">
              {/* Carrossel desktop personalizado */}
              <button
                onClick={handleCarouselPrev}
                className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md transition-opacity duration-200 opacity-100"
                aria-disabled="false"
                tabIndex={0}
                style={{ pointerEvents: 'auto' }}
              >
                <FaChevronLeft size={28} />
              </button>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-12">
                {visibleThemes.map((theme, index) => (
                  <div key={index + carouselIndex} className="theme-card bg-[#FFFBEE] p-6 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg">
                    <div className="relative overflow-hidden rounded">
                      {theme.label === 'Travel' ? (
                        <img
                          src={theme.img}
                          alt={`${theme.label} Theme`}
                          className="mx-auto mb-4 rounded-2xl transition-opacity duration-300 hover:opacity-80 object-cover"
                          style={{ width: '203px', height: '270px', aspectRatio: '203/270' }}
                        />
                      ) : (
                        <img
                          src={theme.img}
                          alt={`${theme.label} Theme`}
                          className="mx-auto mb-4 rounded transition-opacity duration-300 hover:opacity-80"
                        />
                      )}
                    </div>
                    <h3 className="text-lg font-semibold">{theme.label}</h3>
                  </div>
                ))}
              </div>
              <button
                onClick={handleCarouselNext}
                className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 bg-white rounded-full shadow-md transition-opacity duration-200 opacity-100"
                aria-disabled="false"
                tabIndex={0}
                style={{ pointerEvents: 'auto' }}
              >
                <FaChevronRight size={28} />
              </button>
            </div>
          )}
        </div>
        <div className="text-center mt-12">
          <a href="#catalog" className="cta-button hover:shadow-lg hover:scale-105 transition-transform duration-200">Download the Full Catalog</a>
        </div>
      </div>
    </section>
  );
};

const CatalogForm = () => (
  <section id="catalog" className="py-16 bg-purpleLogo/10">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Get the Catalog</h2>
      <p className="text-center mb-8 text-lg">💫 Download our free catalog and get 10% off your first room!</p>
      <div className="max-w-md mx-auto bg-white/80 p-8 rounded-lg shadow-md">
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
  <section className="py-16 bg-blueLogo/10">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">What People Are Saying</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white/80 p-6 rounded-lg shadow-md flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Laura, Orlando" className="w-20 h-20 rounded-full mb-4 object-cover" />
          <p className="italic">“Since installing WizzyRoom, our bookings increased 30%.”</p>
          <p className="mt-4 font-semibold">Laura, Orlando</p>
        </div>
        <div className="bg-white/80 p-6 rounded-lg shadow-md flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" alt="Jorge, Miami" className="w-20 h-20 rounded-full mb-4 object-cover" />
          <p className="italic">“My clients love the wow-factor. It makes my projects stand out.”</p>
          <p className="mt-4 font-semibold">Jorge, Miami</p>
        </div>
        <div className="bg-white/80 p-6 rounded-lg shadow-md flex flex-col items-center">
          <img src="https://randomuser.me/api/portraits/women/68.jpg" alt="Anna, Tampa" className="w-20 h-20 rounded-full mb-4 object-cover" />
          <p className="italic">“Parents are amazed. Kids are obsessed. It’s now our biggest selling point.”</p>
          <p className="mt-4 font-semibold">Anna, Tampa</p>
        </div>
      </div>
    </div>
  </section>
);

const faqData = [
  {
    question: "Is installation difficult?",
    answer: "Not at all. Each kit includes instructions and remote support is available."
  },
  {
    question: "Does it require power or Wi-Fi?",
    answer: "No Wi-Fi needed. The Magic Wand already comes with batteries that last for a whole month, and are rechargeable through USB using any cell phone charger."
  },
  {
    question: "Can I update the theme later?",
    answer: "Yes, we offer theme expansion packs you can swap out easily."
  },
  {
    question: "Is it safe for kids?",
    answer: "Absolutely. All materials are child-safe and durable."
  }
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const toggle = idx => setOpenIndex(openIndex === idx ? null : idx);

  return (
    <section className="py-16 bg-yellowLogo/10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, idx) => (
            <div className="mb-4 border-b border-yellowLogo/50" key={idx}>
              <button
                className="w-full flex justify-between items-center py-4 text-left text-xl md:text-2xl font-bold focus:outline-none"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span>{faq.question}</span>
                <span className="ml-4">{openIndex === idx ? '-' : '+'}</span>
              </button>
              {openIndex === idx && (
                <div className="pb-4 text-lg text-darkPurpleLogo/80 animate-fade-in">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTASection = () => (
  <section className="py-16 bg-darkPurpleLogo text-yellowLogo">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-8">Ready to Create Your First WizzyRoom?</h2>
      <p className="text-lg mb-8">Let’s bring immersive storytelling to your next project.</p>
      <div className="flex justify-center space-x-4">
        <a href="#catalog" className="border-2 border-yellowLogo text-yellowLogo px-6 py-3 rounded-full font-semibold hover:bg-yellowLogo hover:text-darkPurpleLogo transition">I'm a Designer / Builder</a>
        <a href="#catalog" className="border-2 border-yellowLogo text-yellowLogo px-6 py-3 rounded-full font-semibold hover:bg-yellowLogo hover:text-darkPurpleLogo transition">I Own / Manage a Property</a>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-8 bg-darkPurpleLogo text-yellowLogo">
    <div className="container mx-auto px-4 text-center">
      <p>© 2025 WizzyRoom. All rights reserved.</p>
    </div>
  </footer>
);

const WizzyRoomLandingPage = () => (
  <div>
    <FixedCTAButton />
    <HeroSection />
    <VideoSection />
    <WatchMagicSection />
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