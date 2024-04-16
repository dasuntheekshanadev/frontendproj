import { Faqs } from ".";

export default {
  title: "Components/Faqs",
  component: Faqs,
  argTypes: {
    property1: {
      options: ["clicked", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "clicked",
    className: {},
    text: "What is Webflow and why is it the best website builder?",
    text1:
      "Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.",
  },
};
