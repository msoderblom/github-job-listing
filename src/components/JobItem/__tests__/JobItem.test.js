import { shallow, mount } from "enzyme";
import JobItem from "../JobItem";

const job = {
  company: "Fiddler AI",
  company_logo:
    "https://jobs.github.com/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBa0tXIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--f2edb3c4fc78f6558cda597c95a6c0b3c1e5cd40/Logo%20200px.png",
  company_url: "http://http",
  created_at: "Fri Jan 22 01:31:48 UTC 2021",
  description:
    "<p><strong>Our Story</strong>Trust is a fundamental part of humanity...</p>",
  how_to_apply:
    "<p>Apply here: <a href='https://jobs.lever.co/fiddlerlabs/c6c9be0b-1c12-4803-b3af-c17fe043f269'>https://jobs.lever.co/fiddlerlabs/c6c9be0b-1c12-4803-b3af-c17fe043f269</a></p>↵",
  id: "edcde840-5bc0-4ecd-92f1-21b3e6f4e6e0",
  location: "Palo Alto, CA ",
  title: "Frontend Engineer",
  type: "Full Time",
  url: "https://jobs.github.com/positions/edcde840-5bc0-4ecd-92f1-21b3e6f4e6e0",
};

describe("Test JobItem", () => {
  // type is rendered in <strong> ✅
  // title is rendered in <h2> ✅
  // company_url is in a-tag and in it's href
  // description is rendered in div tag
  // company_logo is rendered in img tag src

  // expect(wrapper.is('.some-class')).to.equal(true);
  // expect(wrapper.type()).to.equal('div');
  // expect(wrapper.find(Bar).dive().find('.in-bar')).to.have.lengthOf(1);

  // för state
  // expect(wrapper.state().foo).to.equal(10);
  // expect(wrapper.state('foo')).to.equal(10);

  // check contexts
  /*
  expect(wrapper.state().foo).to.equal(10);
expect(wrapper.state('foo')).to.equal(10);
*/

  test("Type should be rendered in a strong-element", () => {
    const wrapper = shallow(<JobItem job={job} />);
    expect(wrapper.find("strong").text()).toBe(job.type);
  });

  test("Title should be rendered in a h2-element", () => {
    const wrapper = shallow(<JobItem job={job} />);
    expect(wrapper.find("h2").text()).toBe(job.title);
  });

  test("Company_url should be rendered in an a-element", () => {
    const wrapper = shallow(<JobItem job={job} />);
    expect(wrapper.find("a").at(1).text()).toBe(job.company_url);
  });

  test("Company_url link should be in a-element href", () => {
    const wrapper = shallow(<JobItem job={job} />);
    expect(wrapper.find("a").at(1).props().href).toBe(job.company_url);
  });

  test("Description should be rendered in a div-element", () => {
    const wrapper = mount(<JobItem job={job} />);
    console.log(wrapper.debug());

    // const description = wrapper.find("#description").find("div");
    // const description = wrapper.find("#description");
    // console.log();
    // expect(description.html()).toContain(job.description);
  });

  test("Company_logo link should be in img-element src", () => {
    const wrapper = shallow(<JobItem job={job} />);
    expect(wrapper.find("img").props().src).toBe(job.company_logo);
  });
});
