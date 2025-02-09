import Image from "next/image";
import { icons } from "../data/proficiencyData";

const AllIcons = () => {
  return (
    <div>
      <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4 container mx-auto px-4 py-12 md:py-16">
        {icons?.map((icon) => (
          <div
            key={icon.id} // Ensure this is unique
            className="w-full p-4 text-center flex flex-col justify-center items-center relative group hover:scale-105 transition-transform duration-300 rounded-lg shadow-lg bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            {/* Icon Image */}
            <div className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full">
              <Image
                src={icon.image}
                width={40}
                height={40}
                alt={icon.name}
                className="filter grayscale group-hover:grayscale-0 transition-all duration-300"
              />
            </div>

            {/* Icon Name */}
            <h2 className="text-lg font-semibold mt-3 text-gray-800 dark:text-gray-200 group-hover:text-rose-600 transition-colors duration-300">
              {icon.name}
            </h2>

           
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllIcons;
