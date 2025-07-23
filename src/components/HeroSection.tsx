import { Button } from "../components/ui/button";

export function HeroSection() {
  return (
    <section
      className="relative h-[600px] flex items-center justify-center text-white"
      style={{
        backgroundImage: "url('https://ext.same-assets.com/4264941402/3057899098.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-wide">
          STAND OUT, LIVE YOUR
        </h1>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wide">
          LIFE
        </h1>

        <p className="text-xl md:text-2xl mb-8 font-light">
          We've Got You Covered.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-[#1d79bc] hover:bg-[#1565a0] text-white px-8 py-3 text-lg rounded-none"
          >
            About Us
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-3 text-lg rounded-none bg-transparent"
          >
            Our Commitment
          </Button>
        </div>
      </div>
    </section>
  );
}
