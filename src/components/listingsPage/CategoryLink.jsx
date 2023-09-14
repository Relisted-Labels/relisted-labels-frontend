import style from './CategoryLink.module.css'

const CategoryLink = () => {

  return (
    <div className={style.link}>
      <ul>
        <li className={style.active}>
            <a href="#" >All</a>
        </li>
        <li>
            <a href="#">Cooperate</a>
        </li>
        <li>
            <a href="#">Children</a>
        </li>
        <li>
            <a href="#">Men</a>
        </li>
        <li>
            <a href="#">Traditional</a>
        </li>
      </ul>
    </div>
  )
}

export default CategoryLink
