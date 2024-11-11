import type { FunctionComponent } from 'react';
import { ArrowTopRightOnSquare } from '@myst-theme/icons';

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
    <div className="flex items-start flex-wrap">
      {textBeforeLink && textBeforeLink}
      <a
        className={`hover:underline ${textBeforeLink ? 'ml-1' : ''} ${textAfterLink ? 'mr-1' : ''}`}
        href={link.href}
        target={link.isExternal ? '_blank' : '_self'}
        rel={link.isExternal ? 'noopener noreferrer' : ''}
      >
        <span className="inline-flex w-full break-all">
          {link.text}
          {hasExternalIcon && <ArrowTopRightOnSquare size={20} className="mx-1 shrink-0" />}
        </span>
      </a>
      {textAfterLink ?? textAfterLink}
    </div>
  );
};

export default TextWithLink;
