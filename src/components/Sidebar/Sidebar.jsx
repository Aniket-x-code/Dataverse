import css from './Sidebar.module.css'
import { MdSpaceDashboard } from "react-icons/md";
import { AiFillCalendar, AiOutlineTable } from "react-icons/ai";
import { FaTasks } from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className={css.container}>

          <img src="./Logo.png" alt="" />
          <div className={css.menu}>
            <NavLink to="dashboard" className={css.item} title={'Dashboard'} ></NavLink>

          </div>

    </div>
  )
}

export default Sidebar

