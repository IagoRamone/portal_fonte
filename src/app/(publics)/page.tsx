import { classNames } from '@/utils/classNames';
import Secaodestaque from '@/components/secaodestaque';
import Card from '@/components/Card-featured';


export default async function Home() {
  return (
     <div className="w-full min-h-screen bg-white p-0 m-0">
      <main className="w-full">
        <Secaodestaque />
        <Card />
      </main>
    </div>
  );
}



  





  