import './App.css'
import { About, Footer, Header, Portfolio, Resume, Testimonials } from './components/index'
import { resumeData } from './constants'


function App() {

  return (
    <div className="App">
      <Header data={resumeData.main} />
      <About data={resumeData.main} />
      <Resume data={resumeData.resume} />
      <Portfolio data={resumeData.portfolio} />
      <Testimonials data={resumeData.testimonials} />
      <Footer data={resumeData.main} />
    </div>
  )
}

export default App
