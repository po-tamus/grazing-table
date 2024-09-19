"use client"

import {useState, useEffect} from "react";

import Menu from "@components/Menu"

export default function MenuCollection() {

    const [menus, setMenus] = useState([]);

    // empty brackets [] in useEffect ensure it will be called when the page initially loads
    // calling the api on page load
    useEffect(() => {
        const fetchMenus = async () => {
            const response = await fetch("/api/menus");
            const data = await response.json();

            setMenus(data);
        }
        fetchMenus();
    }, [])

    return (
        <section>
            <div className="text-center flex-center flex-col font-forum drop-shadow">
                <h1 className="menu_head">MENUS</h1>
                {menus.map((menu) => (
                    <div>
                        <h2 className="menu_name">{menu.menu}</h2>
                        <ul>
                            {menu.items.map((item) => (
                                <div className="mt-3 mb-3">
                                    <li className="menu_item">{item.name}</li>
                                    <li className="menu_desc">{item.description}</li>
                                </div>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    )
}