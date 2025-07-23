function NumberOfTriesInput({ numberOfTries, setNumberOfTries }) {
  const handleChange = (event) => {
    event.preventDefault();
    setNumberOfTries(Number(event.target.value));
  };
  return (
    <form className="guess-input-wrapper" onSubmit={handleChange}>
      <label htmlFor="numberOfTries">How many guesses would you like?</label>
      <input
        type="number"
        id="numberOfTries"
        name="numberOfTries"
        min="1"
        max="8"
        defaultValue="6"
        value={numberOfTries}
        onChange={(event) => {
          setNumberOfTries(Number(event.target.value));
        }}
      />
    </form>
  );
}

export default NumberOfTriesInput;
