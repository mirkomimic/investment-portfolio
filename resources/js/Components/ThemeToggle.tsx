import { Sun } from 'lucide-react';
import { useEffect, useState } from 'react';
import ReactSwitch from 'react-switch';
import { useTheme } from '../hooks/theme-provider';

export const ThemeToggle = () => {
  const { setTheme } = useTheme();
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    checked ? setTheme('light') : setTheme('dark');
  }, [checked, setTheme]);

  const handleChange = (nextChecked: boolean) => {
    setChecked(nextChecked);
  };

  return (
    <label
      htmlFor="small-radius-switch"
      className="flex items-center justify-center"
    >
      <ReactSwitch
        checked={checked}
        onChange={handleChange}
        offColor="#3a3b3b"
        offHandleColor="#3a3b3b"
        onColor="#c9d0d6"
        onHandleColor="#c9d0d6"
        handleDiameter={25}
        height={30}
        width={50}
        borderRadius={50}
        uncheckedIcon={false}
        checkedIcon={false}
        uncheckedHandleIcon={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              fontSize: 18,
            }}
          >
            🌙
          </div>
        }
        checkedHandleIcon={
          <div className="flex items-center justify-center">
            <Sun size={20} height={25} />
          </div>
        }
        className="react-switch"
        id="small-radius-switch"
      />
    </label>
  );
};
