import * as React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Button', () => {
    it('renders', () => {
        const wrapper = shallow(<Button>OK</Button>);
        expect(wrapper).toMatchInlineSnapshot(`ShallowWrapper {}`);
    });

    it('calls onClick on button click', () => {
        const handleClick = jest.fn();
        const wrapper = shallow(<Button onClick={handleClick}>OK</Button>);
        wrapper.find('StyledButton').simulate('click');
        expect(handleClick).toHaveBeenCalled();
    });
});
