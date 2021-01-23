import { shallow } from "enzyme";
import JobList from "../JobList";

const searchResults = [
  {
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
    url:
      "https://jobs.github.com/positions/edcde840-5bc0-4ecd-92f1-21b3e6f4e6e0",
  },
  {
    company: "Company 2",
    company_logo: "Company-logo",
    company_url: "http://company2.com",
    created_at: "Fri Jan 22 01:31:48 UTC 2021",
    description: "<p>description</p>",
    how_to_apply: "<p>Apply here</p>",
    id: "edcde840-5b5555592f1-21b3e6f4e6e0",
    location: "Palo Alto, CA ",
    title: "Backend",
    type: "Part Time",
    url:
      "https://jobs.github.com/positions/edcde840-5bc0-4ecd-92f1-21b3e6f4e6e0",
  },
];

describe("Test JobList", () => {
  test("Should render one JobItem for each item in searchResults", () => {
    const wrapper = shallow(<JobList searchResults={searchResults} />);
    expect(wrapper.find("JobItem").length).toBe(searchResults.length);
  });

  test('Should render "No jobs found" when the the length of searchResults is 0', () => {
    const wrapper = shallow(<JobList searchResults={[]} />);
    expect(wrapper.find("p").text()).toBe("No jobs found");
  });
});
