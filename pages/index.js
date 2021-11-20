import Layout from '@/components/layout'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Carousel from '@/components/carousel'
import { fade } from "@/helpers/transitions"
import { LazyMotion, domAnimation, m } from 'framer-motion'
import SanityPageService from '@/services/sanityPageService'
import { NextSeo } from 'next-seo'
import Div100vh from 'react-div-100vh'
import Image from 'next/image'
import logo from '@/public/images/logo-white.svg'
import login from '@/public/images/login.webp'
import { useSession } from "next-auth/client";

const query = `{
  "clients": *[_type == "client"] | order(title asc){
    title,
    teaserSubtitle,
    teaserImage{
      asset->{
        ...
      }
    },
    slug {
      current
    },
  }
}`

const pageService = new SanityPageService(query)

export default function Home(initialData) {
  const [session, loading] = useSession();
  const { data: { clients }  } = pageService.getPreviewHook(initialData)()
  
  if (loading) {
    return (
      <>
        <NextSeo
          title="Sharing Platform | Leisure Cooperative"
          openGraph={{
            url: 'https://beta.leisure.coop/',
            title: 'Seekers Exchange | Leisure Cooperative',
            images: [
              {
                url: 'https://beta.leisure.coop/static/social.jpg',
                width: 1200,
                height: 630,
                alt: 'Leisure Coop Logo',
              },
            ],
            site_name: 'Leisure Coop',
          }}
          twitter={{
            cardType: 'summary_large_image',
          }}
        />

        <Div100vh>
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-full text-center">
              <p className="text-sm">Loading...</p>
            </div>
          </div>
        </Div100vh>
      </>
    );
  }

  return (
    <Layout>
      <NextSeo
        title="Sharing Platform | Leisure Cooperative"
        openGraph={{
          url: 'https://beta.leisure.coop/',
          title: 'Sharing Platform | Leisure Cooperative',
          images: [
            {
              url: 'https://digitalshowroom.l52.world/static/social.jpg',
              width: 1200,
              height: 630,
              alt: 'L52 Logo',
            },
          ],
          site_name: 'L52',
        }}
        twitter={{
          cardType: 'summary_large_image',
        }}
      />

      {!session && (
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
                Sharing Platform
              </span>

              <a href={'/auth/signin'} className="text-white px-8 md:px-12 py-2 md:py-2 uppercase border border-white hover:border-white focus:border-white transition ease-in-out duration-300 text-base hover:bg-white focus:bg-white hover:text-black focus:text-black">Sign in</a>
              
              <div>
              <a href="https://8lqyuucfjae.typeform.com/to/m1pPcmt4?typeform-source=leisure.coop"  className="text-white py-2 md:py-2 transition ease-in-out duration-300 text-sm mt-3 hover:opacity-50 focus:opacity-50 inline-block uppercase">Apply</a>
              </div>
            </div>
          </div>
        </Div100vh>
      )}

      {session && (
        <LazyMotion features={domAnimation}>      
          <Div100vh>
            <m.div
              initial="initial"
              animate="enter"
              exit="exit"
              className=""
            >
              
              <Header indexActive />

              <m.div variants={fade} className="w-full flex flex-grow">
                <div className="w-full flex flex-grow justify-center items-center">
                  <div className="w-full">
                    <Carousel slides={clients} teaser />
                  </div>
                </div>
              </m.div>

              <m.div variants={fade} className="w-full">
                <Footer />
              </m.div>
            </m.div>
          </Div100vh>
        </LazyMotion>
      )}
    </Layout>
  )
}

export async function getStaticProps(context) {
  const props = await pageService.fetchQuery(context)
  return { 
    props
  };
}
