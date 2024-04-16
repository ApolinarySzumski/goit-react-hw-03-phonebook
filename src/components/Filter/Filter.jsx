import PropTypes from 'prop-types';

export const Filter = ({ filter, handleChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={filter}
        title="Find contacts by name"
        onChange={handleChange}
      />
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  handleChange: PropTypes.func,
};
