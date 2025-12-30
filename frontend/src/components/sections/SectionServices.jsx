import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { services } from "../data/Data";

const SectionServices = () => {
  return (
    <>
      {/* ================= EXTRA SERVICES ================= */}
      <section>
        <h3 className="text-xl font-bold text-gray-800 mb-4">
          Our extra services
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <ServiceCard
              key={i}
              icon={service.icon}
              title={service.title}
              image={service.img}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SectionServices;
