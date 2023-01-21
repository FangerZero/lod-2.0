import {saveToStorage} from '../util/localstorage';

export default function Banner() {
    const setTheme = (e) => {
      saveToStorage('data-theme', e.target.value);
      return document.documentElement.setAttribute('data-theme', e.target.value);
    };

  return (
    <nav className="sticky top-0 bg-secondary hidden md:flex md:flex-row items-center justify-center">
      <button className="nav-style" onClick={e => setTheme(e)} value="default">default</button>
      <button className="nav-style" onClick={e => setTheme(e)} value="red">Red</button>
      <button className="nav-style" onClick={e => setTheme(e)} value="darkness">Darkness</button>
      <button className="nav-style" onClick={e => setTheme(e)} value="jade">Jade</button>
    </nav>
  )
}