import CourseLayout from '@/components/CourseLayout';
import CourseSection from '@/components/CourseSection';
import InstructorNote from '@/components/InstructorNote';
import Image from 'next/image';

export default function L1C00Introduction() {
  return (
    <CourseLayout currentModule="l1c00">
      <div>
        {/* Module Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">L1C00: Introduction</h1>
          <p className="text-lg text-gray-600">Duration: 1 hour</p>
        </div>

        {/* Course Administration */}
        <CourseSection title="Course Administration">
          <InstructorNote type="info">
            <p className="font-semibold mb-2">Instructor Notes:</p>
            <p>Use the first hour for course administration. Students will require:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>Access to the internet</li>
              <li>Access to any content the instructor plans to send (most is referenced in the L1C Training Student Handout)</li>
              <li>A laptop with certain software installed (most is referenced in the L1C Training Student Handout)</li>
            </ul>
          </InstructorNote>

          <InstructorNote type="keypoint">
            <p className="font-semibold mb-2">Key Points:</p>
            <p>How to access/register for the student portal, introductions, and the curriculum and schedule.</p>
          </InstructorNote>
        </CourseSection>

        {/* Student Portal */}
        <CourseSection title="Student Portal">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
            <p className="mb-4">The student portal [LINK]:</p>
            <ul className="list-disc ml-5 space-y-2">
              <li>Contains all course resources and links</li>
              <li>Serves as confirmation that you have taken the training</li>
              <li>Ensures course certificate is issued after the completion of exams and assignment</li>
            </ul>
          </div>

          <InstructorNote type="info">
            <p className="font-semibold mb-2">Instructor Notes:</p>
            <p>Edit this section to include instructions or links to any shared drives/student portals/LMS that your organization uses.</p>
          </InstructorNote>

          <InstructorNote type="keypoint">
            <p className="font-semibold mb-2">Key Points:</p>
            <p>Introduction to the student portal and other resources. Participants will receive a certificate after the course exams and assignments are completed.</p>
          </InstructorNote>

          <InstructorNote type="activity">
            <p className="font-semibold mb-2">Activity:</p>
            <p>Demonstration: How to access and navigate the student portal.</p>
          </InstructorNote>
        </CourseSection>

        {/* Instructor Introduction */}
        <CourseSection title="Instructor">
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-6 rounded-lg border border-blue-200 mb-4">
            <p className="text-gray-700 italic">[Insert background, credentials, etc. here.]</p>
          </div>

          <InstructorNote type="info">
            <p className="font-semibold mb-2">Instructor Notes:</p>
            <p>Introduce yourself.</p>
          </InstructorNote>

          <InstructorNote type="activity">
            <p className="font-semibold mb-2">Activity:</p>
            <p>Group Activity: If the class is small enough, allow the students to introduce themselves and give a brief bio of their drone experience.</p>
          </InstructorNote>
        </CourseSection>

        {/* What to Expect */}
        <CourseSection title="What to Expect">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Level 1 Complex (L1C) Ground Training</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>L1C privileges</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Guidance on building your BVLOS program</strong></span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>20-hour instructor course</strong> with TP 15530 content</span>
              </li>
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">✓</span>
                <span><strong>Two quizzes</strong></span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-yellow-50 border-l-4 border-yellow-400 rounded">
              <p className="font-semibold text-gray-800">Note: This is not a review of the Advanced RPAS course.</p>
            </div>
          </div>

          <InstructorNote type="info">
            <p className="font-semibold mb-2">Instructor Notes:</p>
            <p>Knowledge Requirements for Pilots of Remotely Piloted Aircraft Systems – Level 1 Complex Operations - TP 15530 provides all course requirements and can be accessed online at: <a href="https://tc.canada.ca/en/aviation/publications/knowledge-requirements-pilots-remotely-piloted-aircraft-systems-level-1-complex-operations-tp-15530" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">Transport Canada TP 15530</a></p>
            <p className="mt-2">All participants must have completed the advanced RPAS online exam prior to commencing this training, but having the advanced RPAS pilot certificate is not a requirement.</p>
            <p className="mt-2">Let participants know how and when the quizzes will be administered.</p>
          </InstructorNote>

          <InstructorNote type="keypoint">
            <p className="font-semibold mb-2">Key Points:</p>
            <p>This information is in your L1C Training Student Handout.</p>
          </InstructorNote>
        </CourseSection>

        {/* Curriculum & Schedule */}
        <CourseSection title="Curriculum & Schedule">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
            <p className="mb-4">The course curriculum covers:</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
              <div className="p-3 bg-gray-50 rounded border border-gray-200">Air Law</div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">Systems</div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">Human Factors</div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">Meteorology</div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">Navigation</div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">Flight Operations</div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">Theory of Flight</div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200">Radiotelephony</div>
              <div className="p-3 bg-gray-50 rounded border border-gray-200 md:col-span-2">Flight Review Preparation</div>
            </div>
            <p className="text-sm text-gray-600 mt-4">
              This curriculum meets the <strong>"Knowledge Requirements for Pilots of Remotely Piloted Aircraft Systems – Level 1 Complex Operations - TP 15530"</strong> (Transport Canada, 2025)
            </p>
            <p className="mt-3">The course schedule can be found in your L1C Training Student Handout</p>
          </div>

          <InstructorNote type="keypoint">
            <p className="font-semibold mb-2">Key Points:</p>
            <p>See your L1C Training Student Handout for the course schedule.</p>
          </InstructorNote>
        </CourseSection>

        {/* Mandatory Links & Software */}
        <CourseSection title="Mandatory Links & Software">
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-4">
            <h3 className="text-xl font-semibold mb-3">Links</h3>
            <p className="mb-4">See the table of links in your L1C Training Student Handout. These will need to be accessed frequently throughout the course.</p>

            <h3 className="text-xl font-semibold mb-3 mt-6">Software</h3>
            <p className="mb-3">During the course, you will be required to access this software:</p>
            <ul className="space-y-2">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <strong>FltPlan.com</strong> (web)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <strong>FltPlan Go</strong> (iOS/Android)
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <strong>NAV Drone</strong>
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-blue-600 rounded-full mr-3"></span>
                <strong>Google Earth Pro</strong>
              </li>
            </ul>
            <p className="mt-4 text-sm text-gray-600">See your L1C Training Student Handout for more information</p>
          </div>

          <InstructorNote type="info">
            <p className="font-semibold mb-2">Instructor Notes:</p>
            <p>This course makes use of freely available software (Google Earth Pro, FltPlan GO). If the participants' organization uses different software or services, then they may be substituted here. For example:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>If participants' organization uses ForeFlight paid service, references to FltPlanGO may be substituted with ForeFlight.</li>
              <li>If participants' organization uses a GCS with accurate terrain databases, references to Google Earth Pro may be replaced with the GCS.</li>
            </ul>
            <p className="mt-2"><strong>Note:</strong> Given the widespread use of Google Earth Pro, it is recommended to train the participants on its use.</p>
            <p className="mt-2">Participants should already have downloaded the required software. If not, ensure they do it now.</p>
          </InstructorNote>

          <InstructorNote type="keypoint">
            <p className="font-semibold mb-2">Key Points:</p>
            <p>See L1C Training Student Handout for the software and links required for this course.</p>
          </InstructorNote>

          <InstructorNote type="activity">
            <p className="font-semibold mb-2">Activity:</p>
            <p>Demonstration: Show participants how to access and ensure they can use:</p>
            <ul className="list-disc ml-5 mt-2">
              <li>The internet</li>
              <li>NAV Drone and the Drone Management Portal</li>
              <li>FltPlan GO or a suitable alternative on a portable device</li>
              <li>Google Earth Pro on a Windows or MacOS laptop (not on their cellular device)</li>
            </ul>
          </InstructorNote>
        </CourseSection>

        {/* After This Course */}
        <CourseSection title="After This Course">
          <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg shadow-sm border border-green-200 mb-4">
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">1</span>
                <div>
                  <strong className="text-lg">Write online L1C course on Drone Management Portal</strong>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">2</span>
                <div>
                  <strong className="text-lg">Complete in-person L1C flight review</strong>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold mr-3">3</span>
                <div>
                  <strong className="text-lg">Apply for your L1C pilot certificate</strong>
                </div>
              </li>
            </ol>

            <div className="mt-6 relative h-64 rounded-lg overflow-hidden">
              <Image
                src="/images/l1c00/slide08_img01.jpg"
                alt="L1C Certification Process"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <InstructorNote type="info">
            <p className="font-semibold mb-2">Instructor Notes:</p>
            <p>Explain what the participant should expect after this course. Discuss the schedules for the in-person L1C flight review.</p>
          </InstructorNote>

          <InstructorNote type="keypoint">
            <p className="font-semibold mb-2">Key Points:</p>
            <p>The L1C online exam (from the DMP) must be completed prior to admittance to the in-person flight review.</p>
          </InstructorNote>
        </CourseSection>

        {/* Navigation Buttons */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t border-gray-200">
          <a
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
          >
            ← Back to Home
          </a>
          <a
            href="/course/l1c01-air-law"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
          >
            Next: L1C01 Air Law →
          </a>
        </div>
      </div>
    </CourseLayout>
  );
}
