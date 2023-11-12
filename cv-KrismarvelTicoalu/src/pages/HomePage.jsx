import { Slide } from 'react-reveal'
import { About } from '../components/About'
import { Education } from '../components/Education'
import { Skills } from '../components/Skills'
import { Interests } from '../components/Interests'
import { Awards } from '../components/Awards'
import { Navigation } from '../components/Navigation'

export const HomePage = () => {
  return (
    <div>
        <div>
    
    <Navigation />

    <Slide down>
        <div className="container-fluid p-0">
            <About />
            <Education />
            <Skills />
            <Interests />
            <Awards />
        </div>
    </Slide>
</div>

    </div>
  )
}
