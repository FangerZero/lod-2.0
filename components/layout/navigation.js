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
      <div className="group">
        <button className="nav-style" onClick={e => setTheme(e)} value="darkness">Darkness</button>
        <div className="menu-dropdown-content nav-style">
          <button>Hello</button>
        </div>
      </div>
      <button className="nav-style" onClick={e => setTheme(e)} value="jade">Jade</button>
      <button className="nav-style" onClick={e => setTheme(e)} value="silver">Silver</button>
      <button className="nav-style" onClick={e => setTheme(e)} value="violet">Violet</button>
      <div className="group">
      <button className="nav-style" onClick={e => setTheme(e)} value="blue-sea">Blue-sea</button>
        <div className="menu-dropdown-content nav-style">
          <button>Hello</button>
        </div>
      </div>
      <button className="nav-style" onClick={e => setTheme(e)} value="gold">Gold</button>
      <button className="nav-style" onClick={e => setTheme(e)} value="divine">Divine</button>
    </nav>
  )
}
/*
                <div className={styles['dropdown-content']}>
                    <Link className={styles.drpdwnbtn} href="/community/petition">Petition</Link>
                    <Link className={styles.drpdwnbtn} href="/community/projects">Projects</Link>
                    <Link className={styles.drpdwnbtn} href="/community/fan-art">Fan Art</Link>
                    <Link className={styles.drpdwnbtn} href="/community/forum">Forum</Link>
                    <Link className={styles.drpdwnbtn} href="/community/speedruns">Speedruns</Link>
                    <Link className={styles.drpdwnbtn} href="/community/credits">Credits</Link>
                </div>
*/