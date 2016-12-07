import {
  DOM,
  createElement as el,
} from 'react';
const { div } = DOM;
import Hero 				from './Hero';
import UseCaseList	from './UseCaseList';
import SignUp 			from './SignUp';

const Marketing = () => 
div(
  { style: { fontFamily: 'sans-serif' } },
  el(Hero), el(UseCaseList), el(SignUp)
);


export default Marketing;
