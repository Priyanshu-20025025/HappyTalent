import React from 'react';

const NoticeBoardSection = () => {
  return (
    <section id="notices" className="py-16 bg-white shadow-md rounded-lg">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-orange-900 mb-8 text-center">Notice Board</h2> {/* Default Tailwind Orange */}
        <div className="bg-orange-50 border border-orange-200 rounded-md p-8 text-center"> {/* Default Tailwind Orange */}
          <p className="text-gray-600">No Notice Posted Yet.</p>
        </div>
      </div>
    </section>
  );
};

export default NoticeBoardSection;