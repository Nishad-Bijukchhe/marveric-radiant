import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
export const revalidate = 300;

interface ManagementTeam {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  role: 'senior associate' | 'member';
}


async function getManagementTeam(): Promise<ManagementTeam[]> {
  const res = await fetch(
    'http://127.0.0.1:8000/api/management-team/',
    { next: { revalidate: 60 } } // ISR cache
  );

  if (!res.ok) {
  return [];
}


  return res.json();
}


// const teamMembers = [
//   {
//     name: "Mr Saugat. Dhungana",
//     title: "Senior Investment Associate",
//     image: "/images/saugatD.png",
//     description:
//       "Finance professional with 5+ years of experience in investment management, portfolio strategy, and financial analysis. MBA from Queen Margaret University and completed all CFA levels.",
//   },
//   {
//     name: "Ms. Sabita Godar Thapa",
//     title: "Legal and Compliance Head",
//     image: "/images/user.png",
//     description:
//       "Experienced legal practitioner with extensive courtroom experience. Former General Manager at Nepal Bar Association. Holds a Master's in Criminal and Commercial Law.",
//   },
//   {
//     name: "Ms. Dikshya Pokhrel",
//     title: "Compliance Officer",
//     image: "/images/dikshyaP.png",
//     description:
//       "Business and energy law professional with expertise in private equity, hydropower development, and financial consulting. Specializes in legal compliance and project financing.",
//   },
//   {
//     name: "Ms. Pratikshya",
//     title: "Finance Officer",
//     image: "/images/user.png",
//     description:
//       "ACCA-certified finance professional with 3+ years’ experience in audits, tax compliance, financial reporting, and internal controls.",
//   },
// ];

export default async function ManagementTeam() {
  const data = await getManagementTeam();

  const topMember = data.find(m => m.role === 'senior associate');
  const otherMembers = data.filter(m => m.role === 'member');

  if (!topMember) return null;

  return (
    <section id="management_team" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Team</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            A powerful synergy of experienced professionals and dynamic young talent driving innovation and strategic growth.
          </p>
        </div>

        {/* Management Team Title */}
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Management Team</h3>

        {/* Top Member (Single Row) */}
        <div className="flex justify-center mb-16">
          <Card className="bg-white shadow-md border rounded-xl w-110">
            <CardContent className="p-0">

              <div className="w-full h-72 overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-100">
                <img
                  src={topMember.image}
                  alt={topMember.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {topMember.name}
                </h4>

                <p className="text-green-600 font-semibold mb-3 text-sm">
                  {topMember.title}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {topMember.description}
                </p>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Other Members (Second Row Grid) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {otherMembers.map((member, i) => (
            <Card key={i} className="bg-white shadow-md border rounded-xl w-85">
              <CardContent className="p-0">

                <div className="w-full h-72 overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-100">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

                <div className="p-6 text-center">
                  <h4 className="text-xl font-bold text-gray-800 mb-1">
                    {member.name}
                  </h4>

                  <p className="text-green-600 font-semibold mb-3 text-sm">
                    {member.title}
                  </p>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {member.description}
                  </p>
                </div>

              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
}
