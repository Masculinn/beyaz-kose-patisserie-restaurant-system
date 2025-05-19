/* Component interfaces */

export interface BannerProps {
  className?: string;
}

export interface ListHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface ListContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export interface Pricing {
  fixed: number;
  percentage?: number;
}

export interface ListPriceProps
  extends Omit<React.HTMLAttributes<HTMLSpanElement>, "children"> {
  price: Pricing;
}

export type ListTitleProps = React.ComponentProps<"h2">;
export type ListDescProps = React.ComponentProps<"p">;
export type ListItemProps = React.ComponentProps<"p">;

/** Lib interfaces */

export type ProductCategory = Record<
  string,
  {
    title: string;
    desc: string;
    items: ProductItemProps[];
  }
>;
export interface ProductItemProps {
  item: string;
  price: Pricing;
}
