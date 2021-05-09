import React from 'react';
import {shallow, configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Main from '../components/Main';
import { TextField } from '@material-ui/core';

//testing react&material ui with enzyme
configure({adapter: new Adapter()});

describe('Main tests', () => {
    let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Main />);
  });
    test('TextField component should exists.', () => {
      expect(wrapper.find(<TextField/>)).toBeDefined()
    })
  })
