import { shallow } from 'enzyme';
import React from 'react';
import Searchbox from './Searchbox';

it('expect to render Searchbox component', () => {
	expect(shallow(<Searchbox />)).toMatchSnapshot();
})