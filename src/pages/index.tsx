import { Banner } from "@/components/banner";
import { List } from "@/components/list";
export default function Home() {
  return (
    <>
      <Banner>
        <h3 className="text-white text-shadow-md tracking-tight">
          Tatlılarımızda yaza özel %20 ye varan indirim sizlerle!
        </h3>
      </Banner>
      <List className="mt-12">
        <List.Header>
          <List.Title>List Title</List.Title>
          <List.Description>List Description</List.Description>
        </List.Header>
        <List.Content>
          <List.Item>Milk</List.Item>
          <List.Price price={{ fixed: 24 }} />
        </List.Content>
      </List>
    </>
  );
}
