/* eslint-disable react/prop-types */
export const NavItem = (props) => {
  return (
    <div>
        <a className="nav-link js-scroll-trigger" href={props.href}>{props.title}</a>
    </div>
  )
}
