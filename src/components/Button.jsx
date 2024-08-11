import ButtonSvg from '../assets/svg/ButtonSvg'

const Button = ({ className, href, onClick, children, px, white }) => {
  
  const classes = `button relative inline-flex items-center justify-center h11 transition-colors hover:text-color-1 
                  ${px || 'px-7'} ${white ? 'text-n-8' : 'text-n-8'} ${className || ''}`;

  const spanClasses = 'relative z-10'

  const renderButton = () => {
    <button className= {classes}>
        <span className= {spanClasses}>{children}</span>
        {ButtonSvg(white)}
    </button>
  };

  const renderlink = () => (
    <a href={href}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(white)}
    </a>
  )

  return href 
    ? renderlink()
    : renderButton();
};

export default Button