import { Link } from 'react-router';

function StoriesPageHeader() {
  return (
    <section className="page-header">
      <div
        className="page-header__bg-shape"
        style={{
          backgroundImage: 'url(/assets/images/shapes/page-header-bg-shape.png)',
        }}
      ></div>
      <div className="container">
        <div className="page-header__inner">
          <h2>Stories</h2>
          <div className="thm-breadcrumb__box">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>-</span>
              </li>
              <li>Stories</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default StoriesPageHeader;
