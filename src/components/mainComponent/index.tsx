"use client"
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";
import SideBar from "./sidebar";

const MainScreen = () => {

    const [tabValue, setTabValue] = useState("0");

    const tabs: TabHeaders[] = [
        { id: "login", name: "Нэвтрэх", index: "0" },
        { id: "register", name: "Бүртгүүлэх", index: "1" },
    ];

    return (
        <div className="flex h-screen">
            <div className="flex-col h-full w-full grid grid-cols-10">
                <div className="col-span-2 bg-white">
                    <SideBar/>
                </div>
                <div className="col-span-8 bg-[#f4f6f8] p-5 gap-5 flex flex-col h-full">

                    <div className="bg-[#e9edf2] h-10 rounded-lg">
                        <div className="w-full h-10 grid grid-cols-2 justify-items items-center gap-2 px-1">
                            {tabs.map((item) => (
                                <div key={item.index} onClick={() => setTabValue(item.index)}
                                    className={tabValue === item.index ? "topBarSelected" : "topBarNoSelected"}>
                                    <span>
                                        {item.name}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default MainScreen;