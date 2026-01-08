import { Link } from 'react-router';
import { useComponentScript } from '../../hooks/useComponentScript';

// Blog posts data matching exact structure from template (10 items total)
const blogPosts = [
  {
    id: 1,
    image: '/assets/images/blog/blog-1.avif',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: "the impact of our community doesn't stop at food.",
  },
  {
    id: 2,
    image: '/assets/images/blog/blog-2.avif',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: "the impact of our community doesn't stop at food.",
  },
  {
    id: 3,
    image: '/assets/images/blog/blog-3.png',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'One such example is our recent food distribution.',
  },
  {
    id: 4,
    image: '/assets/images/blog/blog-4.jpg',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'We believe that knowledge is a catalyst for change.',
  },
  {
    id: 5,
    image: '/assets/images/blog/blog-1.avif',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: "the impact of our community doesn't stop at food.",
  },
  {
    id: 6,
    image: '/assets/images/blog/blog-3.png',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'One such example is our recent food distribution.',
  },
  {
    id: 7,
    image: '/assets/images/blog/blog-2.avif',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'We believe that knowledge is a catalyst for change.',
  },
  {
    id: 8,
    image: '/assets/images/New folder/blog-3-2.jpg',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: "the impact of our community doesn't stop at food.",
  },
  {
    id: 9,
    image: '/assets/images/New folder/blog-3-3.jpg',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'One such example is our recent food distribution.',
  },
  {
    id: 10,
    image: '/assets/images/New folder/blog-3-3.jpg',
    tag: 'Food',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'One such example is our recent food distribution.',
  },
];

function BlogSection() {
  const carouselRef = useComponentScript(
    (element, $) => {
      if ($(element).length) {
        $(element).owlCarousel({
          loop: true,
          margin: 24,
          nav: false,
          dots: true,
          smartSpeed: 500,
          autoplay: true,
          autoplayTimeout: 7000,
          navText: [
            '<span class="icon-left-arrow"></span>',
            '<span class="icon-right-arrow"></span>',
          ],
          responsive: {
            0: {
              items: 1,
            },
            768: {
              items: 2,
            },
            992: {
              items: 3,
            },
            1200: {
              items: 3,
            },
            1320: {
              items: 3,
            },
          },
        });
      }
    },
    []
  );

  return (
    <section className="blog-three">
      <div className="container">
        <div
          className="section-title text-center sec-title-animation animation-style2"
        >
          <div className="section-title__tagline-box">
            <div className="section-title__tagline-shape-2"></div>
            <span className="section-title__tagline">Our Latest Blog</span>
          </div>
          <h2 className="section-title__title title-animation">
            How Collective Efforts
          </h2>
        </div>
        <div className="blog-three__carousel owl-theme owl-carousel" ref={carouselRef}>
          {blogPosts.map((post) => (
            <div key={post.id} className="item">
              <div className="blog-three__single">
                <div className="blog-three__img-box">
                  <div className="blog-three__img">
                    <img src={post.image} alt="" />
                    <div className="blog-three__plus">
                      <Link to="/blog-details">
                        <span className="icon-plus"></span>
                      </Link>
                    </div>
                  </div>
                  <div className="blog-three__tag-and-date">
                    <p className="blog-three__tag">{post.tag}</p>
                    <p className="blog-three__date">{post.date}</p>
                  </div>
                </div>
                <div className="blog-three__content">
                  <ul className="blog-three__meta list-unstyled">
                    <li>
                      <a href="#">
                        <span className="icon-user-two"></span>By {post.author}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <span className="icon-chat"></span>{post.comments}
                      </a>
                    </li>
                  </ul>
                  <h3 className="blog-three__title">
                    <Link to="/blog-details">
                      {post.title}
                    </Link>
                  </h3>
                  <div className="blog-three__read-more">
                    <Link to="/blog-details">
                      Read more <span className="icon-arrow-up"></span>
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

export default BlogSection;
