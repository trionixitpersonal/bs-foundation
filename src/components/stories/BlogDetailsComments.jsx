function BlogDetailsComments() {
  return (
    <div className="comment-one">
      <h3 className="comment-one__title">02 - Comments</h3>
      <div className="comment-one__single">
        <div className="comment-one__image">
          <img src="/assets/images/blog/comment-1-1.jpg" alt="" />
        </div>
        <div className="comment-one__content">
          <h3>Monsur Rahman Lito</h3>
          <p>
            Phasellus ac consequat turpis, sit amet fermentum
            nulla. Donec dignissim augue nunc. Praesent bibendum
            erat ac lectus lobortis.
          </p>
          <div className="comment-one__btn-box">
            <a href="#" className="comment-one__btn"
              >Reply</a
            >
          </div>
        </div>
      </div>
      <div className="comment-one__single comment-one__single-2">
        <div className="comment-one__image">
          <img src="/assets/images/blog/comment-1-2.jpg" alt="" />
        </div>
        <div className="comment-one__content">
          <h3>Nur Alom Md</h3>
          <p>
            Phasellus ac consequat turpis, sit amet fermentum
            nulla. Donec dignissim augue nunc. Praesent bibendum
            erat ac lectus lobortis.
          </p>
          <div className="comment-one__btn-box">
            <a href="#" className="comment-one__btn"
              >Reply</a
            >
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsComments;
