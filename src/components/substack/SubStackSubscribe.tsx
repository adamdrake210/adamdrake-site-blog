import React from 'react';

import { Box, Flex, Text, Title } from '@mantine/core';

export const SubStackSubscribe = () => {
  return (
    <Flex w="100%" justify={'center'}>
      <iframe
        src="https://adamdrake.substack.com/embed"
        width="480"
        height="320"
        style={{
          border: '1px solid #EEE',
          background: 'white',
          borderRadius: '5px',
        }}
        scrolling="no"
      ></iframe>
    </Flex>
  );
};
