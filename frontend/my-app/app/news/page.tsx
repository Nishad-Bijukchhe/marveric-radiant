import React from "react";
import Link from "next/link";

export const revalidate = 300

export interface News {
  id: number;
  title: string;
  description: string;
  date: string;      
  category: 'Investment' | 'Energy' | 'Funds' | 'Others';
  image: string;       
  url: string;
}

export async function getNewsSection(): Promise<News[] > {
  const res = await fetch(
    'http://127.0.0.1:8000/api/news/',
    {next: {revalidate:60}}
  );

  if (!res.ok){
    return [];
  }
  return res.json();
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric", 
    year: "numeric"  
  });
};

const NewsPage = async () => {
  // const articles = [
  //   {
  //     title: "Nepal’s Private Equity Outlook 2025",
  //     description:
  //       "Explore how Nepal’s evolving market landscape is shaping future investment opportunities across sectors.",
  //     date: "Jan 12, 2025",
  //     category: "Investment",
  //     image: "/images/news1.png",
  //     url: "https://nepalpea.org/"
  //   },
  //   {
  //     title: "Renewable Energy: The Next Growth Engine",
  //     description:
  //       "A deep dive into why renewable energy continues to dominate institutional investment trends.",
  //     date: "Feb 03, 2025",
  //     category: "Energy",
  //     image: "/images/news2.png",
  //     url: "https://www.iea.org/reports/renewables-2025/renewable-electricity"
  //   },
  //   {
  //     title: "Maverick Fund-101 Reaches New Milestones",
  //     description:
  //       "Inside the fund’s recent progress, portfolio expansion, and future strategic direction.",
  //     date: "Mar 18, 2025",
  //     category: "Funds",
  //     image: "/images/news3.png",
  //     url: "https://www.bvifsc.vg/regulated-entities/maverick-fund-ltd"
  //   },
  // ];

const articles = await getNewsSection()
  return (
    <section className="mt-20 py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Page Heading */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            News & Articles
          </h1>
          <p className="text-lg text-gray-600">
            Latest insights, announcements, and industry updates.
          </p>
        </div>

        {/* Featured Cards */}
        <div className="grid md:grid-cols-3 gap-10 mb-20">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-white shadow-md hover:shadow-xl rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
            >
              <div className="h-48 w-full overflow-hidden">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <span className="text-sm text-green-700 font-semibold">
                  {formatDate(article.date)} • {article.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mt-2 mb-3">
                  {article.title}
                </h3>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {article.description}
                </p>

                <Link
                  href={article.url}
                  className="text-[#8B4513] font-semibold hover:underline"
                >
                  Read More →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Article List */}
        <div className="max-w-3xl mx-auto space-y-10">
          {articles.map((article, index) => (
            <article key={index}>
              <span className="text-sm text-red-700 font-semibold">
                {article.date} • {article.category}
              </span>
              <h2 className="text-xl font-bold text-gray-900 mt-2 mb-2">
                {article.title}
              </h2>
              <p className="text-gray-700 leading-relaxed">
                {article.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewsPage;
