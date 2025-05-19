import React, { FC } from "react";
import {
  ListContentProps,
  ListDescProps,
  ListHeaderProps,
  ListItemProps,
  ListPriceProps,
  ListTitleProps,
} from "@/interfaces";

const List = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    data-slot="list"
    className={`flex flex-col gap-4 ${className}`}
    {...props}
  />
);

const ListHeader: FC<ListHeaderProps> = ({ children, className, ...props }) => (
  <div
    data-slot="list-header"
    className={`flex flex-col gap-2 ${className}`}
    {...props}
  >
    {children}
  </div>
);

const ListTitle: FC<ListTitleProps> = ({ className, ...props }) => (
  <h2
    data-slot="list-title"
    className={`flex items-center gap-2 ${className}`}
    {...props}
  />
);

const ListDescription: FC<ListDescProps> = ({ className, ...props }) => (
  <p
    data-slot="list-description"
    className={`flex items-center gap-2 ${className}`}
    {...props}
  />
);

const ListContent: FC<ListContentProps> = ({
  children,
  className,
  ...props
}) => (
  <div
    data-slot="list-content"
    className={`flex flex-col justify-center items-center ${className}`}
    {...props}
  >
    {children}
  </div>
);

const ListItem: FC<ListItemProps> = ({ className, ...props }) => (
  <p
    data-slot="list-item"
    className={`tracking-tight ${className}`}
    {...props}
  />
);

const ListPrice: FC<ListPriceProps> = ({ price, className, ...props }) => (
  <span
    data-slot="list-price"
    className={`tracking-tight ${className}`}
    {...props}
  >
    {price.fixed} TL {price.percentage ? `(${price.percentage}% off)` : ""}
  </span>
);

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
