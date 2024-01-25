import { formatToYYYYMMDDHHMMSS } from "@/utilities/common";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const ItemCountSideScreen = () => {

    const [selectedRow, setSelectedRowValue] = useState("");
    const [rowCount, setRowCount] = useState<ItemCount[]>(() => {
        const defaultData: ItemCount[] = [];
        for (let i = 1; i <= 30; i++) {

            defaultData.push({
                id: i,
                name: `Бүлэг ${i}`,
                status: Math.random() < 0.5 ? 0 : 1,
                totalQty: 0,
                totalSellPrice: 0,
                totalCostPrice: 0,
                startDate: "2024-10-15",
                endDate: "2024-10-15",
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
            </div>

            <div className="w-full h-full">
                <div className="grid grid-cols-10 bg-[#44423e] text-white h-10 rounded p-2">
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-left"></span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-left">#</span>
                    <span className="col-span-2 text-sm items-center justify-start flex font-semibold text-left">Нэр</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Тоо</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Зарах үнэ</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Авах үнэ</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Эхэлсэн</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Дууссан</span>
                    <span className="col-span-1 text-sm items-center justify-start flex font-semibold text-center">Төлөв</span>
                </div>

                <div className="h-full w-full flex flex-col gap-3 pt-2 overflow-auto">
                    {rowCount.map((item) => (
                        <div key={item.id} className="grid grid-cols-10 h-14 p-2 bg-white rounded border">
                            <div className="col-span-1 items-center justify-start flex">
                                <Button className="bg-[#21cda8] text-white capitalize text-sm">
                                    Засах
                                </Button>
                            </div>
                            <span className="col-span-1 text-sm items-center justify-start flex text-left">{item.id}</span>
                            <span className="col-span-2 text-sm items-center justify-start flex text-left">{item.name}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-center">{item.totalQty}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-center">{item.totalSellPrice}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-center">{item.totalCostPrice}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-center">{item.startDate}</span>
                            <span className="col-span-1 text-sm items-center justify-start flex text-center">
                                {item.status === 1 ? item.endDate : ""}
                            </span>
                            <div className={`col-span-1 text-sm flex items-center justify-center rounded 
                                ${item.status === 0 ? 'bg-gray-200' : 'bg-blue-200'}`}>
                                {item.status === 0 ? 'ЭХЛЭЭГҮЙ' : 'ТООЛЖЫН'}
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};

export default ItemCountSideScreen;