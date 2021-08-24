import React from 'react'
import classes from './NavList.module.scss'
import {NavLink} from "react-router-dom";

export const NavList = props => {
  const links = [
    {id: 1, text: 'Главная', to: '/', exact: true},
    {id: 2, text: 'Фотографии', to: '/photos', exact: false},
    {id: 3, text: 'Конкурс', to: '/contest', exact: false},
    {id: 4, text: 'HTML Academy', href: 'https://htmlacademy.ru/'}
  ]

  const itemCls = [classes.item]

  if (props.isMenuOpen && props.width < 1200) {
    itemCls.push(classes.opened)
  }

  return (
    props.isMenuOpen || props.width >= 1200
      ? <nav className={classes.NavList}>
        <ul className={classes.list + ' list'}>
          {links.map(link => (
            <li
              className={itemCls.join(' ')}
              key={link.id}
            >
              {link.to
                ? <NavLink
                  to={link.to}
                  exact={link.exact}
                  className={classes.link}
                  activeClassName={classes.active}
                >
                  {link.text}
                </NavLink>
                : <a
                  href={link.href}
                  className={classes.link}
                >
                  {link.text}
                </a>
              }
            </li>
          ))}
        </ul>
      </nav>
      : null
  )
}