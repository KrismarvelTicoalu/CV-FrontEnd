/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable react/prop-types */
export const Icons = (props) => {
  return (
    <div>
        <a href={props.href} target="_blank">
            <span className="fa-stack fa-lg">
                <i className="fa fa-circle fa-stack-2x" />
                <i className={`fa fa-${props.logo} fa-stack-1x fa-inverse`} />
            </span>
        </a>
    </div>
  )
}
