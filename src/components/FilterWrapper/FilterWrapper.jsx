import { setFilter } from '../../redux/filter/slice';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useRef, useState } from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';
import DropdownArrow from 'assets/icons/dropdownArrow.svg?react';
import { selectFilter } from '../../redux/filter/selectors';
import {
  DropdownBtn,
  DropdownItem,
  DropdownList,
  InputLabel,
  InputWrapper,
  Wrapper,
} from './FilterWrapper.styled';

const FilterWrapper = ({
  filterName,
  defaultValue,
  options,
  label,
  inputWidth,
}) => {
  const [onShowDropdown, setOnShowDropdown] = useState(false);
  const [filterValue, setFilterValue] = useState('');
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const transitionRef = useRef(null);

  const filter = useSelector(selectFilter);

  useEffect(() => {
    setFilterValue(filter[filterName]);
  }, [filter, filterName]);

  const handleSelectFilterValue = brand => {
    setFilterValue(brand);
    dispatch(setFilter({ [filterName]: brand, isFilters: true }));
    setOnShowDropdown(false);
  };

  useEffect(() => {
    const clickOutside = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOnShowDropdown(false);
      }
    };

    document.addEventListener('click', clickOutside);
    return () => {
      document.removeEventListener('click', clickOutside);
    };
  }, []);

  return (
    <>
      <Wrapper ref={dropdownRef}>
        <InputWrapper>
          <InputLabel>{label}</InputLabel>
          <DropdownBtn
            inputWidth={inputWidth}
            isOpen={onShowDropdown}
            onClick={() => setOnShowDropdown(prev => !prev)}
          >
            {filterValue ? filterValue : defaultValue}
            <DropdownArrow />
          </DropdownBtn>
        </InputWrapper>

        <CSSTransition
          in={onShowDropdown}
          nodeRef={transitionRef}
          timeout={300}
          classNames="dropdown-menu"
          unmountOnExit
        >
          <DropdownList ref={transitionRef}>
            {options.map(option => (
              <DropdownItem
                onClick={() => handleSelectFilterValue(option)}
                key={option}
              >
                {option}
              </DropdownItem>
            ))}
          </DropdownList>
        </CSSTransition>
      </Wrapper>
    </>
  );
};
export default FilterWrapper;

FilterWrapper.propTypes = {
  filterName: PropTypes.string.isRequired,
  defaultValue: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
  inputWidth: PropTypes.string.isRequired,
};
