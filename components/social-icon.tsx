import React, { PropsWithRef, ReactNode, Ref, forwardRef } from "react";

interface SocialIconProps {
  children: ReactNode | undefined;
  link: string;
}

const SocialIcon = forwardRef<HTMLAnchorElement, SocialIconProps>(
  (props, ref) => (
    <a
      ref={ref}
      className="magnet bg-gradient-to-r from-cyan-500 to-teal-500 text-white p-2 rounded-full"
      href={props.link}
    >
      {props.children}
    </a>
  ),
);

SocialIcon.displayName = "SocialIcon";

export default SocialIcon;
