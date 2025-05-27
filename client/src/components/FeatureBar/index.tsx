import { IFeatureBar } from "@custom-types/components/feature-bar";
import { twMerge } from "tailwind-merge";
import { cld } from "@utils/cloudinary";
import { IComponentProps } from "@custom-types/components";

interface IFeatureBarProps extends IComponentProps {
  data: IFeatureBar;
}

export function FeatureBar({ data, className }: IFeatureBarProps) {
  if (!data || !data.items || !data.isActive) return null;

  return (
    <div className={twMerge("w-full py-8 px-4 lg:px-8 2xl:px-14", className)}>
      <div className="flex flex-wrap justify-between">
        {data.items.map((item, index) => (
          <div
            key={index}
            className={twMerge(
              "flex flex-col gap-y-2 items-center justify-center text-center p-6 lg:p-8",
              "w-1/2 md:w-1/4 max-w-[18.75rem]"
            )}
          >
            <img
              width={32}
              height={32}
              src={cld.image(item.icon).toURL()}
              alt={item.title}
              className="w-8 h-8 object-contain"
            />

            <div className="flex flex-col gap-y-1">
              <h3 className="font-spaceGrotesk font-medium text-sm xl:text-base">
                {item.title}
              </h3>
              <p className="font-inter text-xs lg:text-sm">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
