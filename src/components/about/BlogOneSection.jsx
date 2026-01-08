import { Link } from 'react-router';

const blogPosts = [
  {
    id: 1,
    image: '/assets/images/blog/blog-1-1.jpg',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'One such example is our recent food distribution program.',
  },
  {
    id: 2,
    image: '/assets/images/blog/blog-1-2.jpg',
    date: '25 June 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title:
      "the impact of our community doesn't stop at food distribution.",
  },
  {
    id: 3,
    image: '/assets/images/blog/blog-1-3.jpg',
    date: '15 March 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'These stories are just a few examples of how powerful.',
  },
];

function BlogOneSection() {
  return (
    <section className="blog-one">
      <div className="blog-one__shape-1 float-bob">
        <img src="/assets/images/shapes/blog-one-shape-1.png" alt="" />
      </div>
      <div className="container">
        <div className="blog-one__top">
          <div className="section-title text-left sec-title-animation animation-style2">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape"></div>
              <span className="section-title__tagline">Our Blog</span>
            </div>
            <h2 className="section-title__title title-animation">
              Frequently asking <br />
              questions.
            </h2>
          </div>
          <div className="blog-one__top-btn-box">
            <Link to="/blog" className="blog-one__top-btn thm-btn">
              <span>See All Blog</span>
              <i className="icon-arrow-up"></i>
            </Link>
          </div>
        </div>
        <div className="row">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              className="col-xl-4 col-lg-4 wow fadeInUp"
              data-wow-delay={`${0.3 + index * 0.2}s`}
            >
              <div className="blog-one__single">
                <div className="blog-one__img-box">
                  <div className="blog-one__img">
                    <img src={post.image} alt="" />
                    <div className="blog-one__plus">
                      <Link to="/blog-details">
                        <span className="icon-plus"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-one__date">
                    <div className="blog-one__date-shape-1">
                      <img
                        src="/assets/images/shapes/blog-one-date-shape-1.png"
                        alt=""
                      />
                    </div>
                    <div className="blog-one__date-shape-2">
                      <img
                        src="/assets/images/shapes/blog-one-date-shape-2.png"
                        alt=""
                      />
                    </div>
                    <p>{post.date}</p>
                  </div>
                </div>
                <div className="blog-one__content">
                  <ul className="blog-one__meta list-unstyled">
                    <li>
                      <a href="#">
                        <span className="icon-user-two"></span>By {post.author}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-chat"></span>
                        {post.comments}
                      </a>
                    </li>
                  </ul>
                  <h3 className="blog-one__title">
                    <Link to="/blog-details">{post.title}</Link>
                  </h3>
                  <div className="blog-one__btn-box">
                    <Link to="/blog-details" className="blog-one__btn thm-btn">
                      <span>Read More</span>
                      <i className="icon-arrow-up"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default BlogOneSection;
