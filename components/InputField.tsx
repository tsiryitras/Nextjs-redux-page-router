export default function InputField({ label, type, name, placeholder }: any) {
  return (
    <div className="form-control">
      <label htmlFor="" className="label">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className="input-form"
      />
    </div>
  );
}
