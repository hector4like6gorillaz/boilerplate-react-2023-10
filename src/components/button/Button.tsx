const Button = ({ label }: { label?: string }) => {
  return <button>{label ? label : 'vacio'}</button>
}

export default Button
