import { IComponentProps } from "@custom-types/components";
import { IFooter } from "@custom-types/components/footer";
import { twMerge } from "tailwind-merge";
import logo from "@assets/images/logo.svg";
import { useComponentData } from "@hooks/useComponentData";
import { FooterSocial } from "./FooterSocial";

interface IFooterProps extends IComponentProps {
  className?: string;
}

export function Footer({ className }: IFooterProps) {
  const { data } = useComponentData<IFooter>({
    endpoint: "/components/footer",
  });

  if (!data) return null;

  console.log("data: ", data);

  return (
    <footer
      className={twMerge(
        "flex flex-col items-center gap-y-6 lg:gap-x-6 lg:flex-row lg:justify-between bg-[var(--background-color)]",
        "py-12 xl:py-[4.5rem]",
        className
      )}
      style={
        {
          "--background-color": data.backgroundColor,
        } as React.CSSProperties
      }
    >
      <div className="flex flex-col">
        <div
          className="flex flex-col gap-y-4"
          style={
            {
              "--text-color": data.textColor,
            } as React.CSSProperties
          }
        >
          <img src={logo} alt="logo" width={155} height={30} />
          <p className="text-[var(--text-color)] font-inter text-sm lg:text-base">
            {data.description}
          </p>
        </div>
        <FooterSocial
          iconColor={data.iconColor}
          className="hidden lg:flex mt-6"
        />
      </div>

      <div>CONTENT</div>
      <FooterSocial iconColor={data.iconColor} className="lg:hidden" />
    </footer>
  );
}
