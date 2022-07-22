import { reverseString, stringLength } from "./index";


describe('string length', () => {
  it('"test" length is 4', () => {
    expect(stringLength('test')).toBe(4);
  });
  it('"3412423" length is 7', () => {
    expect(stringLength('3412423')).toBe(7);
  });

  it('"sveb" length is not 7', () => {
    expect(stringLength('sveb')).not.toBe(7);
  });
});

describe('reverse string', () => {
  it('"test" reverse "tset"', () => {
    expect(reverseString('test')).toBe('tset');
  });
  it('"3412423" reverse is 7', () => {
    expect(reverseString('3412423')).toBe("3242143");
  });

  it('"sveb" reverse is not 7', () => {
    expect(reverseString('sveb')).not.toBe('7');
  });
});
