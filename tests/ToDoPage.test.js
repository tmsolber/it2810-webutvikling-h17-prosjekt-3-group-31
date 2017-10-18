import './globalJSDOM';
import ToDoPage from '../src/components/ToDoPage';
import React from 'react';
import { configure, shallow, mount, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

class LocalStorageMock {
  constructor() {
    this.store = {};
  }

  clear() {
    this.store = {};
  }

  getItem(key) {
    return this.store[key] || null;
  }

  setItem(key, value) {
    this.store[key] = value.toString();
  }

  removeItem(key) {
    delete this.store[key];
  }
}

global.localStorage = new LocalStorageMock();
configure({ adapter: new Adapter() });

test('test that page returns content without props', () => {
  const component = shallow(<ToDoPage />);
  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});

test('test that page is rendered without values', () => {
  const component = mount(<ToDoPage />);
  const tree = toJson(component);
  expect(component.find('GridColumn.todoTextFalse').length).toBe(0);
  expect(tree).toMatchSnapshot();
});

test('test that values are rendered', () => {
  const values = [
    { text: 'asd', key: 1508355111614, cName: 'todoTextFalse', checked: null },
    { text: 'dsa', key: 1508355113035, cName: 'todoTextFalse', checked: null }
  ];
  const component = mount(<ToDoPage />);
  component.setState({ value: values });
  const tree = toJson(component);
  expect(component.find('GridColumn.todoTextFalse').length).toBe(2);
  expect(tree).toMatchSnapshot();
});
