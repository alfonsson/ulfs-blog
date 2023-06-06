import Link from 'next/link';
import Profile from '../components/Profile';


export default function Header({ name }) {
  return (
    <header className="pt-20 pb-12">
      <div className='pb-5'>
        <p className='text-left italic text-3xl'>Ulferik&apos;s miniblog</p>
        <p className='text-center italic text-2xl p-3'>Gothenburg</p>
        <Profile />
        </div>
      <div className="w-12 h-8 rounded-full block mx-auto mb-4 bg-gray-400">
        <Link href="/">
          <a className='pl-3'>🏠</a>
        </Link>
      </div>
      <div>
        <Link href="/posts/exclaimer">
          <a className='underline'>Read blog info!</a>
        </Link>
      </div>
    </header>
  );
}
