import { useState } from 'react';

import { RegionsProps } from './Regions';

export const updateDropDownModule = ({ setRegion }: RegionsProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('Filter by Region');
  
    const toggleDropDown = () => setIsOpen((c) => !c);
  
    const filterByRegion = (region: string) => {
      setRegion(region);
      setTitle(region);
      toggleDropDown();
    }

    return {
        isOpen,
        title,
        filterByRegion,
        toggleDropDown,
    }
}