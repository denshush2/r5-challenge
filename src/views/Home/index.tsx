import React, { useEffect } from 'react'
import { searchBook } from '../../api/searchBooks'

export const HomeScreen:React.FC =()=>{
    useEffect(() => {
        const test =async ()=>{
            searchBook()
        }
        test()
    }, [])
    return(<div><h1>Books</h1></div>)
} 