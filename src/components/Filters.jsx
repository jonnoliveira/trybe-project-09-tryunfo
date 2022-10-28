import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Filters extends Component {
  render() {
    const {
      onInputChange,
      nameFilter,
      rareFilter,
      trunfoFilter,
      isFilterDisable,
    } = this.props;

    return (
      <div>

        <label htmlFor="nameFilter">
          Nome:
          <input
            type="text"
            name="nameFilter"
            id="nameFilter"
            value={ nameFilter }
            onChange={ onInputChange }
            disabled={ isFilterDisable }
            data-testid="name-filter"
          />
        </label>

        <label htmlFor="rareFilter">
          Raridade:
          <select
            type="text"
            name="rareFilter"
            id="rareFilter"
            value={ rareFilter }
            onChange={ onInputChange }
            disabled={ isFilterDisable }
            data-testid="rare-filter"
          >
            <option value="todas">todas</option>
            <option value="normal">normal</option>
            <option value="raro">raro</option>
            <option value="muito raro">muito raro</option>
          </select>
        </label>

        <label htmlFor="trunfoFilter">
          Super Trunfo:
          <input
            type="checkbox"
            name="trunfoFilter"
            id="trunfoFilter"
            value={ trunfoFilter }
            onChange={ onInputChange }
            data-testid="trunfo-filter"
          />
        </label>

      </div>
    );
  }
}

Filters.propTypes = {
  nameFilter: PropTypes.string.isRequired,
  rareFilter: PropTypes.string.isRequired,
  trunfoFilter: PropTypes.bool.isRequired,
  isFilterDisable: PropTypes.bool.isRequired,

  onInputChange: PropTypes.func.isRequired,
};

export default Filters;
