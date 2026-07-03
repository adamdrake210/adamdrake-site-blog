import React, { useEffect, useRef, useState } from 'react';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { ActionIcon, Box, Center, Flex, Text, Title } from '@mantine/core';
import { IconHeartFilled } from '@tabler/icons-react';
import { AnimatePresence, motion, useAnimationControls } from 'framer-motion';

import { getPostDetails } from 'services/supabase/getPostDetails';
import { updatePostDetails } from 'services/supabase/updatePostDetails';
import { RQ_BLOG_POST } from 'constants/constants';

type Props = {
  slug: string;
};

type BurstHeart = {
  id: number;
  dx: number;
  dy: number;
  rotate: number;
  size: number;
  color: string;
};

// Palette browns, plus the occasional secondary-blue heart for the observant
const HEART_COLORS = [
  '#6c573e',
  '#8a745a',
  '#a28f77',
  '#c1b3a4',
  '#9e876c',
  '#6c573e',
  '#5f8fad',
];

const randomBetween = (min: number, max: number) =>
  Math.random() * (max - min) + min;

export const BlogLikeButton = ({ slug }: Props) => {
  const queryClient = useQueryClient();
  const heartControls = useAnimationControls();

  const [pending, setPending] = useState(0);
  const [bursts, setBursts] = useState<BurstHeart[]>([]);

  const pendingRef = useRef(0);
  const burstIdRef = useRef(0);
  const holdTimerRef = useRef<number>();
  const commitTimerRef = useRef<number>();

  const { data, isLoading, isError, error } = useQuery({
    queryKey: [RQ_BLOG_POST, slug],
    queryFn: () => getPostDetails({ slug }),
  });

  const { mutate } = useMutation<any, Error, any>({
    mutationFn: ({ id, likes }) => updatePostDetails({ id, likes }),
  });

  useEffect(() => {
    return () => {
      window.clearTimeout(holdTimerRef.current);
      window.clearTimeout(commitTimerRef.current);
    };
  }, []);

  const spawnBurst = () => {
    const hearts: BurstHeart[] = Array.from(
      { length: Math.round(randomBetween(3, 5)) },
      () => ({
        id: burstIdRef.current++,
        dx: randomBetween(-55, 55),
        dy: randomBetween(-110, -50),
        rotate: randomBetween(-80, 80),
        size: Math.round(randomBetween(10, 17)),
        color: HEART_COLORS[Math.floor(Math.random() * HEART_COLORS.length)],
      }),
    );
    const ids = hearts.map(h => h.id);
    setBursts(current => [...current.slice(-60), ...hearts]);
    window.setTimeout(() => {
      setBursts(current => current.filter(h => !ids.includes(h.id)));
    }, 950);
  };

  const addLike = () => {
    pendingRef.current += 1;
    setPending(pendingRef.current);
    spawnBurst();
    heartControls.start({
      scale: [1, 1.18, 1],
      transition: { duration: 0.22 },
    });
  };

  const commitLikes = () => {
    const committed = pendingRef.current;
    if (!committed || !data || data.length === 0) return;

    const newTotal = data[0].likes + committed;
    mutate(
      { id: data[0].id, likes: newTotal },
      {
        onError: (err: any) => {
          console.error(err);
        },
        onSuccess: () => {
          queryClient.setQueryData(
            [RQ_BLOG_POST, slug],
            (old: any) => old && [{ ...old[0], likes: newTotal }],
          );
          pendingRef.current -= committed;
          setPending(pendingRef.current);
        },
      },
    );
  };

  const stopHold = () => {
    window.clearTimeout(holdTimerRef.current);
  };

  const scheduleCommit = () => {
    window.clearTimeout(commitTimerRef.current);
    commitTimerRef.current = window.setTimeout(commitLikes, 800);
  };

  const startHold = () => {
    stopHold();
    window.clearTimeout(commitTimerRef.current);
    addLike();
    let delay = 320;
    const tick = () => {
      addLike();
      delay = Math.max(80, delay * 0.82);
      holdTimerRef.current = window.setTimeout(tick, delay);
    };
    holdTimerRef.current = window.setTimeout(tick, delay);
  };

  const endHold = () => {
    stopHold();
    scheduleCommit();
  };

  if (isLoading) {
    return null;
  }

  if (isError) {
    console.error('Like button error', error);
    return null;
  }

  const displayedLikes = data && data.length > 0 ? data[0].likes + pending : 0;

  return (
    <>
      {data && data.length > 0 && (
        <Center my={16}>
          <Flex direction="column" align="center" justify="center">
            <Title order={3}>Wanna press a button?</Title>
            <Text fz="sm" c="dimmed" mb={8}>
              (you can hold it down)
            </Text>
            <Flex align="center">
              <Box style={{ position: 'relative' }} mr={8}>
                {bursts.map(heart => (
                  <motion.div
                    key={heart.id}
                    initial={{ x: 0, y: 0, scale: 0.4, opacity: 1 }}
                    animate={{
                      x: heart.dx,
                      y: heart.dy,
                      scale: 1,
                      opacity: 0,
                      rotate: heart.rotate,
                    }}
                    transition={{ duration: 0.9, ease: 'easeOut' }}
                    style={{
                      position: 'absolute',
                      left: '50%',
                      top: '50%',
                      marginLeft: -heart.size / 2,
                      marginTop: -heart.size / 2,
                      color: heart.color,
                      pointerEvents: 'none',
                      lineHeight: 0,
                    }}
                  >
                    <IconHeartFilled size={heart.size} />
                  </motion.div>
                ))}
                <motion.div
                  animate={heartControls}
                  whileTap={{ scale: 0.82 }}
                  style={{ lineHeight: 0 }}
                >
                  <ActionIcon
                    variant="light"
                    color="myColor"
                    size="xl"
                    radius="xl"
                    onPointerDown={startHold}
                    onPointerUp={endHold}
                    onPointerLeave={endHold}
                    onPointerCancel={endHold}
                    onContextMenu={event => event.preventDefault()}
                    onClick={event => {
                      // Pointer events handle mouse/touch; detail === 0
                      // means this click came from the keyboard
                      if (event.detail === 0) {
                        addLike();
                        scheduleCommit();
                      }
                    }}
                    style={{ touchAction: 'none', userSelect: 'none' }}
                  >
                    <IconHeartFilled size="1.625rem" />
                  </ActionIcon>
                </motion.div>
              </Box>
              <Box style={{ overflow: 'hidden', height: 30, minWidth: 32 }}>
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.div
                    key={displayedLikes}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Text fz={20} fw={600}>
                      {displayedLikes}
                    </Text>
                  </motion.div>
                </AnimatePresence>
              </Box>
            </Flex>
          </Flex>
        </Center>
      )}
    </>
  );
};
