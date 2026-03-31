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

        {/* CARs Part I - General Provisions */}
        <CourseSection title="CARs Part I – General Provisions" id="part-i">
          <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
            <p className="mb-4">Provides a comprehensive list of definitions used in the Canadian Aviation Regulations (CAR 101.01)</p>
          </div>

          <InstructorNote type="keypoint">
            <p>It is important to be familiar with the definitions to ensure everyone is speaking the same language. For example, in CARs Part 9, an RPAS operator refers to the individual or organization holding the RPAS Operator Certificate, not the pilot.</p>
          </InstructorNote>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Key Definitions</h3>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-2">Remotely Piloted Aircraft (RPA)</h4>
                <p className="text-sm">A navigable aircraft, other than a balloon, rocket, or kite, that is operated by a pilot who is not on board</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-2">Remotely Piloted Aircraft System (RPAS)</h4>
                <p className="text-sm">A set of configurable elements consisting of an RPA, its control station, the command and control links, and any other system elements required during flight operation</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-2">Command and Control Link</h4>
                <p className="text-sm">The data link between an RPA and a control station that is used in the management of a flight</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-2">Control Station</h4>
                <p className="text-sm">The collection of facilities and equipment from which an RPA is controlled and monitored</p>
              </div>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2"><strong>RPAS vs RPA:</strong></p>
              <ul className="list-disc ml-5 space-y-1">
                <li><strong>RPAS:</strong> Refers to the whole system, including the command station, command and control link, and the aircraft</li>
                <li><strong>RPA:</strong> The aircraft itself</li>
                <li><strong>Control Station:</strong> Collection of facilities and equipment. It is up to the manufacturer to decide the level of the control station (e.g., RC controller, laptop, big moving van, etc.)</li>
                <li>CARs Part 9 does not differentiate model aircraft and drones. They are all covered.</li>
              </ul>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 103.01 Document Inspection</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-4 font-mono text-sm">&quot;...shall produce the Canadian aviation document, technical record, or other document for inspection in accordance with the terms of a demand made by a peace officer, an immigration officer, or the Minister&quot;</p>
            </div>

            <InstructorNote type="keypoint">
              <p>Transport Canada has been asking and training law enforcement agencies to assist in having a basic understanding of drone regulations, so they can intervene with nefarious drone operations and understand what is legitimate and what is noncompliant. Drone operators must provide records to law enforcement, immigration, or the Minister upon request.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 103.04 Record Keeping</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Digital:</strong> Protected against loss/destruction/tampering</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>May be printed on paper and provided to the Minister with reasonable notice</span>
                </li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p>Records must be kept and stored digitally or physically. If storing digitally, you must have a backup.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 106.01 Accountable Executive</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-3">Appointment and Acceptance</h4>
              <p className="mb-4 font-mono text-sm">&quot;...to be responsible for operations or activities authorized under the certificate and accountable on their behalf for meeting the requirements of these Regulations...&quot;</p>
              <p className="font-mono text-sm">&quot;...no person shall be appointed... unless they have control of the financial and human resources...&quot;</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">According to Transport Canada, an accountable executive is someone who has control of the financial and human resources in the company. This role is typically occupied by the president but does not have to be.</p>
              <p className="mb-2">If a single person operates with an RPAS Operator Certificate, they occupy all roles (person responsible for maintenance, accountable executive, pilot, etc.)</p>
              <p>A requirement of an RPAS Operator Certificate is to define an organizational structure, including who the accountable executive is.</p>
            </InstructorNote>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Discussion:</p>
              <p>What is the participant&apos;s organization structure? Who is the accountable executive? OR What would be the structure if the organization had an operating certificate? Who would be the accountable executive?</p>
            </InstructorNote>
          </div>
        </CourseSection>

        {/* CARs Part VI - Flight Rules */}
        <CourseSection title="CARs Part VI – Flight Rules" id="part-vi">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">VFR vs IFR - Traditional Aircraft</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-6 rounded-lg border border-green-200">
                <h4 className="font-semibold mb-3">Visual Flight Rules (VFR)</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Visual reference to the surface of the earth</li>
                  <li>• Visual Meteorological Conditions (VMC)</li>
                  <li>• &apos;See and be seen&apos;</li>
                  <li>• Typical for small aircraft sharing the same airspace as RPAS</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h4 className="font-semibold mb-3">Instrument Flight Rules (IFR)</h4>
                <ul className="space-y-2 text-sm">
                  <li>• No longer require reference to the surface on the Earth</li>
                  <li>• Airlines and aircraft that fly at high altitudes</li>
                  <li>• Near airports/aerodromes</li>
                </ul>
              </div>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">Since airspace is shared, drone operators and pilots must have a basic understanding of what traditional aircraft are doing in the airspace.</p>
              <p className="mb-2"><strong>VFR:</strong> Flying in visual reference to the ground (out of cloud, can see the ground, heads outside of cockpit); NAV CANADA is not looking out for drones, so pilots must look out and be reactive (see and be seen).</p>
              <p><strong>IFR:</strong> No longer flying in visual reference to the ground; set of rules needed when flying in and above cloud (flying on instruments); NAV CANADA gets everyone out of the drone&apos;s way.</p>
            </InstructorNote>
          </div>

          <div className="mb-6" id="airspace">
            <h3 className="text-xl font-semibold mb-4">Canadian Domestic Airspace (CDA)</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-4 font-semibold">Canadian Domestic Airspace:</p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Southern Domestic Airspace (SDA)</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span><strong>Northern Domestic Airspace (NDA)</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Canadian Regulations (CARs) apply to this airspace</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>Different rules between SDA and NDA</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">•</span>
                  <span>NDA: ARC-A (atypical) airspace for RPAS operators</span>
                </li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">Most Canadian operations will be in the SDA. There is a different set of rules for the NDA, because it is very low risk and low traffic.</p>
              <p>In NDA, everything below 400 ft AGL is atypical airspace (ARC A), which means the DAA performance criteria has significantly reduced. For the rest of this course, &quot;airspace&quot; is going to refer to SDA.</p>
            </InstructorNote>

            <InstructorNote type="info">
              <p>NAV CANADA&apos;s Designated Airspace Handbook shows the SDA and NDA on a map. Highlight how north the NDA is.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Altimeter Setting vs. Standard Pressure Regions</h3>
            <InstructorNote type="info">
              <p className="mb-2"><strong>Note:</strong> This will be discussed more in the Systems slide deck.</p>
            </InstructorNote>

            <InstructorNote type="keypoint">
              <p className="mb-2">Pilots have two general regions: Altimeter Setting Region and Standard Pressure Region.</p>
              <p className="mb-2"><strong>Altimeter Setting Region (SDA):</strong> When operating in SDA, drones are in an Altimeter Setting Region. When operating near an airport, there is an altimeter setting that you must put into the altimeter to make your altitude real. Those altitudes are corrected to an altitude above sea level.</p>
              <p className="mb-2"><strong>Standard Pressure Region (NDA):</strong> When operating in NDA, drones are in a Standard Pressure Region. The weather stations are so far apart, so pilots can&apos;t get all the corrections needed to have a valid altimeter reading. When outside of takeoff and landing, set a standard pressure of 29.92.</p>
              <p>The altitudes are part of traffic management in traditional aviation and work towards traffic separation. It&apos;s important to work on common altitudes for separation.</p>
            </InstructorNote>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Practice Question:</p>
              <p className="mb-2">What are RPAS altitudes derived from?</p>
              <p className="text-sm"><strong>Answer:</strong> Your drone is giving you true altitude. Your aircraft altitude is not a true altitude unless at are at a standard ISA temperature. Anything that deviates outside of ISA and traditional aircraft are no longer at a true altitude.</p>
              <p className="font-semibold mb-2 mt-4">Discussion:</p>
              <p>What are the challenges combining RPAS (GPS) altitudes with traditional aircraft that use altimeters?</p>
            </InstructorNote>
          </div>

          <div className="mb-6" id="controlled-airspace">
            <h3 className="text-xl font-semibold mb-4">Airspace Classes</h3>
            <InstructorNote type="keypoint">
              <p className="mb-2">For the RPAS Operator Certificate/L1C operations, drones will be operating in the Class F and Class G airspace for the most part.</p>
              <p>Drone operators do not need to understand the nuances of Class A, B, C, D, and E. It is more important to understand if the airspace is controlled or uncontrolled.</p>
            </InstructorNote>

            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
              <h4 className="font-semibold mb-3">Controlled vs. Uncontrolled Airspace</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Controlled Airspace:</p>
                  <p className="text-sm">Class A, B, C, D, E</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Uncontrolled Airspace:</p>
                  <p className="text-sm">Class F (mostly), Class G</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">AC 903-001 7.0 Air Risk Determination</h3>
            <InstructorNote type="info">
              <p>This was not reviewed in Advanced RPAS training.</p>
            </InstructorNote>

            <InstructorNote type="keypoint">
              <p className="mb-2">ARC stands for Air Risk Class. In BVLOS under the L1C, you will be operating under ARC-A, -B, and occasionally -C.</p>
              <p className="mb-2">ARC-D airspace is going to be handled under the SFOC process. NAV CANADA will get involved, because almost all ARC-D airspace is regulated by NAV CANADA.</p>
              <p>ARC-A performance requirements for DAA are almost nonexistent. There is almost no requirement to have an onboard DAA to meet the requirements for ARC-A.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Class F Airspace Designations</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold mb-4">Example: CYA113(A)</p>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">CY = Canada</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Third Letter = Type:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>A</strong> = Alert</li>
                    <li>• <strong>D</strong> = Danger</li>
                    <li>• <strong>R</strong> = Restricted</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Numbers = Area Identification</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Modifier in Parentheses:</p>
                  <ul className="text-sm space-y-1 ml-4">
                    <li>• <strong>(A)</strong> = Acrobatic</li>
                    <li>• <strong>(F)</strong> = Aircraft Test Area</li>
                    <li>• <strong>(H)</strong> = Hang Gliding</li>
                    <li>• <strong>(M)</strong> = Military</li>
                    <li>• <strong>(P)</strong> = Parachuting</li>
                    <li>• <strong>(S)</strong> = Soaring</li>
                    <li>• <strong>(T)</strong> = Training</li>
                  </ul>
                </div>
              </div>
            </div>

            <InstructorNote type="info">
              <p className="mb-2">This may not have been covered in the Advanced RPAS exam, but some of these questions may be on the L1C exam.</p>
              <p>Remind the students that questions related to airspace designation may in the L1C online exam.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Where to Find Airspace Dimensions?</h3>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-200 mb-4">
              <h4 className="font-semibold mb-3">Designated Airspace Handbook</h4>
              <ul className="space-y-2 text-sm">
                <li>• Includes user/controlling agency for Class F airspace (CYA, CYR)</li>
                <li>• Effective dates</li>
                <li>• &apos;Ultimate authority&apos;</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p>Find information on this in the Designated Airspace Handbook, which is free to download. This handbook is the ultimate authority and law for the regulations when building programs and looking at a new site assessment, because it is regularly updated.</p>
            </InstructorNote>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Practice Question:</p>
              <p className="mb-2">Can you find the Designated Airspace Handbook?</p>
              <p className="text-sm"><strong>Answer:</strong> All participants can locate the handbook online.</p>
            </InstructorNote>

            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
              <h4 className="font-semibold mb-3">Digital Tools</h4>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold">NAV Drone Map Viewer</p>
                  <p className="text-sm">Has a lot of airspace information and has a geographic representation of NOTAM closed areas</p>
                </div>
                <div>
                  <p className="font-semibold">NRCAN Drone Site Selection Tool - 2 (DSST-2)</p>
                  <p className="text-sm">Can be used for BVLOS operations. Has already accounted for population density. If the area is shaded, don&apos;t fly. If the area is not shaded, fly (L1C operations).</p>
                </div>
                <div>
                  <p className="font-semibold">VFR Navigation Charts (VNC)</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Freemium Providers:</p>
                  <p className="text-sm">• SkyVector</p>
                  <p className="text-sm">• FltPlan Go (good for finding CFS airport information and VNC maps)</p>
                </div>
                <div>
                  <p className="font-semibold mb-2">Commercial Providers:</p>
                  <p className="text-sm">• Foreflight (standard in traditional aviation)</p>
                  <p className="text-sm">• FlySafe</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Where to Find Airport Information?</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-3">
                <li>• Canada Flight Supplement</li>
                <li>• Canada Water Aerodrome Supplement</li>
                <li>• NRCAN Drone Site Selection Tool – 2</li>
                <li>• VFR Navigation Charts (VNC)</li>
                <li>• Commercial providers (Foreflight, Flysafe)</li>
                <li>• Freemium providers (FltPlan Go, Sky Vector)</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2"><strong>Canada Flight Supplement (CFS):</strong></p>
              <ul className="list-disc ml-5 space-y-1">
                <li>Regularly updated. Do not buy paper copies, because they will become outdated quickly.</li>
                <li>Most of the data contained in the CFS is also included with apps such as ForeFlight and FltPlanGo.</li>
                <li>L1C operations cannot occur within 5 nautical miles of an aerodrome listed in this document.</li>
                <li>DSST-2 tool has built the 5 nautical mile buffers around these aerodromes.</li>
                <li>Aerodromes in this document are considered &apos;registered&apos;. However, commercial airports may also be considered certified (cert) as meeting CARs Part III requirements for an airport.</li>
              </ul>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 601.96 Operations at or in the Vicinity of an Aerodrome</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-3">
                <li>• Left-hand pattern 1,000 ft AGL, except if published in the CFS or authorized by ATC</li>
                <li>• Maintain listening watch on appropriate frequency</li>
                <li>• Transient aircraft will remain 2,000 ft AGL above unless for public safety, aerial inspection, etc. (full list at 602.96(5))</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">You must fly a left-hand traffic pattern of 1,000 ft AGL, unless published otherwise in the Canada Flight Supplement or authorized by air traffic control.</p>
              <p>Transient aircraft over air drones must fly 2,000 ft AGL, so they don&apos;t conflict with traffic patterns. Altitudes are one criteria used in traffic separation.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 601.97 Uncontrolled Aerodromes within an MF Area</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold mb-3">Reporting on departure (602.100):</p>
              <ul className="space-y-2 mb-4">
                <li>• <strong>Before:</strong> Broadcast intentions and look and listen</li>
                <li>• <strong>After:</strong> Broadcast leaving</li>
              </ul>
              <p className="font-semibold mb-3">Reporting on arrival (602.101):</p>
              <ul className="space-y-2">
                <li>• Broadcast 5 minutes prior to arrival</li>
                <li>• Broadcast traffic pattern location</li>
                <li>• Broadcast clear on the ground</li>
              </ul>
            </div>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Practice Question:</p>
              <p className="mb-2">How low can a traditional aircraft fly legally?</p>
              <p className="text-sm"><strong>Answer:</strong> As low as needed if there is a requirement to be that low. See CAR 602.15 for low altitude flight exceptions.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 601.14 Minimum Altitudes & Distances</h3>
            <InstructorNote type="keypoint">
              <p>Drones must fly higher when above a built-up area/open-air assembly.</p>
            </InstructorNote>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Practice Question:</p>
              <p className="mb-2">What is the definition of a built-up area?</p>
              <p className="text-sm"><strong>Answer:</strong> There is no official definition of what a built-up area is. This is a gap in the regulations.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 602.15 Permissible Low Altitude Flight</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-3">Altitudes can be flown lower than those listed in 602.14 for:</p>
              <div className="grid md:grid-cols-2 gap-2">
                <ul className="space-y-1 text-sm">
                  <li>• Police</li>
                  <li>• Saving human life</li>
                  <li>• Firefighting/ambulance</li>
                  <li>• Fisheries Act</li>
                  <li>• Administration of national or provincial parks</li>
                </ul>
                <ul className="space-y-1 text-sm">
                  <li>• Flight inspection</li>
                  <li>• Aerial application</li>
                  <li>• Aerial photography</li>
                  <li>• Helicopter external loads</li>
                  <li>• Flight training</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 601.15 Forest Fire Aircraft Operating Restrictions</h3>
            <div className="bg-red-50 p-6 rounded-lg border border-red-300">
              <p className="font-semibold mb-3">No person shall operate an aircraft:</p>
              <ul className="space-y-2">
                <li>(a) over a forest fire area, or over any area that is located within <strong>5 nautical miles</strong> of a forest fire area, at an altitude of less than <strong>3,000 ft AGL</strong>; or</li>
                <li>(b) in any airspace that is described in a NOTAM issued pursuant to section 601.16.</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">Wildfire operations are frequently suspended, because a drone was flying too close. Even a traditional aircraft can&apos;t fly near a wildfire (within 5 nautical miles and at an altitude of less than 3,000 ft AGL).</p>
              <p>Drone operators are required to avoid wildfire areas even if there is no closed NOTAM space (designated and undesignated). Traditional air pilots are required to report wildfires.</p>
            </InstructorNote>

            <InstructorNote type="info">
              <p>Example incidents when a drone has caused a suspicion to flight operations: [Links to news articles provided in original]</p>
            </InstructorNote>
          </div>
        </CourseSection>

        {/* CARs Part IX - RPAS */}
        <CourseSection title="CARs Part IX – RPAS Regulations" id="part-ix">
          <InstructorNote type="keypoint">
            <p>CARs Part IX includes the most important regulations for drone operators. There have been a lot of changes in this new body of rules.</p>
          </InstructorNote>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Timeline of Part IX to CARs</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  <span>2019</span>
                </div>
                <div>
                  <p className="font-semibold">CARs Part IX</p>
                  <p className="text-sm">New part of the Canadian Aviation Regulations to address small remotely piloted aircraft systems. SFOC process manages operations not addressed by Part IX.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  <span>2020</span>
                </div>
                <div>
                  <p className="font-semibold">NPA Lower-Risk BVLOS</p>
                  <p className="text-sm">Notice of proposed amendments to CARs Part IX to address low-risk BVLOS.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-blue-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  <span>2023</span>
                </div>
                <div>
                  <p className="font-semibold">Canada Gazette, Part I Lower-Risk BVLOS</p>
                  <p className="text-sm">Proposed changes to CARs Part IX to consolidate low-risk BVLOS operations.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-green-600 text-white rounded-full w-20 h-20 flex items-center justify-center font-bold mr-4 flex-shrink-0">
                  <span>2025</span>
                </div>
                <div>
                  <p className="font-semibold">Canada Gazette, Part II Lower-Risk BVLOS</p>
                  <p className="text-sm">Enactment of changes to CARs Part IX, fully coming into effect November 4, 2025.</p>
                </div>
              </div>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">CARs Part IX is the second-newest part of CARs and applies to everything related to RPAS. Canada is one of the world leaders in BVLOS operations in terms of regulations.</p>
              <p className="mb-2">Prior to 2019, all drone operations happened with an SFOC (Part 9 of CARs did not exist). L1C operations are covered under CAR 901 operations.</p>
              <p>Transport Canada used the SFOC process as a learning ground. The work done in Phase 1 UTM trials was learning for operators, Transport Canada, and NAV CANADA. A lot of the lessons learned got converted into the L1C regulations.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CARs Part IX Structure</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-4">Subpart 1 is CARs 901 and talks about all the different operating conditions.</p>
              <p className="font-semibold mb-2">Key Divisions:</p>
              <ul className="space-y-2">
                <li>• <strong>Division I:</strong> General Provisions</li>
                <li>• <strong>Division II:</strong> General Operating and Flight Rules</li>
                <li>• <strong>Division III:</strong> Registration and Basic Operations</li>
                <li>• <strong>Division IV:</strong> Basic Operations</li>
                <li>• <strong>Division V:</strong> Advanced Operations</li>
                <li className="text-blue-600 font-semibold">• Division VI: L1C Operations (Critical Section)</li>
                <li>• <strong>Division X:</strong> Training and Flight Review</li>
                <li>• <strong>Division XI:</strong> RPAS Declarations</li>
                <li className="text-blue-600 font-semibold">• Division XII: RPAS Operator Certificate</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p>We will discuss Division 6 (L1C Operations) and Division 12 (RPAS Operator Certificate) the most. Division 5 (Advanced Operations) has changes that grant a lot of additional privileges. We will not delve deeply into Subpart 3.</p>
            </InstructorNote>
          </div>
        </CourseSection>

        {/* Part IX - Division I: General Provisions */}
        <CourseSection title="Part IX – Division I: General Provisions & Definitions" id="division-i">
          <p className="mb-4">It is important that everyone is familiar with these definitions, so everyone is speaking the same language.</p>

          <div className="space-y-4 mb-6">
            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Advertised Event</h4>
              <p className="text-sm">An outdoor event that is advertised to the general public, including a concert, festival, market, or sporting event</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> An event is considered advertised if you&apos;re making a public invitation. For example, a wedding would not count. A drone under 250g still needs an SFOC to operate at an advertised event.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">BVLOS Operation</h4>
              <p className="text-sm">An operation of an RPA that is not in VLOS, but does not include an extended VLOS operation or a sheltered operation</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> When the drone is not in VLOS of the pilot or visual observer. BVLOS does not include an extended VLOS operation.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Contingency Procedures</h4>
              <p className="text-sm">The procedures to be followed to address conditions that could lead to an unsafe situation</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Contingency Volume</h4>
              <p className="text-sm">The area immediately surrounding the flight geography within which contingency procedures are intended to be used to return an RPA to the flight geography or safely terminate the flight</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Extended VLOS Operation</h4>
              <p className="text-sm">An operation of an RPA that is not in VLOS but during which unaided visual contact is maintained with the airspace in which the aircraft is operating in a manner sufficient to detect conflicting air traffic and other hazards and take action to avoid them</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> Extended VLOS is not BVLOS under CARs Part 9.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Flight Geography</h4>
              <p className="text-sm">The area within which an RPA is intended to fly for a specific operation</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Fly-away</h4>
              <p className="text-sm">In respect of an RPA, an interruption or loss of the command and control link, such that the pilot no longer being able to control the aircraft and the aircraft no longer following its preprogrammed procedures or operating in a predictable or planned manner</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> People often confuse an RTL event with a fly-away. If the drone is doing what it was programmed to do after loss of control, it is not a fly-away. A fly-away is when the RPAS departs the operational volume and you can no longer control it.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Ground Risk Buffer</h4>
              <p className="text-sm">The area immediately surrounding the contingency volume that, when measured horizontally from the perimeter of the contingency volume, is at least equal to the planned maximum altitude of the RPA for the flight</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Mandatory Action</h4>
              <p className="text-sm">The inspection, repair, or modification of an RPAS that is necessary to prevent an unsafe or potentially unsafe condition</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> Something the operator and maintenance personnel are going to have to do to maintain the airworthiness of the aircraft.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Medium Remotely Piloted Aircraft (mRPAS)</h4>
              <p className="text-sm">An RPA that has an operating weight of more than 25 kg (55 lbs) but not more than 150 kg (331 lbs)</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> New category that is allowed under your advanced privileges. Organizations can operate an RPAS between 25kg and 150kg without an SFOC. There are different privileges and safety assurances depending on whether pilots are operating a small or medium RPAS.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Small Remotely Piloted Aircraft (sRPAS)</h4>
              <p className="text-sm">An RPA that has an operating weight of at least 250 g (0.55 lb) but not more than 25 kg (55 lbs)</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Operational Volume</h4>
              <p className="text-sm">The area that is composed of the flight geography, contingency volume, and ground risk buffer</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Payload</h4>
              <p className="text-sm">A system, object, or collection of objects, including a slung load, that is on board or is otherwise connected to an RPA but that is not required for flight</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> Anything that does not contribute to the operation of the aircraft (e.g., camera, delivery items).</p>
            </div>

            <div className="bg-green-50 p-4 rounded-lg border border-green-300">
              <h4 className="font-semibold mb-2">Populated Area</h4>
              <p className="text-sm">An area with <strong>more than 5 people per square kilometre</strong></p>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
              <h4 className="font-semibold mb-2">Sparsely Populated Area</h4>
              <p className="text-sm">An area with <strong>more than 5 but not more than 25 people per square kilometre</strong></p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">RPAS Ground School Instruction</h4>
              <p className="text-sm">Instructor-led training given to 1 or more persons, delivered in-person or virtually, and provided through an organized program of lectures, homework, or self-paced study</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> This course!</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">RPAS Operations Manual (ROM)</h4>
              <p className="text-sm">The manual established by an RPAS operator under section 901.217</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> People that have been doing SFOCs most likely already have a ROM. Under L1C, Transport Canada required RPAS operators to have a ROM in addition to the license.</p>
            </div>

            <div className="bg-red-50 p-4 rounded-lg border border-red-300">
              <h4 className="font-semibold mb-2">RPAS Operator</h4>
              <p className="text-sm">The holder of an RPAS Operator Certificate</p>
              <p className="text-xs mt-2 text-gray-600"><strong>IMPORTANT:</strong> Not the same as RPAS pilot. Under the L1C, RPAS operations look more like a small airline with structure, organizational control, maintenance procedures, etc. That group (holder of the RPAS Operator Certificate) is referred to as the RPAS operator, instead of the pilot.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">RPAS Operator Certificate</h4>
              <p className="text-sm">A certificate issued under section 901.214</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Sheltered Operation</h4>
              <p className="text-sm">An operation of an RPA that is not in VLOS and during which the aircraft remains at less than 200 ft (61 m), measured horizontally, from a building or structure and at an altitude no greater than 100 ft (30 m) above that building or structure</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Operating Weight</h4>
              <p className="text-sm">The weight of an RPA at any point during a flight, including any payload and any safety equipment that is on board or otherwise connected to the aircraft</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> Different from the maximum takeoff weight of an aircraft, which is a defined limitation that comes from the manufacturer.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Visual Line-of-sight (VLOS)</h4>
              <p className="text-sm">Unaided visual contact maintained with an RPA in a manner sufficient to maintain control of the aircraft, know its location, and scan the airspace in which it is operating to detect conflicting air traffic and other hazards and take action to avoid them</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> Pilots must know the drone&apos;s location and see the drone close enough to be able to control it. There is no fixed limit, but this is typically 800 m to 1.2 km based on the size of the drone and meteorological conditions.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Visual Observer (VO)</h4>
              <p className="text-sm">A crew member who is trained to assist the pilot in ensuring the safe conduct of a flight</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> It is important that this person is trained.</p>
            </div>
          </div>

          <InstructorNote type="info">
            <p>In the in-person in-flight review, participants will need to state what the population density is for the proposed area of flight operations. The 2021 Census by Statistics Canada is the current standard for assessing this.</p>
          </InstructorNote>
        </CourseSection>

        {/* Part IX - Division II & III */}
        <CourseSection title="Part IX – Division II & III: Basic Operations" id="division-ii-iii">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 900.08 Emergency Security Perimeter</h3>
            <div className="bg-red-50 p-6 rounded-lg border border-red-300">
              <p className="font-mono text-sm">&quot;No person shall operate an RPA over or within the security perimeter established by a public authority in response to an emergency, unless an operation is conducted in the service of a public authority.&quot;</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">Police, firefighters, and other public authority have a legal right to operate drones within an emergency security perimeter. There is no CAR on security perimeter for manned aviation. These security perimeter rules also apply to microdrones.</p>
            </InstructorNote>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Discussion:</p>
              <p>What physically delineates a security perimeter? What are the challenges in identifying the security perimeter to apply this CAR?</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 900.09 General Operating and Flight Rules</h3>
            <InstructorNote type="keypoint">
              <p className="mb-2">Commercial air service used to refer to CARs Part 7 (Air Canada, West Jet, etc.). Now, CARs acknowledges that drones can perform commercial air services.</p>
              <p>Operators don&apos;t need an SFOC if they&apos;re a non-resident/non-Canadian and operating under a free trade agreement. When operators haul goods, they need a CTA license, and the Canadian government will get a tax cut.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 900.14-900.20 RPAS Registration</h3>
            <InstructorNote type="keypoint">
              <p>There have been no significant changes with RPAS registration. However, under the new regulations, operators can register a drone above 25 kg into the drone management portal.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.19 Fitness of Crew Members</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-2">
                <li>• No fatigued or unfit crew</li>
                <li>• No RPAS operation until <strong>12 hours after consumption of alcohol</strong>, or under the influence of alcohol</li>
                <li>• No using any drug that impairs judgement</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">This applies to all CARs 901 operations: basic, advanced, L1C. Even if a crew member has a prescription, they cannot be under the influence of drugs that impair judgement (e.g., medicinal marijuana).</p>
              <p>There is no medical license required to be a L1C pilot; however, they must complete a self-declaration stating they are fit to fly and not under the influence. Crew members are responsible for knowing and following their organizations drug and alcohol policy, including applicable testing that may apply.</p>
            </InstructorNote>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Discussion:</p>
              <p>What are the current organizational policies towards drugs and alcohol? Do they meet the above regulation?</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.24 Pre-Flight Information</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-3">Pilot to be familiar with:</p>
              <ul className="space-y-2">
                <li>• Site survey</li>
                <li>• RPAS declaration</li>
                <li>• Qualification of all crew members</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p>When accepting an operation under CARs 901, ensure the site survey is valid (even if operators do not do it themselves), the RPAS has a safety assurance and declaration, and all crew members are qualified.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.26 Horizontal Distances (VLOS)</h3>
            <InstructorNote type="keypoint">
              <p className="mb-2">To be near a person/over a person means different things depending on the size of the RPAS:</p>
              <ul className="list-disc ml-5">
                <li><strong>Small RPAS:</strong> 30 m horizontally and 5 m vertically</li>
                <li><strong>Medium RPAS:</strong> 152 m horizontally</li>
              </ul>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.27 Site Survey</h3>
            <InstructorNote type="keypoint">
              <p className="mb-2">The site survey requirements have changed under the new regulations. For BVLOS operations, pilots are required to know their lateral distances from populated areas (population density).</p>
              <p>Find these densities in the NRCAN Drone Site Selection Tool or the Statistics Canada population density by dissemination area.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.34 Minimum Weather Conditions</h3>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300 mb-4">
              <p className="font-semibold">Note: Operations outside of these conditions require an SFOC.</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">There is different criteria for different categories, which can cause confusion. You must operate in accordance with the manufacturer&apos;s instructions.</p>
              <p>For an mRPAS, if the visibility is less than 4 statute miles, the drone can&apos;t be farther than half of that distance from you. This can be difficult to calculate. You can fly outside of these weather conditions with an SFOC.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.35 Icing Conditions</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-mono text-sm mb-3">&quot;...icing conditions are observed, are reported to exist or are likely to be encountered...unless the aircraft is equipped...&quot;</p>
              <p className="font-mono text-sm">&quot;...frost, ice or snow adhering to any of the critical surfaces...&quot;</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">A critical surface is anything that contributes to the lifting agents. It&apos;s especially important to ensure there is no frost, ice, etc. on bigger drones.</p>
              <p>&quot;Icing conditions&quot; could include a weather alert for freezing rain.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.38 Use of First-Person View Devices</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-3 font-mono text-sm">&quot;...unless a visual observer maintains unaided visual contact with the airspace...&quot;</p>
              <p><strong>FPV Device:</strong> Generates and transmits a streaming video image to a control station display or monitor, giving the pilot of an RPA the illusion of flying the aircraft from an onboard pilot&apos;s perspective</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">The definition of FPV Device changed with the new regulations. Goggles are not required to be considered using an FPV device. An RC model that has an RC controller with no video feed is not an FPV device.</p>
              <p>If a pilot is so focused on the video that they are no longer monitoring the airspace, bring in a visual observer.</p>
            </InstructorNote>
          </div>
        </CourseSection>

        {/* Part IX - Division V: Advanced Operations */}
        <CourseSection title="Part IX – Division V: Advanced Operations" id="division-v">
          <InstructorNote type="info">
            <p>Example: If there are any Model Aeronautics Association of Canada (MAAC) members (i.e., model aircraft clubs), those clubs must operate at least under basic RPAS operations. Basic operations have had no significant change under the new regulations.</p>
          </InstructorNote>

          <InstructorNote type="keypoint">
            <p>There have been significant changes to advanced operations under the new regulations. A safety assurance can also be called an RPAS declaration. Safety assurances are covered in depth in the Systems slide deck.</p>
          </InstructorNote>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.74 Extended VLOS</h3>
            <div className="bg-green-50 p-6 rounded-lg border border-green-300 mb-4">
              <p className="font-semibold mb-3">Requirements:</p>
              <ul className="space-y-2">
                <li>• Pilot and control station are located at the site for take-off and recovery</li>
                <li>• RPA within <strong>2 NM</strong> of pilot, VO, and control station</li>
                <li>• RPA is always greater than <strong>100 ft (30 m) horizontally from any person</strong></li>
                <li>• VO maintains unaided visual contact with the airspace</li>
                <li>• Below 400 ft AGL</li>
                <li>• VO has basic RPAS certificate or better</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2"><strong>Extended VLOS is not the same as BVLOS.</strong></p>
              <p className="mb-2">Extended VLOS: Drone must be within 2 NM of the pilot, visual observer, and the ground station. People planning to run drones in boxes remotely will not be able to do Extended VLOS, because the drone will not be within 2 NM of the ground station.</p>
              <p className="mb-2">RPAS must stay more than 30m horizontally from any person not involved in the operation, even if your drone has a safety assurance to fly over people. The CAR supersedes that safety assurance.</p>
              <p>Extended VLOS is very good for site surveys in unpopulated areas, but BVLOS is better for flying in a public area.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.74 Sheltered Operations</h3>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-300 mb-4">
              <p className="font-semibold mb-3">Requirements:</p>
              <ul className="space-y-2">
                <li>• Pilot and control station are located at the site for take-off and landing</li>
                <li>• RPA within 2 NM of pilot and control station</li>
                <li>• RPA is always greater than 100 ft (30 m) horizontally from any person</li>
                <li>• Below 400 ft AGL</li>
                <li>• Aircraft remains at <strong>less than 200 ft horizontally</strong> from a building or structure</li>
                <li>• Aircraft at altitude <strong>no greater than 100 ft above</strong> that building or structure</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">A sheltered operation may or may not be considered a BVLOS operation. The drone must be within 100 ft vertically and 200 ft horizontally from a building, because there is almost no chance that a helicopter will also be in that airspace.</p>
              <p>This gives the pilot the ability to inspect roofs, bridges, power lines, etc. The pilot does not need a visual observer.</p>
            </InstructorNote>
          </div>
        </CourseSection>

        {/* Part IX - Division VI: L1C Operations - THE CRITICAL SECTION */}
        <CourseSection title="Part IX – Division VI: L1C Operations" id="division-vi">
          <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
            <h3 className="font-bold text-xl mb-2">⭐ CRITICAL SECTION - L1C Operations</h3>
            <p>This is the core of the L1C certification. Pay close attention to all requirements.</p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.87 Applicability</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-4">Use the <strong>NRCAN DSST-2 tool</strong>, because they&apos;ve done the calculation on population density and airspace.</p>
              <p className="font-semibold">If the NRCAN map is unshaded, go fly. If it is shaded, they likely need an SFOC.</p>
            </div>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Practice Question:</p>
              <p className="mb-2">What is the definition of an unpopulated area and a sparsely populated area?</p>
              <p className="text-sm mb-4"><strong>Answer:</strong> An unpopulated area has fewer than five people per km². A sparsely populated area has between five and 25 people per km².</p>
              <p className="font-semibold mb-2">Practice Question:</p>
              <p className="mb-2">Whose data set is used to determine these populated areas?</p>
              <p className="text-sm"><strong>Answer:</strong> Statistics Canada most recent Census data</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">3P Approach to L1C Operations</h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <div className="bg-green-100 p-6 rounded-lg border border-green-300 text-center">
                <div className="text-4xl mb-2">👤</div>
                <h4 className="font-bold text-lg mb-2">PILOT</h4>
                <p className="text-sm">Level 1 Complex Certificate (901.89)</p>
              </div>
              <div className="bg-blue-100 p-6 rounded-lg border border-blue-300 text-center">
                <div className="text-4xl mb-2">📋</div>
                <h4 className="font-bold text-lg mb-2">PROCEDURE</h4>
                <p className="text-sm">RPAS Operator Certificate (901.88)</p>
              </div>
              <div className="bg-purple-100 p-6 rounded-lg border border-purple-300 text-center">
                <div className="text-4xl mb-2">✈️</div>
                <h4 className="font-bold text-lg mb-2">PLATFORM</h4>
                <p className="text-sm">Declaration (901.95)</p>
              </div>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">There is a 3P approach to L1C operations: Pilot, Platform, Procedures. When setting up an organization, it&apos;s important for the operator to ask if they have all three Ps.</p>
              <ul className="list-disc ml-5">
                <li>The <strong>pilot</strong> refers to the L1C pilot certificate</li>
                <li>The <strong>platform</strong> refers to the safety assurances that must be in place</li>
                <li>The <strong>procedures</strong> refer to the RPAS Operator Certificate, operations manual, procedures, checklists, deconfliction, etc.</li>
              </ul>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">1️⃣ L1C Pilot Requirements (901.89)</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span><strong>18 years of age</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Hold a <strong>L1C certificate</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Meet the <strong>recency requirements (24 months)</strong></span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2 mt-1">✓</span>
                  <span>Pilot certificate and recency demonstration are <strong>easily accessible during operations</strong></span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-blue-50 border-l-4 border-blue-400 rounded">
                <p className="font-semibold">Note: There is no requirement for a medical certificate</p>
              </div>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">People often forget the recency requirement: Transport Canada needs to know operators are up-to-date on the regulations.</p>
              <p>This L1C course requalifies participants for the recurrence. The easiest way to get requalified is the self-paced study from Transport Canada that comes with a study guide telling participants where to find the answers. When they fill out the questionnaire and keep it with them, they&apos;re considered current.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">2️⃣ L1C Procedures - RPAS Operator Certificate (901.88)</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-4 font-semibold">RPAS Operator Certificate issued to individual or organization through the DMP</p>
              <p className="mb-3">Operator requires an <strong>RPAS Operations Manual (901.217)</strong> that includes:</p>
              <ul className="space-y-2">
                <li>• Roles and responsibilities of crew members</li>
                <li>• Roles and responsibilities of maintenance personnel</li>
                <li>• Safety processes (901.218)</li>
                <li>• Normal and emergency procedures (901.23)</li>
                <li>• Training syllabus</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">An individual or a corporation can hold the RPAS Operator Certificate. To hold an RPAS Operator Certificate they need to:</p>
              <ul className="list-disc ml-5">
                <li>Be a Canadian or a Canadian organization</li>
                <li>Have an RPAS Operations Manual in place that includes a safety policy, procedures, training, etc.</li>
              </ul>
              <p className="mt-2">Operators must administer yearly recurrent training to all crew members before they fly under the L1C operator certificate.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">3️⃣ L1C Platform - Declarations (901.95)</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-4">After November 4th, 2025, Transport Canada updated the public list of safety assurances from manufacturers to include BVLOS operations.</p>
              <p className="mb-3 font-semibold">Three Operational Categories:</p>
              <ul className="space-y-2">
                <li>• <strong>901.87(a):</strong> Standard L1C operations</li>
                <li>• <strong>901.87(b):</strong> Operations requiring Pre-Validated Declarations</li>
              </ul>
            </div>

            <InstructorNote type="info">
              <p>Reference the list using this link: https://tc.canada.ca/en/aviation/drone-safety/learn-rules-you-fly-your-drone/choosing-right-drone-advanced-operations</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Modification of RPAS</h3>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300">
              <p className="font-semibold mb-3">If you modify your drone, you will not be able to exercise these privileges unless you:</p>
              <ul className="space-y-2">
                <li>• Demonstrate Standard 922 is met</li>
                <li>• Perform in accordance with manufacturer instructions</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">If modifications are performed in accordance with manufacturer instructions, operators do not need to demonstrate to Transport Canada that Standard 922 is met.</p>
              <p>If the manufacturer does not provide instructions on how to modify their drone, the operator must prove to Transport Canada they still meet Standard 922. <strong>It is recommended not to modify drones unless the manufacturer provides instructions on how to do so.</strong></p>
            </InstructorNote>
          </div>

          <div className="mb-6" id="standard-923">
            <h3 className="text-xl font-semibold mb-4">Standard 923 - Vision-Based Detect and Avoid</h3>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-300 mb-4">
              <p className="mb-4">If RPAS does not have onboard capability for DAA: Use <strong>Standard 923 (human) Vision-Based Detect and Avoid</strong></p>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">There are six new standards a manufacturer can make a declaration against. The standard against DAA assumes the manufacturer is going to build an onboard DAA system, which is not always going to be the case.</p>
              <p>If the manufacturer does not have a DAA system, it&apos;s acceptable to do BVLOS integrations using human-based DAA. This is covered in Standard 923, VO DAA.</p>
            </InstructorNote>

            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
              <h4 className="font-semibold mb-4">Standard 923 Requirements:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Position:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Drone can be flown up to <strong>4 NM away from pilot and GCS</strong></li>
                    <li>• Drone must be within <strong>2 NM of the VO</strong></li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Weather:</p>
                  <ul className="text-sm space-y-1">
                    <li>• <strong>Visibility = 3 SM+</strong></li>
                    <li>• <strong>Ceiling = 1,000 ft AGL+</strong></li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold mb-2">Sun Position:</p>
                <p className="text-sm">Outside the quadrant, greater than 45 degrees above horizon, or below the horizon</p>
              </div>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">VO DAA looks a lot like the standard scenario for low-risk BVLOS operations. The conditions of Standard 923 ensure the visual observer can effectively scan the airspace and detect conflicting traffic.</p>
            </InstructorNote>

            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-3">How to Judge Visibility and Ceilings:</h4>
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <p className="font-semibold mb-2">Judging Visibility:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Nearest METAR</li>
                    <li>• Measure section lines of farms (¼ section = ½ SM)</li>
                    <li>• Tower in the distance</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Judging Ceilings:</p>
                  <ul className="text-sm space-y-1">
                    <li>• Nearest METAR</li>
                    <li>• Towers (usually 200-300 ft)</li>
                    <li>• Mountains/clouds hitting hills</li>
                  </ul>
                </div>
              </div>
              <div className="mt-4">
                <p className="font-semibold mb-2">Judging Visual Obstructions:</p>
                <p className="text-sm">Outstretched arm with 4 horizontal fingers stacked on the horizon</p>
              </div>
            </div>
          </div>
        </CourseSection>

        {/* Part IX - Division X: Training */}
        <CourseSection title="Part IX – Division X: Training & Flight Review" id="division-x">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Standard 921 – Remotely Pilot Aircraft Training</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-3">This standard covers:</p>
              <ul className="space-y-2">
                <li>• Basic pilot certificate</li>
                <li>• Advanced pilot certificate</li>
                <li>• <strong>L1C pilot certificate</strong></li>
                <li>• Flight reviewer rating</li>
                <li>• Recency requirements</li>
                <li>• Declared training provider requirements (TP15530, TP15263)</li>
              </ul>
            </div>

            <InstructorNote type="info">
              <p>While this is not a critical slide, it is useful to show participants that there are defined standards for training organizations to follow. This standard covers training for all RPAS pilot certificates and tells you what it takes to be a declared training provider.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.176 Flight Reviewer Requirements</h3>
            <div className="bg-green-50 p-6 rounded-lg border border-green-300">
              <p className="mb-3 font-semibold">Flight reviewer must:</p>
              <ul className="space-y-2">
                <li>• Hold <strong>Advanced or L1C certificate</strong> endorsed with flight reviewer rating (as appropriate)</li>
                <li>• Be affiliated with a <strong>&apos;declared&apos; training provider</strong></li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p>To be a flight reviewer for L1C, reviewers must have the L1C pilot certificate and be affiliated with a declared training provider.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.178 Retaking of Exam</h3>
            <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-300">
              <p><strong>24-hour period</strong> to review before retaking exam</p>
            </div>

            <InstructorNote type="keypoint">
              <p>Participants must wait 24 hours to take the L1C exam again if they fail on the first attempt.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Flight Reviewer&apos;s Guide TP 15395</h3>
            <InstructorNote type="info">
              <p className="mb-2">There are standards flight reviewers must follow. If there are students in the classroom who will become L1C flight reviewers, this document should be downloaded and possibly discussed.</p>
            </InstructorNote>

            <InstructorNote type="keypoint">
              <p>This is the guiding document for flight reviews.</p>
            </InstructorNote>
          </div>
        </CourseSection>

        {/* Part IX - Division XI: RPAS Declarations */}
        <CourseSection title="Part IX – Division XI: RPAS Declarations" id="division-xi">
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Responsibilities of the Declarant (Manufacturer)</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-2">
                <li>• &apos;Declaration&apos; to the Minister assuring target levels of safety for the required standards</li>
                <li>• Maintenance program</li>
                <li>• Mandatory actions for continued compliance/airworthiness</li>
                <li>• RPAS Operations Manual (pilot&apos;s handbook)</li>
                <li>• Record keeping substantiating declaration</li>
                <li>• Service difficulty reports (PVD)</li>
                <li>• Annual reporting to the Minister (PVD)</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">These are the new declarations in place. Safety and Reliability and Environmental Envelope are going to be very costly standards for a manufacturer to achieve. Every country is going to have a different safety assurance.</p>
              <p className="mb-2">When operators purchase a drone with a safety assurance, they know that the manufacturer has met all the conditions (maintenance program, mandatory actions, etc.).</p>
              <p><strong>Service Difficulty Report:</strong> If an operator has a problem with the drone that is a manufacturing or design fault, the manufacturer must keep that on record.</p>
            </InstructorNote>

            <InstructorNote type="info">
              <p>This will be covered again in the Systems slide deck.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Declarations vs. Pre-Validated Declarations</h3>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-6 rounded-lg border border-green-300">
                <h4 className="font-semibold mb-3">Declarations</h4>
                <p className="text-sm mb-2"><strong>Required for lower ground risk:</strong></p>
                <ul className="text-sm space-y-1">
                  <li>• sRPAS over/near people</li>
                  <li>• BVLOS greater than 1 km from populated areas</li>
                </ul>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-300">
                <h4 className="font-semibold mb-3">Pre-validated Declarations (PVD)</h4>
                <p className="text-sm mb-2"><strong>Required for higher ground risk:</strong></p>
                <ul className="text-sm space-y-1">
                  <li>• mRPAS over/near people</li>
                  <li>• sRPAS over sparsely populated areas</li>
                  <li>• Less than 1 km from populated areas</li>
                </ul>
              </div>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">Operators only need to worry about declarations. Manufacturers worry about PVD, which is a higher level of declaration.</p>
              <p className="mb-2">If a drone has a safety assurance from a manufacturer that is referred to as a PVD, operators will have a few more privileges. This means that the manufacturer has done a lot more work with Transport Canada to obtain that PVD.</p>
              <p>The first question operators should ask when a salesman is trying to sell a drone is: <strong>What are you doing for the safety assurance?</strong></p>
            </InstructorNote>
          </div>
        </CourseSection>

        {/* Part IX - Division XII: RPAS Operator Certificate */}
        <CourseSection title="Part IX – Division XII: RPAS Operator Certificate" id="division-xii">
          <div className="bg-blue-100 border-l-4 border-blue-600 p-6 rounded-r-lg mb-6">
            <p className="font-semibold">The 3Ps: This is the third P - <strong>Procedures</strong></p>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.213 Eligibility to Hold</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <ul className="space-y-2">
                <li>• Canadian citizen or permanent resident of Canada</li>
                <li>• Government of Canada or &apos;agent of&apos;</li>
                <li>• Corporation or entity formed under laws of Canada or a province</li>
                <li>• Commercial air service or not?</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">Everyone that wants to exercise L1C privileges has to do so under an RPAS Operator Certificate. You apply for an RPAS Operator Certificate through the drone management portal as an individual or corporation.</p>
              <p>When you apply for this certificate, you are making a declaration to Transport Canada that you have the policies and processes in place to be an RPAS operator.</p>
            </InstructorNote>

            <InstructorNote type="info">
              <p>If the organization to which the students belong already has an RPAS Operator Certificate, the instructor can show the operating certificate to the students.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.216 General Conditions</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-3 font-semibold">To obtain an RPAS Operator Certificate, you must:</p>
              <ul className="space-y-2">
                <li>• Define an <strong>organizational structure</strong></li>
                <li>• Maintain a <strong>training program</strong></li>
                <li>• Have an RPAS that is <strong>proper for the type of operation</strong></li>
                <li>• RPAS maintenance <strong>in accordance with manufacturer&apos;s instructions</strong></li>
                <li>• Notify Minister of <strong>organizational changes</strong></li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p>These general conditions ensure operators have proper structure, training (including annual recurrency training with record keeping), appropriate RPAS for their operations, maintenance plans, and processes to notify the Minister of organizational changes.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.217 RPAS Operations Manual</h3>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300">
              <p className="mb-3 font-semibold">Required Contents:</p>
              <ul className="space-y-2">
                <li>• Roles and responsibilities of crew</li>
                <li>• Roles and responsibilities of all operational and maintenance personnel</li>
                <li>• Safety program/processes</li>
                <li>• Normal and emergency procedures</li>
                <li>• Training program and personnel qualifications</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p className="mb-2">Operators are required by law to have an RPAS Operations Manual before applying for an RPAS Operator Certificate. They don&apos;t have to have an SMS, but they do have to have a safety program.</p>
              <p>Visual observers must be trained under their training program.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">Organizational Hierarchy</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <div className="text-center mb-4">
                <div className="bg-red-100 p-4 rounded-lg inline-block mb-4">
                  <p className="font-bold">Accountable Executive</p>
                  <p className="text-sm">(Must be named)</p>
                </div>
              </div>
              <div className="text-center mb-4">
                <div className="bg-blue-100 p-4 rounded-lg inline-block">
                  <p className="font-bold">Person Responsible for Maintenance</p>
                  <p className="text-sm">(Must be named)</p>
                </div>
              </div>
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="font-bold">Pilots</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="font-bold">Visual Observers</p>
                </div>
                <div className="bg-gray-100 p-4 rounded-lg text-center">
                  <p className="font-bold">Other Crew</p>
                </div>
              </div>
            </div>

            <InstructorNote type="keypoint">
              <p>It is very important to have a named Accountable Executive, so Transport Canada knows who holds the ultimate responsibility. The only other role that must have a person named is the Person Responsible for Maintenance.</p>
            </InstructorNote>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Discussion:</p>
              <p>If your organization has an RPAS Operator Certificate, can you draft the organizational structure? OR If your organization does not have an RPAS Operator Certificate, can you draft a possible organizational structure?</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">ROM Guidance</h3>
            <InstructorNote type="keypoint">
              <p>Operators must have the following in their RPAS Operations Manual: Safety program, CRM, Training program, Record keeping details, Normal and emergency procedures (e.g., fly-aways). NASA has compiled 30 years of research on how to develop checklists, etc.</p>
            </InstructorNote>
          </div>
        </CourseSection>

        {/* Subpart III: SFOC */}
        <CourseSection title="Part IX – Subpart III: Special Flight Operations" id="sfoc">
          <InstructorNote type="keypoint">
            <p>There will still be times operators need to get an SFOC (e.g., flying in the shaded areas of DSST-2).</p>
          </InstructorNote>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">When SFOC is Required</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="mb-3">Key changes in SFOCs:</p>
              <ul className="space-y-2">
                <li>• If operators are flying a <strong>sub 250 g drone at an advertised event</strong>, they need an SFOC</li>
                <li>• Now, operators do not have to get an SFOC for a lot of low-risk BVLOS operations, due to the L1C</li>
                <li>• SFOCs are now categorized into <strong>low, medium, and high complexity</strong></li>
                <li>• A foreign operator used to need an SFOC, but they can now operate as an agent under an operator&apos;s RPAS Operator Certificate</li>
                <li>• Operators can only have a drone registered in one country at a time</li>
              </ul>
            </div>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">SOR/2025-70 Service Fees (Canada Gazette)</h3>
            <div className="bg-yellow-50 p-6 rounded-lg border border-yellow-300">
              <p className="mb-3">Previous and current fees for the following services are available on the Canada Gazette website:</p>
              <ul className="space-y-2 text-sm">
                <li>• Drone registration</li>
                <li>• L1C operations exam</li>
                <li>• L1C operations pilot certificate</li>
                <li>• Pre-validated declarations</li>
                <li>• RPAS Operator Certificate</li>
                <li>• SFOC – Very low, medium, and high complexity</li>
                <li>• Amendment to an existing SFOC</li>
              </ul>
            </div>

            <InstructorNote type="keypoint">
              <p>Operators now need to pay for an SFOC. High-complexity SFOCs are very expensive ($2000).</p>
            </InstructorNote>

            <InstructorNote type="info">
              <p>A breakdown of previous and current fees for the listed services can be found on the Canada Gazette website: https://gazette.gc.ca/rp-pr/p2/2025/2025-03-26/html/sor-dors70-eng.html</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">ROM Guidance Document</h3>
            <div className="bg-blue-50 p-6 rounded-lg border border-blue-300">
              <p className="font-semibold mb-3">Guidance on Manual Development for Remotely Piloted Aircraft System Operator Certificate (RPOC)</p>
              <p className="text-sm mb-2">Professional Compliance & Writing Services available from Scriptorium can help Operators build an RPAS Operations Manual.</p>
            </div>
          </div>
        </CourseSection>

        {/* References */}
        <CourseSection title="References">
          <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
            <div className="space-y-4 text-sm">
              <div>
                <p className="font-semibold mb-2">Official Resources:</p>
                <ul className="space-y-1 ml-4">
                  <li>• AirMarket. (n.d.) Fly Safe: Enterprise Drone Management Platform</li>
                  <li>• Canada Gazette. (2025, March 5). Regulations Amending the Canadian Aviation Regulations (RPAS – Beyond Visual Line-of-Sight and Other Operations): SOR/2025-70</li>
                  <li>• NAV CANADA. (2025, June 12). Designated Airspace Handbook</li>
                  <li>• NAV Drone Viewer. (n.d.) NAV CANADA</li>
                  <li>• National Research Council Canada. (2025, April 11). Drone site selection tool 2 (DSST-2)</li>
                  <li>• Transport Canada. (2021, November). Canadian Aviation Regulations (CARs): Quick Reference Guide</li>
                  <li>• Transport Canada. (2025, March). Flight Reviewer&apos;s Guide for Pilots of Remotely Piloted Aircraft Systems</li>
                  <li>• Transport Canada. (2025, April 1). Standard 921 - Remotely Piloted Aircraft - Canadian Aviation Regulations (CARs)</li>
                  <li>• Transport Canada. (2025, April 1). Canadian Aviation Regulations (SOR/96-433)</li>
                  <li>• Transport Canada. (2025, April 7). Advisory Circular (AC) No. 901-002</li>
                  <li>• Transport Canada. (2025, July 30). Apply for an RPAS Operator Certificate</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold mb-2">Tools & Software:</p>
                <ul className="space-y-1 ml-4">
                  <li>• FltPlan.com (Garmin Company)</li>
                  <li>• Flight Plan. (n.d.) Sky Vector: Aeronautical Charts</li>
                  <li>• ForeFlight: A Boeing Company</li>
                </ul>
              </div>
            </div>
          </div>

          <InstructorNote type="keypoint">
            <p>These resources were used to create the course content. They are also sources of further information.</p>
          </InstructorNote>
        </CourseSection>

        {/* Module Complete Badge */}
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg my-8">
          <h3 className="font-bold text-xl text-green-900 mb-2">✅ L1C01 Air Law - Complete</h3>
          <p className="text-green-800 mb-4">
            You have completed all 86 slides of the Air Law module. This comprehensive module covered:
          </p>
          <ul className="grid md:grid-cols-2 gap-2 text-sm text-green-900">
            <li>✓ Aviation Regulations & CARs Structure</li>
            <li>✓ Part I - General Provisions</li>
            <li>✓ Part VI - Flight Rules & Airspace</li>
            <li>✓ Part IX Division I - Definitions</li>
            <li>✓ Part IX Division II & III - Basic Operations</li>
            <li>✓ Part IX Division V - Advanced Operations</li>
            <li>✓ Part IX Division VI - L1C Operations</li>
            <li>✓ Part IX Division X - Training</li>
            <li>✓ Part IX Division XI - RPAS Declarations</li>
            <li>✓ Part IX Division XII - RPAS Operator Certificate</li>
            <li>✓ Subpart III - Special Flight Operations</li>
            <li>✓ Standard 923 - Vision-Based DAA</li>
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
