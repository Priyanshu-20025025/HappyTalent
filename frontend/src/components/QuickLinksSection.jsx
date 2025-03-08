import React from 'react';

const QuickLinksSection = () => {
  return (
    <div className="bg-orange-50 py-12"> {/* Changed background to light orange */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="text-base font-semibold text-orange-600 uppercase tracking-wide"> {/* Changed text color to orange */}
            Quick Access
          </p>
          <h2 className="mt-2 text-xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-3xl">
            Explore Useful Resources
          </h2>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            Need something quickly? Access our most requested resources right here.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"> {/* Changed icon background to orange */}
                {/* You can replace this with an icon */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <a href="#" className="hover:text-orange-700">Generate ID Card</a> {/* Changed hover text color to darker orange */}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Quickly create your official ID card.
                </dd>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"> {/* Changed icon background to orange */}
                {/* You can replace this with an icon */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <a href="#" className="hover:text-orange-700">Appointment Letter</a> {/* Changed hover text color to darker orange */}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Download your appointment letter for official purposes.
                </dd>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"> {/* Changed icon background to orange */}
                {/* You can replace this with an icon */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-2 0H9m2 0h2m-3 10a2 2 0 01-2-2v-1a2 2 0 012-2h10a2 2 0 012 2v1a2 2 0 01-2 2H9z" />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <a href="#" className="hover:text-orange-700">Generate Certificate</a> {/* Changed hover text color to darker orange */}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Get your participation or achievement certificate instantly.
                </dd>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white"> {/* Changed icon background to orange */}
                {/* You can replace this with an icon */}
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v-4m0 0L8 12m-4 0l4-4m5 3a3 3 0 110-6 3 3 0 010 6zm4 7v-4m0 0L18 16m-4 0l4-4m-5 3a3 3 0 110-6 3 3 0 010 6z" />
                </svg>
              </div>
              <div className="mt-5">
                <dt className="text-lg leading-6 font-medium text-gray-900">
                  <a href="#" className="hover:text-orange-700">Donate Us</a> {/* Changed hover text color to darker orange */}
                </dt>
                <dd className="mt-2 text-base text-gray-500">
                  Support our cause and make a difference by donating.
                </dd>
              </div>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
};

export default QuickLinksSection;