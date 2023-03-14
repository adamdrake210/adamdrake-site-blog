import { useState } from 'react';

/** @module useOpen */

/**
 * This is a hook to help with opening and closing modals.
 */

/**
 *
 */
export const useOpen = (isDefaultOpen = false) => {
  const [open, setOpen] = useState(isDefaultOpen);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  const switchOpen = () => {
    setOpen(!open);
  };

  return { open, handleClose, handleOpen, switchOpen };
};
