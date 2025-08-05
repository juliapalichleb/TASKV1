import type {ChangeEvent} from "react";

type CustomInputProps = {
  id: string;
  label: string;
  value?: string | number;
  defaultValue?: string;
  required?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const CustomInput= ({
  id,
  label,
  value,
  defaultValue,
  required = false,
  onChange,
}: CustomInputProps) => {
  return (
      <div className="m-4">
        <label htmlFor={id} className="mr-4">
          <div>
            {required && <span style={{color: "red"}}>*</span>} {label}
          </div>
          <input
              id={id}
              name={id}
              value={value}
              defaultValue={defaultValue}
              onChange={onChange}
          />
        </label>
      </div>
  );
};

export {CustomInput}
