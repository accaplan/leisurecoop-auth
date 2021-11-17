import FancyLink from './fancyLink'

export default function Footer() {
  return (
    <footer className="px-[25px] py-[30px] md:px-[35px] md:py-[30px] 2xl:py-[55px] 2xl:px-[65px] w-full relative z-10">
      <div className="flex flex-wrap">
        <div className="text-left">
          <FancyLink destination="mailto:team@leisure.coop" label="Contact" fast/>
        </div>

        <div className="ml-auto text-right">
          <FancyLink destination="https://www.instagram.com/leisurecooperative" label="Instagram" fast/>
        </div>
      </div>
    </footer>
  )
}