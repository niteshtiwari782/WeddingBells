import { GoDotFill } from 'react-icons/go';

export default function FacilitiesList({ facilities }) {
  return (
    <div className="venue-detail-facilities-container">
      {facilities?.map((item, i) => (
        <div key={i} className="facilities-item">
          <GoDotFill /> {item}
        </div>
      ))}
    </div>
  );
}
