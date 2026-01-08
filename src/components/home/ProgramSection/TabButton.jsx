function TabButton({ id, label, isActive, onClick }) {
  return (
    <li
      data-tab={`#${id}`}
      className={`p-tab-btn ${isActive ? 'active-btn' : ''}`}
      onClick={onClick}
    >
      <span>{label}</span>
      <i className="icon-right-arrow"></i>
      <div className="courses-three__tab-btn-shape-1">
        <img
          src="/assets/images/shapes/courses-three-btn-shape-1.png"
          alt=""
        />
      </div>
    </li>
  );
}

export default TabButton;
