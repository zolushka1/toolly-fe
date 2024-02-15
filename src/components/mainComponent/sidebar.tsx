"use client"
import { TabContext, TabPanel } from "@mui/lab";
import { Divider } from "@mui/material";
import { useState } from "react";



const SideBar: React.FC<SideBarProps> = ({ onTabChange }) => {

    const [itemValue, setItemValue] = useState("0");
    const [tabValue, setTabValue] = useState("0");

    const items: SideBarItem[] = [
        { id: "login", name: "Тооллого", index: "0", },
        { id: "item", name: "Бараа", index: "1" },
        { id: "other", name: "Бусад бүртгэл", index: "2" },
        { id: "setting", name: "Тохиргоо", index: "3" },
    ];

    const tabs: TabHeaders[] = [
        { id: "playStore", name: "PlayStore", index: "0" },
        { id: "appStore", name: "AppStore", index: "1" },
    ];

    return (
        <div className="flex h-full p-5">
            <div className="flex flex-col w-full justify-between">
                <div className="flex flex-col h-full w-full justify-items items-center gap-3">
                    <div className="h-28 w-full items-center justify-center flex">
                        <span className="text-2xl text-center">Logo</span>
                    </div>
                    <Divider className="text-[#6d758f] w-5/6" />
                    {items.map((item) => (
                        <div
                            key={item.index}
                            onClick={() => {
                                setItemValue(item.index);
                                onTabChange(item.index);
                            }}
                            className={itemValue === item.index ? "sideBarSelected" : "sideBarNoSelected"}
                        >
                            <span className="p-2">{item.name}</span>
                        </div>
                    ))}
                </div>
                <div className="flex flex-col">
                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="w-full h-full" >
                            <TabContext value={tabValue}>
                                <TabPanel value={"0"} className="h-full w-full">
                                    PlayStore QrCode
                                </TabPanel>
                                <TabPanel value={"1"} className="h-full w-full">
                                    AppStore QrCode
                                </TabPanel>
                            </TabContext>
                        </div>
                    </div>
                    <div className="bg-[#e9edf2] h-10 rounded-lg">
                        <div className="w-full h-10 grid grid-cols-2 justify-items items-center gap-2 px-1">
                            {tabs.map((tab) => (
                                <div key={tab.index} onClick={() => setTabValue(tab.index)}
                                    className={tabValue === tab.index ? "topBarSelected" : "topBarNoSelected"}>
                                    <span>
                                        {tab.name}
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
export default SideBar;