const partsData = {
    cpu: {
        name: "CPU",
        items: [
            { id: "cpu-0", name: "인텔 코어 i9-13900K", price: "750000", img: "https://via.placeholder.com/250x250.png?text=CPU", specs: "24코어 (8P+16E) / 32스레드 / 기본 클럭: 3.0GHz", dateAdded: "2023-11-01" },
            { id: "cpu-1", name: "AMD 라이젠 9 7950X", price: "720000", img: "https://via.placeholder.com/250x250.png?text=CPU", specs: "16코어 / 32스레드 / 기본 클럭: 4.5GHz", dateAdded: "2023-10-15" },
            { id: "cpu-2", name: "인텔 코어 i5-13600K", price: "410000", img: "https://via.placeholder.com/250x250.png?text=CPU", specs: "14코어 (6P+8E) / 20스레드 / 기본 클럭: 3.5GHz", dateAdded: "2023-11-10" },
            { id: "cpu-3", name: "AMD 라이젠 7 7800X3D", price: "550000", img: "https://via.placeholder.com/250x250.png?text=CPU", specs: "8코어 / 16스레드 / 3D V-Cache / 기본 클럭: 4.2GHz", dateAdded: "2024-01-20" },
            { id: "cpu-4", name: "인텔 코어 i7-14700K", price: "620000", img: "https://via.placeholder.com/250x250.png?text=CPU", specs: "20코어 (8P+12E) / 28스레드 / 기본 클럭: 3.4GHz", dateAdded: "2024-02-01" }
        ]
    },
    motherboard: {
        name: "메인보드",
        items: [
            { id: "mb-0", name: "ASUS ROG STRIX Z790-E", price: "600000", img: "https://via.placeholder.com/250x250.png?text=Motherboard", specs: "ATX / DDR5 / Wi-Fi 6E / PCIe 5.0", dateAdded: "2023-11-05" },
            { id: "mb-1", name: "GIGABYTE B650 AORUS ELITE", price: "310000", img: "https://via.placeholder.com/250x250.png?text=Motherboard", specs: "ATX / DDR5 / PCIe 5.0", dateAdded: "2023-10-20" },
            { id: "mb-2", name: "MSI MAG B760M 박격포", price: "220000", img: "https://via.placeholder.com/250x250.png?text=Motherboard", specs: "M-ATX / DDR5 / Wi-Fi 6E", dateAdded: "2024-01-15" }
        ]
    },
    ram: {
        name: "메모리(RAM)",
        items: [
            { id: "ram-0", name: "삼성전자 DDR5-5600 16GB", price: "65000", img: "https://via.placeholder.com/250x250.png?text=RAM", specs: "DDR5 / 5600MHz / PC5-44800", dateAdded: "2023-09-01" },
            { id: "ram-1", name: "SK하이닉스 DDR5-5600 16GB", price: "68000", img: "https://via.placeholder.com/250x250.png?text=RAM", specs: "DDR5 / 5600MHz / PC5-44800", dateAdded: "2023-09-10" },
            { id: "ram-2", name: "G.SKILL DDR5-6000 CL36 TRIDENT Z5 32GB(2x16GB)", price: "180000", img: "https://via.placeholder.com/250x250.png?text=RAM", specs: "DDR5 / 6000MHz / XMP3.0 / CL36", dateAdded: "2024-02-10" }
        ]
    },
    gpu: {
        name: "그래픽카드",
        items: [
            { id: "gpu-0", name: "NVIDIA GeForce RTX 4090", price: "2500000", img: "https://via.placeholder.com/250x250.png?text=GPU", specs: "GDDR6X / 24GB / 부스트 클럭: 2520MHz", dateAdded: "2023-09-05" },
            { id: "gpu-1", name: "AMD Radeon RX 7900 XTX", price: "1400000", img: "https://via.placeholder.com/250x250.png?text=GPU", specs: "GDDR6 / 24GB / 부스트 클럭: 2500MHz", dateAdded: "2023-10-01" },
            { id: "gpu-2", name: "NVIDIA GeForce RTX 4070 Ti", price: "1200000", img: "https://via.placeholder.com/250x250.png?text=GPU", specs: "GDDR6X / 12GB / 부스트 클럭: 2610MHz", dateAdded: "2023-11-20" },
            { id: "gpu-3", name: "NVIDIA GeForce RTX 4060", price: "450000", img: "https://via.placeholder.com/250x250.png?text=GPU", specs: "GDDR6 / 8GB / 부스트 클럭: 2460MHz", dateAdded: "2024-02-15" }
        ]
    },
    ssd: {
        name: "SSD",
        items: [
            { id: "ssd-0", name: "SK하이닉스 Platinum P41 1TB", price: "150000", img: "https://via.placeholder.com/250x250.png?text=SSD", specs: "NVMe 1.4 / PCIe 4.0 / 읽기: 7,000MB/s", dateAdded: "2023-09-15" },
            { id: "ssd-1", name: "삼성전자 980 PRO 1TB", price: "160000", img: "https://via.placeholder.com/250x250.png?text=SSD", specs: "NVMe 1.3c / PCIe 4.0 / 읽기: 7,000MB/s", dateAdded: "2023-09-20" },
            { id: "ssd-2", name: "Western Digital BLACK SN850X 2TB", price: "280000", img: "https://via.placeholder.com/250x250.png?text=SSD", specs: "NVMe 2.0 / PCIe 4.0 / 읽기: 7,300MB/s", dateAdded: "2024-01-25" }
        ]
    },
    power: {
        name: "파워서플라이",
        items: [
            { id: "power-0", name: "시소닉 FOCUS GOLD GX-1000", price: "250000", img: "https://via.placeholder.com/250x250.png?text=Power", specs: "ATX / 1000W / 80PLUS Gold", dateAdded: "2023-05-11" },
            { id: "power-1", name: "FSP HYDRO G PRO 1000W", price: "240000", img: "https://via.placeholder.com/250x250.png?text=Power", specs: "ATX / 1000W / 80PLUS Gold", dateAdded: "2023-06-01" },
            { id: "power-2", name: "SuperFlower SF-850F14HG LEADEX III GOLD", price: "180000", img: "https://via.placeholder.com/250x250.png?text=Power", specs: "ATX / 850W / 80PLUS Gold", dateAdded: "2024-02-05" }
        ]
    },
    case: {
        name: "케이스",
        items: [
            { id: "case-0", name: "Fractal Design Meshify 2", price: "210000", img: "https://via.placeholder.com/250x250.png?text=Case", specs: "미들타워 / ATX 지원 / 전면 메시", dateAdded: "2023-07-01" },
            { id: "case-1", name: "darkFlash DLX21 MESH", price: "85000", img: "https://via.placeholder.com/250x250.png?text=Case", specs: "미들타워 / ATX 지원 / 전면 메시", dateAdded: "2023-08-15" },
            { id: "case-2", name: "Lian-Li PC-O11 Dynamic EVO", price: "230000", img: "https://via.placeholder.com/250x250.png?text=Case", specs: "미들타워 / ATX 지원 / 강화유리", dateAdded: "2024-01-10" }
        ]
    }
};

// 모든 상품을 쉽게 찾기 위한 함수
function findProductById(productId) {
    for (const category in partsData) {
        const found = partsData[category].items.find(item => item.id === productId);
        if (found) {
            return found;
        }
    }
    return null;
}