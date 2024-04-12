import PropTypes from 'prop-types';

export const Filter = ({ data, handleChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="filter"
        value={data.filter}
        title="Find contacts by name"
        onChange={handleChange}
      />
    </>
  );
};

Filter.propTypes = {
  data: PropTypes.objectOf(PropTypes.string),
  handleChange: PropTypes.func,
};
