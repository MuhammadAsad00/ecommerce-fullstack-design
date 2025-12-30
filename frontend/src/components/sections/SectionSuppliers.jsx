import React from 'react'
import CountryItem from '../ui/CountryItem'
import { countries } from '../data/Data'

const SectionSuppliers = () => {
  return (
    <>
    {/* ================= SUPPLIERS BY REGION ================= */}
        <section>
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Suppliers by region
          </h3>

          <div
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-6 gap-x-4"
          >
            {countries.map((country, i) => (
              <CountryItem
                key={i}
                flag={country.flag}
                name={country.name}
                domain={country.domain}
              />
            ))}
          </div>
        </section>
    </>
  )
}

export default SectionSuppliers