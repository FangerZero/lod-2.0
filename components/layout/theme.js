import {saveToStorage} from '../util/localstorage'
import Image from 'next/image'

export default function Theme() {
    const gray = '/images/bullets/default.webp';
    const red = '/images/bullets/DS_Red-Eye.webp';
    const darkness = '/images/bullets/DS_Darkness.webp';
    const jade = '/images/bullets/DS_Jade.webp';
    const silver = '/images/bullets/DS_WhiteSilver.webp';
    const violet = '/images/bullets/DS_Violet.webp';
    const blueSea = '/images/bullets/DS_BlueSea.webp';
    const gold = '/images/bullets/DS_Golden.webp';
    const divine = '/images/bullets/DS_Divine.webp';

    const setTheme = (color) => {
        console.log(color);
        saveToStorage('data-theme', color);
        return document.documentElement.setAttribute('data-theme', color);
    };

  return (
    <div className="absolute m-0 p-0 inset-x-0 inset-y-0 left-0"> 
        <div className="flex flex-1">
            <Image src={gray} alt="Default Theme" width="13" height="13" onClick={() => setTheme("default")}/>
            <Image src={red} alt="Red-Eye Dragoon Spirit Theme" width="13" height="13" onClick={() => setTheme("red")}/>
            <Image src={darkness} alt="Darkness Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("darkness")}/>
            <Image src={jade} alt="Jade Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("jade")}/>
            <Image src={silver} alt="White Silver Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("silver")}/>
            <Image src={violet} alt="Red Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("violet")}/>
            <Image src={blueSea} alt="Red Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("blue-sea")}/>
            <Image src={gold} alt="Red Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("gold")}/>
            <Image src={divine} alt="Red Dragoon Spirit THeme" width="13" height="13" onClick={() => setTheme("divine")}/>
        </div>
    </div>
  )
}
