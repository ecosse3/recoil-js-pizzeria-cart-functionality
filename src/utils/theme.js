import { useMediaQuery } from 'react-responsive';

export const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    primary: '#F8593B',
    secondary: '#2ECC71'
  },

  flexboxgrid: {
    // Defaults
    gridSize: 12, // columns
    gutterWidth: 1, // rem
    outerMargin: 2, // rem
    mediaQuery: 'only screen',
    container: {
      sm: 46, // rem
      md: 61, // rem
      lg: 76 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 75 // em
    }
  }
};

export const useIsMobile = () => useMediaQuery({ maxWidth: 767 });
