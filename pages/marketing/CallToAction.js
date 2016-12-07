import { DOM } from 'react';
const { a } = DOM;
import { callToAction as className } from './style.css';

const CallToAction = ({alpha}) => 
a(
  { href: alpha ? '/dockets/new' : '#signUp', className },
  alpha ? 'Create a ballot!' : "Get notified when it's released."
);

export default CallToAction;