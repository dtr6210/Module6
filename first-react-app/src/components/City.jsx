function City({ name, state = "NSW", country = "Australia", children }) {
const newName = name + 'cool'
  return (
    <div className="City">
      <strong>{name}</strong> is in {state}, {country}
      {children}
    </div>
  );
}

export default City;
