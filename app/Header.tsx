import { Bars3Icon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import NavLinks from './NavLinks'
import SearchBox from './SearchBox'
import DarkModeButton from './DarkModeButton'

function Header() {
  return (
    <header>
      <div className="grid grid-cols-[1fr_2fr_1fr] items-center p-10">
        <Bars3Icon className="h-8 w-8 cursor-pointer"></Bars3Icon>
        <Link
          href="/"
          prefetch={false}
        >
          <h1 className="text-center font-serif text-4xl">
            The{' '}
            <span className="decoration-6 underline decoration-orange-400 underline-offset-4">
              News
            </span>{' '}
            App
          </h1>
        </Link>
        <div className="flex items-center justify-end space-x-2">
          {/* DarkMode button */}
          <DarkModeButton></DarkModeButton>

          {/* Subscribe button */}
          <button
            type="button"
            className="hidden rounded-full bg-slate-900 px-4 py-2 text-white dark:bg-slate-800 md:inline lg:px-8 lg:py-4"
          >
            Subscribe Now
          </button>
        </div>
      </div>

      <NavLinks></NavLinks>

      {/* SearchBox */}
      <SearchBox></SearchBox>
    </header>
  )
}
export default Header
