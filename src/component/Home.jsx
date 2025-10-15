import VisaSection from './pages/VisaSection';
import WhyChooseUs from './pages/WhyChooseUs';
import { MdArrowRightAlt } from "react-icons/md";
import CheckBoxSection from './pages/CheckBoxSection';
import Group6 from '../assets/Group-6.png'
import Group51 from '../assets/Group51.png'
import { FaLongArrowAltRight } from "react-icons/fa";
import image17 from "../assets/image17.png"
import image14 from "../assets/Image14.png"
import Rectangle03 from '../assets/Rectangle03.png'
import Rectangle02 from '../assets/Rectangle2.png'
import Rectangle01 from '../assets/Rectangle01.png'
import { MdArrowOutward } from "react-icons/md";
import Frame from '../assets/Frame.png'
import firstImg from '../assets/01.png'
import secondImg from '../assets/02.png'
import thirdImg from '../assets/03.png'
import forthImg from '../assets/04.png'
import fifthImg from '../assets/05.png'
import DateIcon from '../assets/date.png'
import Hero from '../assets/hero.jpeg'
const Home = () => {
    return (
        <div className="max-w-[1600px] mx-auto min-h-screen">
            {/* Hero section top */}
            {/* <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-10">
                <div>
                    <h1 className="text-4xl font-bold mb-4 text-[#487C9A]">Visa Made Easy</h1>
                    <p className="text-xl mb-6 text-gray-700">Dreams Made Possible</p>

                    <button className="px-4 py-3 bg-[#FFC310] text-black rounded-2xl font-semibold shadow hover:bg-yellow-400 transition flex items-center">
                        Enquire Now
                        <MdArrowRightAlt className="ml-2 text-xl" />
                    </button>
                </div>
                <CheckBoxSection />
            </div> */}

  {/* <div className="max-w-[1600px] mx-auto px-4 sm:px-8  h-80 py-10 bg-cover bg-center" style={{ backgroundImage: `url(${Hero})` }}>

    <div>
        <h1 className="text-4xl font-bold mb-4 text-[#487C9A]">Visa Made Easy</h1>
        <p className="text-xl mb-6 text-gray-700">Dreams Made Possible</p>

        <button className="px-4 py-3 bg-[#FFC310] text-black rounded-2xl font-semibold shadow hover:bg-yellow-400 transition flex items-center">
            Enquire Now
            <MdArrowRightAlt className="ml-2 text-xl" />
        </button>
    </div>
    <CheckBoxSection />
</div> */}

<div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-10 bg-cover bg-center h-[400px]" style={{ backgroundImage: `url(${Hero})` }}>
    <div>
        <h1 className="text-4xl font-bold mb-4 text-[#487C9A]">Visa Made Easy</h1>
        <p className="text-xl mb-6 text-gray-700">Dreams Made Possible</p>

        <button className="px-4 py-3 bg-[#FFC310] text-black rounded-2xl font-semibold shadow hover:bg-yellow-400 transition flex items-center">
            Enquire Now
            <MdArrowRightAlt className="ml-2 text-xl" />
        </button>
    </div>
    <CheckBoxSection />
</div>


            
            <div className='mt-96'>
                <VisaSection />
            </div>
           
            <div className="max-w-[1600px] mx-auto px-4 sm:px-8 py-10">
                <WhyChooseUs />
            </div>

            <div className="flex flex-wrap gap-6 justify-center">
                
                <div className="max-w-sm border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition">
                    <img src={Group6} alt="Golden Visa" className="w-[34px] h-[34px] object-cover rounded-md mb-4" />
                    <h1 className="text-lg font-semibold text-black mb-2">
                        UAE Golden Visa Services in Dubai
                    </h1>
                    <p className="text-gray-400 text-sm">
                        The UAE Golden Visa program has long-term residency advantages for investors, entrepreneurs, specialized talents, researchers, and exceptional students.
                    </p>
                </div>

                
                <div className="max-w-sm border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition">
                    <img src={Group6} alt="Golden Visa" className="w-[34px] h-[34px] object-cover rounded-md mb-4" />
                    <h1 className="text-lg font-semibold text-black mb-2">
                        Investor Visa Services    </h1>
                    <p className="text-gray-400 text-sm">
                        Dubai is the most profitable place to invest in the world and UAE Investor Visa is the key to discovering the business environment in this city. Go Kite Business Setup Services has expertise in offering professional Investor Visa services in Dubai where entrepreneurs, shareholders and business owners can legally reside in the UAE and invest in and operate their businesses.    </p>
                </div>

               
                <div className="max-w-sm border border-gray-200 rounded-xl p-4 shadow hover:shadow-md transition">
                    <img src={Group6} alt="Golden Visa" className="w-[34px] h-[34px] object-cover rounded-md mb-4" />
                    <h1 className="text-lg font-semibold text-black mb-2">
                        Family Visa Services    </h1>
                    <p className="text-gray-400 text-sm ">
                        Moving your family to the UAE is a thrilling experience, yet it is associated with challenging immigration regulations and paperwork. We offer full family visa services in Dubai at Go Kite Business Setup Services such that sponsoring your family members is a stress-free, fast and smooth process.    </p>
                </div>
            </div>

            <div className="flex flex-wrap gap-8 items-start justify-center max-w-[1600px] mx-auto mt-10">
                
                <img
                    src={image14}
                    alt="Dubai Golden Visa"
                    className="w-full sm:w-[410px] h-[510px] object-cover rounded-lg shadow-lg"
                />

               
                <div className="flex-1 max-w-3xl">
                    <img src={Group51} alt="Visa Icon" className="w-10 h-10" />

                    <h1 className="text-2xl font-bold text-[#3790AE] mt-6 mb-2">
                        Key Aspects of Our Dubai Golden Visa Services
                    </h1>

                   
                    <ul className="list-disc pl-6 mb-6 space-y-2 text-gray-700">
                        <li>Eligibility Assessment</li>
                        <li>Preparation and Submission of Documents</li>
                        <li>Filing of application with the UAE Authorities</li>
                        <li>Visa Category Advisor</li>
                        <li>Golden Visa Support Based on Real Estate</li>
                        <li>Facilitation of Corporate Golden Visa</li>
                    </ul>

                    <div className="bg-yellow-300 rounded-lg p-6 w-lg">
                        <ul className="flex justify-between mb-4">
                            <li className="font-semibold text-3xl text-white">10k</li>
                            <li className="font-semibold text-2xl text-white">20k</li>
                            <li className="font-semibold text-2xl text-white">5k</li>
                            <li className="font-semibold text-2xl text-white">100+</li>
                        </ul>
                        <ul className="flex justify-between text-sm">
                            <li className='text-ms text-white'>Complete project</li>
                            <li className='text-ms text-white'>Team member</li>
                            <li className='text-ms text-white'>Clients</li>
                            <li className='text-ms text-white'>Complete project</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div class="mt-10">
                <div class="justify-center items-center">
                    <h1 class="text-center text-gray-500 font-medium text-xl mb-2">Process Overview</h1>
                </div>
                <h1 class="text-center w-full max-w-[400px] font-bold mx-auto text-3xl mb-12">Golden Visa Application Process in Dubai</h1>

                <div class="flex flex-wrap gap-8 justify-center">

                    <div class="w-full sm:w-[350px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ">

                        <img src={firstImg} alt="" />
                        <h2 class="text-xl font-semibold mb-4 mt-2">Free Consultation & Evaluation</h2>
                        <p class="text-gray-600">We assess your eligibility and recommend the appropriate Golden Visa category.</p>
                    </div>

                    <div class="w-full sm:w-[350px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ">
                        <img src={secondImg} alt="" />
                        <h2 class="text-xl font-semibold mb-4 mt-2">Document Collection & Review</h2>
                        <p class="text-gray-600">Our experts gather and verify required documents.</p>
                    </div>


                    <div class="w-full sm:w-[350px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ">
                        <img src={thirdImg} alt="" />
                        <h2 class="text-xl font-semibold mb-4 mt-2">Application Processing</h2>
                        <p class="text-gray-600">We handle all submissions, coordination, and follow-up with government authorities.</p>
                    </div>


                    <div class="w-full sm:w-[350px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ">
                        <img src={forthImg} alt="" />
                        <h2 class="text-sm font-semibold mb-4 mt-2">Medical & Emirates ID Processing</h2>
                        <p class="text-gray-600">Assistance with medical tests, biometrics, and ID issuance.</p>
                    </div>


                    <div class="w-full sm:w-[350px] bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ">
                        <img src={fifthImg} alt="" />
                        <h2 class="text-xl font-semibold mb-4 mt-2">Visa Issuance & Stamping</h2>
                        <p class="text-gray-600">Receive your long-term Golden Visa and residence stamping.</p>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 ">
                <div className="flex flex-col md:flex-row gap-8 items-center justify-between w-full">
                    <div className="max-w-lg text-center md:text-left">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Why Choose <br /><span className="">XYZ Business Setup Services?</span>
                        </h1>
                        <p className="text-gray-600 mb-8 text-sm">
                            At XYZ Business Setup Services, we make your Golden Visa journey easy, quick, and reliable:
                        </p>
                        <ul className="text-gray-400">

                            <li className="">
                                Deep Expertise in UAE Immigration Rules
                            </li>
                            <li className="items-start">
                                Customizable Visa Solutions for Every Category
                            </li>
                            <li className="items-start">
                                Transparent and Fair Pricing
                            </li>
                            <li className="items-start">
                                Dedicated Support Team
                            </li>
                            <li className="items-start">
                                Strong Government Relations
                            </li>
                        </ul>

                    </div>
                    <div className="flex justify-center md:w-[500px]">
                        <div className="relative">
                            <div className="w-[357px] h-[472px] rounded-xl ">

                                <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center">
                                    <div className="flex justify-center md:w-[500px]">
                                        <img src={image17} alt="image" className="w-[357px] rounded-lg shadow-xl h-[472px]" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



            <div className="bg-white py-12 px-6 md:px-12 lg:px-20">
                
                <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
                    Why Use Golden Visa Services in Dubai?
                </h1>

                <p className="text-gray-700 mb-6">
                    The UAE Golden Visa is a wise step towards people who desire to be stable long-term in one of the most rapidly developing economies in the world. The selection of the professional Golden Visa services guarantees:
                </p>

                <ul className="list-disc pl-6 space-y-3 text-gray-600 mb-6">
                    <li>More speed and proper documentation.</li>
                    <li>Less risk of rejection of an application.</li>
                    <li>Professional advice in navigating immigration regulations.</li>
                    <li>Complete assistance in evaluation through post-approval processes.</li>
                </ul>

                <p className="text-gray-700 mb-4">
                    Start your Dubai Golden Visa application today with GoKite Business Setup Services.
                </p>
                <p className="text-gray-700">
                    Our expert consultants will guide you through every step, ensuring a quick and hassle-free approval.
                </p>
                <button className="mt-10 bg-black text-white flex items-center justify-center px-6 py-3 rounded-full text-sm font-semibold hover:bg-gray-800 transition-all">
                    Contact us now for a free consultation <MdArrowOutward className="ml-2 text-xl text-yellow-400" />
                </button>

            </div>


            <div className="py-12 px-6 md:px-12 lg:px-20">
    <div className="flex items-center gap-4 mb-8 w-full max-w-2xl">
        <div className="flex items-center justify-center w-10 h-10 bg-[#487C9A] rounded-full">
            <img src={Frame} alt="Icon" className="w-6 h-6" />
        </div>
        <p className="text-[#487C9A] text-xl font-semibold tracking-wide">
            Recent Blogs
        </p>
    </div>

    <h1 className="text-3xl font-extrabold text-gray-900 mb-6">
        Journeys of Discovery Uncovering Hidden
    </h1>

    <div className="flex flex-wrap gap-8 justify-between w-full mx-auto">
        {/* Card 1 */}
        <div className="w-full md:w-1/3 lg:w-[350px] bg-white p-6 rounded-lg">
            <div className="">
                <img src={Rectangle02} alt="Landscape" className="w-full h-[200px] object-cover rounded-md" />
                <div className='flex justify-between mt-2'>
                    <span className="bottom-2 px-2 py-1 text-sm text-gray-400 flex gap-2 justify-center items-center">
                        <img src={DateIcon} alt="" className='h-2 w-2'/>October 19, 2022
                    </span>
                    <span className='text-sm text-gray-400'>By admin</span>
                </div>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 mt-4">World of Wander: Discovering Diverse Landscapes</h1>
            <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text used in the printing industry.</p>
            <button className="mt-4 text-[#3790AE] justify-center items-center flex">
                Read More <FaLongArrowAltRight className='ml-2 text-[#3790AE]'/>
            </button>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/3 lg:w-[350px] bg-white p-6 rounded-lg shadow-lg">
            <div className="">
                <img src={Rectangle03} alt="" className="w-full h-[200px] object-cover rounded-md" />
                <div className='flex justify-between mt-2'>
                    <span className="bottom-2 px-2 py-1 text-sm text-gray-400 flex gap-2 justify-center items-center">
                        <img src={DateIcon} alt="" className='h-2 w-2'/>October 19, 2022
                    </span>
                    <span className='text-sm text-gray-400'>By admin</span>
                </div>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 mt-4">World of Wander: Discovering Diverse Landscapes</h1>
            <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text the printing and typese Lorem Ipsum.</p>
            <button className="mt-4 text-[#3790AE] justify-center items-center flex">
                Read More <FaLongArrowAltRight className='ml-2 text-[#3790AE]'/>
            </button>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/3 lg:w-[350px] bg-white p-6 rounded-lg shadow-lg">
            <div className="">
                <img src={Rectangle01} alt="" className="w-full h-[200px] object-cover rounded-md" />
                <div className='flex justify-between mt-2'>
                    <span className="bottom-2 px-2 py-1 text-sm text-gray-400 flex gap-2 justify-center items-center">
                        <img src={DateIcon} alt="" className='h-2 w-2'/>October 19, 2022
                    </span>
                    <span className='text-sm text-gray-400'>By admin</span>
                </div>
            </div>
            <h1 className="text-xl font-semibold text-gray-900 mt-4">World of Wander: Discovering Diverse Landscapes</h1>
            <p className="text-gray-600 mt-2">Lorem Ipsum is simply dummy text used in the printing industry.</p>
            <button className="mt-4 text-[#3790AE] justify-center items-center flex">
                Read More <FaLongArrowAltRight className='ml-2 text-[#3790AE]'/>
            </button>
        </div>
    </div>
</div>

        </div>
    );
};

export default Home;
