export const mapToArray = (map) => {
    const mapArr = [...map];
    const arr = mapArr.map(([key, value]) => value);
    return arr;
}



export const getRand = (min = 0, max = 0) => {
    if (max === 0) {
        return Math.floor(Math.random() * min);
    } else {
        return Math.floor(Math.random() * (max - min) + min);
    }
}

export const importAllFiles = (r) => {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}