import {saveToStorage, getFromStorage} from '../util/localstorage'
import Image from 'next/image'
import {useState, useEffect} from 'react'

export default function Theme() {
  const [showSpirits, setShowSpirits] = useState(false);
  const [currentColor, setCurrentColor] = useState('default');
  const spirits = {
    'default': '/images/bullets/default.webp',
    'red': '/images/bullets/DS_Red-Eye.webp',
    'darkness': '/images/bullets/DS_Darkness.webp',
    'jade': '/images/bullets/DS_Jade.webp',
    'silver': '/images/bullets/DS_WhiteSilver.webp',
    'violet': '/images/bullets/DS_Violet.webp',
    'blue-sea': '/images/bullets/DS_BlueSea.webp',
    'gold': '/images/bullets/DS_Golden.webp',
    'divine': '/images/bullets/DS_Divine.webp',
  }
  
  useEffect(() => {
    setCurrentColor(() => getFromStorage('data-theme'));
  }, [currentColor]);

  const setTheme = (color) => {
    setShowSpirits(false)
    saveToStorage('data-theme', color);
    setCurrentColor(color);
    return document.documentElement.setAttribute('data-theme', color);
  };

  return (
    <div className="absolute m-0 p-0 inset-x-0 inset-y-0 left-0"> 
      <Image className="m-1" src={spirits[currentColor]} alt="Current Theme" width="13" height="13" onClick={() => setShowSpirits(true)}/>
      <div className={showSpirits ? "flex flex-1" : "hidden"}>
          <Image className="m-1" src={spirits.default} alt="Default Theme" width="13" height="13" onClick={() => setTheme("default")}/>
          <Image className="m-1" src={spirits.red} alt="Red-Eye Dragoon Spirit Theme" width="13" height="13" onClick={() => setTheme("red")}/>
          <Image className="m-1" src={spirits.darkness} alt="Darkness Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("darkness")}/>
          <Image className="m-1" src={spirits.jade} alt="Jade Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("jade")}/>
          <Image className="m-1" src={spirits.silver} alt="White Silver Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("silver")}/>
          <Image className="m-1" src={spirits.violet} alt="Red Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("violet")}/>
          <Image className="m-1" src={spirits['blue-sea']} alt="Red Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("blue-sea")}/>
          <Image className="m-1" src={spirits.gold} alt="Red Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("gold")}/>
          <Image className="m-1" src={spirits.divine} alt="Red Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("divine")}/>
      </div>
    </div>
  )
}
