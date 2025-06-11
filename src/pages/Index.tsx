import neon1 from "../images/neon1.jpg";
import neon2 from "../images/neon2.jpg";
import neon3 from "../images/neon3.jpg";
import neon4 from "../images/neon4.jpg";
import neon5 from "../images/neon5.jpg";
import neon6 from "../images/neon6.jpg";

const Index = () => {
  const sliderImages = [neon1, neon2, neon3, neon4, neon5, neon6];

  return (
    <div>
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4 flex items-center">
          <div className="w-1/2 pr-8">
            <div className="relative h-full max-h-[60vh] aspect-square">
              <img
                src={neon1}
                alt="Neon sign example"
                className="absolute h-full w-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
          <div className="w-1/2 text-left pl-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Light Up Your Space
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Custom LED neon signs that make a statement
            </p>
            <a
              href="/custom"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              Create Your Sign
            </a>
          </div>
        </div>
      </section>

      <section className="py-16 bg-black/20 backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Love at First Light
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Our LED neon signs radiate good vibes in every room you enter.
            Together we create the LED neon sign of your dreams.
          </p>
        </div>
      </section>

      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4 flex items-center">
          <div className="w-1/2 pr-8">
            <div className="bg-blue/20 backdrop-blur-sm rounded-lg p-10">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="block mt-2">Customized</span>
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Always wanted to see your own design in LED neon? Request your
                own design!
              </p>
              <a
                href="/custom"
                className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
              >
                View Custom
              </a>
            </div>
          </div>
          <div className="w-1/2 pl-8">
            <div className="relative h-full max-h-[60vh] aspect-square">
              <img
                src={neon2}
                alt="Custom neon sign example"
                className="absolute h-full w-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative h-[70vh] flex items-center justify-center">
        <div className="absolute inset-0 hero-gradient" />
        <div className="relative container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Ready to shine
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-12">
            Shine bright with our LED neon signs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-black/30 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">One-of-a-kind</h3>
              <p className="text-gray-400">
                Completely personalised and handmade, including a 100% good
                vibes guarantee
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-black/30 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Plug & play</h3>
              <p className="text-gray-400">
                Nice and easy to install yourself! Screws + plug = let's shine
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-black/30 rounded-lg p-6">
              <div className="flex justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-blue-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Special delivery</h3>
              <p className="text-gray-400">
                Fully custom packed, including safe shipping to your country
              </p>
            </div>
          </div>

          <div className="mt-12">
            <h3 className="text-xl font-semibold mb-4">Need inspiration?</h3>
            <a
              href="/inspiration"
              className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg transition-colors"
            >
              View Inspiration Gallery
            </a>
          </div>
        </div>
      </section>
      <section className="py-16 bg-black overflow-hidden">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Our Creations
          </h2>

          <div className="relative w-full overflow-hidden py-4">
            <div className="flex w-max animate-infinite-scroll gap-8">
              {[...sliderImages, ...sliderImages].map((img, index) => (
                <div key={`first-${index}`} className="flex-shrink-0 w-72">
                  <div className="w-72 h-72 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={img}
                      alt={`Neon design ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative w-full overflow-hidden py-4">
            <div className="flex w-max animate-infinite-scroll-reverse gap-8">
              {[...sliderImages, ...sliderImages].map((img, index) => (
                <div key={`second-${index}`} className="flex-shrink-0 w-72">
                  <div className="w-72 h-72 rounded-lg overflow-hidden shadow-lg">
                    <img
                      src={img}
                      alt={`Neon design ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
