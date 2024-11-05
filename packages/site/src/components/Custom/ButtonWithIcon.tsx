import type { FunctionComponent } from 'react';
import type { LinkProps } from '~/components/Custom/TextWithLink.js';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline/index.js';

export enum iconPositions {
  before = 'before',
  after = 'after',
}

export interface ButtonWithIconProps {
  icon: any;
  iconPosition: iconPositions;
  link: LinkProps;
  hasExternalIcon: boolean;
}

export const ButtonWithIcon: FunctionComponent<ButtonWithIconProps> = ({
  icon,
  iconPosition,
  link,
  hasExternalIcon = false,
}) => {
  return (
    <a
      href={link.href}
      className="flex flex-row bg-blue-500 text-white font-semibold py-2 px-4 rounded-sm hover:bg-blue-600 whitespace-nowrap"
      target={link.isExternal ? '_blank' : '_self'}
      rel={link.isExternal ? 'noopener noreferrer' : ''}
    >
      {icon && iconPosition === iconPositions.before && icon}
      {link.text}
      {hasExternalIcon && <ArrowTopRightOnSquareIcon className="mx-1 w-4" />}
      {icon && iconPosition === iconPositions.after && icon}
    </a>
  );
};

export default ButtonWithIcon;
