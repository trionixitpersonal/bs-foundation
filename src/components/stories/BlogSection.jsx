import BlogCard from './BlogCard';

const blogPosts = [
  {
    id: 1,
    image: '/assets/images/blog/blog-1.avif',
    date: '10 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'One such example is our recent food distribution program.',
  },
  {
    id: 2,
    image: '/assets/images/blog/blog-2.avif',
    date: '25 June 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: "the impact of our community doesn't stop at food distribution.",
  },
  {
    id: 3,
    image: '/assets/images/blog/blog-3.png',
    date: '15 March 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'These stories are just a few examples of how powerful.',
  },
  {
    id: 4,
    image: '/assets/images/blog/blog-4.jpg',
    date: '19 Aug 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'Caring for the Elderly and Vulnerable Strategy',
  },
  {
    id: 5,
    image: '/assets/images/blog/blog-5.jpg',
    date: '05 June 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'Caring for the Elderly and Vulnerable Strategy',
  },
  {
    id: 6,
    image: '/assets/images/blog/blog-6.jpg',
    date: '11 March 2024',
    author: 'cane Anderson',
    comments: '02 Comment',
    title: 'Our Goal Is Help The Poor Child Around The World',
  },
];

function BlogSection() {
  return (
    <>

      <section className="blog-one" id="blog-section">
        <div className="container">
          <div className="section-title text-center sec-title-animation animation-style1">
            <div className="section-title__tagline-box">
              <div className="section-title__tagline-shape"></div>
              <span className="section-title__tagline">Events Archive</span>
            </div>
            <h2 className="section-title__title title-animation">
              Archived Events & Program Highlights
            </h2>
          </div>
          <div className="row">
            {blogPosts.map((blog, index) => {
              // Calculate delay: .3s, .5s, .7s, then repeat .3s, .5s, .7s
              const delay = `${0.3 + (index % 3) * 0.2}s`;
              return (
                <BlogCard key={blog.id} blog={blog} delay={delay} />
              );
            })}
          </div>
          <div className="prev-and-next">
            <ul className="pg-pagination list-unstyled">
              <li className="prev">
                <a href="#event-section" aria-label="prev">
                  Prev
                </a>
              </li>
              <li className="next">
                <a href="#event-section" aria-label="Next">
                  Next
                </a>
              </li>
            </ul>
            <p className="prev-and-next__text">Showing 01 to 06 of 27</p>
          </div>
        </div>
      </section>
    </>

  );
}

export default BlogSection;
