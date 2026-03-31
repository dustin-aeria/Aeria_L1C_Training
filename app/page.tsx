import Link from 'next/link';

const modules = [
  {
    id: 'l1c00',
    title: 'L1C00: Introduction',
    duration: '1 hour',
    description: 'Course overview, expectations, and requirements',
    available: true
  },
  {
    id: 'l1c01',
    title: 'L1C01: Air Law',
    duration: '4 hours',
    description: 'CARs Part IX, airspace, regulations, and L1C requirements',
    available: false
  },
  {
    id: 'l1c02',
    title: 'L1C02: Systems',
    duration: '2 hours',
    description: 'RPAS configurations, Standard 922, and safety assurance',
    available: false
  },
  {
    id: 'l1c03',
    title: 'L1C03: Human Factors',
    duration: '2 hours',
    description: 'Safety management systems, risk assessment, and CRM',
    available: false
  },
  {
    id: 'l1c04',
    title: 'L1C04: Meteorology',
    duration: '2 hours',
    description: 'Weather services, atmospheric science, and hazards',
    available: false
  },
  {
    id: 'l1c05',
    title: 'L1C05: Navigation',
    duration: '3 hours',
    description: 'Charts, flight planning, population density, and digital tools',
    available: false
  },
  {
    id: 'l1c06',
    title: 'L1C06: Flight Operations',
    duration: '4 hours',
    description: 'ConOps, RPAS Operator Certificate, SOPs, and operational volumes',
    available: false
  },
  {
    id: 'l1c07',
    title: 'L1C07: Theory of Flight',
    duration: '1 hour',
    description: 'Aerodynamics, quadcopter mechanics, and flight principles',
    available: false
  },
  {
    id: 'l1c08',
    title: 'L1C08: Radiotelephony',
    duration: '1 hour',
    description: 'VHF communications, frequencies, and licensing',
    available: false
  },
  {
    id: 'l1c09',
    title: 'L1C09: Flight Review Prep',
    duration: '2 hours',
    description: 'Practical mission planning and flight review preparation',
    available: false
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <h1 className="text-5xl font-bold mb-4">
            Aeria Solutions L1C Training
          </h1>
          <p className="text-xl mb-6">
            Level 1 Complex (L1C) RPAS Training - Transport Canada Certified
          </p>
          <p className="text-lg text-blue-200">
            20-hour comprehensive ground school for Beyond Visual Line of Sight (BVLOS) operations
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Course Modules</h2>
          <p className="text-gray-600">
            Complete all modules to prepare for your L1C certification exam and flight review.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((module) => (
            <Link
              key={module.id}
              href={module.available ? `/course/${module.id}-${module.title.toLowerCase().split(': ')[1].replace(/\s+/g, '-')}` : '#'}
              className={`p-6 bg-white rounded-lg shadow-md transition-all ${
                module.available
                  ? 'hover:shadow-xl hover:scale-105 cursor-pointer'
                  : 'opacity-60 cursor-not-allowed'
              }`}
            >
              <div className="flex justify-between items-start mb-3">
                <h3 className="text-xl font-semibold text-gray-900">{module.title}</h3>
                {!module.available && (
                  <span className="px-2 py-1 bg-gray-200 text-gray-600 text-xs rounded">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500 mb-3">{module.duration}</p>
              <p className="text-gray-700">{module.description}</p>
            </Link>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Course Information</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">Duration</h3>
              <p className="text-gray-700">20 hours of instructor-led ground school</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Certification</h3>
              <p className="text-gray-700">Transport Canada TP 15530 compliant</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Assessment</h3>
              <p className="text-gray-700">2 written quizzes + practical flight review</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Prerequisites</h3>
              <p className="text-gray-700">Advanced RPAS online exam completion</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
