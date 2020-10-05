import { useMediaQuery } from 'react-responsive';

export const theme = {
  colors: {
    black: '#000000',
    white: '#FFFFFF',
    primary: '#F8593B',
    primaryDark: '#C6472F',
    secondary: '#2ECC71',
    secondaryDark: '#24A35A',
    deepBlue: '#081F32',
    indigoFlight: '#6E798C'
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
      lg: 82 // rem
    },
    breakpoints: {
      xs: 0, // em
      sm: 48, // em
      md: 64, // em
      lg: 80 // em
    }
  },

  textStyles: {
    heading: {
      fontSize: [24, 32, 48],
      fontWeight: [400],
      lineHeight: [1.17],
      fontFamily: 'Montserrat Subrayada'
    }
  }
};

export const useIsMobile = () => useMediaQuery({ maxWidth: 767 });
