import { Button } from "../components/ui/button";

export function WhyChooseScib() {
  return (
    <section className="py-16 bg-[#1d79bc] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <div>
            <p className="text-blue-200 text-sm font-medium mb-2">Why choose El-gris</p>
            <h2 className="text-4xl font-bold mb-6">Our Differentiators</h2>
            <div className="space-y-4 text-blue-100 leading-relaxed">
              <p>
                We have been providing stability and reliability to our clients since 1978 to help them
                live their lives with confidence, to give them peace of mind, and enable them to realize
                their dreams for their loved ones and their legacy.
              </p>
              <p>
                Over and above the foregoing, we differentiate ourselves from our competitors in the
                following ways such as our people, professionalism, training, experience, authorised
                share capital, Professional Indemnity Policy, High ethical standards and corporate
                governance, and international affilation to the world's leading insurance broker - AON
              </p>
            </div>
            <div className="mt-8">
              <Button
                className="bg-gray-700 hover:bg-gray-600 text-white px-8 py-3 text-lg"
              >
                Talk to Us
              </Button>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div
              className="h-96 rounded-lg bg-cover bg-center"
              style={{backgroundImage: "url('https://ext.same-assets.com/4264941402/4055231717.jpeg')"}}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
