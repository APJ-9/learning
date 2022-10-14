type PersonProp ={
    name: {
        first: string;
        last: string;
    }
}
export const Person =(props:PersonProp)=>{
    return <div>{props.name.first} {props.name.last}</div>
}
