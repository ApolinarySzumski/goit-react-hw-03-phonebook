import PropTypes from 'prop-types';

const Form = ({ name, number, change, submit }) => {
  return (
    <form onSubmit={submit}>
      <label>
        Name
        <input
          type="text"
          name="name"
          value={name}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={change}
        />
      </label>
      <label>
        Number
        <input
          type="tel"
          name="number"
          value={number}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          onChange={change}
        />
      </label>
      <button type="submit">Add Contact</button>
    </form>
  );
};

Form.propTypes = {
  name: PropTypes.string,
  number: PropTypes.string,
  change: PropTypes.func,
  submit: PropTypes.func,
};

export default Form;
