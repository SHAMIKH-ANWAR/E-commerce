import React from 'react';
import { cn } from "@/lib/utils";

export const BentoGrid = React.memo(({ className, children }) => {
  return (
    <div
      className={cn(
        "grid auto-rows-[20rem] grid-cols-1 md:grid-cols-4 gap-4 max-w-7xl mx-auto",
        className
      )}>
      {children}
    </div>
  );
});

BentoGrid.displayName = 'BentoGrid';

export const BentoGridItem = React.memo(({
  className,
  title,
  description,
  header,
  icon,
  price
}) => {
  return (
    <div
      className={cn(
        "rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}>
      {header}
      <div className="space-y-2">
        <h3 className="font-bold text-xl text-neutral-800 dark:text-neutral-200 mb-2 font-serif">
          {title}
        </h3>
        <p className="font-normal text-neutral-600 text-sm dark:text-neutral-300 font-serif">
          {description}
        </p>
        {price && (
          <p className="font-semibold text-lg text-blue-600 dark:text-blue-400 font-serif">
            {price}
          </p>
        )}
      </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        {icon}
      </div>
    </div>
  );
});

BentoGridItem.displayName = 'BentoGridItem';