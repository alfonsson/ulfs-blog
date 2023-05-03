import Link from 'next/link';


export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className="w-12 h-8  rounded-full block mx-auto mb-4 bg-gray-400">
        <Link href="/">
          <a className='pl-3'>🏠</a>
        </Link>
      </div>
      <div>
        <Link href="/posts/exclaimer">
          <a className='underline'>Disclaimer!</a>
        </Link>
      </div>
    </header>
  );
}
