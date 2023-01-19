import Header from '../components/header';
import {saveToStorage} from '../components/util/localstorage';

export default function Home() {
  const setTheme = (e) => {
    // document.documentElement.removeAttribute('data-theme');
    // document.documentElement.setAttribute('data-theme', newTheme);
    saveToStorage('data-theme', e.target.value);
    return document.documentElement.setAttribute('data-theme', e.target.value);
  };

  return (
    <div>
      <Header title="Home Page" description="description of home page" />
      
      <main className="bg-nav-bar">
        <button className="p-3 border border-b-gray-200 bg-slate-500" onClick={e => setTheme(e)} value="default">default</button>
        <button className="p-3" onClick={e => setTheme(e)} value="red">Red</button>
        <button className="p-3" onClick={e => setTheme(e)} value="darkness">Darkness</button>
        Main
        <ul>
          <li>meow</li>
          <li>ruff</li>
        </ul>
      </main>

      <footer>
        footer
      </footer>
    </div>
  )
}
