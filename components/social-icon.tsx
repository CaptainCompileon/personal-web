import React, { PropsWithRef, ReactNode, Ref, forwardRef } from "react";

interface SocialIconProps {
  children: ReactNode | undefined;
  link: string;
}

const SocialIcon = forwardRef<HTMLAnchorElement, SocialIconProps>(
  (props, ref) => (
    <a
      ref={ref}
      className="bg-white opacity-90 text-white rounded-lg"
      href={props.link}
    >
      {props.children}
    </a>
  ),
);

SocialIcon.displayName = "SocialIcon";

export default SocialIcon;
