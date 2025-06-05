import { IComponentProps } from "@custom-types/components";
import { IFooter } from "@custom-types/components/footer";
import { twMerge } from "tailwind-merge";
import logo from "@assets/images/logo.svg";
import { useComponentData } from "@hooks/useComponentData";
import { FooterSocial } from "./FooterSocial";
import { Accordion } from "@components/Accordion";

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

      {data.items && (
        <div
          className={twMerge(
            "w-full lg:ml-auto lg:w-auto",
            "flex flex-col gap-y-4 lg:flex-row lg:flex-wrap lg:gap-x-4 lg:gap-y-8 lg:justify-end"
          )}
        >
          {data.items.map((item) => (
            <Accordion
              key={item.text}
              title={item.text}
              minWidthExpanded={1024}
              className="text-[var(--text-color)] border-b border-b-[var(--text-color)] lg:w-[9.375rem]"
              style={
                {
                  "--text-color": data.textColor,
                } as React.CSSProperties
              }
            >
              {item.subItems?.length > 0 && (
                <div
                  className="flex flex-col gap-y-2 lg:gap-y-4"
                  style={
                    {
                      "--sub-item-text-color": data.textColor,
                    } as React.CSSProperties
                  }
                >
                  {item.subItems.map((subItem) =>
                    subItem.link ? (
                      <a
                        href={subItem.link}
                        className="text-[var(--sub-item-text-color)] text-sm lg:text-base"
                        key={subItem.text}
                      >
                        {subItem.text}
                      </a>
                    ) : (
                      <p
                        className="text-[var(--sub-item-text-color)] text-sm lg:text-base"
                        key={subItem.text}
                      >
                        {subItem.text}
                      </p>
                    )
                  )}
                </div>
              )}
            </Accordion>
          ))}
        </div>
      )}
      <FooterSocial iconColor={data.iconColor} className="lg:hidden" />
    </footer>
  );
}
