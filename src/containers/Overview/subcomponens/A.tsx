export interface IAProps {
  href: string
  value: string
}

export const A = ({ href, value }: IAProps) => (
  <a className="hover:text-pink-400" href={href} target="_blank" rel="noreferrer">
    {value}
  </a>
)

export default A
