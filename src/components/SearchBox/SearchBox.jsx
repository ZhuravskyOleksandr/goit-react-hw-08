import css from './SearchBox.module.css';
import { useId } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectNameFilter, changeFilter } from '../../redux/filtersSlice';

export default function SearchBox() {
  const searchContactID = useId();
  const dispatch = useDispatch();
  const filter = useSelector(selectNameFilter);

  return (
    <div className={css.searchWrapper}>
      <label htmlFor={searchContactID}>Find contacts by name</label>
      <input
        className={css.searchInput}
        type="text"
        id={searchContactID}
        value={filter}
        onChange={evt => dispatch(changeFilter(evt.target.value))}
      />
    </div>
  );
}
