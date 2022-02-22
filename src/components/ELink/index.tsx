import * as React from 'react';
import { Link, LinkTypeMap } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { OverridableComponent, OverrideProps } from '@mui/material/OverridableComponent';

export type ELinkProps<
  M extends LinkTypeMap = LinkTypeMap,
  C extends typeof RouterLink = typeof RouterLink,
  > = OverridableComponent<M>&OverrideProps<M, C>;

const ELink = React.forwardRef<HTMLAnchorElement, ELinkProps>(
  (props, ref) => <Link component={RouterLink} ref={ref} color="inherit" underline="none" {...props} />,
);

export default ELink;
