import { SliderComponentData } from "@custom-types/components/slider-component";
import { HeroSliderMedia } from "./HeroSliderMedia";
import { ArrowRight } from "@icons/ArrowRight";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import "./styles.css";
import { IComponentProps } from "@custom-types/components";

interface IHeroSliderProps extends IComponentProps {
  data: SliderComponentData;
}

export function HeroSlider({ data, className }: IHeroSliderProps) {
  if (!data || data.items?.length === 0 || !data.isActive) return null;

  return (
    <div className={twMerge("hero-slider", className)}>
      <swiper-container
        pagination="true"
        pagination-clickable="true"
        autoplay-delay={data.autoplay ? "2500" : undefined}
      >
        {data.items?.map((item, index) => (
          <swiper-slide key={item._id || index}>
            <div
              className="relative"
              style={
                {
                  "--text-color": item.textColor,
                  "--button-text-color": item.buttonTextColor,
                  "--button-background-color": item.buttonBackgroundColor,
                } as React.CSSProperties
              }
            >
              <div
                className={twMerge(
                  "absolute left-4 pr-4 top-20 xl:top-36 lg:left-8 2xl:left-14 lg:w-[28rem] flex flex-col gap-y-4 md:gap-y-8"
                )}
              >
                {item.title && (
                  <h2
                    className={twMerge(
                      `text-[var(--text-color)] font-spaceGrotesk font-medium text-3xl md:text-4xl lg:text-5xl`
                    )}
                  >
                    {item.title}
                  </h2>
                )}
                {item.description && (
                  <p
                    className={twMerge(
                      `text-[var(--text-color)] font-inter text-sm md:text-xl`
                    )}
                  >
                    {item.description}
                  </p>
                )}
                {item.buttonText && (
                  <a
                    href={item.link}
                    className={twMerge(
                      clsx(
                        // item.buttonBackgroundColor === "transparent"
                        //   ? "bg-transparent"
                        //   : `bg-[var(--button-background-color)]`,
                        `text-[var(--button-text-color)]`,
                        `flex items-center w-max border-b border-b-[var(--button-text-color)]`,
                        "group"
                      )
                    )}
                  >
                    <span
                      className={twMerge(
                        "text-sm md:text-xl font-spaceGrotesk font-medium"
                      )}
                    >
                      {item.buttonText}
                    </span>
                    <ArrowRight
                      className="arrow-right-transition w-5 h-5 md:w-6 md:h-6"
                      stroke={item.buttonTextColor}
                    />
                  </a>
                )}
              </div>
              <HeroSliderMedia item={item} />
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
    </div>
  );
}
