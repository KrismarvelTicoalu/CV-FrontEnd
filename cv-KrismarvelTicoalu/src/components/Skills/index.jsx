import { DevIcons } from "../DevIcons"

export const Skills = () => {
  return (
    <div>
        <section className="resume-section p-3 p-lg-5 d-flex flex-column" id="skills">
            <div className="my-auto">
                <h2 className="mb-5">Skills</h2>
                <div className="subheading mb-3">Programming Languages</div>
                <ul className="list-inline list-icons">
                <li className="list-inline-item">
                    <DevIcons skill="python" />
                </li>
                <li className="list-inline-item">
                    <DevIcons skill="html5" />
                </li>
                <li className="list-inline-item">
                    <DevIcons skill="css3" />
                </li>
                <li className="list-inline-item">
                    <DevIcons skill="javascript" />
                </li>
                </ul>
                <div className="subheading mb-3">Workflow</div>
                <ul className="fa-ul mb-0">
                <li>
                    <i className="fa-li fa fa-check" />
                    Mobile-First, Responsive Design</li>
                <li>
                    <i className="fa-li fa fa-check" />
                    Cross Browser Testing &amp; Debugging</li>
                <li>
                    <i className="fa-li fa fa-check" />
                    Cross Functional Teams</li>
                <li>
                    <i className="fa-li fa fa-check" />
                    Agile Development &amp; Scrum</li>
                </ul>
            </div>
            </section>
    </div>
  )
}
