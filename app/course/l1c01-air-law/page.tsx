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

            <InstructorNote type="info">
              <p className="font-semibold mb-3">Real Part IX Examples You&apos;ll Use:</p>
              <div className="space-y-3 text-sm">
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="font-semibold mb-1"><code className="bg-gray-100 px-2 py-1 rounded">901.56</code> - Sheltered Operations</p>
                  <p className="text-xs text-gray-600">Part <span className="font-semibold">9</span> (900) + Regulation <span className="font-semibold">0</span> + Subpart <span className="font-semibold">1</span> + Section 56 = Division V requirements</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="font-semibold mb-1"><code className="bg-gray-100 px-2 py-1 rounded">901.87</code> - BVLOS Operations Applicability</p>
                  <p className="text-xs text-gray-600">Part <span className="font-semibold">9</span> (900) + Regulation <span className="font-semibold">0</span> + Subpart <span className="font-semibold">1</span> + Section 87 = Division VI (your focus in L1C!)</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="font-semibold mb-1"><code className="bg-gray-100 px-2 py-1 rounded">901.213</code> - RPAS Operator Certificate Eligibility</p>
                  <p className="text-xs text-gray-600">Part <span className="font-semibold">9</span> (900) + Regulation <span className="font-semibold">0</span> + Subpart <span className="font-semibold">2</span> + Section 13 = Division XII requirements</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="font-semibold mb-1"><code className="bg-gray-100 px-2 py-1 rounded">921.04</code> - RPAS Pilot Certificate Training</p>
                  <p className="text-xs text-gray-600">Part <span className="font-semibold">9</span> (900) + Standard <span className="font-semibold">2</span> + Subpart <span className="font-semibold">1</span> + Section 04 = Standard 921, Division X</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="font-semibold mb-1"><code className="bg-gray-100 px-2 py-1 rounded">922.07</code> - Manufacturer Declaration Requirements</p>
                  <p className="text-xs text-gray-600">Part <span className="font-semibold">9</span> (900) + Standard <span className="font-semibold">2</span> + Subpart <span className="font-semibold">2</span> + Section 07 = Standard 922, Division XI</p>
                </div>
                <div className="bg-white p-3 rounded border border-blue-100">
                  <p className="font-semibold mb-1"><code className="bg-gray-100 px-2 py-1 rounded">923.01</code> - Vision-Based Detect and Avoid</p>
                  <p className="text-xs text-gray-600">Part <span className="font-semibold">9</span> (900) + Standard <span className="font-semibold">2</span> + Subpart <span className="font-semibold">3</span> + Section 01 = Standard 923, your DAA method!</p>
                </div>
              </div>
              <p className="mt-3 text-sm"><strong>Pro Tip:</strong> When someone says &quot;CAR 901.87&quot; you immediately know it&apos;s a regulation (0) in Subpart 1, and when they say &quot;Standard 923&quot; you know it&apos;s about detect and avoid (Subpart 3).</p>
            </InstructorNote>

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
              <p className="font-semibold mb-3">Every person who is required by these Regulations to maintain a Canadian aviation document, a technical record, or any other document shall produce the Canadian aviation document, technical record, or other document for inspection in accordance with the terms of a demand made by a peace officer, an immigration officer, or the Minister.</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="font-semibold mb-2">Who Can Demand to See Your Documents:</p>
              <ul className="space-y-2 text-sm mb-3">
                <li><strong>Peace Officer:</strong> Police, RCMP, provincial/municipal law enforcement</li>
                <li><strong>Immigration Officer:</strong> CBSA officers at borders or ports of entry</li>
                <li><strong>The Minister:</strong> Transport Canada inspectors and authorized representatives</li>
              </ul>

              <p className="font-semibold mb-2">What Documents You Must Produce:</p>
              <ul className="space-y-1 text-sm mb-3">
                <li>• Pilot certificate (L1C certificate)</li>
                <li>• Proof of recency (within 24 months)</li>
                <li>• RPAS Operator Certificate (if operating under one)</li>
                <li>• RPAS registration certificate</li>
                <li>• Proof of liability insurance (if required)</li>
                <li>• Flight logs and technical records (maintenance logs)</li>
                <li>• Site survey documentation</li>
                <li>• SFOC (if applicable to the operation)</li>
              </ul>

              <p className="font-semibold mb-2">Real-World Context:</p>
              <p className="text-sm">Transport Canada has been actively training police and RCMP to recognize compliant vs. non-compliant drone operations. If law enforcement approaches you during operations, be professional, immediately cease flight activities, and produce all requested documents. Refusal to produce documents is a violation of CAR 103.01.</p>

              <p className="text-sm mt-2"><strong>Best Practice:</strong> Keep digital copies on your phone/tablet and physical copies in your flight case. Being able to produce documents immediately demonstrates professionalism and compliance.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 103.04 Record Keeping</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold mb-3">Every person who is required to keep a record under these Regulations may keep the record in an electronic format if:</p>
              <p className="font-mono text-sm ml-4 mb-3">(a) the electronic format is protected against loss, destruction and falsification; and</p>
              <p className="font-mono text-sm ml-4 mb-4">(b) the record may be made available in printed form to the Minister with reasonable notice.</p>
              <p className="font-semibold">Every person who keeps a record in an electronic format shall provide a printed copy of the record to the Minister within the time that is specified in a written request for the record from the Minister.</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="font-semibold mb-2">What &quot;Protected Against Loss, Destruction and Falsification&quot; Means:</p>
              <ul className="space-y-2 text-sm mb-3">
                <li><strong>Backup Required:</strong> Cloud storage (Google Drive, Dropbox, OneDrive) or external hard drive backup. Single device storage is NOT sufficient.</li>
                <li><strong>Version Control:</strong> Use dated filenames or version numbers to prevent accidental overwrites (e.g., FlightLog_2026-03-31_v1.pdf)</li>
                <li><strong>Access Control:</strong> Password-protected accounts, limited access to authorized personnel only</li>
                <li><strong>Tamper Evidence:</strong> PDF format (harder to edit than Word docs), digital signatures if available, or read-only permissions after finalization</li>
              </ul>

              <p className="font-semibold mb-2">Practical Record Keeping System Examples:</p>
              <ul className="space-y-2 text-sm mb-3">
                <li><strong>Small Operator (1-3 pilots):</strong> Google Sheets for flight logs synced to cloud, maintenance records in Google Drive, scanned certificates in Dropbox. All auto-backed up, accessible from phone/tablet in field.</li>
                <li><strong>Medium Organization (4-10 pilots):</strong> Dedicated flight logging software (e.g., AirData, DroneDeploy), ROM and procedures in shared company drive with access controls, annual export to PDF for long-term archive.</li>
                <li><strong>Large Operator (10+ pilots):</strong> Database system with user permissions, automated backup to offsite server, integration with maintenance tracking and compliance monitoring tools.</li>
              </ul>

              <p className="font-semibold mb-2">When TC Requests Records:</p>
              <p className="text-sm">Transport Canada can request records during audits, incident investigations, or random compliance checks. You must be able to produce printed copies within the timeframe they specify (typically 24-72 hours). If you can&apos;t produce records because they were lost or destroyed, you&apos;re in violation of CAR 103.04.</p>

              <p className="text-sm mt-2"><strong>Best Practice:</strong> Test your backup system quarterly - can you actually retrieve and print your records? Many operators discover their &quot;backup&quot; doesn&apos;t work when TC comes calling.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 106.01 Accountable Executive</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="font-semibold mb-3">Appointment and Acceptance of Accountable Executive</h4>

              <p className="font-semibold mb-2">(1) A person or organization that holds a certificate referred to in subsection (5) shall appoint an accountable executive:</p>
              <p className="font-mono text-sm ml-4 mb-3">(a) to be responsible for the operations or activities authorized under the certificate and accountable on their behalf for meeting the requirements of these Regulations that relate to those operations or activities; and</p>
              <p className="font-mono text-sm ml-4 mb-4">(b) to provide a letter of acceptance from the accountable executive to the Minister acknowledging their responsibilities and accountability.</p>

              <p className="font-semibold mb-2">(2) No person shall be appointed as an accountable executive under subsection (1) unless they have control of the financial and human resources required to carry out the operations or activities authorized under the certificate.</p>

              <p className="text-sm mt-3"><em>Note: Subsection (5) lists applicable certificates including RPAS Operator Certificates</em></p>
            </div>

            <InstructorNote type="keypoint">
              <p className="font-semibold mb-2">Who Can Be an Accountable Executive:</p>
              <p className="text-sm mb-3">The Accountable Executive must have <strong>real authority</strong> - not just a title. They must control the budget (financial resources) and can hire/assign/train personnel (human resources). If they can&apos;t allocate money for safety equipment or can&apos;t pull a pilot from operations due to safety concerns, they don&apos;t have sufficient authority.</p>

              <p className="font-semibold mb-2">Common Scenarios:</p>
              <ul className="space-y-2 text-sm mb-3">
                <li><strong>Sole Proprietor:</strong> You&apos;re the owner, pilot, maintenance person, AND accountable executive. You wear all hats. Your letter of acceptance acknowledges YOU are responsible for everything.</li>

                <li><strong>Small Company (2-10 employees):</strong> Typically the owner or president. Could be operations manager if they have budget authority and can make hiring/firing decisions.</li>

                <li><strong>Department in Larger Organization:</strong> Cannot be the company president who has no knowledge of RPAS operations. Must be someone in the drone operations division with delegated budget and staffing authority (e.g., Director of UAS Operations).</li>

                <li><strong>Government Agency:</strong> Typically branch director or program manager who controls budget for the RPAS program and has authority over personnel assignments.</li>
              </ul>

              <p className="font-semibold mb-2">Letter of Acceptance Requirement:</p>
              <p className="text-sm mb-2">The Accountable Executive must provide a written letter to Transport Canada stating:</p>
              <p className="text-sm italic ml-3 mb-3">&quot;I, [Name], accept the role of Accountable Executive for [Organization Name] and acknowledge that I am responsible for ensuring all operations conducted under RPAS Operator Certificate [Number] comply with the Canadian Aviation Regulations. I understand I am accountable to Transport Canada for the safety and regulatory compliance of these operations.&quot;</p>

              <p className="font-semibold mb-2">What Makes Someone NOT Qualified:</p>
              <ul className="space-y-1 text-sm">
                <li>❌ Manager who must get approval for equipment purchases over $500</li>
                <li>❌ Supervisor who can&apos;t remove unsafe pilots from duty</li>
                <li>❌ Owner who delegates all authority to someone else</li>
                <li>❌ Figurehead who doesn&apos;t understand RPAS operations</li>
              </ul>

              <p className="text-sm mt-3"><strong>Bottom Line:</strong> Transport Canada will hold the Accountable Executive personally responsible in incidents. Choose someone who has actual authority and understands the weight of this role.</p>
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

            <InstructorNote type="info">
              <p className="font-semibold mb-3">Real Canadian Airspace Examples - Where You&apos;ll Actually Operate</p>

              <div className="space-y-3 text-sm">
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold mb-2 text-red-700">Class C - Major International Airports (SFOC Required for RPAS)</p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-semibold">Toronto Pearson (CYYZ)</p>
                      <ul className="ml-3 mt-1">
                        <li>• Canada&apos;s busiest airport</li>
                        <li>• Class C from SFC to 11,500 ft</li>
                        <li>• ~30 NM radius of controlled airspace</li>
                        <li>• Extremely high traffic volume</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Vancouver (CYVR)</p>
                      <ul className="ml-3 mt-1">
                        <li>• West coast hub</li>
                        <li>• Class C from SFC to 10,000 ft</li>
                        <li>• Complex terrain (mountains, water)</li>
                        <li>• Multiple helicopter operators nearby</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Montreal (CYUL)</p>
                      <ul className="ml-3 mt-1">
                        <li>• Quebec&apos;s primary airport</li>
                        <li>• Class C from SFC to 10,000 ft</li>
                        <li>• Bilingual ATC communications</li>
                        <li>• Multiple approach paths</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Calgary (CYYC)</p>
                      <ul className="ml-3 mt-1">
                        <li>• Prairie hub, high elevation (3,557 ft)</li>
                        <li>• Class C from SFC to 11,500 ft</li>
                        <li>• Mountain wave activity common</li>
                        <li>• Strong wind conditions</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-red-700">⚠️ RPAS operations within Class C require SFOC and ATC coordination - typically not suitable for routine L1C operations</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-semibold mb-2 text-yellow-700">Class D - Regional Airports (SFOC Required for RPAS)</p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-semibold">Ottawa (CYOW)</p>
                      <ul className="ml-3 mt-1">
                        <li>• National capital airport</li>
                        <li>• Class D from SFC to 3,000 ft within 7 NM</li>
                        <li>• Government and commercial traffic</li>
                        <li>• Class C airspace above 3,000 ft</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Victoria (CYYJ)</p>
                      <ul className="ml-3 mt-1">
                        <li>• BC provincial capital</li>
                        <li>• Class D with control zone</li>
                        <li>• Frequent seaplane traffic nearby</li>
                        <li>• Weather influenced by Pacific</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">London (CYXU)</p>
                      <ul className="ml-3 mt-1">
                        <li>• Southern Ontario regional</li>
                        <li>• Class D control zone</li>
                        <li>• Mix of commercial and training traffic</li>
                        <li>• Active flight school operations</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold">Kelowna (CYLW)</p>
                      <ul className="ml-3 mt-1">
                        <li>• Okanagan Valley hub</li>
                        <li>• Class D with mountainous terrain</li>
                        <li>• Seasonal wildfire operations</li>
                        <li>• High summer traffic volume</li>
                      </ul>
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-yellow-700">⚠️ Class D operations require tower communication and authorization - coordination essential for RPAS</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold mb-2 text-blue-700">Class E - Transition Airspace (May Require Coordination)</p>
                  <div className="text-xs space-y-2">
                    <p><strong>Where you&apos;ll encounter Class E:</strong></p>
                    <ul className="ml-3 space-y-1">
                      <li>• Airways connecting major airports (Victor Airways, Jet Routes)</li>
                      <li>• Terminal control area transitions (surrounding Class C/D airspace)</li>
                      <li>• Typically starts at 2,200 ft AGL or higher in most areas</li>
                      <li>• Controlled airspace where ATC provides service to IFR traffic</li>
                    </ul>
                    <p className="mt-2"><strong>Example:</strong> Flying near CYOW (Ottawa), Class E transition airspace extends beyond the Class D control zone, typically starting at 2,200 ft AGL. If your RPAS operates below 2,200 ft and outside the control zone, you&apos;re likely in Class G.</p>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-blue-700">Most L1C operations below 400 ft AGL will be in Class G, not Class E</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold mb-2 text-green-700">Class F & Class G - Where You&apos;ll Actually Fly (No ATC Required)</p>
                  <div className="text-xs space-y-2">
                    <p><strong>Class G (Uncontrolled):</strong> Most rural areas, agricultural land, remote regions</p>
                    <ul className="ml-3 space-y-1">
                      <li>• <strong>Example:</strong> Farm operations 50 km from any aerodrome - typically Class G from surface</li>
                      <li>• <strong>Example:</strong> Northern Ontario mining site - Class G throughout most of the area</li>
                      <li>• <strong>Example:</strong> Pipeline inspection in rural Alberta - Class G below 2,200 ft AGL</li>
                    </ul>

                    <p className="mt-2"><strong>Class F (Advisory/Restricted/Danger):</strong> Special use airspace - check DAH and NOTAMs</p>
                    <ul className="ml-3 space-y-1">
                      <li>• <strong>CYA503(P)</strong> - Parachute zone near Gatineau, QC (check activity times)</li>
                      <li>• <strong>CYA306(T)</strong> - Training area near Cold Lake, AB (military aircraft)</li>
                      <li>• <strong>CYR518</strong> - Restricted area for artillery range (never enter when active)</li>
                    </ul>
                  </div>
                  <p className="mt-2 text-xs font-semibold text-green-700">✓ Target these areas for L1C operations - no ATC coordination required, but always check NOTAMs for temporary restrictions!</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="font-semibold mb-2 text-xs">Planning Tip for Site Selection:</p>
                  <ul className="text-xs space-y-1">
                    <li>1. <strong>Check VFR charts:</strong> Identify airspace class at your operating altitude</li>
                    <li>2. <strong>Measure distances:</strong> How far from nearest controlled airspace? (Use NRCAN DSST or VFR chart)</li>
                    <li>3. <strong>Look for Class G:</strong> Rural areas &gt;10 NM from aerodromes are usually Class G</li>
                    <li>4. <strong>Check Class F:</strong> Any CYA/CYR/CYD areas nearby? When are they active?</li>
                    <li>5. <strong>Review NOTAMs:</strong> Temporary restricted areas, military exercises, forest fire TFRs</li>
                    <li>6. <strong>Document in ROM:</strong> Your site survey must include airspace classification and any coordination required</li>
                  </ul>
                </div>
              </div>
            </InstructorNote>
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
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold mb-3">Subject to subsections (2) to (5), no person shall operate an aircraft</p>
              <p className="font-mono text-sm ml-4 mb-3">(a) over a built-up area at an altitude less than 1,000 feet above the highest obstacle located within a horizontal distance of 2,000 feet from the aircraft;</p>
              <p className="font-mono text-sm ml-4 mb-3">(b) over any place other than a built-up area at an altitude less than 500 feet above the surface; or</p>
              <p className="font-mono text-sm ml-4">(c) over an open-air assembly of persons at an altitude less than 1,000 feet above that assembly, unless the pilot-in-command is taking off, cruising, landing or conducting a police operation and does so in accordance with the Canadian Aviation Regulations.</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="font-semibold mb-2">Why This Matters for RPAS Operations:</p>
              <p className="text-sm mb-3">CAR 601.14 applies to ALL aircraft including RPAS. However, Part IX regulations (CARs 900-series) provide specific RPAS rules that work alongside these general minimums.</p>

              <p className="font-semibold mb-2">Understanding the Altitudes:</p>
              <ul className="space-y-2 text-sm mb-3">
                <li><strong>Built-up area:</strong> 1,000 ft above highest obstacle within 2,000 ft horizontal radius. This high minimum exists because manned aircraft need clearance for emergency engine-out glides to clear landing areas.</li>

                <li><strong>Non-built-up area:</strong> 500 ft AGL minimum. Provides separation from terrain, wildlife, and allows aircraft to maneuver safely.</li>

                <li><strong>Open-air assembly:</strong> 1,000 ft above the assembly. Protects crowds (concerts, festivals, sporting events) from aircraft overhead.</li>
              </ul>

              <p className="font-semibold mb-2">The &quot;Built-Up Area&quot; Definition Problem:</p>
              <p className="text-sm mb-3">There is <strong>no official definition</strong> of what constitutes a &quot;built-up area&quot; in the CARs - this is a known gap. Practically, it means areas with concentrated buildings/structures (cities, towns, subdivisions), but the boundary is subjective.</p>

              <p className="font-semibold mb-2">How RPAS Part IX Addresses This:</p>
              <ul className="space-y-2 text-sm">
                <li><strong>Population density approach:</strong> Part IX uses NRCAN population density classifications (populated vs sparsely populated) instead of &quot;built-up area,&quot; providing more objective criteria.</li>

                <li><strong>RPAS operating below 400 ft AGL:</strong> Most L1C operations stay well below the 500-1,000 ft minimums in CAR 601.14, so they&apos;re compliant by altitude alone. However, you still must respect Part IX population/distance requirements.</li>

                <li><strong>Manned aircraft flying above you:</strong> CAR 601.14 ensures manned aircraft maintain altitude separation. When you operate RPAS below 400 ft, manned aircraft should be 500+ ft above you (100+ ft vertical separation).</li>
              </ul>

              <p className="text-sm mt-3 font-semibold">Bottom Line: As an RPAS operator, you&apos;re typically operating well below these minimums. Your responsibility is to stay low (≤400 ft AGL) and follow Part IX population density rules, while manned aircraft maintain CAR 601.14 altitude minimums above you.</p>
            </InstructorNote>

            <InstructorNote type="activity">
              <p className="font-semibold mb-2">Practice Question:</p>
              <p className="mb-2">What is the definition of a built-up area?</p>
              <p className="text-sm"><strong>Answer:</strong> There is no official definition of what a built-up area is in the CARs. This is a known gap in the regulations. For RPAS operations, we use population density classifications from NRCAN instead, which provides objective data on populated vs sparsely populated areas.</p>
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
              <p className="text-sm mb-3">The area within which an RPA is intended to fly for a specific operation</p>

              <div className="bg-white p-3 rounded border border-blue-100 text-xs space-y-2">
                <p className="font-semibold">How to Define Flight Geography in Your ROM:</p>
                <p><strong>Option 1 - Coordinates:</strong> &quot;Flight geography is bounded by coordinates N45°25.5&apos; W75°41.2&apos; (NW corner), N45°24.8&apos; W75°40.1&apos; (SE corner), altitude 0-400 ft AGL&quot;</p>
                <p><strong>Option 2 - Visual Boundaries:</strong> &quot;Flight geography extends from the north property fence line to the south treeline, west boundary at Highway 7, east boundary at the creek, altitude 0-300 ft AGL&quot;</p>
                <p><strong>Option 3 - Radius:</strong> &quot;Flight geography is a 2 NM radius centered on N45°25.123&apos; W75°40.456&apos;, altitude 0-400 ft AGL&quot;</p>
                <p className="text-yellow-700 font-semibold">⚠️ Your ROM must clearly define how you establish flight geography for each mission type!</p>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Fly-away</h4>
              <p className="text-sm">In respect of an RPA, an interruption or loss of the command and control link, such that the pilot no longer being able to control the aircraft and the aircraft no longer following its preprogrammed procedures or operating in a predictable or planned manner</p>
              <p className="text-xs mt-2 text-gray-600"><strong>Note:</strong> People often confuse an RTL event with a fly-away. If the drone is doing what it was programmed to do after loss of control, it is not a fly-away. A fly-away is when the RPAS departs the operational volume and you can no longer control it.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold mb-2">Ground Risk Buffer</h4>
              <p className="text-sm mb-3">The area immediately surrounding the contingency volume that, when measured horizontally from the perimeter of the contingency volume, is at least equal to the planned maximum altitude of the RPA for the flight</p>

              <div className="bg-white p-4 rounded border border-blue-100 text-xs space-y-3">
                <p className="font-semibold mb-2">Ground Risk Buffer Calculation Examples:</p>

                <div className="space-y-3">
                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold mb-2">Example 1: Basic Calculation</p>
                    <ul className="space-y-1 ml-3">
                      <li>• Planned maximum altitude: <strong>400 ft AGL</strong></li>
                      <li>• Minimum ground risk buffer: <strong>400 ft horizontal</strong> from contingency volume perimeter</li>
                      <li>• Reasoning: Regulatory minimum = altitude (1:1 ratio)</li>
                    </ul>
                    <p className="mt-2 font-semibold">Total protected area = Flight Geography + Contingency Volume + 400 ft buffer</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold mb-2">Example 2: Wind Considerations (Conservative Approach)</p>
                    <ul className="space-y-1 ml-3">
                      <li>• Planned maximum altitude: <strong>300 ft AGL</strong></li>
                      <li>• Wind conditions: <strong>20 kt sustained, gusting 30 kt</strong></li>
                      <li>• RPAS glide ratio: <strong>3:1</strong> (loses 1 ft altitude per 3 ft horizontal)</li>
                      <li>• Regulatory minimum buffer: <strong>300 ft</strong></li>
                      <li>• Wind drift calculation: 30 kt = ~50 ft/sec. Time to descend from 300 ft at 10 ft/sec = 30 seconds</li>
                      <li>• Potential wind drift: 50 ft/sec × 30 sec = <strong>1,500 ft</strong></li>
                      <li>• Recommended buffer: <strong>1,500 ft</strong> (greater of regulatory min or wind drift)</li>
                    </ul>
                    <p className="mt-2 font-semibold text-yellow-700">⚠️ Professional practice: Calculate worst-case wind drift and use the larger value!</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold mb-2">Example 3: Fly-Away Scenario Planning</p>
                    <ul className="space-y-1 ml-3">
                      <li>• RPAS: <strong>DJI M300 RTK</strong></li>
                      <li>• Maximum speed: <strong>50 kt (82 ft/sec)</strong></li>
                      <li>• Battery endurance: <strong>15 minutes remaining</strong></li>
                      <li>• Planned altitude: <strong>400 ft AGL</strong></li>
                      <li>• Regulatory minimum: <strong>400 ft buffer</strong></li>
                      <li>• Worst case fly-away: 82 ft/sec × 900 sec (15 min) = <strong>73,800 ft = 12.3 NM</strong></li>
                      <li>• Practical buffer considering terrain: <strong>2 NM</strong> (account for obstacles forcing landing)</li>
                    </ul>
                    <p className="mt-2 font-semibold text-red-700">🚨 This shows why contingency procedures (geofencing, return-to-home, battery monitoring) are CRITICAL!</p>
                  </div>

                  <div className="p-3 bg-gray-50 rounded">
                    <p className="font-semibold mb-2">Example 4: Mission Planning Integration</p>
                    <p className="mb-2">Agricultural survey mission:</p>
                    <ul className="space-y-1 ml-3">
                      <li>• <strong>Flight Geography:</strong> 1 NM × 0.5 NM rectangular field pattern, 0-200 ft AGL</li>
                      <li>• <strong>Contingency Volume:</strong> 200 ft buffer around flight geography (RTL path)</li>
                      <li>• <strong>Ground Risk Buffer:</strong> Minimum 200 ft (= max altitude) from contingency volume perimeter</li>
                      <li>• <strong>Wind adjustment:</strong> 15 kt winds → add 500 ft buffer = 700 ft total</li>
                      <li>• <strong>Population check:</strong> Ensure no populated areas within ground risk buffer</li>
                      <li>• <strong>Result:</strong> Total protected area requires ~1.3 NM × 0.8 NM clear zone</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-yellow-50 rounded border-l-4 border-yellow-500">
                    <p className="font-semibold mb-2">Factors That Increase Ground Risk Buffer Size:</p>
                    <ul className="space-y-1 ml-3">
                      <li>✓ <strong>High winds:</strong> Increase drift potential during descent</li>
                      <li>✓ <strong>Heavy payload:</strong> Affects glide ratio and descent rate</li>
                      <li>✓ <strong>Low battery:</strong> Limits contingency options</li>
                      <li>✓ <strong>Complex terrain:</strong> Mountains, buildings affect descent paths</li>
                      <li>✓ <strong>Multiple RPAS:</strong> Larger collective protected area</li>
                      <li>✓ <strong>Population density:</strong> Higher risk requires larger buffer</li>
                      <li>✓ <strong>RPAS performance:</strong> Faster aircraft = larger potential impact area</li>
                    </ul>
                  </div>

                  <div className="p-3 bg-green-50 rounded border-l-4 border-green-500">
                    <p className="font-semibold mb-2">ROM Requirements for Ground Risk Buffer:</p>
                    <ul className="space-y-1 ml-3 text-xs">
                      <li>• Specify calculation method (regulatory minimum + wind factor)</li>
                      <li>• Define when to use conservative buffers (high wind, populated areas)</li>
                      <li>• Include pre-flight buffer verification checklist</li>
                      <li>• Document how buffer is measured and enforced (geofencing?)</li>
                      <li>• Specify who approves buffer calculations (Person Responsible for Operations)</li>
                      <li>• Require buffer review when conditions change (wind increase, altitude change)</li>
                    </ul>
                  </div>
                </div>

                <p className="font-semibold text-blue-700 mt-3">Key Principle: Ground Risk Buffer is your last line of defense against ground impact outside your operational area. Always err on the side of caution!</p>
              </div>
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
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold mb-3">No person shall operate a remotely piloted aircraft in VLOS:</p>
              <p className="font-mono text-sm ml-4 mb-3">(a) in the case of a small remotely piloted aircraft, over a person unless the aircraft remains, during the operation, at least 30 m horizontally and at least 5 m vertically from that person;</p>
              <p className="font-mono text-sm ml-4 mb-3">(b) in the case of a medium remotely piloted aircraft, over or near a person unless the aircraft remains, during the operation, at least 152 m horizontally from that person; or</p>
              <p className="font-mono text-sm ml-4">(c) in the case of a large remotely piloted aircraft, over or near a person.</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="font-semibold mb-2">Understanding &quot;Over&quot; vs &quot;Near&quot; a Person:</p>
              <ul className="space-y-2 text-sm mb-3">
                <li><strong>Small RPAS (250 g - 25 kg):</strong> Can operate over people if maintaining 30 m horizontal AND 5 m vertical separation. This means if your drone is at 20 m altitude, you can be directly over someone, but if it&apos;s only 3 m up, you need 30 m horizontal distance.</li>

                <li><strong>Medium RPAS (25 kg - 150 kg):</strong> Cannot operate &quot;over OR near&quot; people. Must maintain 152 m (500 ft) horizontal distance at all times. No vertical separation option - it&apos;s absolute horizontal distance.</li>

                <li><strong>Large RPAS (over 150 kg):</strong> Prohibited from operating over or near people under basic VLOS rules. Requires SFOC for any operations near people.</li>
              </ul>

              <p className="font-semibold mb-2">Practical Measurement:</p>
              <ul className="space-y-2 text-sm mb-3">
                <li><strong>30 m horizontal:</strong> About 100 feet, or roughly 10-12 paces. Typical residential lot width is 15-20 m, so 30 m is about 1.5-2 lot widths.</li>

                <li><strong>5 m vertical:</strong> About 16 feet. A typical single-story house is ~3-4 m tall, so 5 m is slightly higher than a one-story building.</li>

                <li><strong>152 m horizontal:</strong> About 500 feet or 1.5 football fields. This is significant separation - most medium RPAS operations will be BVLOS (L1C) due to this requirement pushing beyond visual range.</li>
              </ul>

              <p className="font-semibold mb-2">Common Scenarios:</p>
              <ul className="space-y-2 text-sm">
                <li><strong>Mapping a construction site (small RPAS):</strong> Workers on site must stay 30+ m away OR your drone must stay 5+ m above them. Pre-brief workers to clear the flight area or designate safe zones.</li>

                <li><strong>Pipeline inspection (medium RPAS like M300):</strong> Cannot fly if hikers/workers within 152 m. Must have site control or spotters to ensure area is clear before operations.</li>

                <li><strong>City operations:</strong> Even small RPAS can&apos;t maintain 30 m from all people in busy urban areas. This is why most city operations require SFOC or operate in controlled areas (rooftops, closed streets).</li>
              </ul>

              <p className="text-sm mt-3 font-semibold">Key Takeaway: These distances are measured during the entire operation. If someone walks into your operational area mid-flight, you must immediately maneuver to maintain required separation or land.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.27 Site Survey</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold mb-3">The pilot-in-command of a remotely piloted aircraft shall, before conducting an operation, conduct or review a site survey of the area of the operation to identify</p>
              <p className="font-mono text-sm ml-4 mb-2">(a) any potential hazards to persons, property or other aircraft;</p>
              <p className="font-mono text-sm ml-4 mb-2">(b) any persons at or near the area who may be affected by the operation;</p>
              <p className="font-mono text-sm ml-4 mb-2">(c) any aviation activities near the area; and</p>
              <p className="font-mono text-sm ml-4">(d) the population density of areas in or near the area of the operation.</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="font-semibold mb-2">What Changed in the New Regulations:</p>
              <p className="text-sm mb-3">Subsection (d) - population density - is NEW. Previously, site surveys focused on hazards, people present, and aviation activity. Now BVLOS operators must identify and document population density using objective data sources.</p>

              <p className="font-semibold mb-2">How to Determine Population Density:</p>
              <ul className="space-y-2 text-sm mb-3">
                <li><strong>NRCAN Drone Site Selection Tool (DSST-2):</strong> Official government tool showing populated vs sparsely populated areas on a map. Available at: https://natural-resources.canada.ca/drones</li>

                <li><strong>Statistics Canada Population Density Data:</strong> Provides people per square kilometer by dissemination area. Allows precise calculation for specific locations.</li>

                <li><strong>Definitions:</strong>
                  <ul className="ml-4 mt-1">
                    <li>• <strong>Populated Area:</strong> 1 or more persons per 5,000 m² (population density ≥ 200 per km²)</li>
                    <li>• <strong>Sparsely Populated Area:</strong> Less than 1 person per 5,000 m² (population density &lt; 200 per km²)</li>
                  </ul>
                </li>
              </ul>

              <p className="font-semibold mb-2">Site Survey Timing:</p>
              <p className="text-sm mb-3">&quot;Before conducting an operation&quot; means either:
                <ul className="ml-4 mt-1">
                  <li>• <strong>Conduct:</strong> Physically visit the site, observe conditions, document findings (recommended for new sites)</li>
                  <li>• <strong>Review:</strong> Use previously conducted site survey if site hasn&apos;t changed (must verify currency before each mission series)</li>
                </ul>
              </p>

              <p className="text-sm font-semibold">Best Practice: Site surveys should be reviewed/updated annually OR whenever significant changes occur (new buildings, changed land use, new aviation activity).</p>
            </InstructorNote>

            <InstructorNote type="info">
              <p className="font-semibold mb-3">Site Survey Checklist & Examples</p>

              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">What a Proper Site Survey Must Include:</p>
                  <div className="grid md:grid-cols-2 gap-3 text-xs">
                    <div>
                      <p className="font-semibold text-green-700 mb-1">✓ Airspace Information</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Airspace class</li>
                        <li>• Controlled vs uncontrolled</li>
                        <li>• SFC boundaries</li>
                        <li>• NOTAMs affecting area</li>
                        <li>• Nearby aerodromes</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 mb-1">✓ Population Density</p>
                      <ul className="ml-4 space-y-1">
                        <li>• NRCAN DSST classification</li>
                        <li>• Populated areas within 1 NM</li>
                        <li>• Roads, highways proximity</li>
                        <li>• Buildings, structures</li>
                        <li>• Public gatherings potential</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 mb-1">✓ Hazards & Obstacles</p>
                      <ul className="ml-4 space-y-1">
                        <li>• Towers, powerlines height</li>
                        <li>• Trees, terrain features</li>
                        <li>• Wildlife (birds, nesting)</li>
                        <li>• Weather patterns</li>
                        <li>• Electromagnetic interference</li>
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-green-700 mb-1">✓ Operational Considerations</p>
                      <ul className="ml-4 space-y-1">
                        <li>• GCS location options</li>
                        <li>• VO positioning</li>
                        <li>• Escape routes</li>
                        <li>• Emergency landing zones</li>
                        <li>• Access roads/permissions</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">Example Site Survey (Agricultural Monitoring)</p>
                  <div className="text-xs space-y-2 bg-gray-50 p-3 rounded">
                    <p><strong>Location:</strong> Rural farmland, 20 km southwest of Ottawa, ON</p>
                    <p><strong>Coordinates:</strong> Center point N45°15.234&apos; W75°52.123&apos;</p>
                    <p><strong>Date Surveyed:</strong> 2026-03-15 | <strong>Valid Until:</strong> 2027-03-15 (annual review required)</p>

                    <p className="font-semibold mt-3 mb-1">Airspace:</p>
                    <ul className="ml-4">
                      <li>• Class G uncontrolled airspace</li>
                      <li>• 15 NM from CYOW (Ottawa/Macdonald-Cartier), Class C SFC at 12 NM</li>
                      <li>• No active NOTAMs or restrictions</li>
                      <li>• Nearest aerodrome: Rockcliffe (CYRO) 18 NM northeast</li>
                    </ul>

                    <p className="font-semibold mt-2 mb-1">Population Density (NRCAN DSST):</p>
                    <ul className="ml-4">
                      <li>• Classification: Sparsely populated (&lt;1 person per 5,000 m²)</li>
                      <li>• Farmhouse 800 m east of center (1 family)</li>
                      <li>• County road 2 km south (light traffic, ~10 vehicles/hour)</li>
                      <li>• Nearest town: 5 km north (population 2,500)</li>
                      <li>• No advertised events expected in area</li>
                    </ul>

                    <p className="font-semibold mt-2 mb-1">Hazards/Obstacles:</p>
                    <ul className="ml-4">
                      <li>• Powerlines along east property boundary - 60 ft AGL (marked on map)</li>
                      <li>• Grain silo 1.2 km southeast - 120 ft AGL</li>
                      <li>• Tree line north boundary - 40-50 ft AGL</li>
                      <li>• Red-tailed hawks observed nesting in trees (seasonal, April-August)</li>
                      <li>• Prevailing winds: west/southwest, calm mornings typical</li>
                    </ul>

                    <p className="font-semibold mt-2 mb-1">Operations Plan:</p>
                    <ul className="ml-4">
                      <li>• GCS location: North field access road (coordinates provided)</li>
                      <li>• VO position: Center field elevation (line of sight to all areas)</li>
                      <li>• Flight geography: 1 NM radius, max altitude 300 ft AGL</li>
                      <li>• Emergency landing zones: 3 open fields identified (coordinates mapped)</li>
                      <li>• Landowner permission: Obtained, valid through October 2026</li>
                    </ul>

                    <p className="font-semibold mt-2 mb-1">Weather Considerations:</p>
                    <ul className="ml-4">
                      <li>• Nearest METAR: CYOW (20 km), update frequency: hourly</li>
                      <li>• Local effects: Morning fog common in low areas (burn off by 09:00)</li>
                      <li>• Abort criteria: If visibility &lt; 4 SM or ceiling &lt; 1,200 ft</li>
                    </ul>

                    <p className="mt-3 text-yellow-700 font-semibold">✓ Site survey documented in ROM Section 4.2, reviewed and approved by Person Responsible for Operations</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">Common Site Survey Mistakes to Avoid:</p>
                  <ul className="space-y-2 text-xs">
                    <li>❌ <strong>Generic descriptions:</strong> &quot;Rural area, no hazards&quot; is insufficient. Be specific with measurements, coordinates, obstacle heights.</li>
                    <li>❌ <strong>Outdated information:</strong> Not checking NOTAMs day-of. Site surveys should be reviewed before each mission series.</li>
                    <li>❌ <strong>Missing population density:</strong> Assuming &quot;looks empty&quot; without checking NRCAN DSST or StatsCan data.</li>
                    <li>❌ <strong>Ignoring seasonal changes:</strong> Bird migrations, crop heights, seasonal events (fairs, festivals) change site conditions.</li>
                    <li>❌ <strong>No emergency planning:</strong> Not identifying emergency landing zones or abort procedures.</li>
                    <li>❌ <strong>Vague boundaries:</strong> &quot;Somewhere around the farm&quot; instead of precise flight geography coordinates.</li>
                    <li>❌ <strong>Single visit:</strong> Not observing different times of day (morning fog, afternoon traffic patterns, evening wildlife).</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-semibold mb-2">ROM Requirement:</p>
                  <p className="text-xs">Your RPAS Operations Manual must specify:</p>
                  <ul className="text-xs space-y-1 ml-4 mt-2">
                    <li>• Site survey template/checklist format</li>
                    <li>• Who is authorized to conduct site surveys</li>
                    <li>• How often surveys must be reviewed/updated</li>
                    <li>• Where site survey documentation is stored</li>
                    <li>• Process for updating surveys when conditions change</li>
                  </ul>
                </div>
              </div>
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

            <InstructorNote type="info">
              <p className="font-semibold mb-3">How to Actually Assess Weather for RPAS Operations</p>

              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">1. Reading METAR Reports</p>
                  <p className="mb-2 text-xs font-mono bg-gray-100 p-2 rounded">CYOW 311500Z 27015G25KT 3SM -RA BR BKN008 OVC015 05/04 A2990 RMK SF5SC3</p>
                  <ul className="space-y-1 text-xs">
                    <li>• <strong>CYOW</strong> = Ottawa Airport</li>
                    <li>• <strong>311500Z</strong> = 31st day, 1500 UTC</li>
                    <li>• <strong>27015G25KT</strong> = Wind from 270° at 15 kt, gusting to 25 kt</li>
                    <li>• <strong>3SM</strong> = Visibility 3 statute miles (MINIMUM for Standard 923!)</li>
                    <li>• <strong>-RA BR</strong> = Light rain, mist</li>
                    <li>• <strong>BKN008 OVC015</strong> = Broken clouds at 800 ft, Overcast at 1,500 ft (ceiling = 800 ft, BELOW 1,000 ft minimum!)</li>
                    <li>• <strong>05/04</strong> = Temperature 5°C, Dewpoint 4°C (small spread = fog risk)</li>
                  </ul>
                  <p className="mt-2 text-xs font-semibold text-red-600">❌ This weather is NOT suitable for Standard 923 operations - ceiling too low (800 ft &lt; 1,000 ft required)</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">2. Reading TAF (Terminal Aerodrome Forecast)</p>
                  <p className="mb-2 text-xs font-mono bg-gray-100 p-2 rounded">TAF CYOW 311138Z 3112/0118 30012KT P6SM FEW050 SCT120<br/>     FM311800 28015G25KT 4SM -SHRA BR BKN015 OVC040<br/>     TEMPO 3118/3122 2SM -SHRA BR BKN008</p>
                  <ul className="space-y-1 text-xs">
                    <li>• <strong>3112/0118</strong> = Valid from 31st 1200Z to 1st 1800Z (30 hours)</li>
                    <li>• <strong>P6SM</strong> = Visibility greater than 6 SM (good!)</li>
                    <li>• <strong>FEW050 SCT120</strong> = Few clouds at 5,000 ft, Scattered at 12,000 ft (excellent ceiling!)</li>
                    <li>• <strong>FM311800</strong> = From 31st at 1800Z conditions change</li>
                    <li>• <strong>4SM -SHRA BR BKN015</strong> = Vis drops to 4 SM, light rain showers, broken at 1,500 ft</li>
                    <li>• <strong>TEMPO 3118/3122 2SM</strong> = Temporarily between 1800-2200Z visibility may drop to 2 SM</li>
                  </ul>
                  <p className="mt-2 text-xs font-semibold text-yellow-600">⚠️ Plan your mission timing! Good weather early, deteriorating after 1800Z. TEMPO period has 2 SM visibility (below minimums).</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">3. Cloud Coverage Interpretation</p>
                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <div>
                      <p className="font-semibold">SKC/CLR</p>
                      <p>Sky clear - no ceiling</p>
                    </div>
                    <div>
                      <p className="font-semibold">FEW (1-2 oktas)</p>
                      <p>Few clouds - no ceiling</p>
                    </div>
                    <div>
                      <p className="font-semibold">SCT (3-4 oktas)</p>
                      <p>Scattered - no ceiling</p>
                    </div>
                    <div className="bg-yellow-50 p-1 rounded">
                      <p className="font-semibold text-red-600">BKN (5-7 oktas)</p>
                      <p>Broken - THIS IS A CEILING</p>
                    </div>
                    <div className="bg-yellow-50 p-1 rounded">
                      <p className="font-semibold text-red-600">OVC (8 oktas)</p>
                      <p>Overcast - THIS IS A CEILING</p>
                    </div>
                    <div className="bg-yellow-50 p-1 rounded">
                      <p className="font-semibold text-red-600">VV</p>
                      <p>Vertical visibility - obscured sky</p>
                    </div>
                  </div>
                  <p className="mt-2 text-xs font-semibold">Ceiling = lowest BKN, OVC, or VV layer. Must be 1,000 ft AGL or higher for Standard 923!</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">4. Visibility Measurement Techniques</p>
                  <ul className="space-y-2 text-xs">
                    <li>• <strong>Farm section lines:</strong> In prairie provinces, most sections are 1 mile × 1 mile. Quarter section = 0.5 SM. If you can see 6 quarter-sections, that&apos;s 3 SM (minimum!)</li>
                    <li>• <strong>Known landmarks:</strong> Identify towers, buildings, or features at known distances. Can you clearly see the tower 3 miles away?</li>
                    <li>• <strong>Contrast test:</strong> At 3 SM, you should see distinct colors and shapes. At 1-2 SM, edges blur together.</li>
                    <li>• <strong>Nearest METAR:</strong> If METAR says 3 SM but you assess visibility as worse, use the more conservative value.</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">5. Ceiling Estimation Techniques</p>
                  <ul className="space-y-2 text-xs">
                    <li>• <strong>Communication towers:</strong> Most are 200-300 ft tall. If clouds are touching halfway up a 300 ft tower = 150 ft ceiling (too low!)</li>
                    <li>• <strong>Hills/mountains:</strong> If you know terrain elevation, clouds hitting hillsides indicate ceiling height</li>
                    <li>• <strong>Nearest METAR:</strong> Airport METAR ceiling is measured precisely with ceilometer</li>
                    <li>• <strong>Pireps (Pilot Reports):</strong> Manned aircraft report cloud base heights</li>
                    <li>• <strong>Rule of thumb:</strong> If clouds look &quot;low and threatening&quot;, they probably are below 1,000 ft</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <p className="font-semibold mb-2">6. When METAR and Observations Conflict</p>
                  <p className="mb-2 text-xs">The nearest METAR reports 5 SM visibility and 2,000 ft ceiling, but at your site visibility looks like 2 SM with lower clouds.</p>
                  <p className="text-xs font-semibold text-red-600">ALWAYS use the more conservative assessment!</p>
                  <p className="mt-1 text-xs">Weather varies by location. METARs are point observations at airports. If your on-site assessment is worse than METAR, trust your eyes and don&apos;t fly. Your ROM should specify this decision-making process.</p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-semibold mb-2">Pro Tips for Weather Decision-Making:</p>
                  <ul className="space-y-1 text-xs">
                    <li>✓ Check multiple METAR stations around your operating area</li>
                    <li>✓ Review TAF for trends - is weather improving or deteriorating?</li>
                    <li>✓ Monitor real-time: weather radar, satellite imagery, webcams</li>
                    <li>✓ Set personal minimums above regulatory minimums (e.g., 4 SM instead of 3 SM)</li>
                    <li>✓ Have abort criteria in your ROM - what weather change triggers RTB?</li>
                    <li>✓ Document weather assessment in your flight log (METAR time, conditions, decision rationale)</li>
                    <li>✓ When temperature/dewpoint spread &lt; 3°C, fog risk is HIGH - monitor closely</li>
                  </ul>
                </div>
              </div>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.35 Icing Conditions</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <p className="font-semibold mb-3">No person shall operate a remotely piloted aircraft:</p>
              <p className="font-mono text-sm ml-4 mb-3">(a) when icing conditions are observed, are reported to exist or are likely to be encountered during the operation, unless the aircraft is equipped with operational de-icing or anti-icing equipment and that equipment is used during the operation; or</p>
              <p className="font-mono text-sm ml-4">(b) when frost, ice or snow is adhering to any of the critical surfaces of the aircraft.</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="font-semibold mb-2">What This Means in Practice:</p>
              <p className="mb-3"><strong>Critical surfaces</strong> = any surface that generates lift or controls flight: propellers, rotors, wings, control surfaces. On multirotors, this primarily means your propellers.</p>

              <p className="font-semibold mb-2">Real-World Scenarios:</p>
              <ul className="space-y-2 text-sm">
                <li><strong>Morning frost on your drone:</strong> You arrive at the site at 7 AM, drone was in the truck overnight, and there&apos;s frost on the propellers and airframe. <span className="text-red-600 font-semibold">Cannot fly</span> - must remove ALL frost before flight or wait for it to melt naturally.</li>

                <li><strong>Freezing rain in the forecast:</strong> METAR shows &quot;FZRA&quot; (freezing rain) or GFA shows icing conditions. <span className="text-red-600 font-semibold">Cannot fly</span> - unless your RPAS has certified de-icing equipment (extremely rare for small RPAS).</li>

                <li><strong>Snow accumulation during storage:</strong> Drone stored outside or in unheated building, snow accumulated on surfaces overnight. <span className="text-red-600 font-semibold">Cannot fly</span> - brush off ALL snow, ensure no ice formed underneath.</li>

                <li><strong>Temperature near freezing with visible moisture:</strong> 0-2°C with fog, mist, or light rain. <span className="text-yellow-600 font-semibold">High risk</span> - ice can form rapidly on cold aircraft surfaces. Monitor closely, abort if icing observed.</li>

                <li><strong>Cold-soaked aircraft:</strong> Drone stored in heated building, brought outside into -10°C air with high humidity. Moisture can condense and freeze on cold surfaces. <span className="text-yellow-600 font-semibold">Allow aircraft to temperature-equalize</span> before flight, inspect for ice formation.</li>
              </ul>

              <p className="mt-3 font-semibold">Bottom Line: Even a thin layer of frost reduces propeller efficiency and can cause loss of control. When in doubt, delay the flight.</p>
            </InstructorNote>
          </div>

          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-4">CAR 901.38 Use of First-Person View Devices</h3>
            <div className="bg-white p-6 rounded-lg border border-gray-200 mb-4">
              <p className="font-semibold mb-3">No person shall operate a remotely piloted aircraft using a first-person view device unless a visual observer maintains unaided visual contact with the airspace in which the aircraft is operating in a manner sufficient to detect conflicting air traffic or other hazards and to take action to avoid them.</p>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <p className="font-semibold mb-2">Definition - First-Person View (FPV) Device:</p>
              <p className="text-sm">A device that generates and transmits a streaming video image to a control station display or monitor, giving the pilot of an RPA the illusion of flying the aircraft from an onboard pilot&apos;s perspective.</p>
            </div>

            <InstructorNote type="keypoint">
              <p className="font-semibold mb-2">Key Change in New Regulations:</p>
              <p className="mb-3">The definition of FPV Device now includes ANY video feed that creates a first-person perspective - not just goggles. If you&apos;re watching a screen showing the drone&apos;s camera view and flying based on that feed (rather than looking at the actual aircraft), you&apos;re using an FPV device.</p>

              <p className="font-semibold mb-2">What Counts as FPV vs. What Doesn&apos;t:</p>
              <ul className="space-y-2 text-sm">
                <li><strong>IS FPV (requires VO):</strong> Pilot wearing goggles showing drone camera feed, pilot staring at tablet/phone screen flying via camera view, racing drone with video transmission where pilot never looks at actual aircraft</li>

                <li><strong>NOT FPV (no VO required):</strong> Traditional RC controller with no video feed - pilot maintains direct visual contact with aircraft, Camera/gimbal used for mission purposes (inspection, mapping) but pilot flies by watching the actual aircraft not the screen, Monitoring payload video occasionally while maintaining visual contact with aircraft</li>
              </ul>

              <p className="mt-3 font-semibold mb-2">The Rule Simplified:</p>
              <p>If you&apos;re flying by looking at a screen/goggles instead of the actual aircraft = FPV = Must have a Visual Observer maintaining direct visual contact with the airspace.</p>

              <p className="mt-2 text-sm">If a pilot becomes so focused on video that they stop monitoring the actual airspace, they&apos;ve effectively created an FPV operation and need to bring in a VO.</p>
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

            <InstructorNote type="activity">
              <p className="font-semibold mb-3">3P Approach: Pass or Fail? Test Your Understanding</p>
              <p className="text-sm mb-4">For each scenario below, identify which of the 3 Ps is missing or non-compliant:</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-700 mb-2">❌ SCENARIO 1: Age Requirement</p>
                  <p className="text-sm mb-2"><strong>Situation:</strong> A 17-year-old pilot holds a valid L1C certificate, has completed recency requirements, and will operate under an RPAS Operator Certificate with a compliant platform.</p>
                  <p className="text-sm"><strong>Result: FAIL</strong> - Missing PILOT requirement (must be 18+ years old per CAR 901.89)</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-700 mb-2">❌ SCENARIO 2: Platform Modification</p>
                  <p className="text-sm mb-2"><strong>Situation:</strong> An 18-year-old L1C pilot with current recency, operating under an RPAS Operator Certificate, using a DJI M350 with modified propeller guards (not manufacturer-approved modifications) without demonstrating Standard 922 compliance.</p>
                  <p className="text-sm"><strong>Result: FAIL</strong> - Missing PLATFORM requirement (modifications require manufacturer instructions OR Standard 922 demonstration per CAR 901.95)</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-700 mb-2">❌ SCENARIO 3: No ROM</p>
                  <p className="text-sm mb-2"><strong>Situation:</strong> An 18-year-old L1C pilot with current recency wants to conduct BVLOS operations using a compliant platform, but hasn&apos;t applied for or received an RPAS Operator Certificate.</p>
                  <p className="text-sm"><strong>Result: FAIL</strong> - Missing PROCEDURE requirement (must have RPAS Operator Certificate with ROM per CAR 901.88)</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-700 mb-2">❌ SCENARIO 4: Expired Recency</p>
                  <p className="text-sm mb-2"><strong>Situation:</strong> A 25-year-old pilot holds an L1C certificate obtained 30 months ago, hasn&apos;t completed recency requirements, operates under an RPAS Operator Certificate with a compliant platform.</p>
                  <p className="text-sm"><strong>Result: FAIL</strong> - Missing PILOT requirement (recency must be demonstrated within 24 months per CAR 901.89)</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-700 mb-2">❌ SCENARIO 5: Incomplete ROM</p>
                  <p className="text-sm mb-2"><strong>Situation:</strong> An 18-year-old L1C pilot with current recency, using a compliant platform, has an RPAS Operator Certificate but the ROM doesn&apos;t include emergency procedures or a site survey process.</p>
                  <p className="text-sm"><strong>Result: FAIL</strong> - Missing PROCEDURE requirement (ROM must include all required elements per CAR 901.217)</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-700 mb-2">✅ SCENARIO 6: All Requirements Met</p>
                  <p className="text-sm mb-2"><strong>Situation:</strong> A 22-year-old pilot holds a valid L1C certificate with recency completed 6 months ago, operates under an RPAS Operator Certificate (DMP-issued) with a complete ROM including all required sections, using a DJI M300 RTK with manufacturer&apos;s declaration for BVLOS operations (no modifications).</p>
                  <p className="text-sm"><strong>Result: PASS</strong> - All 3 Ps met! ✓ Pilot (18+, L1C cert, current recency) ✓ Procedure (RPAS Operator Certificate with compliant ROM) ✓ Platform (manufacturer declaration, no unauthorized mods)</p>
                </div>
              </div>

              <p className="mt-4 text-sm font-semibold">Remember: ALL THREE Ps must be in place before conducting BVLOS operations. Missing even one element means you cannot legally operate!</p>
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

            <InstructorNote type="activity">
              <p className="font-semibold mb-3">Standard 923 Decision-Making: Can You Fly?</p>
              <p className="text-sm mb-4">Practice applying Standard 923 requirements to real-world scenarios. For each situation, determine if the operation is compliant:</p>

              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-700 mb-2">❌ SCENARIO 1: Poor Visibility</p>
                  <p className="text-sm mb-2"><strong>Conditions:</strong></p>
                  <ul className="text-xs space-y-1 mb-2 ml-4">
                    <li>• Visibility: 2.5 statute miles</li>
                    <li>• Ceiling: 1,200 ft AGL</li>
                    <li>• Sun: 25° above horizon (outside quadrant)</li>
                    <li>• Drone position: 3 NM from pilot, 1.5 NM from VO</li>
                  </ul>
                  <p className="text-sm"><strong>Decision: NO FLY</strong> - Visibility must be at least 3 SM. Even though all other conditions are met, failing one requirement means the operation cannot proceed under Standard 923.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-700 mb-2">❌ SCENARIO 2: Low Ceiling</p>
                  <p className="text-sm mb-2"><strong>Conditions:</strong></p>
                  <ul className="text-xs space-y-1 mb-2 ml-4">
                    <li>• Visibility: 5 statute miles</li>
                    <li>• Ceiling: 800 ft AGL (overcast layer)</li>
                    <li>• Sun: 5° above horizon</li>
                    <li>• Drone position: 2 NM from pilot, 1 NM from VO</li>
                  </ul>
                  <p className="text-sm"><strong>Decision: NO FLY</strong> - Two failures: (1) Ceiling must be at least 1,000 ft AGL, (2) Sun must be at least 6° above horizon or below horizon. Even if ceiling was compliant, the sun position alone would prevent the operation.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold text-red-700 mb-2">❌ SCENARIO 3: Distance Violation</p>
                  <p className="text-sm mb-2"><strong>Conditions:</strong></p>
                  <ul className="text-xs space-y-1 mb-2 ml-4">
                    <li>• Visibility: 10 statute miles</li>
                    <li>• Ceiling: 2,500 ft AGL</li>
                    <li>• Sun: Below horizon (night operations not allowed, but sun position OK)</li>
                    <li>• Drone position: 4.5 NM from pilot, 2.5 NM from VO</li>
                  </ul>
                  <p className="text-sm"><strong>Decision: NO FLY</strong> - Two distance violations: (1) Drone must be within 4 NM of pilot/GCS (currently 4.5 NM), (2) Drone must be within 2 NM of VO (currently 2.5 NM). Both limits exceeded.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-semibold text-yellow-700 mb-2">⚠️ SCENARIO 4: Deteriorating Conditions</p>
                  <p className="text-sm mb-2"><strong>Conditions at mission start:</strong></p>
                  <ul className="text-xs space-y-1 mb-2 ml-4">
                    <li>• Visibility: 4 statute miles</li>
                    <li>• Ceiling: 1,500 ft AGL</li>
                    <li>• Sun: 50° above horizon</li>
                    <li>• Drone position: 3 NM from pilot, 1.5 NM from VO</li>
                  </ul>
                  <p className="text-sm mb-2"><strong>15 minutes into mission:</strong> TAF forecast shows thunderstorm approaching, visibility expected to drop to 1 SM within 30 minutes, ceiling dropping to 500 ft.</p>
                  <p className="text-sm"><strong>Decision: ABORT MISSION</strong> - While current conditions are compliant, you must continuously monitor weather. If conditions will deteriorate below minimums before mission completion, abort and return to base. Pre-flight planning must include weather monitoring and escape routes.</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-700 mb-2">✅ SCENARIO 5: Compliant Operation</p>
                  <p className="text-sm mb-2"><strong>Conditions:</strong></p>
                  <ul className="text-xs space-y-1 mb-2 ml-4">
                    <li>• Visibility: 5 statute miles (verified by METAR and visual confirmation)</li>
                    <li>• Ceiling: 3,000 ft AGL (scattered clouds, plenty of clearance)</li>
                    <li>• Sun: 60° above horizon, behind the VO (outside critical quadrant)</li>
                    <li>• Drone position: 3.5 NM from pilot/GCS, 1.8 NM from VO</li>
                    <li>• VO has clear line of sight, scanning airspace continuously</li>
                    <li>• Radio communication established between pilot and VO</li>
                  </ul>
                  <p className="text-sm"><strong>Decision: GO FOR FLIGHT</strong> - All Standard 923 requirements met: ✓ Visibility (5 SM &gt; 3 SM min) ✓ Ceiling (3,000 ft &gt; 1,000 ft min) ✓ Sun position (60° &gt; 45° and outside quadrant) ✓ Distance (3.5 NM &lt; 4 NM from pilot, 1.8 NM &lt; 2 NM from VO)</p>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold text-green-700 mb-2">✅ SCENARIO 6: Marginal but Legal</p>
                  <p className="text-sm mb-2"><strong>Conditions:</strong></p>
                  <ul className="text-xs space-y-1 mb-2 ml-4">
                    <li>• Visibility: Exactly 3 statute miles (measured using section lines)</li>
                    <li>• Ceiling: Exactly 1,000 ft AGL (broken layer at 1,000 ft)</li>
                    <li>• Sun: Exactly 45° above horizon and directly in VO&apos;s scan area</li>
                    <li>• Drone position: 4.0 NM from pilot, 2.0 NM from VO</li>
                  </ul>
                  <p className="text-sm mb-2"><strong>Decision: TECHNICALLY LEGAL but NOT RECOMMENDED</strong> - All minimums are exactly met, which is technically compliant. However, any slight deterioration puts you out of compliance. Professional practice: Add personal minimums above regulatory minimums (e.g., 3.5 SM visibility, 1,200 ft ceiling) to account for uncertainty and provide safety margins.</p>
                  <p className="text-xs mt-2 text-yellow-700 font-semibold">⚠️ Best Practice: Your ROM should specify personal minimums higher than regulatory minimums to account for measurement uncertainty and safety margins!</p>
                </div>
              </div>

              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="font-semibold mb-2">Key Takeaways:</p>
                <ul className="text-sm space-y-1">
                  <li>• ALL Standard 923 requirements must be met simultaneously - failing one means no-go</li>
                  <li>• Continuously monitor conditions throughout the flight</li>
                  <li>• Have abort criteria and procedures in your ROM</li>
                  <li>• Professional operators set personal minimums above regulatory minimums</li>
                  <li>• When in doubt, don&apos;t fly - get an SFOC or wait for better conditions</li>
                </ul>
              </div>
            </InstructorNote>
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

            <InstructorNote type="info">
              <p className="font-semibold mb-3">RPAS Operations Manual - Structure & Content Examples</p>
              <p className="text-sm mb-4">Your ROM doesn&apos;t need to be 500 pages, but it MUST be specific, practical, and actually usable by your crew. Here are examples of what each required section should contain:</p>

              <div className="space-y-4 text-sm">
                <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold mb-2">1. ROLES AND RESPONSIBILITIES</p>
                  <div className="text-xs space-y-2 bg-gray-50 p-3 rounded">
                    <p className="font-semibold">Example Content:</p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold text-blue-700">Accountable Executive: [Name]</p>
                        <ul className="ml-4 mt-1">
                          <li>• Ultimate responsibility for safety and regulatory compliance</li>
                          <li>• Authority to allocate resources for safety initiatives</li>
                          <li>• Reviews and approves ROM annually or when changes required</li>
                          <li>• Ensures all personnel are adequately trained and qualified</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-700">Person Responsible for Maintenance: [Name]</p>
                        <ul className="ml-4 mt-1">
                          <li>• Develops and maintains maintenance schedule for all RPAS</li>
                          <li>• Ensures maintenance records are current and accessible</li>
                          <li>• Approves RPAS for flight after maintenance actions</li>
                          <li>• Investigates maintenance-related incidents</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-700">Pilot-in-Command:</p>
                        <ul className="ml-4 mt-1">
                          <li>• Holds valid L1C certificate with current recency</li>
                          <li>• Conducts pre-flight planning including weather, NOTAMs, site survey</li>
                          <li>• Final authority for go/no-go decision</li>
                          <li>• Maintains communication with VO and crew</li>
                          <li>• Completes post-flight documentation</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-blue-700">Visual Observer:</p>
                        <ul className="ml-4 mt-1">
                          <li>• Trained per company training program (Section 5)</li>
                          <li>• Maintains visual contact with operational airspace</li>
                          <li>• Scans for conflicting traffic and hazards</li>
                          <li>• Immediately reports conflicts or concerns to PIC</li>
                          <li>• Does NOT operate controls unless also qualified pilot</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-yellow-500">
                  <p className="font-semibold mb-2">2. SAFETY PROGRAM / PROCESSES (CAR 901.218)</p>
                  <div className="text-xs space-y-2 bg-gray-50 p-3 rounded">
                    <p className="font-semibold">Example Content:</p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold text-yellow-700">Safety Policy Statement:</p>
                        <p className="italic ml-2 mt-1">&quot;[Company Name] is committed to conducting all RPAS operations in the safest manner possible. Safety is our top priority, and all personnel are empowered to stop operations if unsafe conditions are identified. We will continuously improve our safety processes through incident reporting, analysis, and corrective action.&quot;</p>
                        <p className="ml-2 mt-1">Signed: [Accountable Executive], Date: [Date]</p>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-700">Risk Assessment Process:</p>
                        <ul className="ml-4 mt-1">
                          <li>• All missions require completion of pre-flight risk assessment form</li>
                          <li>• Risk factors assessed: weather, airspace, population, aircraft performance, crew experience</li>
                          <li>• Risk scoring: Low (1-3), Medium (4-6), High (7-9)</li>
                          <li>• Medium risk requires supervisor approval; High risk requires Accountable Executive approval</li>
                          <li>• Mitigation measures must be identified and implemented before flight</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-700">Incident/Accident Reporting:</p>
                        <ul className="ml-4 mt-1">
                          <li>• All incidents (injury, property damage, near-miss) reported within 24 hours</li>
                          <li>• Incident report form submitted to Person Responsible for Operations</li>
                          <li>• Investigation conducted within 7 days</li>
                          <li>• Corrective actions identified and implemented</li>
                          <li>• Serious incidents reported to Transport Canada per CAR 901.85</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-yellow-700">Safety Meetings:</p>
                        <ul className="ml-4 mt-1">
                          <li>• Quarterly safety meetings with all operational personnel</li>
                          <li>• Review incidents, regulatory changes, lessons learned</li>
                          <li>• Minutes documented and distributed</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-green-500">
                  <p className="font-semibold mb-2">3. NORMAL PROCEDURES</p>
                  <div className="text-xs space-y-2 bg-gray-50 p-3 rounded">
                    <p className="font-semibold">Example: Pre-Flight Checklist (DJI M300 RTK)</p>
                    <div className="space-y-1 ml-3 font-mono text-xs">
                      <p>☐ <strong>Mission Planning Complete</strong></p>
                      <p className="ml-4">☐ Weather minimums met (vis ≥3 SM, ceiling ≥1,000 ft)</p>
                      <p className="ml-4">☐ NOTAMs reviewed, no TFRs or restrictions</p>
                      <p className="ml-4">☐ Site survey current (within 12 months)</p>
                      <p className="ml-4">☐ Flight geography defined and documented</p>
                      <p className="ml-4">☐ Ground risk buffer calculated and clear</p>
                      <p className="ml-4">☐ ATC coordination complete (if required)</p>

                      <p className="mt-2">☐ <strong>Aircraft Inspection</strong></p>
                      <p className="ml-4">☐ Airframe: No cracks, damage, or loose components</p>
                      <p className="ml-4">☐ Propellers: No chips, cracks, secure attachment</p>
                      <p className="ml-4">☐ Motors: Spin freely, no grinding or resistance</p>
                      <p className="ml-4">☐ Landing gear: Extended, locked, no damage</p>
                      <p className="ml-4">☐ Cameras/payload: Secure, clean, functional</p>
                      <p className="ml-4">☐ Battery: Charge ≥50%, no swelling, connectors clean</p>

                      <p className="mt-2">☐ <strong>Systems Check</strong></p>
                      <p className="ml-4">☐ Firmware: Current version, no pending updates</p>
                      <p className="ml-4">☐ GPS: ≥10 satellites, good signal strength</p>
                      <p className="ml-4">☐ Compass: Calibrated, no interference warnings</p>
                      <p className="ml-4">☐ Return-to-Home: Altitude set (min 100 ft above obstacles)</p>
                      <p className="ml-4">☐ Geofence: Configured to flight geography + contingency</p>
                      <p className="ml-4">☐ Low battery warning: Set to 30% (abort and RTH)</p>
                      <p className="ml-4">☐ Communication: Radio check with VO - clear comms</p>

                      <p className="mt-2">☐ <strong>Documentation</strong></p>
                      <p className="ml-4">☐ Pilot certificate and recency proof accessible</p>
                      <p className="ml-4">☐ RPAS Operator Certificate copy on-site</p>
                      <p className="ml-4">☐ Insurance certificate current</p>
                      <p className="ml-4">☐ Flight log ready for completion</p>

                      <p className="mt-2 font-sans">Pilot Signature: _____________ Date/Time: _______</p>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-red-500">
                  <p className="font-semibold mb-2">4. EMERGENCY PROCEDURES</p>
                  <div className="text-xs space-y-3 bg-gray-50 p-3 rounded">
                    <div>
                      <p className="font-semibold text-red-700">Loss of GPS (DJI M300 RTK Example):</p>
                      <div className="ml-3 mt-1">
                        <p><strong>Indications:</strong> &quot;GPS Signal Lost&quot; warning, aircraft switches to ATTI mode</p>
                        <p><strong>Immediate Actions:</strong></p>
                        <ol className="ml-4 mt-1">
                          <li>1. Announce &quot;GPS LOST&quot; to crew</li>
                          <li>2. Cease mission activities immediately</li>
                          <li>3. Maintain visual contact with aircraft</li>
                          <li>4. Reduce altitude if safe to do so (improves VO visual contact)</li>
                          <li>5. Manually navigate to clear area away from obstacles</li>
                          <li>6. Attempt to regain GPS (move away from interference sources)</li>
                          <li>7. If GPS not regained within 30 seconds, execute manual landing</li>
                          <li>8. Do NOT attempt RTH without GPS lock</li>
                        </ol>
                        <p className="mt-2"><strong>Post-Event:</strong> Report incident, investigate cause, update risk assessment</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-red-700">Fly-Away (Uncontrolled Departure):</p>
                      <div className="ml-3 mt-1">
                        <p><strong>Indications:</strong> Aircraft not responding to controls, departing operational volume</p>
                        <p><strong>Immediate Actions:</strong></p>
                        <ol className="ml-4 mt-1">
                          <li>1. Announce &quot;FLY-AWAY&quot; to crew and any nearby aircraft</li>
                          <li>2. Attempt emergency stop (if equipped)</li>
                          <li>3. Attempt RTH activation</li>
                          <li>4. Notify ATC immediately if in/near controlled airspace</li>
                          <li>5. Maintain visual contact as long as possible</li>
                          <li>6. Note last known position, altitude, heading, time</li>
                          <li>7. Monitor battery endurance - estimate crash location</li>
                          <li>8. If over populated area, notify local authorities</li>
                          <li>9. Do NOT attempt to retrieve until aircraft confirmed landed</li>
                          <li>10. Report to Transport Canada within 24 hours (CAR 901.85)</li>
                        </ol>
                        <p className="mt-2"><strong>Post-Event:</strong> Secure aircraft, preserve evidence, conduct full investigation</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-semibold text-red-700">Manned Aircraft Conflict:</p>
                      <div className="ml-3 mt-1">
                        <p><strong>Indications:</strong> VO reports aircraft in operational airspace</p>
                        <p><strong>Immediate Actions:</strong></p>
                        <ol className="ml-4 mt-1">
                          <li>1. VO announces &quot;TRAFFIC, [direction], [distance]&quot;</li>
                          <li>2. PIC immediately descends RPAS and moves away from traffic</li>
                          <li>3. Land if conflict imminent or safe to do so</li>
                          <li>4. Do NOT resume operations until traffic clear and deconflicted</li>
                          <li>5. If equipped, activate aircraft lights/strobes for visibility</li>
                          <li>6. Report near-miss if aircraft within 500 ft horizontal or 100 ft vertical</li>
                        </ol>
                        <p className="mt-2"><strong>Manned Aircraft ALWAYS Has Right of Way</strong></p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-purple-500">
                  <p className="font-semibold mb-2">5. TRAINING PROGRAM</p>
                  <div className="text-xs space-y-2 bg-gray-50 p-3 rounded">
                    <p className="font-semibold">Example Training Requirements:</p>
                    <div className="space-y-2">
                      <div>
                        <p className="font-semibold text-purple-700">Pilot Training:</p>
                        <ul className="ml-4 mt-1">
                          <li>• Prerequisites: Valid L1C certificate, current recency</li>
                          <li>• Company-specific training: ROM procedures, aircraft systems, site-specific operations (min 4 hours ground, 2 hours flight)</li>
                          <li>• Type rating: Each new RPAS platform requires checkout (min 5 supervised flights)</li>
                          <li>• Recurrent training: Annual (min 2 hours) - regulatory updates, incident reviews, emergency procedures</li>
                          <li>• Proficiency check: Annual flight evaluation by qualified check pilot</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700">Visual Observer Training:</p>
                        <ul className="ml-4 mt-1">
                          <li>• Initial training: 4 hours - scanning techniques, communication procedures, aircraft recognition, emergency procedures</li>
                          <li>• Supervised operations: Minimum 3 missions with experienced VO before independent duty</li>
                          <li>• Recurrent training: Annual - regulatory changes, lessons learned</li>
                        </ul>
                      </div>
                      <div>
                        <p className="font-semibold text-purple-700">Training Records:</p>
                        <ul className="ml-4 mt-1">
                          <li>• All training documented in personnel files</li>
                          <li>• Retained for minimum 3 years after employee separation</li>
                          <li>• Include: Date, subject, duration, instructor, trainee signature</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border-l-4 border-gray-500">
                  <p className="font-semibold mb-2">6. MAINTENANCE PROGRAM</p>
                  <div className="text-xs space-y-2 bg-gray-50 p-3 rounded">
                    <p className="font-semibold">Example: DJI M300 RTK Maintenance Schedule</p>
                    <div className="space-y-2">
                      <p className="font-semibold text-gray-700">Pre-Flight (Every Flight):</p>
                      <ul className="ml-4">
                        <li>• Visual inspection per checklist</li>
                        <li>• Battery voltage check (≥3.7V per cell)</li>
                        <li>• Propeller security check</li>
                      </ul>

                      <p className="font-semibold text-gray-700 mt-2">Every 10 Flight Hours:</p>
                      <ul className="ml-4">
                        <li>• Clean airframe and sensors</li>
                        <li>• Check motor screws (torque to spec)</li>
                        <li>• Inspect prop condition (replace if damaged)</li>
                        <li>• Test RTH function</li>
                      </ul>

                      <p className="font-semibold text-gray-700 mt-2">Every 50 Flight Hours or 6 Months:</p>
                      <ul className="ml-4">
                        <li>• Complete airframe inspection</li>
                        <li>• Gimbal calibration</li>
                        <li>• Battery health analysis (replace if capacity &lt;80%)</li>
                        <li>• Firmware update check</li>
                        <li>• Compass calibration</li>
                        <li>• IMU calibration</li>
                      </ul>

                      <p className="font-semibold text-gray-700 mt-2">Annual:</p>
                      <ul className="ml-4">
                        <li>• Full system functional check</li>
                        <li>• Replace wear items (props, landing gear pads)</li>
                        <li>• Professional inspection by manufacturer or certified technician</li>
                      </ul>

                      <p className="mt-2"><strong>Maintenance Records:</strong> All maintenance logged with date, work performed, parts replaced, technician signature. Retained for life of aircraft + 2 years.</p>
                    </div>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                  <p className="font-semibold mb-2 text-xs">ROM Document Control:</p>
                  <ul className="text-xs space-y-1">
                    <li>• <strong>Version Control:</strong> Each ROM revision numbered and dated</li>
                    <li>• <strong>Distribution:</strong> All operational personnel receive current ROM copy</li>
                    <li>• <strong>Review Cycle:</strong> Annual review by Accountable Executive, or when regulations/procedures change</li>
                    <li>• <strong>Amendment Process:</strong> Proposed changes submitted to Accountable Executive, approved changes distributed within 7 days</li>
                    <li>• <strong>Availability:</strong> ROM accessible at all operating sites (electronic or hardcopy)</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 p-4 bg-yellow-50 rounded border border-yellow-300">
                <p className="font-semibold mb-2 text-sm">Remember:</p>
                <ul className="text-xs space-y-1">
                  <li>✓ Your ROM must be USABLE - if it&apos;s too complex, nobody will follow it</li>
                  <li>✓ Your ROM must be COMPLETE - Transport Canada will review it during audits</li>
                  <li>✓ Your ROM must be CURRENT - update when regulations or procedures change</li>
                  <li>✓ Your ROM is a LIVING DOCUMENT - continuously improve based on operations and incidents</li>
                  <li>✓ Your ROM is your BEST DEFENSE - in an incident, TC will ask &quot;Did you follow your ROM?&quot;</li>
                </ul>
              </div>
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
