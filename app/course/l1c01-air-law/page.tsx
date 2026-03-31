import CourseLayout from '@/components/CourseLayout';
import CourseSection from '@/components/CourseSection';
import InstructorNote from '@/components/InstructorNote';
import TableOfContents from '@/components/TableOfContents';
import Link from 'next/link';

const tocItems = [
  { id: 'objectives', title: 'Objectives & L1C Context', level: 1 },
  { id: 'aviation-regulations', title: 'Aviation Regulations', level: 1 },
  { id: 'cars-structure', title: 'Canadian Aviation Regulations (CARs)', level: 1 },
  { id: 'part-i', title: 'CARs Part I – General Provisions', level: 1 },
  { id: 'part-vi', title: 'CARs Part VI – Flight Rules', level: 1 },
  { id: 'airspace', title: 'Canadian Airspace', level: 2 },
  { id: 'controlled-airspace', title: 'Controlled vs. Uncontrolled Airspace', level: 2 },
  { id: 'part-ix', title: 'CARs Part IX – RPAS Regulations', level: 1 },
  { id: 'division-i', title: 'Division I – General Provisions & Definitions', level: 2 },
  { id: 'division-ii-iii', title: 'Division II & III – Basic Operations', level: 2 },
  { id: 'division-v', title: 'Division V – Advanced Operations', level: 2 },
  { id: 'division-vi', title: 'Division VI – L1C Operations', level: 2 },
  { id: 'standard-922', title: 'Standard 922 – Safety Assurance', level: 3 },
  { id: 'standard-923', title: 'Standard 923 – Vision-Based DAA', level: 3 },
  { id: 'division-x', title: 'Division X – Training & Flight Review', level: 2 },
  { id: 'division-xi', title: 'Division XI – RPAS Declarations', level: 2 },
  { id: 'division-xii', title: 'Division XII – RPAS Operator Certificate', level: 2 },
  { id: 'sfoc', title: 'Subpart III – Special Flight Operations', level: 2 },
];

