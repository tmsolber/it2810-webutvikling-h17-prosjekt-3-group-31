import './globalJSDOM';
import ToDoForm from '../src/components/ToDoForm';
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

configure({ adapter: new Adapter() });

test('to be empty when not shown', () => {
  const component = shallow(<ToDoForm show={false} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('test that modal is shown', () => {
  const component = shallow(<ToDoForm show={true} />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('test that onUpdate that sets state gets called', () => {
  const component = mount(<ToDoForm show={true} />);
  const onUpdate = jest.fn();
  component.setProps({ onUpdate });
  const tree = toJson(component);
  const input = component.find('input');
  input.simulate('keydown', { which: 'A' });
  input.simulate('keydown', { which: 13 });

  expect(onUpdate).toBeCalled();
  expect(tree).toMatchSnapshot();
});
