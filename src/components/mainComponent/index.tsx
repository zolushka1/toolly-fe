"use client"
import { TabContext, TabPanel } from "@mui/lab";
import { SetStateAction, useEffect, useState } from "react";
import SideBar from "./sidebar";
import ItemCountSideScreen from './sideScreens/itemCount';
import ItemSideScreen from "./sideScreens/item";
import SettingSideScreen from "./sideScreens/setting";

const MainScreen = () => {

    // useEffect(() => {

    //     const handleResize = () => {
    //         setDrawerWidth(window.innerWidth - 290);
    //         setDrawerHeight(window.innerHeight - 40);
    //     };


    // }, []);

    // const [drawerWidth, setDrawerWidth] = useState(window.innerWidth);
    // const [drawerHeight, setDrawerHeight] = useState(window.innerHeight);

    const [tabValue, setTabValue] = useState("0");

    const handleTabChange = (value: SetStateAction<string>) => {
        setTabValue(value);
    };

    const tabs: TabHeaders[] = [
        { id: "login", name: "Нэвтрэх", index: "0" },
        { id: "register", name: "Бүртгүүлэх", index: "1" },
        { id: "register", name: "Бүртгүүлэх", index: "1" },
        { id: "register", name: "Бүртгүүлэх", index: "1" },
        { id: "register", name: "Бүртгүүлэх", index: "1" },
    ];

    return (
        <div className="flex h-screen">
            <div className="flex-col h-full w-full grid grid-cols-10">
                <div className="col-span-2 bg-white border border-r">
                    <SideBar onTabChange={handleTabChange} />
                </div>
                <div className="col-span-8 bg-[#f4f6f8] gap-5 flex flex-col h-full">
                    <TabContext value={tabValue}>
                        <TabPanel value={"0"} className="h-full w-full">
                            <ItemCountSideScreen />
                        </TabPanel>
                        <TabPanel value={"1"} className="h-full w-full">
                            <ItemSideScreen />
                        </TabPanel>
                        <TabPanel value={"2"} className="h-full w-full">
                            <ItemCountSideScreen />
                        </TabPanel>
                        <TabPanel value={"3"} className="h-full w-full">
                            <SettingSideScreen />
                        </TabPanel>
                        <TabPanel value={"4"} className="h-full w-full">
                            AppStore QrCode
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        </div>
    )
};
export default MainScreen;