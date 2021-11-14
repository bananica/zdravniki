import { createContext, useCallback, useContext, useState, useEffect } from 'react';
import { useDoctors } from './doctorsContext';
import { useDebounce } from 'hooks';

const FilterContext = createContext();

export const FilterConsumer = FilterContext.Consumer;

function FilterProvider({ children }) {
  const { doctors: _doctors } = useDoctors();

  const [doctorType, setDoctorType] = useState('gp');
  const [accept, setAccept] = useState('vsi');
  const [searchValue, setSearchValue] = useState('');
  const [ids, setIds] = useState([]);

  const [doctors, setDoctors] = useState(_doctors);
  const [filtered, setFiltered] = useState(null);

  const isByIds = ids.length > 0;

  const setFilteredDoctors = useCallback(() => {
    console.log('setFilteredDoctors');
    if (!filtered) {
      return;
    }

    !searchValue && !isByIds && setDoctors(filtered);

    if (isByIds) {
      searchValue && setSearchValue('');
      const doctorsById = filtered.filter(doctor => ids.includes(doctor.id));
      setDoctors(doctorsById);
    }

    if (searchValue) {
      const compare = doctor =>
        doctor.name.includes(searchValue.toUpperCase()) ||
        doctor.fullAddress.includes(searchValue.toUpperCase());
      const combined = filtered.filter(compare);

      setDoctors(combined);
    }
  }, [filtered, searchValue, isByIds, ids]);

  useEffect(() => {
    if (!_doctors) {
      return;
    }

    setFiltered(_doctors.filter(doctorType, accept));
  }, [_doctors, accept, doctorType]);

  useDebounce(() => setFilteredDoctors(), 500, [searchValue]);

  useEffect(() => {
    setFilteredDoctors();
  }, [setFilteredDoctors]);

  const value = {
    doctors,
    setDoctors,
    doctorType,
    setDoctorType,
    accept,
    setAccept,
    searchValue,
    setSearchValue,
    ids,
    setIds,
    get allDoctors() {
      return filtered;
    },
  };
  return <FilterContext.Provider value={value}>{children}</FilterContext.Provider>;
}

function useFilter() {
  const context = useContext(FilterContext);

  if (!context) {
    throw new Error('useFilter must be used within a FilterProvider');
  }
  return context;
}

export { FilterProvider, useFilter };
