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
    <div className="bg-neuGray bg-opacity-30 w-screen relative right-24 pb-44  px-24">
      <div
        className="h-40 w-full bg-action bg-cover bg-neuVeryDarkBlue rounded-lg flex place-content-center grid-flow-col gap-4 py-11 px-16 text-2xl 
    relative -top-20 z-10"
      >
        <Action
          inputValue={inputValue}
          setInputValue={setInputValue}
          shorten={shorten}
        />
      </div>

      <div className="w-full bg-cover rounded-lg grid gap-4 text-2xl mt-4">
        {links.map((link, i) => (
              <Prevs Links={fullLink[i]} ShortLinks={link} key={i} />
            ))}
      </div>

      <div className="text-center pt-0">
        <h2 className="font-bold text-5xl p-8">Advance Statistics</h2>
        <p className="text-neuGrayishViolet text-xl">
          Track how your links are performing across the web with
          <br /> our advanced statistics dashboard.
        </p>
      </div>
      <div className="flex gap-8 pt-28 relative">
        <div className="absolute h-3 bg-primCyan w-full rounded-xl top-2/3"></div>

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