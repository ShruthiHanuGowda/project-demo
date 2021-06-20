import React from 'react';
import Counter from './counter';
import { shallow } from 'enzyme';
import { describe } from 'jest-circus';
import { expect, it } from '@jest/globals';

describe('Counter component', () => {
  it('starts with a count 0', () => {
    const wrapper = shallow(<Counter />);
    const text = wrapper.find('p').text();
    expect(text).toEqual('Current Count: 0');
  });
});
