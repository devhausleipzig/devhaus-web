import "./Profile.scss";
import Picture from "components/Picture";

export default function Profile({ name, role, image }) {
  return (
    <div className="profile">
      <div className="image-container">
        <Picture src={image} width={348} height={348} alt={name}></Picture>
      </div>
      <h3>{name}</h3>
      <div className="text-1 button-text">{role}</div>
    </div>
  );
}
