type CustomSelectProps<T extends string> = {
  id: string;
  label: string;
  value: T;
  options: { displayName: string; value: T }[];
  onChange: (value: T) => void;
};

function CustomSelect<T extends string>({
  id,
  label,
  value,
  options,
  onChange,
}: CustomSelectProps<T>) {
  return (
    <div>
      <label htmlFor={id}>
        <div>{label}</div>
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value as T)}
        >
          <option disabled value="">
            -- Select an option --
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.displayName}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}

export { CustomSelect };
