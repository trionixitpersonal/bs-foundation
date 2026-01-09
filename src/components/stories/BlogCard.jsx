import { Link } from 'react-router';


function BlogCard({ blog, delay }) {
  return (
    <div
      className="col-xl-4 col-lg-4 col-md-6 wow fadeInUp"
      data-wow-delay={delay}
    >
      <div className="blog-one__single">
        <div className="blog-one__img-box">
          <div className="blog-one__img">
            <img src={blog.image} alt="" />
            <div className="blog-one__plus">
              <Link to="/blog-details" className="blog-one__btn thm-btn">
                <span>Read More</span>
                
              </Link>
            </div>
          </div>
          {/* <div className="blog-one__date">
            <div className="blog-one__date-shape-1">
              <img
                src="/assets/images/shapes/blog-one-date-shape-1.png"
                alt=""
              />
            </div>
            <div className="blog-one__date-shape-2">
              <img
                src="/assets/images/shapes/blog-one-date-shape-1.png"
                alt=""
              />
            </div>
            <p>{blog.date}</p>
          </div> */}
        </div>
        <div className="blog-one__content">
          <ul className="blog-one__meta list-unstyled">
            <li>
              <a href="#">
                <span className="icon-user-two"></span>By {blog.author}
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-chat"></span>
                {blog.date}
              </a>
            </li>
          </ul>
          <h3 className="blog-one__title">
            <Link to="/blog-details">{blog.title}</Link>
          </h3>
          {/* <div className="blog-one__btn-box">
            <Link to="/blog-details" className="blog-one__btn thm-btn">
              <span>Read More</span>
              <i className="icon-arrow-up"></i>
            </Link>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default BlogCard;
