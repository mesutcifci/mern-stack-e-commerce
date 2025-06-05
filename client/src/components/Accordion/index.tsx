import React, { useState, useRef, useEffect } from "react";
import { ChevronDown } from "@icons/ChevronDown";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useWindowSize } from "@hooks/useWindowSize";

interface IAccordionProps {
  title: string;
  children: React.ReactNode;
  defaultOpen?: boolean;
  icon?: React.ReactNode;
  className?: string;
  minWidthExpanded?: number; // Breakpoint in pixels where accordion becomes simple list
  style?: React.CSSProperties;
}

export function Accordion({
  title,
  children,
  defaultOpen = false,
  icon,
  className,
  minWidthExpanded = 1024,
  style,
}: IAccordionProps) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef<HTMLDivElement>(null);
  const { width } = useWindowSize();

  // Auto-expand when screen width is >= minWidthExpanded
  useEffect(() => {
    if (width >= minWidthExpanded) {
      setIsOpen(true);
    }
  }, [width, minWidthExpanded]);

  const handleToggle = () => {
    if (width >= minWidthExpanded) return; // Don't toggle if above breakpoint
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={twMerge(
        clsx(
          "border-b border-fake-jade w-full lg:px-4",
          className,
          width >= minWidthExpanded && "border-b-0"
        )
      )}
      style={style}
    >
      <button
        onClick={handleToggle}
        className={twMerge(
          "w-full p-3 lg:p-0 lg:pb-4 text-left",
          "flex items-center justify-between",
          width >= minWidthExpanded && "cursor-default pointer-events-none"
        )}
        disabled={width >= minWidthExpanded}
      >
        <span className="font-medium font-spaceGrotesk text-base lg:text-xl">
          {title}
        </span>
        {width < minWidthExpanded &&
          (icon || (
            <div
              className={clsx(
                "transition-transform duration-300 ease-in-out",
                isOpen ? "rotate-180" : "rotate-0"
              )}
            >
              <ChevronDown />
            </div>
          ))}
      </button>

      <div
        className="overflow-hidden transition-all duration-300 ease-in-out"
        style={{
          height: isOpen ? contentRef.current?.scrollHeight + "px" : "0px",
        }}
      >
        <div ref={contentRef} className="p-4 pt-0 lg:p-0">
          {children}
        </div>
      </div>
    </div>
  );
}
