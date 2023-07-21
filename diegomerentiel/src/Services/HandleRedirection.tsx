import { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

export const useNavigation = (redirection:string) => {
  const navigate = useNavigate();

  const handleClick = useCallback(() => {
    setTimeout(() =>
    {
      navigate(redirection)
    }, 300)
  }, [navigate])

  return { handleClick };
};