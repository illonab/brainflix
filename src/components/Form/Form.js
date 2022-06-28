import "./Form.scss";

function Form() {
  return (
    <form className="header__form form" action="">
      <input
        className="from__search"
        type="text"
        name="search"
        placeholder="Search"
      />
      <input
        className="form__submit"
        type="submit"
        name="submit"
        value="Upload"
      />
    </form>
  );
}

export default Form;
