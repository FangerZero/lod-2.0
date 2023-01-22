import Header from './header';
import Image from 'next/image';

export default function Page404() {
  const src = '/images/ruff-404.png';
  
  return (
    <div className="flex flex-1 flex-col items-center justify-center">  
      <Header title="404" description="Welcome to the Legend of Dragoon fansite's 404 Page." />
      <h1 className="text-3xl font-bold py-6">404 - Page Not Found</h1>
      <Image
        className="border rounded-3xl border-transparent"
        src={src}
        alt="Ruff doesn't know it."
        width={500}
        height={500}
      />
      <p className="p-2">
        404? Ruff doesn’t know it, ruff.
      </p>
      <p className="p-2">
        Ruff thought there were only 108 fruits…
      </p>
      <p className="p-2">
        Either way, the page you’re looking for has vanished, ruff. It’s rough, ruff.
      </p>
      <p className="p-2">
        If you’re feeling lucky, you can enter some search terms below, ruff..
      </p>
    </div>
  );    
}