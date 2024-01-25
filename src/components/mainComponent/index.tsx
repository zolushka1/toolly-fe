"use client"
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";
import SideBar from "./sidebar";
import ItemCountSideScreen from './sideScreens/itemCount';

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
                    <SideBar />
                </div>
                <div className="col-span-8 bg-[#f4f6f8] gap-5 flex flex-col h-full">
                    <TabContext value={tabValue}>
                        <TabPanel value={"0"} className="h-full w-full">
                            <ItemCountSideScreen/>
                        </TabPanel>
                        <TabPanel value={"1"} className="h-full w-full">
                            AppStore QrCode
                        </TabPanel>
                    </TabContext>
                </div>
            </div>
        </div>
    )
};
export default MainScreen;