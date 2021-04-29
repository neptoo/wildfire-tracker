const LocationInfoBox = ({ info }) => {
  return (
    <div className="location-info">
      <h2>Event Location Info</h2>
      <li>
        ID:<strong>{info.id}</strong>
      </li>
      <li>
        TITLE:<strong>{info.title}</strong>
      </li>
    </div>
  );
};

export default LocationInfoBox;
