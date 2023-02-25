
import Link from 'next/link'

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <span className="navbar-brand">Elastic community 
        </span>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link href="https://github.com/elastic-community"  className="nav-link">Github 
              </Link>
            </li>
            <li className="nav-item active">
              <Link href="/other-events"  className="nav-link">Other Events 
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
}