export default function L1C01AirLaw() {
  return (
    <CourseLayout currentModule="l1c01">
      <div>
        {/* Module Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">L1C01: Air Law</h1>
          <p className="text-lg text-gray-600">Duration: 4 hours | 86 slides</p>
        </div>

        <InstructorNote type="info">
          <p className="font-semibold mb-2">Instructor Notes:</p>
          <p>Studying regulations may be considered the &apos;driest&apos; and is the longest section of this course. This is why it is being covered first while the students are fresh.</p>
        </InstructorNote>

        <InstructorNote type="keypoint">
          <p className="font-semibold mb-2">Key Points:</p>
          <p>Operators and pilots are responsible for being aware of and following current regulations. E.g., What regulations are we operating under? What are the rules? What are the limits? New regulations have been implemented and regulations change over time.</p>
        </InstructorNote>

        {/* Table of Contents */}
        <TableOfContents items={tocItems} />

        {/* Objectives & L1C Context */}
        <CourseSection title="Objectives & L1C Context" id="objectives">
          <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-6">
            <h3 className="font-semibold text-lg mb-3">After this section, you will be able to...</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Identify which parts of the Canadian Aviation Regulations apply to RPAS operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Differentiate between Advanced RPAS operations and Level 1 Complex (L1C) RPAS operations</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span>Explain the difference between a regulation and a standard</span>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Advanced vs. L1C vs. SFOC</h3>
            <InstructorNote type="keypoint">
              <p>Canada has three operational environments above the &apos;basic&apos; level: Advanced, Level 1 Complex, and the SFOC environment. In this course, we will be covering the information required for the L1C certification.</p>
            </InstructorNote>
            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Discussion:</p>
              <p>What types of drone operations do each of the participants engage in? Which of three operations environments would apply?</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">L1C Requirements</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold mb-4">Candidates must...</p>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">1.</span>
                  <span>Be minimum of <strong>18 years of age</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">2.</span>
                  <span>Complete the <strong>advanced exam, L1C exam, and application</strong> online through Transport Canada&apos;s Drone Management Portal (DMP)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">3.</span>
                  <span>Complete a <strong>20-hour ground school</strong> and <strong>in-person flight review</strong> (Note: This course meets this requirement)</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">4.</span>
                  <span>Ground school instructors must be affiliated with an organization that has <strong>declared to Transport Canada</strong> that they have a L1C training program that meets the TP 15530 standard</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2 mt-1">5.</span>
                  <span>Flight reviewers must hold a L1C RPAS certificate with <strong>flight reviewer privileges</strong> and be associated with a TP 15530 declared training organization in the DMP</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
                <p className="text-sm"><strong>Note:</strong> The completion order of these requirements is fixed, because Transport Canada wants applicants to build a foundation of knowledge.</p>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Aviation Regulations */}
        <CourseSection title="Aviation Regulations" id="aviation-regulations">
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <h3 className="text-xl font-semibold mb-4">The Aeronautics Act:</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Is the legislation that governs aviation in Canada</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">•</span>
                <span>Enables the Canadian Aviation Regulations (CARs)</span>
              </li>
            </ul>
          </div>

          <InstructorNote type="keypoint">
            <p>The Aeronautics Act from 1985 is what enables the Canadian Aviation Regulations (CARs). The Aeronautics Act still exists, but CARs started in the mid 1990s. CARs was a big change to the existing regulations.</p>
          </InstructorNote>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Main Three Agencies</h3>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-2">Transport Canada</h4>
                <ul className="text-sm space-y-1">
                  <li>• Builds and enforces regulations</li>
                  <li>• Before the 1990s, provided air traffic control and airport management</li>
                  <li>• Now oversees public safety in a regulatory capacity</li>
                </ul>
              </div>
              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h4 className="font-semibold mb-2">NAV CANADA</h4>
                <ul className="text-sm space-y-1">
                  <li>• Air traffic control</li>
                  <li>• Does not build regulations</li>
                  <li>• Relevant when flying in airspace near airports</li>
                </ul>
              </div>
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <h4 className="font-semibold mb-2">Transportation Safety Board</h4>
                <ul className="text-sm space-y-1">
                  <li>• Independent agency</li>
                  <li>• Reviews incidents and accidents</li>
                  <li>• Makes safety recommendations</li>
                  <li>• Only investigates drones over 25kg</li>
                </ul>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* CARS Structure */}
        <CourseSection title="Canadian Aviation Regulations (CARs)" id="cars-structure">
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <div className="grid md:grid-cols-2 gap-3">
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <strong>Part I</strong> General Provisions
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <strong>Part II</strong> Aircraft Registration
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <strong>Part III</strong> Airports
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <strong>Part IV</strong> Licensing and Training
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <strong>Part V</strong> Airworthiness
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <strong>Part VI</strong> Flight Rules
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <strong>Part VII</strong> Commercial Air Services
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">
                <strong>Part VIII</strong> Air Navigation Services
              </div>
              <div className="p-3 bg-blue-100 rounded border border-blue-300 md:col-span-2">
                <strong>Part IX</strong> RPAS (Most Important for Drones)
              </div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200 md:col-span-2">
                <strong>Part X</strong> Greenhouse Gas Emissions
              </div>
            </div>
          </div>

          <InstructorNote type="keypoint">
            <p className="mb-2"><strong>Important Notes:</strong></p>
            <ul className="list-disc ml-5 space-y-1">
              <li>CARs are not only for drones</li>
              <li>Drone operators mostly work with CARs Part 9 but should be familiar with other parts, especially 1 and 6</li>
              <li>Part 6 is relevant because we share space with traditional pilots and want to understand what larger aircraft are going to be doing</li>
            </ul>
          </InstructorNote>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Regulation vs. Standard</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                <h4 className="font-semibold mb-2">Regulation</h4>
                <p className="text-sm">Can be enforced. States the rule.</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-2">Standard</h4>
                <p className="text-sm">Method to enable compliance with regulation. Explains how to meet that rule.</p>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Numbering Structure</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold mb-2">First digit identifies the Part.</p>
                  <p className="pl-4 text-sm">Example: <code className="bg-gray-100 px-2 py-1 rounded">901.56</code> = Part IX</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Second digit identifies a regulation versus a standard.</p>
                  <p className="pl-4 text-sm">Example: <code className="bg-gray-100 px-2 py-1 rounded">901.56</code> &apos;0&apos; = regulation</p>
                  <p className="pl-4 text-sm">Example: <code className="bg-gray-100 px-2 py-1 rounded">921.04</code> &apos;2&apos; = standard</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Third digit identifies the Subpart.</p>
                  <p className="pl-4 text-sm">Example: <code className="bg-gray-100 px-2 py-1 rounded">901.56</code> = Subpart 1 of Part IX</p>
                </div>
              </div>
            </div>
            <InstructorNote type="keypoint">
              <p>SFOCs are managed under Subpart 3 of CARs.</p>
            </InstructorNote>
          </div>
        </CourseSection>

        {/* MORE SECTIONS TO BE ADDED */}
        <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 rounded-r-lg my-8">
          <h3 className="font-semibold text-lg mb-2">🚧 Content In Progress</h3>
          <p className="text-gray-700 mb-4">
            This module is being built in phases. The remaining sections will be added soon:
          </p>
          <ul className="list-disc ml-5 space-y-1 text-sm text-gray-600">
            <li>CARs Part I – General Provisions (complete definitions)</li>
            <li>CARs Part VI – Flight Rules & Airspace</li>
            <li>CARs Part IX – RPAS Regulations (all divisions)</li>
            <li>Standard 922 – Safety Assurance</li>
            <li>Standard 923 – Vision-Based DAA</li>
            <li>And 56 more slides...</li>
          </ul>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
          <Link
            href="/course/l1c00-introduction"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            ← Previous: L1C00 Introduction
          </Link>
          <Link
            href="/course/l1c02-systems"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition opacity-50 cursor-not-allowed"
          >
            Next: L1C02 Systems → (Coming Soon)
          </Link>
        </div>
      </div>
    </CourseLayout>
  );
}
