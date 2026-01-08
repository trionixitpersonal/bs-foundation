import { Link } from 'react-router';

function FAQPageHeader() {
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
          <div className="page-header__shape-1">
            <img src="/assets/images/shapes/page-header-shape-1.png" alt="" />
          </div>
          <h2>Faq</h2>
          <div className="thm-breadcrumb__box">
            <ul className="thm-breadcrumb list-unstyled">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <span>-</span>
              </li>
              <li>Faq</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FAQPageHeader;
