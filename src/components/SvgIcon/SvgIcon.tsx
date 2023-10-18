import { useEffect, useRef, useState } from 'react';

export const SvgIcon = ({
  icon,
}: {
  icon: 'arrow' | 'flagMX' | 'microfono';
}) => {
  const iconRef = useRef<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const importIcon = async () => {
    setIsLoading(true);
    const importedIcon = await import(`../../assets/${icon}.svg`);
    iconRef.current = importedIcon.default;
    setIsLoading(false);
  };

  useEffect(() => {
    importIcon();
  }, []);

  if (isLoading || !iconRef.current) return <div>loading...</div>;

  const Icon = iconRef.current;

  return (
    <div>
      <Icon />
    </div>
  );
};
