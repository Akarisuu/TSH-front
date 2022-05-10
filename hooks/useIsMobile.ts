import { useState, useEffect, useRef } from "react";

const useIsMobile = (desktopSize = 1280) => {
  const [_isMobile, _setIsMobile] = useState(false);
  const isMobile = useRef(_isMobile);

  const setIsMobile = (e: boolean) => {
    isMobile.current = e;
    _setIsMobile(e);
  };

  useEffect(() => {
    function handleResize() {
      if (
        (isMobile.current && window.innerWidth < desktopSize) ||
        (!isMobile.current && window.innerWidth >= desktopSize)
      )
        return;
      setIsMobile(window.innerWidth < desktopSize);
    }

    setIsMobile(window.innerWidth < desktopSize);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return _isMobile;
};

export default useIsMobile;
