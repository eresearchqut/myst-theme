import type { FunctionComponent } from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

export interface LinkProps {
  href: string;
  text: string;
  isExternal: boolean;
}

export interface TextWithLinkProps {
  textBeforeLink?: string;
  link: LinkProps;
  hasExternalIcon: boolean;
  textAfterLink?: string;
}

export const TextWithLink: FunctionComponent<TextWithLinkProps> = ({
  textBeforeLink,
  link,
  hasExternalIcon = false,
  textAfterLink,
}) => {
  return (
    <div className="flex flex-row">
      {textBeforeLink && textBeforeLink}
      <a
        className={`flex flex-row hover:underline ${textBeforeLink ? 'ml-1' : ''} ${textAfterLink ? 'mr-1' : ''}`}
        href={link.href}
        target={link.isExternal ? '_blank' : '_self'}
        rel={link.isExternal ? 'noopener noreferrer' : ''}
      >
        {link.text}
      </a>
      {hasExternalIcon && <ArrowTopRightOnSquareIcon className="mx-1 w-4" />}
      {textAfterLink ?? textAfterLink}
    </div>
  );
};

export default TextWithLink;
