import React from 'react';
import { Text } from '@mantine/core';

type Props = {
  loadingText?: string;
};

export const CustomLoader = ({ loadingText }: Props) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '70vh',
      }}
    >
      <svg
        width="120"
        height="120"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <style>{`
          @keyframes runLeftArm {
            0%, 100% { transform: rotate(30deg); }
            50% { transform: rotate(-30deg); }
          }
          @keyframes runRightArm {
            0%, 100% { transform: rotate(-30deg); }
            50% { transform: rotate(30deg); }
          }
          @keyframes runLeftLeg {
            0%, 100% { transform: rotate(-30deg); }
            50% { transform: rotate(30deg); }
          }
          @keyframes runRightLeg {
            0%, 100% { transform: rotate(30deg); }
            50% { transform: rotate(-30deg); }
          }
          @keyframes bounce {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-4px); }
          }
          .runner-body {
            animation: bounce 0.35s ease-in-out infinite;
          }
          .left-arm {
            transform-origin: 60px 52px;
            animation: runLeftArm 0.35s ease-in-out infinite;
          }
          .right-arm {
            transform-origin: 60px 52px;
            animation: runRightArm 0.35s ease-in-out infinite;
          }
          .left-leg {
            transform-origin: 60px 75px;
            animation: runLeftLeg 0.35s ease-in-out infinite;
          }
          .right-leg {
            transform-origin: 60px 75px;
            animation: runRightLeg 0.35s ease-in-out infinite;
          }
        `}</style>

        <g className="runner-body">
          {/* Head */}
          <circle
            cx="60"
            cy="30"
            r="10"
            fill="none"
            stroke="#6c573e"
            strokeWidth="3"
          />
          {/* Body */}
          <line
            x1="60"
            y1="40"
            x2="60"
            y2="75"
            stroke="#6c573e"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </g>

        {/* Left arm */}
        <line
          className="left-arm"
          x1="60"
          y1="52"
          x2="42"
          y2="68"
          stroke="#6c573e"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Right arm */}
        <line
          className="right-arm"
          x1="60"
          y1="52"
          x2="78"
          y2="68"
          stroke="#6c573e"
          strokeWidth="3"
          strokeLinecap="round"
        />

        {/* Left leg */}
        <line
          className="left-leg"
          x1="60"
          y1="75"
          x2="44"
          y2="100"
          stroke="#6c573e"
          strokeWidth="3"
          strokeLinecap="round"
        />
        {/* Right leg */}
        <line
          className="right-leg"
          x1="60"
          y1="75"
          x2="76"
          y2="100"
          stroke="#6c573e"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>

      <Text fz="lg" mt="md">
        {loadingText || 'Loading...'}
      </Text>
    </div>
  );
};
