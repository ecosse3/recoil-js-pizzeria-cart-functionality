import React from 'react';
import { useRecoilState } from 'recoil';
import { snackbarIsActive, snackbarMessage } from '../store/atoms';

export const useSnackbar = () => {
  const [isActive, setIsActive] = useRecoilState(snackbarIsActive);
  const [message, setMessage] = useRecoilState(snackbarMessage);

  React.useEffect(() => {
    if (isActive === true) {
      setTimeout(() => {
        setIsActive(false);
      }, 1500);
    }
  }, [isActive, setIsActive]);

  const openSnackBar = (msg = 'Something went wrong...') => {
    setMessage(msg);
    setIsActive(true);
  };

  return { isActive, message, openSnackBar };
};
