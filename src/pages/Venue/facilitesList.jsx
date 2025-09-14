import { FaRegDotCircle } from 'react-icons/fa';

export default function FacilitiesList({ facilities }) {
  return (
    <div className="venue-detail-facilities-container">
      {facilities?.map((item, i) => (
        <div key={i} className="facilities-item">
          <FaRegDotCircle /> {item}
        </div>
      ))}
    </div>
  );
}
