import { shallow } from "enzyme";
import SearchForm from "../SearchForm";
import * as S from "../styled";

describe("Test SearchForm", () => {
  test("An input exists", () => {
    const wrapper = shallow(<SearchForm />);
    const input = wrapper.find(S.SearchInput).dive().find("input");
    expect(input.exists()).toBe(true);
  });

  test("A button exists", () => {
    const wrapper = shallow(<SearchForm />);
    const button = wrapper.find(S.SubmitBtn).dive().find("button");
    expect(button.exists()).toBe(true);
  });
});
