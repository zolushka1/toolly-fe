"use client"
import { TabContext, TabPanel } from "@mui/lab";
import { Divider } from "@mui/material";
import { useState } from "react";

const SideBar = () => {

    const [tabValue, setTabValue] = useState("0");

    const tabs: SideBarItem[] = [
        { id: "login", name: "Тооллого", index: "0" },
        { id: "item", name: "Бараа", index: "1" },
        { id: "other", name: "Бусад бүртгэл", index: "2" },
        { id: "setting", name: "Тохиргоо", index: "3" },
    ];

    return (
        <div className="flex h-full p-5">
            <div className="flex flex-col h-full w-full justify-items items-center gap-3">

            <Divider className="text-[#6d758f] w-5/6" />
                {tabs.map((item) => (
                    <div key={item.index} onClick={() => setTabValue(item.index)}
                        className={tabValue === item.index ? "sideBarSelected" : "sideBarNoSelected"}>
                        <span className="p-2">
                            {item.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
};
export default SideBar;