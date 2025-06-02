import { Facebook } from "@icons/Facebook";
import { Instagram } from "@icons/Instagram";
import { X } from "@icons/X";
import { Envelope } from "@icons/Envelope";
import { twMerge } from "tailwind-merge";

interface FooterSocialProps {
  iconColor: string;
  className?: string;
}

export function FooterSocial({ iconColor, className }: FooterSocialProps) {
  return (
    <div
      className={twMerge("flex gap-x-4", className)}
      style={
        {
          "--icon-color": iconColor,
        } as React.CSSProperties
      }
    >
      <a href="https://www.linkedin.com/in/mesut-cifci/">
        <Facebook className={`w-9 h-9`} color={iconColor} />
      </a>
      <a href="https://www.linkedin.com/in/mesut-cifci/">
        <Instagram className={`w-9 h-9`} color={iconColor} />
      </a>
      <a href="https://www.linkedin.com/in/mesut-cifci/">
        <X className={`w-9 h-9`} color={iconColor} />
      </a>
      <a href="mailto:cfcmesut@gmail.com">
        <Envelope className={`w-9 h-9`} color={iconColor} />
      </a>
    </div>
  );
}
