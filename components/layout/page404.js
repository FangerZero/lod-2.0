import Header from './header';
import Image from 'next/image';

export default function Page404() {
  const src = '/images/ruff-404.png';
  
  return (
    <div className="md:flex md:flex-1 md:flex-col items-center justify-center">  
      <Header title="404" description="Welcome to the Legend of Dragoon fansite's 404 Page." />
      <h1 className="text-3xl font-bold my-3">404 - Page Not Found</h1>
      <Image
        src={src}
        alt="Ruff doesn't know it."
        width={500}
        height={500}
      />
      <p>
        404? Ruff doesn’t know it, ruff.
        <br />
        Ruff thought there were only 108 fruits…
      </p>
      <p>
        Either way, the page you’re looking for has vanished, ruff. It’s rough, ruff.
      </p>
      <p>
        If you’re feeling lucky, you can enter some search terms below, ruff..
      </p>
    </div>
  );    
}