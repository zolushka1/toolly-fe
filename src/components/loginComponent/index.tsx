"use client"
import { TabContext, TabPanel } from "@mui/lab";
import { useState } from "react";
import LoginContext from "./login";
import RegisterContext from "./register";

const LoginScreen = () => {

    const [tabValue, setTabValue] = useState("0");

    const tabs: TabHeaders[] = [
        { id: "login", name: "Нэвтрэх", index: "0" },
        { id: "register", name: "Бүртгүүлэх", index: "1" },
    ];

    return (
        <div className="flex h-screen">
            <div className="flex-col h-full w-full grid grid-cols-10">
                <div className="col-span-7 bg-[#323840]"></div>
                <div className="col-span-3 bg-white p-5 gap-5 flex flex-col h-full">

                    <div className="bg-[#e9edf2] h-12 rounded-lg">
                        <div className="w-full h-12 grid grid-cols-2 justify-items items-center gap-5 px-2">
                            {tabs.map((item) => (
                                <div key={item.index} onClick={() => setTabValue(item.index)}
                                    className={tabValue === item.index ? "topBarSelected" : "topBarNoSelected"}>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col items-center justify-center h-full">
                        <div className="w-full h-full" >
                            <TabContext value={tabValue}>
                                <TabPanel value={"0"} className="h-full w-full">
                                    <LoginContext />
                                </TabPanel>
                                <TabPanel value={"1"} className="h-full w-full">
                                    <RegisterContext />
                                </TabPanel>
                            </TabContext>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};
export default LoginScreen;