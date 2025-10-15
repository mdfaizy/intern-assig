// import React from "react";
// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

// const VisaSection = () => {
//   return (
//     <div className="bg-black text-white py-16 px-6 rounded-3xl">
//       <div className=" relative">
//         {/* Section Header */}
//         <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
//   {/* Left: Text Content */}
//   <div>
//     <p className="uppercase text-sm tracking-widest text-gray-400">
//       UAE Golden Visa Services in Dubai
//     </p>
//     <h2 className="text-4xl font-extrabold mt-2">
//       Quick & Compliant Visa Processing
//     </h2>
//   </div>

//   {/* Right: Arrows */}
//   <div className="flex gap-4">
//     <button className="bg-yellow-500 hover:bg-yellow-600 rounded-full p-3 text-black">
//       <FaArrowLeft />
//     </button>
//     <button className="bg-yellow-500 hover:bg-yellow-600 rounded-full p-3 text-black">
//       <FaArrowRight />
//     </button>
//   </div>
// </div>


//         {/* Carousel Wrapper */}
//         <div className="relative">
         

//           {/* Scrollable Card Container */}
//           <div className="flex gap-6 overflow-x-auto scroll-smooth px-8 scrollbar-hide py-4">
//             {/* Card 1 - Compact Card */}
//             <div className="relative w-[200px] min-w-[200px] h-[300px] rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
//                 alt="Public Investment"
//                 className="w-full h-full object-cover"
//               />
//               <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold bg-black/60 px-3 py-2 rounded">
//                 Public Investment Investors
//               </p>
//             </div>

//             {/* Card 2 - Large Card with Description */}
//             <div className="w-[300px] min-w-[300px] h-auto rounded-xl overflow-hidden shadow-lg">
//               <div className="relative w-full h-[300px]">
//                 <img
//                   src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
//                   alt="Real Estate"
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="bg-[#FFC310] px-4 py-4">
//                 <p className="text-sm text-white mb-2">
//                   AED 2M+ property investors seeking 10-year residency.
//                 </p>
//                 <button className="bg-white text-[#FFC310] font-semibold px-4 py-2 rounded hover:bg-yellow-100 transition">
//                   Apply Now
//                 </button>
//               </div>
//             </div>

//             {/* Card 3 */}
//             <div className="relative w-[200px] min-w-[200px] h-[300px] rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
//                 alt="Startup"
//                 className="w-full h-full object-cover"
//               />
//               <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold bg-black/60 px-3 py-2 rounded">
//                 Entrepreneurs & Startup Owners
//               </p>
//             </div>

//             {/* Card 4 */}
//             <div className="relative w-[200px] min-w-[200px] h-[300px] rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
//                 alt="Doctors"
//                 className="w-full h-full object-cover"
//               />
//               <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold bg-black/60 px-3 py-2 rounded">
//                 Doctors & Healthcare Professionals
//               </p>
//             </div>

//             {/* Card 5 */}
//             <div className="relative w-[200px] min-w-[200px] h-[300px] rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
//                 alt="Scientists"
//                 className="w-full h-full object-cover"
//               />
//               <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold bg-black/60 px-3 py-2 rounded">
//                 Engineers, Scientists & PhD Holders
//               </p>
//             </div>

//             {/* Card 6 */}
//             <div className="relative w-[200px] min-w-[200px] h-[300px] rounded-xl overflow-hidden shadow-lg">
//               <img
//                 src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=400&q=80"
//                 alt="Students"
//                 className="w-full h-full object-cover"
//               />
//               <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold bg-black/60 px-3 py-2 rounded">
//                 Outstanding Students & Graduates
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default VisaSection;



import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Frame from '../../assets/Frame.png'
import { MdArrowRightAlt } from "react-icons/md";
import Rectangle2 from "../../assets/Rectangle2.png"
import Rectangle4 from "../../assets/Rectangle4.png"
import Rectangle5 from "../../assets/Rectangle5.png"
import Rectangle6 from "../../assets/Rectangle6.png"
const VisaSection = () => {
  return (
    <div className="bg-black text-white py-16 px-6 rounded-3xl overflow-hidden">
      <div className="max-w-[1400px] mx-auto relative">
    
        <div className="flex justify-between items-center mb-10 flex-wrap gap-4">
         
          <div>
            <p className="uppercase text-[12px] tracking-widest text-gray-400 flex">
              <img src={Frame} alt="" className="mr-2"/>UAE Golden Visa Services in Dubai
            </p>
            <h2 className="text-4xl font-extrabold mt-2 w-[450px]">
              Quick & Compliant Visa Processing
            </h2>
          </div>

          <div className="flex gap-4">
  <button className="bg-black border border-white text-white rounded-full p-3 hover:bg-gray-800 transition">
    <FaArrowLeft />
  </button>
  <button className="bg-yellow-500 hover:bg-yellow-600 rounded-full p-3 text-black transition">
    <FaArrowRight />
  </button>
</div>

        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-6 w-max px-1 pb-2">
          
            <div className="relative w-[154px] h-[360px] rounded-xl overflow-hidden shadow-lg shrink-0">
              <img
                src={Rectangle2}
                alt="Public Investment"
                className="w-full h-full object-cover"
              />
              <p className="absolute bottom-4 left-4 right-4 text-white text-sm font-semibold px-3 py-2 rounded">
                Public Investment Investors
              </p>
            </div>

           <div className="w-[332px] h-[360px] rounded-xl overflow-hidden shadow-lg shrink-0 relative">
  <img
                    src={Rectangle2}
    alt="Real Estate"
    className="w-full h-full object-cover"
  />

  <div className="absolute bottom-0 left-0 w-full bg-[#FFC310]/90 px-4 py-4">
  <h1 className="text-black font-bold">Real Estate Investors</h1>
    <p className="text-sm text-black mb-2">
      AED 2M+ property investors seeking 10-year residency.
    </p>
   
    <button className="px-4 py-3 bg-[#FFC310] text-black border-black border-1 rounded-2xl font-semibold shadow hover:bg-yellow-400 transition flex items-center">
            Apply Now

      <MdArrowRightAlt className="ml-2 text-xl" />
    </button>
  </div>
</div>
            {[
  {
    label: "Entrepreneurs & Startup Owners",
    image: Rectangle4,
  },
  {
    label: "Doctors & Healthcare Professionals",
    image: Rectangle5,
  },
  {
    label: "Engineers, Scientists & PhD Holders",
    image: Rectangle6,
  },
  {
    label: "Outstanding Students & Graduates",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=400&q=80", // External fallback image
  },
].map((item, i) => (
  <div
    key={i}
    className="relative w-[154px] h-[360px] rounded-xl overflow-hidden shadow-lg shrink-0"
  >
    <img
      src={item.image}
      alt={item.label}
      className="w-full h-full object-cover"
    />
    <p className="absolute bottom-1 left-4 right-4 text-white text-sm text-center font-semibold px-3 py-2 rounded">
      {item.label}
    </p>
  </div>
))}

          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaSection;
