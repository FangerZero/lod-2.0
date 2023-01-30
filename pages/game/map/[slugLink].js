import fs from 'fs/promises';
import path from 'path';
import Header from '../../../components/layout/header'
import Image from 'next/image'
import { useRef, useState, useEffect, useLayoutEffect } from 'react'

export default function City(props) {
  const {name, bgm, bgmLink, imgDir, description } = {...props.cityDetails}

  useEffect(() => {
  }, []);
    
  
  return (
    <div className="">
      <Header title={name} description="Welcome to a city page" />
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

async function getDBCity(link = null) {
  const cities = await getDBCities();
  if (link === null) {
      return [];
  }
  return cities.find(city => city.link == link);
}
  
  export async function getStaticProps(context) {
    const { params } = context;
    const dbCity = await getDBCity(params.slugLink);
  
    if (!dbCity) {
      return { notFound: true };
    }
  
    return {
        props: {
          cityDetails: dbCity
        },
    };
  }
  
  export async function getStaticPaths() {
    const cities = await getDBCities();
    const pathsWithParams = cities.map(city => ({params: {slugLink: city.link}}));
  
    return {
      paths: pathsWithParams,
      fallback: 'blocking'
    };
  }