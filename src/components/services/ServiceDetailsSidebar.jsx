function ServiceDetailsSidebar() {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Search submitted');
  };

  return (
    <>
      <div className="sidebar__single sidebar__search">
        <h3 className="sidebar__title">Search Hare :</h3>
        <form
          action="#"
          className="sidebar__search-form"
          onSubmit={handleSearchSubmit}
        >
          <input type="search" placeholder="Enter Your Keyword..." />
          <button type="submit">
            <i className="icon-search"></i>
          </button>
        </form>
      </div>
      <div className="sidebar__single services-details__contact">
        <h3 className="sidebar__title">Contact Info :</h3>
        <ul className="services-details__contact-list list-unstyled">
          <li>
            <div className="icon">
              <span className="icon-call"></span>
            </div>
            <div className="content">
              <h4>Contact Phone</h4>
              <p>
                <a href="tel:22202066633">+22(2020) 666 33</a>
              </p>
            </div>
          </li>
          <li>
            <div className="icon">
              <span className="icon-mail"></span>
            </div>
            <div className="content">
              <h4>Contact Mail</h4>
              <p>
                <a href="mailto:Chioary@gmail.com">Chioary@gmail.com</a>
              </p>
            </div>
          </li>
          <li>
            <div className="icon">
              <span className="icon-pin"></span>
            </div>
            <div className="content">
              <h4>Office Location</h4>
              <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
            </div>
          </li>
        </ul>
      </div>
    </>
  );
}

export default ServiceDetailsSidebar;
