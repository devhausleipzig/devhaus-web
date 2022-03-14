import Picture from "./Picture";

export default function Profile({ name, role, image }) {
  return (
    <div className="justify-self-center">
      <div className="mb-4">
        <Picture src={image} width={348} height={348} alt={name}></Picture>
      </div>
      <h3 className="font-serif text-3xl font-light">{name}</h3>
      <div className="text-lg uppercase tracking-wider">{role}</div>
    </div>
  );
}
