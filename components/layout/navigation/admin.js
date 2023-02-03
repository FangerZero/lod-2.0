import Link from 'next/link'
import { ROLES } from '../../util/roles'

export default function Admin() {
  const admin = 0;
  
  if (admin & ROLES.BANNED) {
    console.log('banned');
    return <></>;
  }

  if (admin & ROLES.MASTER) {
    console.log('Master')
    return (
      <>
        <Link className="nav-style" href="admin/news" data-cy="nav-admin-news">News</Link>
        <Link className="nav-style" href="admin/fanart" data-cy="nav-admin-fanart">Fanart</Link>
        <Link className="nav-style" href="admin/events" data-cy="nav-admin-events">Events</Link>
        <Link className="nav-style" href="admin/users" data-cy="nav-admin-users">Users</Link>
        <Link className="nav-style" href="admin/premium" data-cy="nav-admin-premium">Premium</Link>
      </>
    );
  }

  const news = (admin & ROLES.NEWS) !== 0 || (admin & ROLES.NEWS_ADMIN) !== 0;
  const fanart = (admin & ROLES.FANART) !== 0 || (admin & ROLES.FANART_ADMIN) !== 0;
  const events = (admin & ROLES.EVENTS) !== 0 || (admin & ROLES.EVENTS_ADMIN) !== 0;
  const users = (admin & ROLES.ADMIN) !== 0;
  const premium = (admin & ROLES.PREMIUM) !== 0;
console.log('Admin')
  return (
    <>
      {news &&
        <Link className="nav-style" href="admin/news" data-cy="nav-admin-news">News</Link>
      }
      {fanart &&
        <Link className="nav-style" href="admin/fanart" data-cy="nav-admin-fanart">Fanart</Link>
      }
      {events &&
        <Link className="nav-style" href="admin/events" data-cy="nav-admin-events">Events</Link>
      }
      {users &&
        <Link className="nav-style" href="admin/users" data-cy="nav-admin-users">Users</Link>
      }
      {premium &&
        <Link className="nav-style" href="admin/premium" data-cy="nav-admin-premium">Premium</Link>
      }
    </>
  )
}
