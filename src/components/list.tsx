// List.tsx
import React, { FC } from "react";
import {
  ListContentProps,
  ListDescProps,
  ListHeaderProps,
  ListItemProps,
  ListPriceProps,
  ListTitleProps,
} from "@/interfaces";

// Root “container”:
const List = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      data-slot="list"
      className={`flex flex-col gap-4 ${className}`}
      {...props}
    />
  );
};

// 1) List.Header only renders its children (we’ve removed title/desc props):
const ListHeader: FC<ListHeaderProps> = ({ children, className, ...props }) => (
  <div
    data-slot="list-header"
    className={`flex flex-col gap-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

// 2) List.Title just wraps an <h2>:
const ListTitle: FC<ListTitleProps> = ({ className, ...props }) => (
  <h2
    data-slot="list-title"
    className={`flex items-center gap-2 ${className}`}
    {...props}
  />
);

// 3) List.Description just wraps a <p>:
const ListDescription: FC<ListDescProps> = ({ className, ...props }) => (
  <p
    data-slot="list-description"
    className={`flex items-center gap-2 ${className}`}
    {...props}
  />
);

// 4) List.Content is a simple flex container for its children:
const ListContent: FC<ListContentProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    data-slot="list-content"
    className={`flex flex-row justify-between ${className}`}
    {...props}
  >
    {children}
  </div>
);

// 5) List.Item wraps a <p> for the item’s name:
const ListItem: FC<ListItemProps> = ({ className, ...props }) => (
  <p
    data-slot="list-item"
    className={`tracking-tight ${className}`}
    {...props}
  />
);

// 6) List.Price wraps a <span> and expects a “price” prop:
const ListPrice: FC<ListPriceProps> = ({ price, className, ...props }) => (
  <span
    data-slot="list-price"
    className={`tracking-tight ${className}`}
    {...props}
  >
    {price.fixed} TL {price.percentage ? `(${price.percentage}% off)` : ""}
  </span>
);

// Now wire up exactly one assignment per “slot”:
List.Header = ListHeader;
List.Title = ListTitle;
List.Description = ListDescription;
List.Content = ListContent;
List.Item = ListItem;
List.Price = ListPrice;

export {
  List,
  ListHeader,
  ListTitle,
  ListDescription,
  ListContent,
  ListItem,
  ListPrice,
};
