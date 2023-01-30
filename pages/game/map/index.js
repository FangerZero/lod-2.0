import fs from 'fs/promises';
import path from 'path';
import Header from '../../../components/layout/header'
import Image from 'next/image'
import worldMap from '../../../public/images/game/endiness.webp'
import { useRef, useState, useEffect } from 'react'
import Link from 'next/link'

export default function Map(props) {
  const mapRef = useRef(null);
  const [curImgDimensions, setCurImgDimensions] = useState({});
  const [cityInfo, setCityInfo] = useState({show: false, name: ""});
  const {cities} = props;

  useEffect(() => {
    const { height, width } = mapRef.current.getBoundingClientRect();
    setCurImgDimensions({height: height, width: width});
  }, []);
    
  const showCity = (city) => {
    setCityInfo({...cityInfo, show: true, name: city.name, coordinates: city.coordinates})
  };
  const hideCity = () => {
    setCityInfo({show: false})
  };

  const mapResize = () => {
    const { height, width } = mapRef.current.getBoundingClientRect();
    if (curImgDimensions.width !== width || curImgDimensions.height !== height) {
      setCurImgDimensions({height: height, width: width});
    } 
  }
  
  const cityMark = (city) => {
    const left = reCalc(city.coordinates[0], curImgDimensions.width, worldMap.width);
    const top = reCalc(city.coordinates[1], curImgDimensions.height, worldMap.height);
    const width = reCalc(city.size[0], curImgDimensions.width, worldMap.width);
    const height = reCalc(city.size[1], curImgDimensions.height, worldMap.height);
    return (
      <Link style={{left: left, top: top, width: `${width}px`, height: `${height}px`}} className={`absolute z-40`} key={city.name} data-cy={city.name} onMouseOver={() => showCity(city)} onMouseLeave={() => hideCity()} href={`/game/map/${city.link}`}/>
    );
  };
  
  const reCalc = (coordinate, client, original) => {
    const delta = client / original;
    const newCoord = Math.floor(coordinate * delta);
    return newCoord;
  };
  
  return (
    <div className="block md:w-fit m-5">
      <Header title="Map" description="description of world map page" />
        <div id="map-container" className="w-fit relative">
            <Image src={worldMap} ref={mapRef} alt="World Map of Endiness" className="w-fit" onMouseOver={() => mapResize()} />
            {cities && cities.map(city => cityMark(city))}
            {cityInfo.show &&
              <div className={`absolute bg-primary border border-accent left-1/4 top-1/4 ml-4 p-1 opacity-70`}>
                {cityInfo.name}
              </div>
            }
        </div>
    </div>
    
  );    
}

//  *****    Will update with Firebase later     *****
async function getDBCities() {
  const filePath = path.join(process.cwd(), 'testData','cities.json');
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);
  return data;
} 

export async function getStaticProps() {
  const cities = await getDBCities();

  if (!cities) {
    return { notFound: true };
  }

  return {
      props: {
        cities: cities
      },
  };
}