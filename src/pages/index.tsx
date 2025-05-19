import BackgroundGrid from "@/components/background-grid";
import { motion as m } from "motion/react";
import { Banner } from "@/components/banner";
import { List } from "@/components/list";
import dataLib from "@/lib/data.lib";
import React from "react";
import Map from "@/components/map";

export default function Home() {
  return (
    <>
      <Banner />
      <br />
      <br />
      <BackgroundGrid />
      {Object.entries(dataLib)
        .reverse()
        .map(([key, value]) => (
          <List key={key} className="mt-12 pb-8">
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
                <m.div
                  key={`${item}-${price}`}
                  initial={{ y: 20, filter: "blur(5px)", opacity: 0 }}
                  whileInView={{ y: 0, filter: "blur(0px)", opacity: 1 }}
                  exit={{ y: 20, filter: "blur(5px)", opacity: 0 }}
                  transition={{ duration: 0.42, bounce: 0.5, delay: 0.25 }}
                  viewport={{ once: false, amount: 0.5 }}
                  className="flex justify-between items-center gap-2 w-full border-b border-gray-600 border-dashed pt-2 pb-1"
                >
                  <List.Item className="font-brand text-md">{item}</List.Item>
                  <List.Price price={price} className="font-semibold" />
                </m.div>
              ))}
            </List.Content>
          </List>
        ))}
    </>
  );
}
