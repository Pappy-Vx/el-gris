import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../components/ui/accordion";

export function CommitmentSection() {
  const commitments = [
    {
      id: "professionalism",
      title: "Professionalism:",
      content: "Scib Nigeria & Co. Ltd places emphasis on professional conduct in our value offerings. We appreciate that professionalism is not just about qualifications but in the manner of service delivery, value additions, continuous improvement and cutting edge strategies towards achieving the clients overall business objectives as per its Insurance programme. The Scib brand is synonymous with professionalism in the Nigerian Insurance market."
    },
    {
      id: "innovation",
      title: "Innovation:",
      content: "Continuously seeking new and creative ways of providing solutions. We take innovation seriously and we back our commitment to it with substantial investments in research and development."
    },
    {
      id: "ethical",
      title: "High Ethical Standards:",
      content: "This is one of the things that Scib is most noted for within the industry and it is very much appreciated by its clients, peers and other service providers. It is also one of the major factors that have attracted the affiliation of major international brokers. To reinforce our commitment to our clients and to the highest ethical standards of behavior, we require all our employees to observe the fundamentals of our business practices in avoiding conflicts of interest that relate to the offering of our services."
    },
    {
      id: "integrity",
      title: "Integrity:",
      content: "We act with honesty and integrity, not compromising the truth. We endeavour to meet the insurance needs of our clients through the necessary advisory and transactional insurance broking services at the most competitive price. We foster a spirit of trust with our clients that rest on honesty and integrity."
    },
    {
      id: "results",
      title: "Results:",
      content: "Results are the hallmark of success in our Industry today and we are passionate about winning, our brand, services and people, thereby delivering superior value to our stakeholders. Our commitment to achieving results is driven by our desire and determination to keeping the promise by getting things done right for you."
    },
    {
      id: "accountability",
      title: "Accountability:",
      content: "At Scib Nigeria & Co. Ltd, we take responsibility for our performance in all of our decisions and actions. We are committed to seeing everything through the eyes of our clients in order to provide the highest quality service because we expect nothing less than the best ourselves."
    },
    {
      id: "excellence",
      title: "Excellence:",
      content: "To be the best in quality and in everything we do. We keep clients satisfaction as our top priority. We are committed to providing the highest quality of services and throughout our over 39 years of existence we have been continually improving our services to our clients and expanding our expertise in order to meet the ever increasing clients demands."
    },
    {
      id: "quality",
      title: "Quality:",
      content: "We offer quality services to our clients and are committed to the continuous improvement of our client service quality. Our commitment to our client is that we will proactively address those areas where we fail to achieve maximum quality. We focus on developing a culture of trust both within our organization and with our clients by being 100% dedicated to continuously improving what we do every step of the way."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left side - Commitments */}
          <div>
            <p className="text-[#1d79bc] text-sm font-medium mb-2">...Keeping the promise</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Commitment To You</h2>

            <div className="grid grid-cols-2 gap-4">
              <Accordion type="single" collapsible className="space-y-4">
                {commitments.slice(0, 4).map((commitment) => (
                  <AccordionItem key={commitment.id} value={commitment.id} className="border rounded-lg bg-gray-800 text-white">
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-700 rounded-t-lg">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-2">★</span>
                        <span className="font-semibold">{commitment.title}</span>
                        <span className="ml-auto text-yellow-400">+</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
                      {commitment.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>

              <Accordion type="single" collapsible className="space-y-4">
                {commitments.slice(4).map((commitment) => (
                  <AccordionItem key={commitment.id} value={commitment.id} className="border rounded-lg bg-gray-800 text-white">
                    <AccordionTrigger className="px-6 py-4 text-left hover:bg-gray-700 rounded-t-lg">
                      <div className="flex items-center">
                        <span className="text-yellow-400 mr-2">★</span>
                        <span className="font-semibold">{commitment.title}</span>
                        <span className="ml-auto text-yellow-400">+</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4 text-gray-300 text-sm leading-relaxed">
                      {commitment.content}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Right side - Image */}
          <div className="relative">
            <div
              className="h-full min-h-[500px] rounded-lg bg-cover bg-center"
              style={{backgroundImage: "url('https://ext.same-assets.com/4264941402/3709028843.jpeg')"}}
            ></div>
          </div>
        </div>
      </div>
    </section>
  );
}
