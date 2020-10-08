import React from 'react';
import './../../styles/index.css'
import {UncontrolledAccordion} from "./UncontrolledAccordion";
// also exported from '@storybook/react' if you can deal with breaking changes in 6.1



export default {
  title: 'UncontrolledAccordion',
  component: UncontrolledAccordion,
};

export const uncontrolledAccordion = () => <UncontrolledAccordion titleValue="Menu"/>


