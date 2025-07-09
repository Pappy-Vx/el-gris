import Link from "next/link";

export function InsuranceProducts() {
  const products = {
    column1: [
      "Individual Life",
      "Group Life",
      "Health",
      "Annuities",
      "Fire/Special Perils",
      "Property Damage",
      "Business Interruption",
      "Burglary",
      "Fidelity/Forged Transfer",
      "Goods In Transit",
      "Householders Comprehensive",
      "Money",
      "Personal Accident",
      "Group Personal Accident"
    ],
    column2: [
      "Public Liability",
      "Occupiers Liability",
      "Products Liability",
      "Professional Indemnity",
      "Directors & Officers Liability",
      "Motor Vehicle Insurance",
      "Marine Insurance",
      "Aviation Insurance",
      "Oil & Gas Insurance",
      "Advance Loss of Profit",
      "Computer All Risks",
      "Contractors All Risks",
      "Builders Liability"
    ],
    column3: [
      "Electronic Equipment",
      "Erection All Risks",
      "Machinery Breakdown",
      "Plant All Risks",
      "Kidnap & Ransom",
      "Terrorism",
      "All Risk",
      "Agricultural Insurance",
      "Insurance Bond"
    ]
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Insurance Products</h2>
          <div className="w-24 h-1 bg-[#1d79bc] mx-auto mb-4"></div>
          <p className="text-xl text-gray-600">With over 40 insurance products to choose from.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Column 1 */}
          <div className="space-y-3">
            {products.column1.map((product, index) => (
              <Link
                key={index}
                href="#"
                className="block text-gray-700 hover:text-[#1d79bc] transition-colors duration-200 py-1 border-b border-gray-100 hover:border-[#1d79bc]"
              >
                {product}
              </Link>
            ))}
          </div>

          {/* Column 2 */}
          <div className="space-y-3">
            {products.column2.map((product, index) => (
              <Link
                key={index}
                href="#"
                className="block text-gray-700 hover:text-[#1d79bc] transition-colors duration-200 py-1 border-b border-gray-100 hover:border-[#1d79bc]"
              >
                {product}
              </Link>
            ))}
          </div>

          {/* Column 3 */}
          <div className="space-y-3">
            {products.column3.map((product, index) => (
              <Link
                key={index}
                href="#"
                className="block text-gray-700 hover:text-[#1d79bc] transition-colors duration-200 py-1 border-b border-gray-100 hover:border-[#1d79bc]"
              >
                {product}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
