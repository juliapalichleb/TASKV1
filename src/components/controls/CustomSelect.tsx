import type {ChangeEvent} from "react";

type CustomSelectProps = {
  id: string;
  label: string;
  value: string;
  options: {displayName: string, value: string}[];
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
};

const CustomSelect = ({ id, label, value, options, onChange}: CustomSelectProps) => {

  return (
    <div>
      <label htmlFor={id}>
        <div>{label}</div>
        <select
          id={id}
          name={id}
          value={value}
          onChange={onChange}
        >
          <option disabled value="">
            -- Select a product --
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
};

export { CustomSelect };
