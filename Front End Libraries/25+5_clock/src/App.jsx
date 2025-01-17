
import './App.css'
import Break from './components/break'
import Display from './components/display'
import Session from './components/session'

function App() {


  return (
    <>
    <div className='container'>
      <div className='lengths'>
      <Break></Break>
      <Session></Session>
      </div>
      <Display></Display>
      </div>
    </>

  )
}

export default App
