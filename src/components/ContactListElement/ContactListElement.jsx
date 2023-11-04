import PropTypes from 'prop-types';

const ContactListElement = ({ element, deleteElement }) => {
  return (
    <li>
      <p>
        {element.name}: {element.number}
        <button onClick={deleteElement}>Delete</button>
      </p>
    </li>
  );
};

ContactListElement.propTypes = {
  element: PropTypes.array,
  deleteElement: PropTypes.func,
};

export default ContactListElement;
