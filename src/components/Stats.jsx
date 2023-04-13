import React, { useEffect } from "react";
import Card from "./Card";
import Action from "./Action";
import { useState } from "react";
import Prevs from "./Prevs";

const imgs = [
  "../assets/icon-brand-recognition.svg",
  "../assets/icon-detailed-records.svg",
  "../assets/icon-fully-customizable.svg",
];
const keywords = [
  "Brand Recognition",
  "Detailed Records",
  "Fully Customizable",
];
const expands = [
  `Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`,
  `Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.
`,
  `Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.`,
];

const arr1 = [];
const arr2 = [];

export default function Stats() {
  const [inputValue, setInputValue] = useState("");
  const [links, addLinks] = useState([]);
  const [fullLink, addFullLink] = useState([]);

  useEffect(() => {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);

      arr1.push(key);
      arr2.push(value);

      // addFullLink([...fullLink, key]);
      // addLinks([...links, value]);
    }
    addFullLink([...arr1]);
    addLinks([...arr2]);
  }, []);

  const shorten = async () => {
    try {
      const data = (
        await (
          await fetch(`https://api.shrtco.de/v2/shorten?url=${inputValue}`)
        ).json()
      ).result.full_short_link;
      addLinks([...links, data]);
      addFullLink([...fullLink, inputValue]);
      localStorage.setItem(inputValue, data);
    } catch (err) {
      console.log(fullLink);
    }
  };

  return (
    <div className="bg-neuGray bg-opacity-30 w-screen relative xl:right-24 pb-44  xl:px-24
    
    lg:right-16 lg:px-16
    
    right-4 px-4">
      <div
        className="xl:h-40 w-full bg-action bg-cover bg-neuVeryDarkBlue rounded-lg flex place-content-center gap-4 xl:py-11 xl:px-16 xl:text-2xl 
    relative xl:-top-20 z-10
    
    lg:px-10 lg:py-6 lg:h-28 lg:-top-14 lg:text-xl lg:flex-row
    
    flex-col px-4 py-4 h-32 -top-16"
      >
        <Action
          inputValue={inputValue}
          setInputValue={setInputValue}
          shorten={shorten}
        />
      </div>

      <div className="w-full bg-cover rounded-lg grid gap-4 xl:text-2xl mt-4
      text-xl">
        {links.map((link, i) => (
              <Prevs Links={fullLink[i]} ShortLinks={link} key={i} />
            ))}
      </div>

      <div className="text-center pt-0">
        <h2 className="font-bold xl:text-5xl xl:p-8
        lg:text-[2.5rem] lg:p-4
        
        text-[1.6rem] p-2">Advance Statistics</h2>
        <p className="text-neuGrayishViolet xl:text-xl
        lg:text-lg
         text-sm">
          Track how your links are performing across the web with
          <br className="hidden lg:block"/> our advanced statistics dashboard.
        </p>
      </div>
      <div className="flex xl:gap-8 xl:pt-28 relative
      pt-20 gap-6
      
      flex-col lg:flex-row text-center lg:text-left
      ">
        <div className="absolute lg:h-3 bg-primCyan lg:w-full rounded-xl lg:top-2/3

        h-full w-2 left-1/2 lg:left-0 -translate-x-2/4
        lg:translate-x-0"></div>

        <Card keyword={keywords[0]} expand={expands[0]} src={imgs[0]} />
        <Card
          keyword={keywords[1]}
          expand={expands[1]}
          src={imgs[0]}
          top={`2.5rem`}
        />
        <Card
          keyword={keywords[2]}
          expand={expands[2]}
          src={imgs[0]}
          top={`5rem`}
        />
      </div>
    </div>
  );
}
