import { Button, TextField } from "@mui/material";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const RegisterContext = () => {



    return (
        <div className="h-full w-full">
            <div className="flex flex-col gap-3 w-5/6 items-center">
                <span className="w-5/6 text-3xl font-semibold">Бүртгүүлэх</span>
                <span className="w-5/6 text-sm">Тооллогын програмд бүртгүүлнэ үү.</span>
            </div>
            <div className="flex flex-col h-full items-center justify-center">
                <div className="flex flex-col gap-5 items-center w-full">
                    <div className="grid grid-cols-6 h-14 w-5/6 border-none rounded-lg bg-[#f4f6f8]">
                        <div className="col-span-1 flex items-center justify-center">
                            <LocalPhoneIcon className="w-6 h-6 text-[#323840]" />
                        </div>
                        <TextField
                            label="Утасны дугаар"
                            className="col-span-5 border-b-2 w-5/6 border-[#00d1a6] focus:border-[#323840] transition-colors"
                            variant="standard">aa</TextField>
                    </div>
                    <Button
                        className="bg-[#00d1a6] capitalize w-5/6 h-12 text-white rounded-lg text-lg hover:bg-[#00d1a6]"
                    >Бүртгүүлэх</Button>
                </div>
            </div>
        </div>
    )
};

export default RegisterContext;