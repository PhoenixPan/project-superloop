import { useMediaQuery } from "react-responsive";

type Hook = () => {
  isSmall: boolean;
  isMedium: boolean;
  isLarge: boolean;
  isXLarge: boolean;
};

const useScreenQuery: Hook = () => ({
  isSmall: useMediaQuery({ query: "(max-width: 768px)" }),
  isMedium: useMediaQuery({ query: "(min-width: 768px)" }),
  isLarge: useMediaQuery({ query: "(min-width: 1024px)" }),
  isXLarge: useMediaQuery({ query: "(min-width: 1280px)" }),
});

export default useScreenQuery;
