import React from 'react';
import { FaBookOpen, FaMedkit, FaGlobeAmericas, FaGraduationCap, FaHandshake } from 'react-icons/fa';

const DonationCard = ({ icon, title, onClick }) => {
    return (
        <div className="bg-gradient-to-br from-orange-600 to-yellow-500 rounded-xl shadow-lg p-6 flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-4 mb-4">
                {icon}
            </div>
            <h3 className="text-white text-lg font-semibold mb-2">{title}</h3>
            <button
                onClick={onClick}
                className="bg-yellow-300 hover:bg-yellow-400 text-orange-800 font-bold py-2 px-4 rounded-full text-sm"
            >
                Donate Now
            </button>
        </div>
    );
};

const DonateSection = () => {
    const donationCategories = [
        {
            icon: <FaBookOpen size={32} className="text-orange-600" />,
            title: "Help For Education",
            onClick: () => alert("Donate for Education")
        },
        {
            icon: <FaMedkit size={32} className="text-orange-600" />,
            title: "Help For Medical Emergency",
            onClick: () => alert("Donate for Medical Emergency")
        },
        {
            icon: <FaGlobeAmericas size={32} className="text-orange-600" />,
            title: "Help For Environment Help",
            onClick: () => alert("Donate for Environment Help")
        },
        {
            icon: <FaGraduationCap size={32} className="text-orange-600" />,
            title: "Help For Legal Help",
            onClick: () => alert("Donate for Legal Help")
        },
        {
            icon: <FaHandshake size={32} className="text-orange-600" />,
            title: "Help For Social Reforms",
            onClick: () => alert("Donate for Social Reforms")
        },
    ];

    return (
        <div className="bg-gradient-to-br from-orange-100 to-yellow-100 py-20">
            <div className="container mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-orange-900 mb-4">DONATE FOR SMILE</h2>
                    <div className="w-24 h-1 bg-orange-900 mx-auto rounded-full"></div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {donationCategories.map((category, index) => (
                        <DonationCard
                            key={index}
                            icon={category.icon}
                            title={category.title}
                            onClick={category.onClick}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default DonateSection;