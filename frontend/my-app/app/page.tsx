import MaverickWebsiteClient from './components/MaverickWebsiteClient'
import { getHeroSection } from '@/utils/slider';

export default async function Page() {
  const heroData = await getHeroSection();
  return <MaverickWebsiteClient heroData={heroData} />;
}
