import { useEffect, useState } from 'react';

function SearchPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleToggle = (e) => {
      const target = e.target;
      if (
        target.classList.contains('search-toggler') ||
        target.closest('.search-toggler')
      ) {
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('click', handleToggle);

    return () => {
      document.removeEventListener('click', handleToggle);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle search submission
    console.log('Search submitted');
  };

  return (
    <div className={`search-popup ${isOpen ? 'active' : ''}`}>
      <div className="search-popup__overlay search-toggler"></div>
      <div className="search-popup__content">
        <form action="#" onSubmit={handleSubmit}>
          <label htmlFor="search" className="sr-only">
            search here
          </label>
          <input
            type="text"
            id="search"
            placeholder="Search Here..."
            autoFocus={isOpen}
          />
          <button
            type="submit"
            aria-label="search submit"
            className="thm-btn"
          >
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>
    </div>
  );
}

export default SearchPopup;
