import React from 'react'
import { treeList } from '../data/ElementsList'
import ListElement from './ListElement'

const ListElements = () => {
  return (
    <>
    {
      treeList.map((elem, i) => {
        return <ListElement key={i+5} element = {elem} index = {i} />
      })
    }
    </>
  )
}

export default ListElements