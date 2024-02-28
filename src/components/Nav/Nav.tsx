import logo from '../../assets/logo.png'

const Nav = () => {
  return (
    <div className="navbar bg-black">
        <div className="flex-1">
        <a className="btn btn-ghost text-xl">
        <img src={logo} alt="Sua Logo" className="h-8 w-auto" />
        <div>
            
        </div>
        </a>
            </div>
            <div className="flex-none">
            <button className="btn btn-square btn-ghost mr-5 w-full">
                PROJETOS
            </button>
        </div>

        <div className="flex-none">
            <button className="btn btn-square btn-ghost mr-5 w-full">
                EU
            </button>
        </div>

        <div className="flex-none">
            <button className="btn btn-square btn-ghost mr-5 w-full">
                SKILLS
            </button>
        </div>

        <div className="flex-none">
            <button className="btn btn-square btn-ghost mr-5 w-full">
                CONTATO
            </button>
        </div>
    </div>
  )
}

export default Nav
