import type {CSSProperties} from 'react';

const detailStyle: CSSProperties = {
  fontSize: "0.9rem",
  color: "#bbbbbb",
  marginBottom: "0.5rem",
};

const ProductDetail = ({
  label,
  value,
}: {
  label: string;
  value: string | number | undefined;
}) => {
  return <p style={detailStyle}>{label}: {value ?? "-"}</p>;
};

export { ProductDetail };
