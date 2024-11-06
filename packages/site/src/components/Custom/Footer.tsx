import type { FunctionComponent, PropsWithChildren } from 'react';
import { Fragment } from 'react';

export interface FooterProps {
  hideFooter?: boolean;
}

export const Footer: FunctionComponent<PropsWithChildren<FooterProps>> = (props) => {
  const { hideFooter, children } = props;
  return (
    <Fragment>
      {!hideFooter && (
        <div className="bg-qutNavy dark:bg-qutNavy text text-white p-3 w-screen top-0 z-30 min-h-[100px] min-w-[400px]">
          <div className="flex flex-col md:flex-row md:justify-between items-center">
            {children}
          </div>
        </div>
      )}
    </Fragment>
  );
};

export default Footer;