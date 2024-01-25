interface TabHeaders {
    id: string;
    name: string;
    index: string;
}

interface SideBarItem {
    id: string;
    name: string;
    index: string;
}

interface ItemCount {
    id: number;
    name: string;
    status: number;
    totalQty: number;
    totalSellPrice: number;
    totalCostPrice: number;
    startDate: string;
    endDate: string;
}

interface Item {
    id: number;
    name: string;
    code: string;
    price: number;
    cost: number;
    createdDate: string;
}
