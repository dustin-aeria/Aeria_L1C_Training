'use client';

import { ReactNode, useState } from 'react';
import Link from 'next/link';

const modules = [
  { id: 'l1c00', title: 'L1C00: Introduction', duration: '1 hour' },
  { id: 'l1c01', title: 'L1C01: Air Law', duration: '4 hours' },
  { id: 'l1c02', title: 'L1C02: Systems', duration: '2 hours' },
  { id: 'l1c03', title: 'L1C03: Human Factors', duration: '2 hours' },
  { id: 'l1c04', title: 'L1C04: Meteorology', duration: '2 hours' },
  { id: 'l1c05', title: 'L1C05: Navigation', duration: '3 hours' },
  { id: 'l1c06', title: 'L1C06: Flight Operations', duration: '4 hours' },
  { id: 'l1c07', title: 'L1C07: Theory of Flight', duration: '1 hour' },
  { id: 'l1c08', title: 'L1C08: Radiotelephony', duration: '1 hour' },
  { id: 'l1c09', title: 'L1C09: Flight Review Prep', duration: '2 hours' },
];

interface CourseLayoutProps {
  children: ReactNode;
  currentModule: string;
}

export default function CourseLayout({ children, currentModule }: CourseLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-blue-900 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold hover:text-blue-200 transition">
              Aeria Solutions L1C Training
            </Link>
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden bg-blue-800 p-2 rounded-md hover:bg-blue-700 transition"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className="flex-1 flex">
        {/* Sidebar */}
        <aside
          className={`${
            sidebarOpen ? 'translate-x-0' : '-translate-x-full'
          } lg:translate-x-0 fixed lg:static inset-y-0 left-0 z-40 w-80 bg-gray-50 border-r border-gray-200 transition-transform duration-300 ease-in-out overflow-y-auto`}
        >
          <div className="p-6">
            <h2 className="text-lg font-semibold mb-4 text-gray-900">Course Modules</h2>
            <nav className="space-y-2">
              {modules.map((module) => (
                <Link
                  key={module.id}
                  href={`/course/${module.id}-${module.title.toLowerCase().split(': ')[1].replace(/\s+/g, '-')}`}
                  className={`block p-3 rounded-lg transition ${
                    currentModule === module.id
                      ? 'bg-blue-100 text-blue-900 font-semibold'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <div className="font-medium">{module.title}</div>
                  <div className="text-sm text-gray-500 mt-1">{module.duration}</div>
                </Link>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto">
          <div className="max-w-4xl mx-auto p-6 lg:p-8">
            {children}
          </div>
        </main>
      </div>

      {/* Overlay for mobile sidebar */}
      {sidebarOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
