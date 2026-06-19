import { useState, useEffect } from 'react';

export function useScrollSpy(sectionIds, offset = 100) {
  const [activeId, setActiveId] = useState('');
  const sectionIdsStr = JSON.stringify(sectionIds);

  useEffect(() => {
    const ids = JSON.parse(sectionIdsStr);
    const handleScroll = () => {
      const scrollY = window.scrollY + offset;

      for (let i = ids.length - 1; i >= 0; i--) {
        const section = document.getElementById(ids[i]);
        if (section && section.offsetTop <= scrollY) {
          setActiveId(ids[i]);
          return;
        }
      }
      setActiveId(ids[0] || '');
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [sectionIdsStr, offset]);

  return activeId;
}
