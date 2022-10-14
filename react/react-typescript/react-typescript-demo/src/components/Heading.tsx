type HeadingProp ={
    children:string
}
export const Heading = (props:HeadingProp) => {
  return (
    <div>
        <h2>
            {props.children}
        </h2>
    </div>
  )
}
