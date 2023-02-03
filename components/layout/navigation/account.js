import Link from 'next/link'
import Admin from './admin'
import Login from './login'

export default function Account() {
    const isLoggedIn = false;
    const account = "Alias";
    const admin = true;
  return (
    <nav className="sticky top-0 bg-secondary hidden md:flex md:flex-row items-center justify-center z-nav">      
      <div className="group">
        {!isLoggedIn &&
            <>
                <div className="nav-style" data-cy="nav-account">Account</div>
                <div className="menu-dropdown-content">
                    <Login />
                    <Link className="nav-style" href="" data-cy="nav-admin-google">Google</Link>
                    <Link className="nav-style" href="/signup" data-cy="nav-admin-signup">Sign Up</Link>
                </div>
            </>
          }
          {isLoggedIn &&
                <>
                    <div className="nav-style" data-cy="nav-account-logged-in">{account}</div>
                    <div className="menu-dropdown-content">
                        <Link className="nav-style" href="" data-cy="nav-admin-account">Manage</Link>
                        {admin &&
                            <Admin />
                        }
                        <Link className="nav-style" href="" data-cy="nav-admin-logout">Log out</Link>
                    </div>
                </>
            }
      </div>
    </nav>
  )
}
