import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
      <nav>
        <ul>
          <li>
            <Link to="/app1/home">Home</Link>
          </li>
          <li>
            <Link to="/app1/about">About</Link>
          </li>
        </ul>
      </nav>

      <hr />
      <Outlet />
      这部分是子应用
      <div id="sub-app" />
    </div>
  );
}

export default Layout;
