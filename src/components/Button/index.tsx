export interface IButtonProps {
  children: React.ReactNode
  onClick?: () => void
  active?: boolean
}

const Button = ({ children, onClick, active = false }: IButtonProps) => {
  return (
    <button
      className={`m-2 rounded-xl border-none px-12 py-2 outline-none transition-all delay-150 hover:bg-purple-400 focus:outline-none ${
        active ? 'bg-white text-primary' : 'text-white'
      }`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
