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
    <div className="bg-neuVeryDarkViolet w-screen relative xl:right-24 xl:px-24 py-16 text-white flex justify-between
    
    px-16 right-16">

        <div className="">
      <Logo />
        </div>

      <div className="flex xl:gap-0
      
      gap-10">
        <div>
          <div className="mb-4">
            <button>Features</button>
          </div>
          <Helper btn={fet} />
        </div>

        <div>
          <div className="mb-4">
            <button>Resources</button>
          </div>
          <Helper btn={res} />
        </div>

        <div>
          <div className="mb-4">
            <button>Company</button>
          </div>
          <Helper btn={comp} />
        </div>

        <div className="flex gap-4 self-start">
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
    </div>
  );
}
