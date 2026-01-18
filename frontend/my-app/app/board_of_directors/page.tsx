import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

export const revalidate = 300; // ISR: regenerate every 60 seconds

interface BoardMember {
  id: number;
  name: string;
  title: string;
  description: string;
  image: string;
  role: 'executive' | 'member';
}


async function getBoardMembers(): Promise<BoardMember[]> {
  const res = await fetch(
    'http://127.0.0.1:8000/api/board-of-directors/',
    { next: { revalidate: 60 } } // ISR cache
  );

  if (!res.ok) {
  return [];
}
  return res.json();
}

export default async function BoardOfDirectors() {
  const data = await getBoardMembers();

  const topDirector = data.find(m => m.role === 'executive');
  const otherMembers = data.filter(m => m.role === 'member');

  if (!topDirector) return null;

  // const topDirector = {
  //   name: "Mr. Mukti Bodh Neupane",
  //   title: "Managing Director",
  //   image: "/images/muktiB.png",
  //   description:
  //     "Senior finance and infrastructure professional with 20+ years of experience across the energy and infrastructure sectors. Chartered Accountant with extensive financial and sectoral expertise.",
  // };

  // const otherMembers = [
  //   {
  //     name: "Mr. Gehanath Dhungana",
  //     title: "Board Member",
  //     image: "/images/GehaNath.png",
  //     description:
  //       "MBA-qualified veteran with 30+ years in Nepal's banking sector, including leadership roles in top commercial banks.",
  //   },
  //   {
  //     name: "Mr. Bharat Bahadur Khatri",
  //     title: "Board Member",
  //     image: "/images/user.png",
  //     description:
  //       "Seasoned leader with an LLM degree. Chairman at multiple power companies with extensive hydropower development expertise.",
  //   },
  //   {
  //     name: "Ms. Nitika Upadhyaya",
  //     title: "Board Member & Head of Business Development",
  //     image: "/images/user.png",
  //     description:
  //       "Business development and finance professional with 10+ years’ experience in insurance, financial services, and corporate operations. Skilled in operational strategy, process optimization, team leadership, revenue growth, market expansion, and commercial analysis. Experienced in originating, structuring, and scaling business opportunities, with a strong record in stakeholder management and driving organizational performance.",
  //   },
  //   {
  //     name: "Ms. Snigdha Shah",
  //     title: "Board Member",
  //     image: "/images/snigdha.png",
  //     description:
  //       "Snigdha Shah is a results-driven professional with expertise in Finance and Marketing. She holds a Bachelor’s degree from Kathmandu University and a Master’s in Marketing from Lincoln University. With experience at FNCCI and Invest and Infra (now IXI Corp), she has focused on strategic project management, partnership development, and stakeholder engagement. She has also overseen operational and administrative functions at a group company level, strengthening her skills in business management and growth initiatives within investment-driven environments.",
  //   },
  // ];

  return (
    <section id="board_of_directors" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Board of Directors</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Strong leadership guiding long-term strategic vision and governance.
          </p>
        </div>

        {/* Board of Directors Title */}
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Executive Leadership</h3>

        {/* Top Executive Director (Same design as Management topMember) */}
        <div className="flex justify-center mb-16">
          <Card className="bg-white shadow-md border rounded-xl w-110">
            <CardContent className="p-0">

              <div className="w-full h-72 overflow-hidden rounded-t-xl flex items-center justify-center bg-gray-100">
                  <img
                    src={topDirector.image}
                    alt={topDirector.name}
                    className="max-w-full max-h-full object-contain"
                  />
                </div>

              <div className="p-6 text-center">
                <h4 className="text-xl font-bold text-gray-800 mb-1">
                  {topDirector.name}
                </h4>

                <p className="text-green-600 font-semibold mb-3 text-sm">
                  {topDirector.title}
                </p>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {topDirector.description}
                </p>
              </div>

            </CardContent>
          </Card>
        </div>

        {/* Other Board Members (Same grid as Management Team) */}
        <h3 className="text-3xl font-bold text-gray-800 mb-12 text-center">Board Members</h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 place-items-center">
          {otherMembers.map((member, i) => (
            <Card key={i} className="bg-white shadow-md border rounded-xl w-100">
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
