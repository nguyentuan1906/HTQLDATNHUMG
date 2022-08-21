import "./button-common.scss"
const Button = (props) => {
  console.log("🚀 ~ file: index.jsx ~ line 5 ~ Button ~ className", props)
  return (
    <button {...props} className={props.className}>{props.text}</button>
  )
}

export default Button