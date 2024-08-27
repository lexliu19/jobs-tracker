const FormRowSelect = ({ name, label, list, defaultVal = '' }) => {
  return (
    <div className="form-row">
      <label className="form-label">{label || name}</label>
      <select
        id={name}
        name={name}
        className="form-select"
        defaultValue={defaultVal}
      >
        {list.map((item, index) => (
          <option key={index} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormRowSelect;
