import { TextField, Button } from "@mui/material";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HttpsIcon from '@mui/icons-material/Https';
import { useEffect, useState } from "react";

const LoginContext = () => {

    const [username, setUsernameValue] = useState("");
    const [password, setPasswordValue] = useState("");
    const [isSaved, setIsSaveValue] = useState(false);


    const login = () => {
        window.history.pushState({}, "", "/main");
    };

    return (
        <div className="h-full w-full">
            <div className="flex flex-col gap-3 w-5/6 items-center">
                <span className="w-5/6 text-3xl font-semibold">Нэвтрэх</span>
                <span className="w-5/6 text-sm">Тооллогын програмд тавтай морилно уу.</span>
            </div>

            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex flex-col gap-5 items-center w-full">
                    <div className="grid grid-cols-6 h-14 w-5/6 border-none rounded-lg bg-[#f4f6f8]">
                        <div className="col-span-1 flex items-center justify-center">
                            <AccountCircleIcon className="w-6 h-6 text-[#323840]" />
                        </div>
                        <TextField
                            label="Утасны дугаар"
                            className="col-span-5 border-none w-5/6 border-[#323840] focus:border-[#323840] transition-colors"
                            variant="standard">aa</TextField>
                    </div>
                    <div className="grid grid-cols-6 h-14 w-5/6 border-none rounded-lg bg-[#f4f6f8]">
                        <div className="col-span-1 flex items-center justify-center">
                            <HttpsIcon className="w-6 h-6 text-[#323840]" />
                        </div>
                        <TextField
                            label="Нууц үг"
                            className="col-span-5 border-b-2 w-5/6 border-[#323840] focus:border-[#323840] transition-colors"
                            variant="standard" type="password">aa</TextField>
                    </div>
                    <Button
                        className="bg-[#00d1a6] capitalize w-5/6 h-12 text-white rounded-lg text-lg hover:bg-[#00d1a6]"
                        onClick={login}
                    >Нэвтрэх</Button>
                </div>
            </div>
        </div>

    );
};


export default LoginContext;