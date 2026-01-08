function TabButtonOne({ id, label, isActive, onClick }) {
  return (
    <li
      className={`p-tab-btn ${isActive ? 'active-btn' : ''}`}
      onClick={onClick}
    >
      <span>{label}</span>
      <i className="icon-right-arrow"></i>
    </li>
  );
}

export default TabButtonOne;
