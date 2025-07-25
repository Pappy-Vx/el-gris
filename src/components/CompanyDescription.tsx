import { Card, CardContent } from "../components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";
export function CompanyDescription() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side - Company Description */}
          <div>
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-[#1d79bc] rounded-lg flex items-center justify-center mr-4">
                <span className="text-white text-2xl font-bold">El</span>
              </div>
              <div>
                <p className="text-[#1d79bc] text-sm font-medium mb-1">El-gris:</p>
                <h2 className="text-3xl font-bold text-gray-900">Nigeria's Leading Insurance Broker.</h2>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                El-gris is the leading Insurance and reinsurance broking firm in Nigeria. For over 4
                decades, we have consistently differentiated ourselves from other insurance brokers in
                Nigeria by offering unprecedented services to our clients, leveraging on our experience,
                professionalism, and innovation.
              </p>

              <p>
                We have skilled teams dedicated to providing cost-effective insurance broking, reinsurance broking,
                consultancy services, and likewise a fair, prompt, and seamless claims recovery process.
              </p>

              <p>
                We continually strive to keep the promise of insurance: peace of mind, competitively priced broad
                coverage, security, prompt, and seamless claims recovery for our clients.
              </p>

              <p>
                El-gris is a privately owned Nigerian Company with 6 offices in Nigeria. Our head office is in Surulere
                Lagos, with a head office annex in Yaba-Lagos and other offices in Kaduna, Ibadan, Port Harcourt,
                and Abuja.
              </p>
            </div>
          </div>

          {/* Right side - Mission/Vision */}
          <div className="space-y-6">
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="vision" className="border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left bg-white hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#1d79bc] rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                        <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Our Vision</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  To be the no.1 risk solutions provider of choice.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="mission" className="border rounded-lg">
                <AccordionTrigger className="px-6 py-4 text-left bg-white hover:bg-gray-50 rounded-t-lg">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-[#E67817] rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900">Our Mission</h3>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-600">
                  Pursuit of excellence in the provision of risk solutions of a global standard using innovation.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  );
}
