import React from 'react';
import logo from '../assets/logo.png'

interface ProjectProps {
  id: string;
}

const Footer: React.FC<ProjectProps> = ({ id }) => {
  return (
    <div id = {id}>
      <footer className="footer footer-center p-10 bg-base-300 text-base-content ">
        <aside>
          <img src={logo} alt="devpedroazevedo" className="h-8 w-auto" />
          <p className="font-bold">
            <p>Feito com 🩵 por Pedro Azevedo</p>
          </p> 
          <p>Copyright © 2024 - All right reserved</p>
        </aside> 
    </footer>
    </div>
  )
}

export default Footer
