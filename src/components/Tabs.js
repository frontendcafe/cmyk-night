import React from 'react'
import "./style/Tabs.css";

const Tabs = ({ tabs, activeTab, setActiveTab }) => (
    <ul className="Tabcontainer">
        {tabs.map((tab) => (
            <li key={tab} className={`container__containerButton ${tab === activeTab && "active"}`}>
                <button onClick={() => setActiveTab(tab)} className="container__button">
                    {tab}
                </button>
            </li>
        ))}
    </ul>
)

export default Tabs;
