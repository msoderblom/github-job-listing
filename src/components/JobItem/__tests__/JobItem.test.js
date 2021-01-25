import { shallow, mount } from "enzyme";
import JobItem from "../JobItem";
import * as S from "../styled";

const job = {
  company: "Fiddler AI",
  company_logo: "https://jobs.github.com/",
  company_url: "http://http",
  created_at: "Fri Jan 22 01:31:48 UTC 2021",
  description: "<p><strong>Our Story</strong>Trust is ...</p>",
  how_to_apply:
    "<p>Apply here: <a href='https://jobs.lever.co'>https://jobs.lever.co/fiddlerlabs</a></p>↵",
  id: "edcde840-5bc0-4ecd-92f1-21b3e6f4e6e0",
  location: "Palo Alto, CA ",
  title: "Frontend Engineer",
  type: "Full Time",
  url: "https://jobs.github.com/positions/edcde840-5bc0-4ecd-92f1-21b3e6f4e6e0",
};

describe("Test that info is rendered in the correct elements", () => {
  let wrapper;

  beforeAll(() => {
    wrapper = shallow(<JobItem job={job} />);
  });

  // const wrapper = shallow(<JobItem job={job} />);
  test("Type should be rendered in a strong-element", () => {
    expect(wrapper.find("strong").text()).toBe(job.type);
  });

  test("Title should be rendered in a h2-element", () => {
    const title = wrapper.find(S.Title).dive().find("h2");
    expect(title.text()).toBe(job.title);
  });

  test("Company_url should be rendered in an a-element", () => {
    expect(wrapper.find("a").at(1).text()).toBe(job.company_url);
  });

  test("Company_url link should be in a-element href", () => {
    expect(wrapper.find("a").at(1).props().href).toBe(job.company_url);
  });

  test("Description should be rendered in a div-element", () => {
    const description = wrapper.find(S.Description).dive().find("div").at(0);
    expect(description.html()).toContain(job.description);
  });

  test("Company_logo link should be in img-element src", () => {
    expect(wrapper.find("img").props().src).toBe(job.company_logo);
  });
});

describe("Test conditional rendering", () => {
  test("HowToApply should not be rendered when details-prop is false", () => {
    const wrapper = shallow(<JobItem job={job} />);
    expect(wrapper.find(S.HowToApply).exists()).toBe(false);
  });

  test("HowToApply should be rendered when details-prop is true", () => {
    const wrapper = shallow(<JobItem job={job} details />);
    expect(wrapper.find(S.HowToApply).exists()).toBe(true);
  });

  test("Location should not be rendered when details-prop is false", () => {
    const wrapper = shallow(<JobItem job={job} />);
    expect(wrapper.find(S.Location).exists()).toBe(false);
  });

  test("Location should be rendered when details-prop is true", () => {
    const wrapper = shallow(<JobItem job={job} details />);
    expect(wrapper.find(S.Location).exists()).toBe(true);
  });
});
