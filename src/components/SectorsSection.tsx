import Link from "next/link";
import { Button } from "../components/ui/button";

export function SectorsSection() {
  const sectors = [
    { name: "Aviation", href: "#" },
    { name: "Brewing", href: "#" },
    { name: "Conglomerates", href: "#" },
    { name: "Construction", href: "#" },
    { name: "Educational Institutions", href: "#" },
    { name: "Financial Services", href: "#" },
    { name: "Healthcare Industry", href: "#" },
    { name: "Hospitality/Hotels", href: "#" },
    { name: "Oil & Gas", href: "#" },
    { name: "Telecommunications", href: "#" },
    { name: "Transportation", href: "#" },
    { name: "NGOs", href: "#" },
    { name: "Public Sector", href: "#" },
    { name: "Power", href: "#" },
    { name: "Real Estate", href: "#" },
    { name: "Manufacturing", href: "#" }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            We service a wide range of sectors
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4 mb-8">
          {sectors.map((sector, index) => (
            <Link
              key={index}
              href={sector.href}
              className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 text-center border hover:border-[#1d79bc] group overflow-hidden"
            >
              <span className="text-sm text-gray-700 group-hover:text-[#1d79bc] font-medium px-2">
                {sector.name}
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Button
            className="bg-[#E67817] hover:bg-[#E67817] text-white px-8 py-3"
          >
            View All
          </Button>
        </div>
      </div>
    </section>
  );
}
