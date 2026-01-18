export interface HeroImage {
  id: number;
  image: string;
}

export interface HeroSection {
  heading: string;
  paragraph: string;
  images: HeroImage[];
}



export async function getHeroSection(): Promise<HeroSection | null> {
  try {
    const res = await fetch("http://127.0.0.1:8000/api/slider/", {
      next: { revalidate: 60 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    return null;
  }
}
