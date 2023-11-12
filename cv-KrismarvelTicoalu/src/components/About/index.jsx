import { Icons } from "../Icons"

export const About = () => {
  return (
    <div>
        <section className="resume-section p-3 p-lg-5 d-flex d-column" id="about">
            <div className="my-auto">
                <h1 className="mb-0">Krismarvel
                <span className="text-primary"> Ticoalu</span>
                </h1>
                <div className="subheading mb-5">Bitung, North Sulawesi, Indonesia · 0895-8040-40696 ·
                <a href="mailto:avelticoalu22@gmail.com">avelticoalu22@gmail.com</a>
                </div>
                <p className="mb-5">I am a college student in Universitas Klabat majoring in informatics. Always going to be risk-taker.</p>
                <ul className="list-inline list-social-icons mb-0">
                <li className="list-inline-item">
                    <Icons logo="instagram" href="https://www.instagram.com/avelbryl/" />
                </li>
                <li className="list-inline-item">
                    <Icons logo="linkedin" href="https://www.linkedin.com/in/krismarvel-ticoalu-409aa4256/"/>
                </li>
                <li className="list-inline-item">
                    <Icons logo="github" href="https://github.com/KrismarvelTicoalu"/>
                </li>
                </ul>
            </div>
            </section>
    </div>
  )
}
