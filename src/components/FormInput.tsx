type inputs = {
  label: string;
  name: string;
  type: string;
  defaultValue: string;
};
function FormInput({ label, name, type, defaultValue }: inputs) {
  return (
    <div className="form-control ">
      <label className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
        type={type}
        name={name}
        defaultValue={defaultValue}
        className="input input-bordered "
      />
    </div>
  );
}

export default FormInput;
