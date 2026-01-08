function BlogDetailsSidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__single sidebar__search">
        <h3 className="sidebar__title">Search Hare :</h3>
        <form action="#" className="sidebar__search-form">
          <input
            type="search"
            placeholder="Enter Your Keyword..."
          />
          <button type="submit"><i className="icon-search"></i></button>
        </form>
      </div>
      <div className="sidebar__single sidebar__all-category">
        <h3 className="sidebar__title">Categories :</h3>
        <ul className="sidebar__all-category-list list-unstyled">
          <li>
            <a href="#">Stories of Impact</a>
          </li>
          <li className="active">
            <a href="#">Nutrition Tips</a>
          </li>
          <li>
            <a href="#">Health and Wellness</a>
          </li>
          <li>
            <a href="#">Community Stories</a>
          </li>
          <li>
            <a href="#">Volunteer Opportunities</a>
          </li>
        </ul>
      </div>
      <div className="sidebar__single sidebar__tags">
        <h3 className="sidebar__title">Tags :</h3>
        <div className="sidebar__tags-list">
          <a href="#">Commute</a>
          <a href="#">Best</a>
          <a href="#">Business</a>
          <a href="#">Riding</a>
          <a href="#">UX/UI Design</a>
        </div>
      </div>
    </div>
  );
}

export default BlogDetailsSidebar;
