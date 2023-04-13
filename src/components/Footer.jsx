import React from "react";
import Helper from "./Helper";
import { ReactComponent as Logo } from '../assets/logo.svg'
import { ReactComponent as Facebook } from '../assets/icon-facebook.svg'
import { ReactComponent as Twitter } from '../assets/icon-twitter.svg'
import { ReactComponent as Pinterest } from '../assets/icon-pinterest.svg'
import { ReactComponent as Instagram } from '../assets/icon-instagram.svg'

const fet = ["Link Shortening", "Branded Links", "Analytics"];
const res = ["Blog", "Developers", "Support"];
const comp = ["About", "Our Team", "Careers", "Contact"];

export default function Footer() {
  return (
    <div className="bg-neuVeryDarkViolet w-screen relative xl:right-24 xl:px-24 lg:py-16 text-white flex lg:justify-between
    
    lg:px-16 lg:right-16 
    
    flex-col lg:flex-row gap-8 text-center lg:gap-0 lg:text-left justify-center right-4 px-4 py-10
    
    ">

        <div className="self-center lg:self-auto">
      <Logo />
        </div>

        

      <div className="flex xl:gap-20
      
      gap-10 flex-col lg:flex-row
      ">
        <div>
          <div className="lg:mb-4 mb-3">
            <button>Features</button>
          </div>
          <Helper btn={fet} />
        </div>

        <div>
          <div className="lg:mb-4 mb-3">
            <button>Resources</button>
          </div>
          <Helper btn={res} />
        </div>

        <div>
          <div className="lg:mb-4 mb-3">
            <button>Company</button>
          </div>
          <Helper btn={comp} />
        </div>

        <div className="lg:flex gap-4 self-start hidden">
          <button>
            <Facebook />
          </button>
          <button>
            <Twitter />
          </button>
          <button>
            <Pinterest />
          </button>
          <button>
            <Instagram />
          </button>
        </div>
      </div>

      <div className="flex gap-4 lg:self-start lg:hidden self-center">
          <button>
            <Facebook />
          </button>
          <button>
            <Twitter />
          </button>
          <button>
            <Pinterest />
          </button>
          <button>
            <Instagram />
          </button>
        </div>

      

    </div>
  );
}
