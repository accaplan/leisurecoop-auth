import Link from 'next/link'
import Image from 'next/image'
import logo from '@/public/images/logo.svg'
import FancyLinkInternal from './fancyLinkInternal'

export default function Header({ indexActive }) {
  return (
    <header className="px-[25px] py-[30px] md:px-[35px] md:py-[30px] 2xl:py-[55px] 2xl:px-[65px] w-full relative z-10">
      <Link href="/">
        <a className="block w-[200px] mb-3 md:mb-2">
          <Image
            src={logo}
            alt="leisurecoop logo"
            layout="responsive"
            className="w-full"
            priority
          />
        </a>
      </Link>

      <div className="flex flex-wrap items-start">
        <div className="w-auto">
          <span className="block uppercase text-xs md:text-sm">
            Sharing Platform
          </span>
        </div>

        <div className="ml-auto flex items-center">
          {/* <Link href="/">
            <a aria-label="Navigate to about page" className={`block md:inline-block uppercase hover:opacity-75 focus:opacity-75 text-xs md:text-sm transition ease-in-out duration-300 ${indexActive ? 'border-b border-black' : 'border-b border-white'}`}>
              Brands
            </a>
          </Link> */}

          <FancyLinkInternal destination={`https://leisure.coop`} label="LEISURE.COOP" fast active={indexActive} />
        </div>
      </div>
    </header>
  )
}