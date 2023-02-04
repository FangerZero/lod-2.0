import { useState, useEffect } from "react"
import { getRand, importAllFiles } from '../util/utilities'
import Image from 'next/image'
    
export default function Captcha(props) {
    const {setCaptcha} = props;
    const [subjectImage, setSubjectImage] = useState("");
    const [images, setImages] = useState([]);
    const [clicks, setClicks] = useState(0);
    const [verified, setVerified] = useState(false);
    const [unverified, setUnverified] = useState(false);
    const characters = ['Rose', 'Dart', 'Shana', 'Lavitz', 'Kongol', 'Haschel', 'Albert', 'Meru', 'Miranda', 'Lloyd'];
    const imageFiles = useState(importAllFiles(require.context('../../public/images/captcha', false, /\.(png|jpe?g|svg|webp)$/)));

    useEffect(() => {
        const id = getRand(characters.length);
        const imageKeys = Object.keys(imageFiles[0]);
        let imgRay = [];
        let imgClicks = 0;
        let first = getRand(8);
        let second = getRand(9,20);
        while (imgRay.length <= 20) {
            let newId = getRand(characters.length);
            if (imgRay.length === first || imgRay.length === second || newId === id) {
                imgClicks++;
                newId = id;
            }
            
            let tempImgs = imageKeys.filter(key => {
                if (newId !== id) {
                    return key.toLowerCase().indexOf(characters[newId].toLowerCase()) >= 0 && key.toLowerCase().indexOf(characters[id].toLowerCase()) < 0
                }
                return key.toLowerCase().indexOf(characters[newId].toLowerCase()) >= 0
            });         
            imgRay.push(`/images/captcha/${tempImgs[getRand(tempImgs.length)]}`);
        }
        setSubjectImage(characters[id]);
        setImages([...imgRay]);
        setClicks(imgClicks);
    }, [])

    const checkImage = (file, index) => {
        if (file.toLowerCase().indexOf(subjectImage.toLowerCase()) < 0) {
            setCaptcha(true)
            setUnverified(true);
        } else if (clicks === 1 && file.toLowerCase().indexOf(subjectImage.toLowerCase()) >= 0) {
            setCaptcha(false);
            setVerified(true);
        } else {
            let imgCopy = [...images];
            imgCopy.splice(index,1); // Remove the image clicked
            for (let i=0; i <= imgCopy.length; i++) {
                if (i >= 10 && imgCopy[i] && imgCopy[i].toLowerCase().indexOf(subjectImage.toLowerCase()) >= 0) {
                    let newIndex = getRand(8);
                    imgCopy.splice(newIndex, 0, imgCopy[i]);
                    imgCopy.splice(i+1, 1);
                }
            }
            setImages([...imgCopy]);
            setClicks(clicks-1);

        }
    }

    const displayImage = (index) => {
        return (<Image
            className="bg-accent m-1 cursor-pointer"
            src={images[index]}
            onClick={() => checkImage(images[index], index)} 
            alt={`Captcha Image ${index}`}
            width={200}
            height={200}/>
            )
    }
    
    return (
      <div className="md:justify-center" data-cy="captcha">
        {verified &&
            <div>Verified</div>
        }
        {unverified &&
            <div>Unverified - Please Refresh</div>
        }
        {!verified && !unverified && images &&
            <div>
                Find {subjectImage}
                <div className="flex flex-row">
                    {displayImage(0)}
                    {displayImage(1)}
                    {displayImage(2)}
                </div>
                <div className="flex flex-row">
                    {displayImage(3)}
                    {displayImage(4)}
                    {displayImage(5)}
                </div>
                <div className="flex flex-row">
                    {displayImage(6)}
                    {displayImage(7)}
                    {displayImage(8)}
                </div>
            </div>
        }
      </div>
    )
  }
  