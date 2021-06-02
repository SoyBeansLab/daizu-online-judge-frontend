import { useWindowWidth } from '@react-hook/window-size';

export const useIsSP = (): boolean => {
  return useWindowWidth() <= 480;
}

export const useIsTablet = (): boolean => {
  const width = useWindowWidth();
  return 481 <= width && width <= 900;
}

export const useIsPC = (): boolean => {
  return useWindowWidth() >= 901;
}
