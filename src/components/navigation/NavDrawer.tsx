import { Drawer, Box, Text, Divider, useMantineTheme } from '@mantine/core';
import { motion, AnimatePresence } from 'framer-motion';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import { navLinks } from './Navigation';
import { SocialLinks } from 'components/common/socialMedia/SocialLinks';
import { useNightMode } from 'context/NightModeContext';

type Props = {
  open: boolean;
  handleClose: () => void;
};

const linkVariants = {
  hidden: { opacity: 0, x: 60 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: 0.08 + i * 0.08,
      type: 'spring',
      stiffness: 200,
      damping: 22,
    },
  }),
  exit: (i: number) => ({
    opacity: 0,
    x: 40,
    transition: { delay: i * 0.04, duration: 0.2 },
  }),
};

const accentVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { delay: 0.3, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  },
};

export function NavDrawer({ open, handleClose }: Props) {
  const router = useRouter();
  const theme = useMantineTheme();
  const { night } = useNightMode();

  const bgColor = night ? theme.colors.dark[6] : theme.colors.myColor[0];
  const accentColor = night
    ? theme.colors.secondary[5]
    : theme.colors.myColor[7];
  const numberColor = night
    ? theme.colors.secondary[7]
    : theme.colors.myColor[5];

  return (
    <Drawer
      opened={open}
      position="right"
      onClose={handleClose}
      size="85%"
      withCloseButton={false}
      styles={{
        content: {
          backgroundColor: bgColor,
        },
        body: {
          padding: 0,
          height: '100%',
        },
        header: {
          display: 'none',
        },
      }}
      transitionProps={{
        duration: 350,
        timingFunction: 'cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <AnimatePresence>
        {open && (
          <Box
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
              padding: '48px 32px 32px',
              overflow: 'hidden',
            }}
          >
            {/* Close button */}
            <motion.div
              initial={{ opacity: 0, rotate: -90 }}
              animate={{ opacity: 1, rotate: 0 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 300 }}
              style={{
                position: 'absolute',
                top: 20,
                right: 24,
                cursor: 'pointer',
                zIndex: 10,
              }}
              onClick={handleClose}
            >
              <Text
                fz={32}
                fw={200}
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  lineHeight: 1,
                }}
              >
                &times;
              </Text>
            </motion.div>

            {/* Decorative accent line */}
            <motion.div
              variants={accentVariants}
              initial="hidden"
              animate="visible"
              style={{
                height: 3,
                background: `linear-gradient(90deg, ${accentColor}, transparent)`,
                transformOrigin: 'left',
                marginBottom: 40,
                borderRadius: 2,
              }}
            />

            {/* Nav links */}
            <Box style={{ flex: 1 }}>
              {navLinks.map((navLink, i) => {
                const isActive = router.pathname === navLink.link;
                return (
                  <motion.div
                    key={navLink.link}
                    custom={i}
                    variants={linkVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    style={{ marginBottom: 8 }}
                  >
                    <NextLink
                      href={navLink.link}
                      onClick={handleClose}
                      style={{ textDecoration: 'none' }}
                    >
                      <Box
                        style={{
                          display: 'flex',
                          alignItems: 'baseline',
                          gap: 16,
                          padding: '12px 0',
                          borderBottom: `1px solid ${
                            night
                              ? 'rgba(255,255,255,0.06)'
                              : 'rgba(0,0,0,0.06)'
                          }`,
                          transition: 'all 0.2s ease',
                        }}
                      >
                        <Text
                          fz={13}
                          fw={400}
                          style={{
                            fontFamily: "'Red Hat Display', sans-serif",
                            color: numberColor,
                            minWidth: 24,
                          }}
                        >
                          0{i + 1}
                        </Text>
                        <Text
                          fz={40}
                          fw={isActive ? 400 : 200}
                          style={{
                            fontFamily: "'Red Hat Display', sans-serif",
                            textTransform: 'uppercase',
                            letterSpacing: '0.04em',
                            color: isActive
                              ? accentColor
                              : night
                                ? theme.colors.dark[0]
                                : theme.colors.myColor[9],
                            transition: 'color 0.2s ease',
                          }}
                        >
                          {navLink.text}
                        </Text>
                      </Box>
                    </NextLink>
                  </motion.div>
                );
              })}
            </Box>

            {/* Bottom section: social links + tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
            >
              <Divider
                my={16}
                color={
                  night ? 'rgba(255,255,255,0.08)' : 'rgba(0,0,0,0.08)'
                }
              />
              <SocialLinks />
              <Text
                ta="center"
                fz={12}
                fw={300}
                mt={8}
                style={{
                  fontFamily: "'Red Hat Display', sans-serif",
                  textTransform: 'uppercase',
                  letterSpacing: '0.15em',
                  color: numberColor,
                }}
              >
                Software &middot; Running &middot; Writing
              </Text>
            </motion.div>
          </Box>
        )}
      </AnimatePresence>
    </Drawer>
  );
}
