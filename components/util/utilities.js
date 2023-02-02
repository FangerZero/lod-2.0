
export const mapToArray = (map) => {
    const mapArr = [...map];
    const arr = mapArr.map(([key, value]) => value);
    return arr;
}