import React, { createContext, useContext, useEffect, useState } from 'react';

import { useKonamiCode } from 'hooks/useKonamiCode';
import { ShootingStar } from 'components/common/ShootingStar';

type NightModeContextValue = {
  night: boolean;
};

const NightModeContext = createContext<NightModeContextValue>({
  night: false,
});

export const useNightMode = () => useContext(NightModeContext);

const STORAGE_KEY = 'adamdrake-night-mode';

export const NightModeProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [night, setNight] = useState(false);
  const [shootingStar, setShootingStar] = useState(false);

  useEffect(() => {
    if (window.sessionStorage.getItem(STORAGE_KEY) === 'on') {
      setNight(true);
    }
  }, []);

  useKonamiCode(() => {
    const next = !night;
    setNight(next);
    window.sessionStorage.setItem(STORAGE_KEY, next ? 'on' : 'off');
    if (next) {
      setShootingStar(true);
      window.setTimeout(() => setShootingStar(false), 1600);
    }
  });

  // The class lets global CSS flip text colors alongside the
  // component-level color swaps
  useEffect(() => {
    document.body.classList.toggle('night-mode', night);
  }, [night]);

  return (
    <NightModeContext.Provider value={{ night }}>
      {children}
      {shootingStar && <ShootingStar />}
    </NightModeContext.Provider>
  );
};
