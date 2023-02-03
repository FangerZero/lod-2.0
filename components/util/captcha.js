import { useState, useEffect } from "react"
import { getRand } from '../util/utilities'

export default function Captcha(props) {
    const {setCaptcha} = props;
    const [subjectImage, setSubjectImage] = useState("");
    const [images, setImages] = useState([]);
    const [clicks, setClicks] = useState(0);
    const [verified, setVerified] = useState(false);
    const [unverified, setUnverified] = useState(false);
    const characters = ['Rose', 'Dart', 'Shana', 'Lavitz', 'Kongol', 'Haschel', 'Albert', 'Meru', 'Miranda', 'Lloyd'];

    useEffect(() => {
        const id = getRand(characters.length);
        let imgRay = [];
        let imgClicks = 0;
        let first = getRand(8);
        let second = getRand(9,20);
        while (imgRay.length <= 20) {
            let newId = getRand(characters.length);
            if (imgRay.length === first || imgRay.length === second || newId === id) {
                imgClicks++;
            }
            
            if (imgRay.length === first || imgRay.length === second) {
                imgRay.push(characters[id]);
            } else {
                imgRay.push(characters[newId]);
            }
        }
        setSubjectImage(characters[id]);
        setImages([...imgRay]);
        setClicks(imgClicks);
    }, [])

    const checkImage = (imagesIndex) => {
        if (images[imagesIndex] !== subjectImage) {
            setCaptcha(true)
            setUnverified(true);
        } else if (clicks === 1 && images[imagesIndex] === subjectImage) {
            setCaptcha(false);
            setVerified(true);
        } else {
            let imgCopy = [...images];
            imgCopy.splice(imagesIndex,1); // Remove the image clicked
            for (let i=0; i <= imgCopy.length; i++) {
                if (i >= 10 && subjectImage === imgCopy[i]) {
                    let newIndex = getRand(8);
                    imgCopy.splice(newIndex, 0, imgCopy[i]);
                    imgCopy.splice(i+1, 1);
                }
            }
            setImages([...imgCopy]);
            setClicks(clicks-1);
        }
    }
      
    return (
      <div className="md:justify-center" data-cy="captcha">
        {verified &&
            <div>Verified</div>
        }
        {unverified &&
            <div>Unverified - Please Refresh</div>
        }
        {!verified && !unverified &&
            <div>
                Find {subjectImage}
                <div className="flex flex-row">
                    <div className="bg-accent w-fit m-1 cursor-pointer" onClick={() => checkImage(0)}>{images[0]}</div>
                    <div className="bg-accent w-fit m-1 cursor-pointer" onClick={() => checkImage(1)}>{images[1]}</div>
                    <div className="bg-accent w-fit m-1 cursor-pointer" onClick={() => checkImage(2)}>{images[2]}</div>
                </div>
                <div className="flex flex-row">
                    <div className="bg-accent w-fit m-1 cursor-pointer" onClick={() => checkImage(3)}>{images[3]}</div>
                    <div className="bg-accent w-fit m-1 cursor-pointer" onClick={() => checkImage(4)}>{images[4]}</div>
                    <div className="bg-accent w-fit m-1 cursor-pointer" onClick={() => checkImage(5)}>{images[5]}</div>
                </div>
                <div className="flex flex-row">
                    <div className="bg-accent w-fit m-1 cursor-pointer" onClick={() => checkImage(6)}>{images[6]}</div>
                    <div className="bg-accent w-fit m-1 cursor-pointer" onClick={() => checkImage(7)}>{images[7]}</div>
                    <div className="bg-accent w-fit m-1 cursor-pointer" onClick={() => checkImage(8)}>{images[8]}</div>
                </div>
            </div>
        }
      </div>
    )
  }
  