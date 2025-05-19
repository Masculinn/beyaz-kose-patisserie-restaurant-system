import { Banner } from "@/components/banner";
import { List } from "@/components/list";
import dataLib from "@/lib/data.lib";

export default function Home() {
  return (
    <>
      <Banner />
      <br />
      {Object.entries(dataLib)
        .reverse()
        .map(([key, value]) => (
          <List key={key} className="my-12">
            <List.Header>
              <List.Title className="font-brand text-5xl">
                {value.title}
              </List.Title>
              <List.Description className="tracking-tighter text-secondary">
                {value.desc}
              </List.Description>
            </List.Header>
            <List.Content className="gap-2 ">
              {value.items.map(({ item, price }) => (
                <div
                  className={`flex justify-between w-full items-center-safe border-b border-gray-600 border-dashed pt-2 pb-1 `}
                  key={item}
                >
                  <List.Item className="font-brand text-md">{item}</List.Item>
                  <List.Price price={price} className="font-semibold" />
                </div>
              ))}
            </List.Content>
          </List>
        ))}
    </>
  );
}
