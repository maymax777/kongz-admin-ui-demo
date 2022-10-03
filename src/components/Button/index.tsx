interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
}

const Button = ({ children, onClick, active = false }: ButtonProps) => {
  return (
    <button
      className={`m-2 rounded-xl border-none px-12 py-2 outline-none transition-all delay-150 hover:bg-purple-400 focus:outline-none ${
        active && 'bg-white text-primary'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
