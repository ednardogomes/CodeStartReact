const CustonInput = ({ label }) => {
  return (
    <div className="custon-input-container">
      <input type="text" className="custon-input" />
      {label ? (
        <label
          className={`${value.length !== "" ? "shrink" : ""} custom-input-label`}
        ></label>
      ) : null}
    </div>
  );
};

export default CustonInput;
