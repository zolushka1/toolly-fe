import { TextField, Button } from "@mui/material";

const LoginContext = () => {



    return (
        <div className="flex flex-col">
            <div className="flex flex-col items-center justify-center gap-5">
                <TextField className="border-none w-full bg-[#f4f6f8]">aa</TextField>
                <TextField className="border-none w-full bg-[#f4f6f8]" type="password">aa</TextField>
                <Button className="bg-[#00d1a6] capitalize w-full text-white text-md font-semibold hover:bg-[#00d1a6]">Нэвтрэх</Button>
            </div>
        </div>
    )
};

export default LoginContext;