import { useEffect } from 'react';

function CustomCursor() {
  useEffect(() => {
    const cursor = document.querySelector('.custom-cursor__cursor');
    const cursorTwo = document.querySelector('.custom-cursor__cursor-two');

    if (!cursor || !cursorTwo) return;

    const handleMouseMove = (e) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      
      setTimeout(() => {
        cursorTwo.style.left = e.clientX + 'px';
        cursorTwo.style.top = e.clientY + 'px';
      }, 100);
    };

    const handleMouseEnter = () => {
      cursor.classList.add('cursor-hover');
      cursorTwo.classList.add('cursor-hover');
    };

    const handleMouseLeave = () => {
      cursor.classList.remove('cursor-hover');
      cursorTwo.classList.remove('cursor-hover');
    };

    // Add hover effects to links and buttons
    const links = document.querySelectorAll('a, button, .thm-btn');
    links.forEach((link) => {
      link.addEventListener('mouseenter', handleMouseEnter);
      link.addEventListener('mouseleave', handleMouseLeave);
    });

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener('mouseenter', handleMouseEnter);
        link.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);

  return (
    <>
      <div className="custom-cursor__cursor"></div>
      <div className="custom-cursor__cursor-two"></div>
    </>
  );
}

export default CustomCursor;
