import { ActionIcon, useMantineColorScheme } from '@mantine/core';
import { IconSun, IconMoon } from '@tabler/icons-react';

function SelectColorMode() {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  return (
    <ActionIcon
      color={dark ? 'gray.1' : 'gray.8'}
      onClick={() => toggleColorScheme()}
      title="Toggle color scheme"
      ml={32}
      style={{
        backgroundColor: 'transparent',
      }}
    >
      {dark ? <IconSun /> : <IconMoon color={'#000000'} />}
    </ActionIcon>
  );
}

export default SelectColorMode;
