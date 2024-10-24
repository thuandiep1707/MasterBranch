const CustomToolbar = ({ label, onNavigate, onView, view }) => {
    const handleOnChangeView = (event) => {
      onView(event.target.value);
    }
  if (window.innerWidth < 800) {
    return (
      <div className="custom-toolbar">
        <button className='btn-nav' onClick={() => onNavigate('PREV')}><i className="fa-solid fa-chevron-left"/></button>
          <span className='custom-toolbar_label'>{label}</span>
        <button className='btn-nav' onClick={() => onNavigate('NEXT')}><i className="fa-solid fa-chevron-right"/></button>
      </div>
    );
  }
  return (
    <div className="custom-toolbar">
      <div className='custom-toolbar_button'>
        <button className='btn-today' onClick={() => onNavigate('TODAY')}>Today</button>
        <button className='btn-nav' onClick={() => onNavigate('PREV')}>{'<'}</button>
        <button className='btn-nav' onClick={() => onNavigate('NEXT')}>{'>'}</button>
      </div>

      <span className='custom-toolbar_label'>{label}</span>

      <select className='custom-toolbar_select' value={view} onChange={handleOnChangeView}>
        <option value="month">Month</option>
        <option value="week">Week</option>
        <option value="day">Day</option>
        <option value="agenda">Agenda</option>
      </select>
    </div>
  );
};

export default CustomToolbar;
