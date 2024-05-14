import { useEffect, useState } from "react";
import Image from "next/image";

const ItemCountSideScreen = () => {

    const [searchText, setSearchText] = useState("");
    const [drawerHeight, setDrawerHeight] = useState(window.innerHeight - 40);

    useEffect(() => {

        const handleResize = () => {
            setDrawerHeight(window.innerHeight - 100);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="h-full w-full flex flex-col gap-3">
            <div className="grid grid-cols-10 gap-3">
                <div className="col-span-3 flex items-center gap-1 bg-white h-8 w-full rounded-md border border-grayBorder">
                    <Image
                        src="/main/search.svg"
                        alt="icon"
                        width={24}
                        height={24}
                        className="cursor-pointer pl-2 text-[#676f7c]"
                    />
                    <input
                        // ref={itemInfoRef}
                        autoFocus={true}
                        className="text-[#676f7c] w-4/6 text-sm h-full border-none hover:bg-transparent outline-none"
                        placeholder="Бараа хайх, бар код уншуулах"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                    />
                </div>
                <button className="primaryButton col-span-1">
                    шинэ
                </button>
            </div>

            <div className="grid grid-cols-3 gap-3 overflow-x-auto"
                style={{ maxHeight: `${drawerHeight}px` }}
            >
                <div className="bg-white rounded border h-64 p-3">№ 1</div>
                <div className="bg-white rounded border h-64 p-3">№ 2</div>
                <div className="bg-white rounded border h-64 p-3">№ 3</div>
                <div className="bg-white rounded border h-64 p-3">№ 4</div>
                <div className="bg-white rounded border h-64 p-3">№ 5</div>
                <div className="bg-white rounded border h-64 p-3">№ 6</div>
                <div className="bg-white rounded border h-64 p-3">№ 7</div>
                <div className="bg-white rounded border h-64 p-3">№ 8</div>
                <div className="bg-white rounded border h-64 p-3">№ 9</div>
            </div>

            {/* <div className="w-full h-full">
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
                                <Button className="bg-[#21cda8] text-white capitalize text-sm hover:bg-[#44423e]">
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
                                ${item.status === 0 ? 'bg-gray-200' : 'bg-green-200'}`}>
                                {item.status === 0 ? 'freeze' : 'progress'}
                            </div>
                        </div>
                    ))}
                </div>

            </div> */}
        </div>
    );
};

export default ItemCountSideScreen;