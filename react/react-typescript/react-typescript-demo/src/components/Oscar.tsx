type OscarProps = {
    children: React.ReactNode
}
export const Oscar = (props:OscarProps) => {
  return (
    <div>{props.children}Oscar goes to Leonardo Dicpario!</div>
  )
}
