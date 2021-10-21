import React, { useState } from "react";
import { categoriesObj } from "./Components/Data/Categories";




export const Context = React.createContext();
const Provider = ({ children }) => {
    const updateEntry = (entry) => {
        const updated = entries.map(c => {
            if (c.id === entry.id) {
                return entry
            } else {
                return c
            }
        })

        setEntries(updated)

    }

    const addEntry = (entry) => {
        setEntries([entry, ...entries]);
    }

    const addCategory = (category) => {
        setCategories([category, ...categories])
        localStorage.setItem('categories', categories)
    }
    const updateCategory = (category) => {
        const updated = categories.map(c => {
            if (c.id === category.id) {
                return category
            } else {
                return c
            }
        })

        setCategories(updated)
        // set updated categoris in LocalStorage here
        localStorage.setItem('categories', categories)
    }



    const [entries, setEntries] = useState([])
    const [categories, setCategories] = useState(categoriesObj)

    return (
        <Context.Provider
            value={
                {
                    entries,
                    addEntry,
                    updateEntry,

                    categories,
                    addCategory,
                    updateCategory
                }
            }
        >

            {children}

        </Context.Provider>
    )

}

export default Provider;
