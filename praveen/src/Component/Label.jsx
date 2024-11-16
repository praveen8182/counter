const Label = ({ placeholder, label }) => {
  return (
    <div>
      <label htmlFor="">{label}</label>
      <input placeholder={placeholder} />
    </div>
  );
};
export default Label;
