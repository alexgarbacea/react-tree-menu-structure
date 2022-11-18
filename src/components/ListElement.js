import React, { useState } from 'react'

const ListElement = ({ element, index, depth = 0 }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const hasChildren = element.children ? true : false;

    return (
        <span key = {`${index}${depth}`} className = 'list-family'>
            <div 
                className={`elem${isExpanded ? ' minus' : ' plus'}`} 
                style={{marginLeft:`${depth*10}px`}}
                onClick = {() => setIsExpanded(!isExpanded)}
                >
                { hasChildren && <span className='open-click'></span> }
                { element.title }
            </div>
            { 
                isExpanded &&
                <>
                { hasChildren && 
                    element.children.map((elem, i) => {
                        return <ListElement key={i+10} element = {elem} index = {i} depth = {depth + 1} />
                    })
                }
                </>
            }
        </span>
    )
}

export default ListElement