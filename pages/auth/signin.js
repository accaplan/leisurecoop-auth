import Div100vh from 'react-div-100vh'
import Image from 'next/image'
import login from '@/public/images/login.webp'
import logo from '@/public/images/logo-white.svg'
import { getCsrfToken } from 'next-auth/client'

export default function SignIn({ csrfToken }) {
  return (

    <Div100vh>
      <div className="w-full h-full flex items-center justify-center relative bg-[#181818]">
        {/* <span className="absolute top-0 left-0 uppercase text-xs text-[20px] md:text-[42px] xl:text-[64px] mt-[50px] md:mt-[75px] font-light ml-[35px] md:ml-[50px] text-white">
          L52
        </span>

        <span className="absolute top-0 right-0 uppercase text-xs text-[20px] md:text-[42px] xl:text-[64px] mt-[50px] md:mt-[75px] font-light mr-[35px] md:mr-[50px] text-right text-white">
          Communications
        </span>

        <span className="absolute bottom-0 left-0 uppercase text-xs text-[20px] md:text-[42px] xl:text-[64px] mb-[50px] md:mb-[75px] font-light ml-[35px] md:ml-[50px] text-white">
          Digital
        </span>

        <span className="absolute bottom-0 right-0 uppercase text-xs text-[20px] md:text-[42px] xl:text-[64px] mb-[50px] md:mb-[75px] font-light mr-[35px] md:mr-[50px] text-right text-white">
          Showroom
        </span> */}

        <div className="w-full text-center text-white relative z-10">
          <div className="flex justify-center mb-2">
            <div className="w-[300px]">
              <Image
                src={logo}
                alt="L52 Logo"
                layout="responsive"
                className="w-full"
                priority
              />
            </div>
          </div>

          <span className="block uppercase text-xs md:text-sm mb-12">
            Beta Platform
          </span>

          <div className="w-full text-center text-white relative z-10">

          <form method='post' action='/api/auth/callback/credentials'>
            <input name='csrfToken' type='hidden' defaultValue={csrfToken}/>

            <div className="max-w-lg mx-auto">
              <div className="flex flex-wrap md:-mx-2">
                <label className="w-full block md:w-1/2 mb-3 px-12 md:px-2">
                  <span className="block uppercase text-xs mb-1 sr-only">USERNAME</span>
                  <input name='username' type='text' className="w-full mx-auto block text-black px-3 py-3 text-center text-sm" placeholder="USERNAME" />
                </label>

                <label className="w-full block md:w-1/2 mb-5 px-12 md:px-2">
                  <span className="block uppercase text-xs mb-1 sr-only">PASSWORD</span>
                  <input name='password' type='password' className="w-full mx-auto block text-black px-3 py-3 text-center text-sm" placeholder="PASSWORD" />
                </label>
              </div>
            </div>
          
            <button type='submit' className="text-white px-8 md:px-12 py-2 md:py-2 uppercase border border-white hover:border-white focus:border-white transition ease-in-out duration-300 text-base hover:bg-white focus:bg-white hover:text-black focus:text-black">Sign in</button>

            <a href="membershop@leisure.coop?subject=Forgot my Login Info"  className="text-white py-2 md:py-2 transition ease-in-out duration-300 text-sm mt-3 hover:opacity-50 focus:opacity-50 block uppercase">Need Help?</a>
          </form>
        </div>
        </div>
      </div>
    </Div100vh>
  )
}

// This is the recommended way for Next.js 9.3 or newer
export async function getServerSideProps(context) {
  return {
    props: {
      csrfToken: await getCsrfToken(context)
    }
  }
}
