import { useRouter } from 'next/router';
import Header from '../../components/layout/header'
import NewsCards from '../../components/news/cards'

export default function NewsArticle() {
  const router = useRouter();
  const { newsLink } = router.query;
  return (
    <>
      <Header title={newsLink} description="description of home page" />
      Article INformation 
    </>
  );    
}