import React, { Component } from 'react'
import Link from 'next/link'
import { motion } from "framer-motion";
import wheel from "wheel"
import ImageWrapper from '@/helpers/image-wrapper';
import normalizeWheel from "normalize-wheel"

const reveal = {
	initial: { y: "100%" },
	enter: { 
    y: "0%",
    transition: { duration: 1.3, ease: [0.76, 0, 0.24, 1] }
  },
}

const slideIn = {
  initial: { x: "30%" },
  enter: { 
    x: "0%",
    transition: { duration: 1.1, ease: [0.33, 1, 0.68, 1] }
  },
  exit: {
    x: "-25%",
    opacity: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  }
}

const slideInInner = {
  initial: { x: "6%" },
  enter: { 
    x: "0%",
    transition: { duration: 1.8, ease: [0.33, 1, 0.68, 1] }
  },
  exit: {
    x: "-10%",
    opacity: 0,
    transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] }
  }
}

if (typeof window !== 'undefined') {
  const Flickity = require('flickity');
}

class HomeCarousel extends Component {
  state = { 
    Flickity: null,
  };

  constructor(props) {
    super(props);
    if (typeof window !== 'undefined') {
      const Flickity = require('flickity');
      this.state.Flickity = Flickity;
    }
  }

  componentDidMount() {
    if (typeof window !== 'undefined') {

      let flickity = null;
      const slideshowEl = document.querySelector('.js-slideshow');
      
      flickity = new this.state.Flickity(slideshowEl, {
        autoPlay: false,
        prevNextButtons: true,
        pageDots: false,
        lazyLoad: false,
        draggable: true,
        wrapAround: true,
        freeScroll: true,
        freeScrollFriction: 0.085,
        cellAlign: 'center'
      });
      // flickity.x = 0;

      wheel.addWheelListener(slideshowEl, event => {
        const wheelNormalized = normalizeWheel(event);
        flickity.applyForce(-wheelNormalized.pixelY / 20);
        flickity.startAnimation();
        flickity.dragEnd();
      });

      // slideshowEl.addEventListener('mouseenter', play, false);
      // slideshowEl.addEventListener('focusin', play, false);
      // slideshowEl.addEventListener('mouseleave', play, false);
      // slideshowEl.addEventListener('focusout', play, false);

      // flickity.on('dragStart', () => {
      //   isPaused = true;
      // });

      // update();
    }

    // const members = document.querySelectorAll('.slide');
    // if(Object.keys(members).length > 0) {
    //   function memberHover(member) {
    //     members.forEach(member => {
    //       member.classList.remove('opacity-100');
    //       member.classList.add('opacity-50');
    //       member.classList.add('slide--deactive');
    //     });
    //     member.target.classList.remove('slide--deactive');
    //     member.target.classList.add('opacity-100');
    //   };
    //   function memberReset(member) {
    //     members.forEach(member => {
    //       member.classList.remove('opacity-50');
    //       member.classList.remove('slide--deactive');
    //       member.classList.add('opacity-100');
    //     });
    //   }
    //   members.forEach(member => {
    //     member.addEventListener('mouseenter', memberHover);
    //   });
    //   members.forEach(member => {
    //     member.addEventListener('mouseleave', memberReset);
    //   });
    // }
  }

  // shuffleArray(array) {
  //   let i = array.length - 1;
  //   for (; i > 0; i--) {
  //     const j = Math.floor(Math.random() * (i + 1));
  //     const temp = array[i];
  //     array[i] = array[j];
  //     array[j] = temp;
  //   }
  //   return array;
  // };

  
  render() {
    
    return (
      <motion.div
        initial="initial"
        animate="enter"
        exit="exit"
        className="slideshow js-slideshow w-full fixed inset-0"
      >
        {this.props.slides.map((item, i) => {
          return (
            <motion.div variants={slideIn} className="slide" key={i}>
              <Link href={`/${item.slug.current}`}>
                <a className="block h-full slide__link group">
                  <div className="w-full h-full slide__img relative overflow-hidden">
                    <div className="object-cover object-center group-hover:scale-110 transition ease-in-out duration-500">
                      <ImageWrapper
                        className="w-full h-full object-cover object-center"
                        image={this.props.teaser ? item.teaserImage.asset : item.asset}
                        alt="leisurecoop logo"
                        baseWidth={550}
                        baseHeight={900}
                        fill={true}
                        priority
                      />
                    </div>
                  </div>

                  { this.props.teaser ? (
                    <>
                      <span className="text-blue uppercase block mb-px">{item.title}</span>
                      <span className="text-off-black uppercase block text-xs opacity-75">{item.teaserSubtitle}</span>
                    </>
                  ) : (
                    <>
                      <span className="text-off-black uppercase block text-xs md:text-sm opacity-75">{index + 1}/{slides.length}</span>
                    </>
                  )}
                </a>
              </Link>
          </motion.div>
          )
        })}
        
      </motion.div>
    )
  }
}

export default HomeCarousel