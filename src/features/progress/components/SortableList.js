/**
 * @flow
 */

import React from 'react'
import { NavLink } from 'react-router-dom'
import {
  SortableContainer,
  SortableElement
} from 'react-sortable-hoc'
import styled from 'styled-components'
import { colors } from '../../../common/theme'
import { titleCase } from '../../../common/utils'

const List = styled.div`
  margin: 0;
  padding: 0;
  font-weight: bold;
  display: flex;
  flex-direction: row;
  text-align:center;
`
const NavItem = styled(NavLink)`
  text-decoration: none;
  font-weight: bold;
  color: ${colors.foreground};
  list-style: none;
  display: inline-block;
  margin-bottom: 20px;
  position: relative;

  &:hover {
    &::before {
      width: 100% !important;
      opacity: 1;
    }
  }

  &.active {
    transform: scale(1, 1);
    color: ${colors.primary};

    &:before {
      opacity: 1;
    }
  }

  &:before {
    transition: all 0.4s ease;
    content: '';
    height: 1px;
    background: ${colors.primary};
    position: absolute;
    pointer-events: none;
    bottom: -2px;
    margin: 0 auto;
    width: 0%;
    opacity: 1;
  }
`
const Item = styled.div`
  z-index: 2;
  min-width: 80px;
`
const SortableItem = SortableElement(({ value }) => {
  return (
    <Item>
      <NavItem to={`/generator/${value}`}>{titleCase(value)}</NavItem>
    </Item>
  )
})
const SortableList = SortableContainer(({ items }) => {
  return (
    <List>
      {items.map((value, index) => (
        <SortableItem
          disabled={value === 'templates' || value === 'profile'}
          key={`item-${index}`}
          index={index}
          value={value}
        />
      ))}
      
    </List>
  )
})

export default SortableList
