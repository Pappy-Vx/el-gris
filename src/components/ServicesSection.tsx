import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function ServicesSection() {
  return (
    <section className="py-16 bg-[#1d79bc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
          <div className="w-24 h-1 bg-white mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Insurance Broking */}
          <Card className="bg-gray-800 border-none text-white">
            <div className="h-48 bg-cover bg-center rounded-t-lg"
                 style={{backgroundImage: "url('https://ext.same-assets.com/4264941402/1882352325.jpeg')"}}></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center">INSURANCE BROKING</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                Our team of expert account executives applies a client-focused approach to risk
                products and services that leverage our global network of resources, industry-leading
                data and analytics and specialized expertise. We work with you to design creative,
                personalized risk solutions delivered seamlessly, anywhere in Nigeria.
              </p>
              <div className="text-center">
                <Button
                  className="bg-[#1d79bc] hover:bg-[#1565a0] text-white"
                >
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Reinsurance Broking */}
          <Card className="bg-gray-800 border-none text-white">
            <div className="h-48 bg-cover bg-center rounded-t-lg"
                 style={{backgroundImage: "url('https://ext.same-assets.com/4264941402/425594758.jpeg')"}}></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center">REINSURANCE BROKING</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                The reinsurance unit of Scib Nigeria & Co. Ltd (Scib Re) is Nigeria's leading
                reinsurance intermediary and service advisor. We empower our clients to better
                understand, manage and transfer risk through innovative solutions and personalized
                access to all forms of global reinsurance across treaty...
              </p>
              <div className="text-center">
                <Button
                  className="bg-[#1d79bc] hover:bg-[#1565a0] text-white"
                >
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Consultancy Services */}
          <Card className="bg-gray-800 border-none text-white">
            <div className="h-48 bg-cover bg-center rounded-t-lg"
                 style={{backgroundImage: "url('https://ext.same-assets.com/4264941402/4196299043.jpeg')"}}></div>
            <CardContent className="p-6">
              <h3 className="text-xl font-bold mb-4 text-center">CONSULTANCY SERVICES</h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                With our team of experts providing consultancy services to clients and non-clients,
                we have built the expertise in these areas over the years and our clients acknowledge
                our unique value addition in this regard. Whilst these services are delivered on a
                routine basis to clients, we do same for non-clients at a fee.
              </p>
              <div className="text-center">
                <Button
                  className="bg-[#1d79bc] hover:bg-[#1565a0] text-white"
                >
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
