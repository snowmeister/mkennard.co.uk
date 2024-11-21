
import './App.css';
import Heading from './components/common/Heading';
import Section from './components/common/Section';

import ScrollTracker from './components/common/ScrollTracker';
function App() {

  return (
    <>
    <ScrollTracker />
     <Section bgColor={'bg-gray-700'}>
        <Heading size={1}>Hello.</Heading>
     </Section>
      <Section bgColor={'bg-gray-400'}>
        <Heading size={1}>I'm Mark</Heading>
        <Heading size={3}>AKA Snowmeister</Heading>
      </Section>
      <Section bgColor={'bg-gray-600'}>
        <Heading size={1}>I'm a coder</Heading>
        <Heading size={3}>I make things online.</Heading>
      </Section>
   
    </>
  )
}

export default App
