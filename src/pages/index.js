import Link from 'next/link';
import Third from './third';

const Index = () => {
  return (
    <>
      <div className="flex-col bg-gradient-to-b from-blue-800 to-blue-900 min-h-screen p-5">
        <h1 className="text-center text-yellow-300 text-5xl mb-5">
          Hello User
        </h1>
        <div className="flex items-center justify-center">
          <Link href="/second">
            <button className="bg-red-500 shadow-md hover:bg-red-600 shadow-lg p-3 rounded">Click Me To See</button>
          </Link>
        </div>
        <Third />
      </div>
    </>
  );
};

export default Index;
