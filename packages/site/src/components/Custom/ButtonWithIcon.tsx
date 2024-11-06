import type { FunctionComponent } from 'react';
import { LinkProps } from '@myst-theme/site/src/components/Custom';
import { ArrowTopRightOnSquare } from '@myst-theme/icons';

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
      {hasExternalIcon && <ArrowTopRightOnSquare size={20} className="mx-1" />}
      {icon && iconPosition === iconPositions.after && icon}
    </a>
  );
};

export default ButtonWithIcon;
