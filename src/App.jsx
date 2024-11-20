
import './App.css';
import Heading from './components/common/Heading';

function App() {

  return (
    <>
      <div className="h-screen w-screen bg-gray-800 flex flex-col items-center justify-center my-0 p-4">
        <Heading size={1}>Hello</Heading>
        <Heading size={3}>I'm Mark.</Heading>
      </div>
      <div className="h-screen w-screen bg-gray-900 flex flex-col items-center justify-center my-0 p-4">
        <Heading size={3}>I'm a coder.</Heading>
      </div>
    </>
  )
}

export default App
