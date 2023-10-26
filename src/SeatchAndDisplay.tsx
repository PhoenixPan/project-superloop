import { useRef, useState } from "react";
import Select, { SingleValue } from "react-select";
import { debounce } from "lodash/fp";

import { fetchCountriesByName } from "./apis/country";
import { AxiosError } from "axios";
import CountryDetails from "./Main/CountryDetails";

const SearchAndDisplay = () => {
  /* We shouldn't use any in real world, this is just for readability,
  otherwise I have to import complex type definitions from this lib */
  const [options, setOptions] = useState<any>();
  const [selectedOption, setSelectedOption] = useState<SingleValue<Option>>();
  const [selectedDetails, setSelectedDetails] = useState<CountryData>();
  const countriesDataRef = useRef<Array<CountryData>>();

  const searchForCountries = (query: string) => {
    if (query) {
      const result = fetchCountriesByName(query);
      result.then(
        (res) => {
          if (!res || !res.data) {
            /* We should handle the situation when there's no data,
            such as show user "Please try again later. Also send the error
            to our platform to warn dev team about this error"*/
            return;
          }
          const newOptions: Array<SingleValue<Option>> = [];
          res?.data?.map((d: CountryData) => {
            newOptions.push({ value: d.name.common, label: d.name.common });
          });
          setOptions(newOptions);
          countriesDataRef.current = res.data;
        },
        (reason: AxiosError) => {
          if (reason?.response?.status === 404) {
            /*The react-select already shows "No options",
            but if we're use something else, this is
            where we inform the user that the current
            search query has no matching result*/
          }
        }
      );
    }
  };

  const handleInputChange = debounce(300, searchForCountries);

  const handleSelect = (selectedOption: SingleValue<Option>) => {
    setSelectedOption(selectedOption);

    const countryData = countriesDataRef.current?.find(
      (d) => d.name.common === selectedOption?.value
    );
    if (countryData) {
      setSelectedDetails(countryData);
    }
  };

  return (
    <>
      <Select
        value={selectedOption}
        options={options}
        onInputChange={handleInputChange}
        onChange={(option) => handleSelect(option)}
        placeholder={"Start type to search..."}
      />
      {selectedDetails && <CountryDetails data={selectedDetails} />}
    </>
  );
};

export default SearchAndDisplay;

export type Option = {
  value: string;
  label: string;
};

export type CountryData = {
  car: {
    side: string;
  };
  coatOfArms: {
    png?: string;
    svg?: string;
  };
  currencies: { [key: string]: Currency };
  flags: {
    alt?: string;
    png?: string;
    svg?: string;
  };
  name: {
    common: string;
    nativeName?: Object;
    official: string;
  };
};

type Currency = {
  name: string;
  symbol: string;
};
