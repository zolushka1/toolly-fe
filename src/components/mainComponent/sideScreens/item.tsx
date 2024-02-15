import { formatToYYYYMMDDHHMMSS } from "@/utilities/common";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const ItemSideScreen = () => {

    const [selectedRow, setSelectedRowValue] = useState("");
    const [rowItems, setRowCount] = useState<Item[]>(() => {
        const defaultData: Item[] = [];
        for (let i = 1; i <= 30; i++) {

            defaultData.push({
                id: i,
                name: `Бүлэг ${i}`,
                code: "125364234273",
                price:100,
                cost: 200,
                createdDate : "2024-10-15",
                
            });
        }
        return defaultData;
    });

    return (
        <div className="h-full w-full flex flex-col gap-3">
            <div className="grid grid-cols-10 gap-3">
                <Button className="primaryButton col-span-2">
                    Шинэ
                </Button>
                <Button className="primaryButton col-span-2">
                    Эксэл
                </Button>
            </div>

            <div className="w-full h-full">
                <div className="grid grid-cols-8 bg-[#44423e] text-white h-10 rounded p-2">
                    <span className="col-span-2 text-sm items-center justify-start flex font-semibold text-left"></span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-left">#</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-left">Код</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Нэр</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Зарах үнэ</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Авах үнэ</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Үүсгэсэн өдөр</span>
                </div>

                <div className="h-full w-full flex flex-col gap-3 pt-2 overflow-auto">
                    {rowItems.map((item) => (
                        <div key={item.id} className="grid grid-cols-8 h-14 p-2 bg-white rounded border">
                            <div className="col-span-2 items-center justify-start flex gap-1">
                                <Button className="bg-[#21cda8] text-white capitalize text-sm">
                                    Засах
                                </Button>
                                <Button className="bg-[#d24349] text-white capitalize text-sm">
                                    Устгах
                                </Button>
                            </div>
                            <span className="col-span-1 text-sm items-center justify-start flex text-left">{item.id}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-left">{item.code}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-center">{item.name}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-center">{item.price}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-center">{item.cost}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-center">{item.createdDate}</span>
                           
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ItemSideScreen;