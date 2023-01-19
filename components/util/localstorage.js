  // save to storage
export const saveToStorage = (key, value) => {
    if(typeof window !== 'undefined') {
        console.log(key, ': ', value);
        return window.localStorage.setItem(key, value);
    }
  }
  
  // get from storage
export const getFromStorage = (key) => {
    if (typeof window !== 'undefined') {
        console.log('window.localStorage.getItem(key): ', window.localStorage.getItem(key));
        // return window.localStorage.getItem(key);
        return false;
    }
  }