import BlogDetailsComments from './BlogDetailsComments';
import BlogDetailsCommentForm from './BlogDetailsCommentForm';
import BlogDetailsSidebar from './BlogDetailsSidebar';

function BlogDetailsContent() {
  return (
    <div className="blog-details__content">
      <div className="row">
        <div className="col-xl-8 col-lg-7">
          <div className="blog-details__content-left">
            <ul className="blog-details__meta list-unstyled">
              <li>
                <div className="icon">
                  <span className="icon-people"></span>
                </div>
                <a href="#">By cane Anderson</a>
              </li>
              <li>
                <div className="icon">
                  <span className="icon-chat"></span>
                </div>
                <a href="#">02 Comment</a>
              </li>
            </ul>
            <h2 className="blog-details__title-1">
              our community doesn't stop at food distribution.
            </h2>
            <p className="blog-details__text-1">
              It sounds like you're emphasizing the broader impact and
              reach of your community efforts. Here's a wa y you might
              expand on that idea: Our community doesn't stop at food
              distribution. We are committed
            </p>
            <p className="blog-details__text-2">
              to fostering connections, providing support, and empowering
              every individual we serve. From educatio nal programs to
              wellness initiatives, we're dedicated to making a lasting
              difference in the lives of our community members." Would you
              like to build this out further or focus on any specific.
            </p>
            <h2 className="blog-details__title-2">
              Educational Initiatives :
            </h2>
            <p className="blog-details__text-3">
              Education is a powerful tool for breaking the cycle of
              poverty. We offer workshops and classes that cover essential
              life skills, financial literacy, and vocational training. By
              providing these opportunities, we're not just giving people
              the means to feed themselves today; we're equipping them
              with the knowledge to secure a brighter future.
            </p>
            <div className="blog-details__img-box">
              <div className="row">
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-details__img-box-img">
                    <img
                      src="/assets/images/blog/blog-details-img-box-img-1.jpg"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6">
                  <div className="blog-details__img-box-img">
                    <img
                      src="/assets/images/blog/blog-details-img-box-img-2.jpg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            <h2 className="blog-details__title-3">
              Health and Wellness Programs :
            </h2>
            <p className="blog-details__text-4">
              Good health is the foundation of a strong community. Our
              wellness programs include free health scree nines, fitness
              activities, and mental health support. We partner with local
              health professionals to ensure that our community members
              have access to the care and resources.
            </p>
            <div className="blog-details__tag-box">
              <h3 className="blog-details__tag-title">Tags :</h3>
              <ul className="blog-details__tag-list list-unstyled">
                <li>
                  <a href="#">Commute</a>
                </li>
                <li>
                  <a href="#">Riding</a>
                </li>
                <li>
                  <a href="#">Best</a>
                </li>
                <li>
                  <a href="#">Business</a>
                </li>
                <li>
                  <a href="#">Creative</a>
                </li>
                <li>
                  <a href="#">UX/UI Design</a>
                </li>
              </ul>
            </div>
            <BlogDetailsComments />
            <BlogDetailsCommentForm />
          </div>
        </div>
        <div className="col-xl-4 col-lg-5">
          <BlogDetailsSidebar />
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsContent;
