import "./Profile.scss";

export default function Profile({ name, role, image }) {
  return (
    <div className="profile">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <h3>{name}</h3>
      <div className="text-1 button-text">{role}</div>
    </div>
  );
}
