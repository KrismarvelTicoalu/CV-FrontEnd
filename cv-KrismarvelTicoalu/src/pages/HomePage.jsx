import { Slide } from 'react-reveal'
import { About } from '../components/About'
import { Education } from '../components/Education'
import { Skills } from '../components/Skills'
import { Interests } from '../components/Interests'
import { Certifications } from '../components/Certifications'
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
            <Certifications />
        </div>
    </Slide>
</div>

    </div>
  )
}
