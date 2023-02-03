import { useRouter } from 'next/router';
import Header from '../../../components/layout/header'

export default function FanartPhoto() {
  const router = useRouter();
  const { fanartLink } = router.query;
  return (
    <>
      <Header title={fanartLink} description="description of home page" />
      Art Work
    </>
  );    
}