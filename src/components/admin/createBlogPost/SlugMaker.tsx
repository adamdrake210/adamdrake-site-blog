import { Box, Button, Input, Title } from '@mantine/core';
import { TextCopier } from 'components/common/TextCopier';
import React from 'react';

export const SlugMaker = () => {
  const [slug, setSlug] = React.useState<string>('');
  const [title, setTitle] = React.useState<string>('');

  const convertTitleToSlug = () => {
    const slug = title
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
    setSlug(slug);
  };

  return (
    <Box>
      <Title order={2} fz={30}>
        Convert Title to Slug
      </Title>
      <Input.Wrapper
        description="This is the slug that will be used in the URL"
        w={600}
      >
        <Input
          name="title"
          value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
          placeholder="Enter title here"
          w="100%"
        />
      </Input.Wrapper>
      <Box my={16}>
        <Button w={150} onClick={convertTitleToSlug}>
          Convert
        </Button>
      </Box>
      {slug && <TextCopier textToCopy={slug} title="Blog Post Slug" />}
    </Box>
  );
};
