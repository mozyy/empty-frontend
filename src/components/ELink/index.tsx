import * as React from 'react';
import { Link, LinkTypeMap } from '@material-ui/core';
import { Link as RouterLink } from 'react-router-dom';
import { OverridableComponent, OverrideProps } from '@material-ui/core/OverridableComponent';

export type ELinkProps<
  M extends LinkTypeMap = LinkTypeMap,
  C extends RouterLink = RouterLink,
  > = OverridableComponent<M>&OverrideProps<M, C>;

const ELink = React.forwardRef<HTMLAnchorElement, ELinkProps>(
  (props, ref) => <Link component={RouterLink} ref={ref} {...props} />,
);

export default ELink;
