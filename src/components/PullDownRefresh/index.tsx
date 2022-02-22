import { Box, BoxProps } from '@mui/material';
import React, {
  FC, PointerEventHandler, useEffect, useRef, useState,
} from 'react';
import RefreshIcon from '@mui/icons-material/Refresh';

const PullDownRefresh:FC<BoxProps> = ({ children, ...props }) => {
  const startRef = useRef<React.PointerEvent<HTMLDivElement>|null>(null);
  const boxRef = useRef<HTMLDivElement>(null);

  const [moveDistance, setRefreshHeight] = useState(0);

  const pointerDown = (e : React.PointerEvent<HTMLDivElement>) => {
    let dom:HTMLElement|null = e.target as HTMLElement;
    let flag = 0;
    while (dom?.parentElement) {
      if (dom.scrollTop > 0) {
        flag = dom.scrollTop;
        e.preventDefault();
        e.stopPropagation();
        break;
      }
      dom = dom.parentElement;
    }
    // TODO: add pull to refresh
    // startRef.current = flag ? null : e;
  };
  const pointerMove = (e : { clientY:number }) => {
    if (startRef.current) {
      console.log(222222222222, e);
      setRefreshHeight(e.clientY - startRef.current.clientY);
      console.log(e.clientY - startRef.current.clientY);
      console.log(e);
    }
  };
  const touchMove = (e:React.TouchEvent<HTMLDivElement>) => {
    pointerMove(e.changedTouches[0]);
  };
  const pointerUp = () => {
    // setRefreshHeight(0);
    startRef.current = null;
  };
  const minDistance = 50;

  return (
    <Box
      ref={boxRef}
      onPointerDown={pointerDown}
      onPointerMove={pointerMove}
      onTouchMove={touchMove}
      onPointerUp={pointerUp}
      onTouchEnd={pointerUp}
      onMouseUp={pointerUp}
      {...props}
    >
      {children}
      {moveDistance > 0 && (
      <RefreshIcon sx={{
        position: 'absolute',
        zIndex: 'snackbar',
        top: 0,
        left: '50%',
        borderRadius: '50%',
        bgcolor: 'white',
        color: 'primary.main',
        transform: `translate(-100%, ${Math.max(Math.ceil((Math.log(moveDistance * minDistance - 1.5))), 0) || 0}px) rotate(${Math.min(Math.ceil((moveDistance * 360) / minDistance), 360)}deg)`,
      }}
      />
      )}
    </Box>
  );
};

export default PullDownRefresh;
