
const Button = ({type, title,icon,className}) => {
  return (
    <button type={type} className={`flexCenter ${className}`}>
        {icon && <img src={icon} alt={title} width={24} height={24}/>}
        <label className='bold-16 whitespace-nowrap'>{title}</label>
    </button>
  )
}

export default Button