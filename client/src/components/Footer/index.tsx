import { IComponentProps } from "@custom-types/components";
import { IFooter } from "@custom-types/components/footer";
import { twMerge } from "tailwind-merge";
import logo from "@assets/images/logo.svg";
import { Facebook } from "@icons/Facebook";
import { Instagram } from "@icons/Instagram";
import { X } from "@icons/X";
import { Envelope } from "@icons/Email";
import { useComponentData } from "@hooks/useComponentData";

interface IFooterProps extends IComponentProps {
  className?: string;
}

export function Footer({ className }: IFooterProps) {
  const { data } = useComponentData<IFooter>({
    endpoint: "/components/footer",
  });

  if (!data) return null;

  return (
    <footer
      className={twMerge(
        "flex flex-col gap-y-6 lg:gap-x-6 lg:flex-row lg:justify-between",
        className
      )}
    >
      <div
        className="flex flex-col gap-y-6"
        style={
          {
            "--icon-color": data.iconColor,
            "--text-color": data.textColor,
          } as React.CSSProperties
        }
      >
        <div>
          <img src={logo} alt="logo" />
          <p>{data.description}</p>
        </div>
        <div>
          <a href="https://www.linkedin.com/in/mesut-cifci/">
            <Facebook className="text-[var(--icon-color)]" />
          </a>
          <a href="https://www.linkedin.com/in/mesut-cifci/">
            <Instagram className="text-[var(--icon-color)]" />
          </a>
          <a href="https://www.linkedin.com/in/mesut-cifci/">
            <X className="text-[var(--icon-color)]" />
          </a>
          <a href="mailto:cfcmesut@gmail.com">
            <Envelope className="text-[var(--icon-color)]" />
          </a>
        </div>
      </div>
      <div></div>
    </footer>
  );
}
