import Link from 'next/link'
import Admin from './admin';

export default function Account() {
    const isLoggedIn = false;
    const account = "Alias";
    const admin = true;
  return (
    <nav className="sticky top-0 bg-secondary hidden md:flex md:flex-row items-center justify-center z-nav">      
      <div className="group">
        {!isLoggedIn &&
            <>
                <div className="nav-style" data-cy="nav-admin">Account</div>
                <div className="menu-dropdown-content">
                <Link className="nav-style" href="" data-cy="nav-admin-news">Log in</Link>
                <Link className="nav-style" href="" data-cy="nav-admin-fanart">Sign Up</Link>
                </div>
            </>
          }
          {isLoggedIn &&
                <>
                    <div className="nav-style" data-cy="nav-admin">{account}</div>
                    <div className="menu-dropdown-content">
                    <Link className="nav-style" href="" data-cy="nav-admin-fanart">Manage</Link>
                    {admin &&
                        <Admin />
                    }
                    <Link className="nav-style" href="" data-cy="nav-admin-news">Log out</Link>
                    </div>
                </>
            }
      </div>
    </nav>
  )
}
