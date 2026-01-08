function BlogDetailsCommentForm() {
  return (
    <div className="comment-form">
      <h3 className="comment-form__title">Leave a Comment</h3>
      <form
        action="/assets/inc/sendemail.php"
        className="comment-form__form contact-form-validated"
        noValidate
      >
        <div className="row">
          <div className="col-xl-6">
            <div className="comment-form__input-box">
              <h4 className="comment-form__input-title">Your Name</h4>
              <input
                type="text"
                placeholder="Enter Your Name"
                name="name"
              />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="comment-form__input-box">
              <h4 className="comment-form__input-title">Your Mail</h4>
              <input
                type="email"
                placeholder="infoflex@info.com"
                name="email"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xl-12 clearfix">
            <div className="comment-form__input-box text-message-box">
              <h4 className="comment-form__input-title">Message</h4>
              <textarea
                name="message"
                placeholder="Write your message"
              ></textarea>
            </div>
            <div className="comment-form__btn-box">
              <button type="submit" className="comment-form__btn">
                Post Comments
              </button>
            </div>
          </div>
        </div>
      </form>
      <div className="result"></div>
    </div>
  );
}

export default BlogDetailsCommentForm;
