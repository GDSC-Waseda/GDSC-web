import { ComponentStory, ComponentMeta } from "@storybook/react";

import { CarouselCard } from "./";

const CarouselCardRender: React.FC<{
  title: string;
  subtitle: string;
  image: string;
  old: boolean;
  link: string;
}> = ({ ...props }) => {
  return <CarouselCard props={props} />;
};

const Template: ComponentStory<typeof CarouselCardRender> = (args) => (
  <CarouselCardRender {...args} />
);
export const DefaultCard = Template.bind({});
DefaultCard.args = {
  title: "JUL 17, 2022",
  subtitle: "Demo Day",
  image: "events/demoday.png",
  old: false,
  link: "events/details/demo-day",
};

export default {
  title: "Cards/CarouselCard",
  component: CarouselCardRender,
  argTypes: {
    title: { control: "text" },
    subtitle: { control: "text" },
    image: { control: "text" },
    old: { control: "boolean" },
    link: { control: "text" },
  },
} as ComponentMeta<typeof CarouselCardRender>;
