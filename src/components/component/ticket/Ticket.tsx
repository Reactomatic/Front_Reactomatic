import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card"

export default function Ticket() {
    const items = [
        { description: "Ryzen 5 3600X", price: 450 },
        { description: "Macbook Pro M2", price: 4000 },
        { description: "Microsoft ZenBook", price: 2 },
        { description: "PC Windows", price: 0 },
        { description: "Samsung Galaxy A5 Android", price: 0 },
        { description: "Airpods Max", price: 629 },
        { description: "Carte Mère Azus B450", price: 199.98 },
    ]

    const total = items.reduce((sum, item) => sum + item.price, 0)
    const date = new Date().toLocaleDateString('fr-FR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
    });
    return (
        <Card className="flex justify-center content-center flex-col w-80 mx-auto font-mono text-sm">
            <CardHeader className="flex items-center text-center border-b border-dashed border-gray-300">
                <div className="text-xs">{'*'.repeat(38)}</div>
                <h2 className="text-xl font-bold">REÇU</h2>
                <p className={"text-xs font-extralight"}>Ne fait pas office de reçu officel</p>
                <div className="text-xs">{'*'.repeat(38)}</div>
            </CardHeader>
            <CardContent className="p-4 space-y-4">
                <h3 className="text-center font-bold">REACTOMATIC</h3>
                <div className="grid grid-cols-2 gap-2 text-xs">
                    <span>Date:</span>
                    <span>{date}</span>
                </div>
                <div className="border-t border-b border-gray-300 py-2">
                    <div className="flex justify-between font-bold">
                        <span>Description</span>
                        <span>Price</span>
                    </div>
                    {items.map((item, index) => (
                        <div key={index} className="flex justify-between">
                            <span>{item.description}</span>
                            <span>${item.price.toFixed(2)}</span>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between font-bold">
                    <span>Tax</span>
                    <span></span>
                </div>
                <div className="flex justify-between font-bold">
                    <span>TOTAL</span>
                    <span>${total.toFixed(2)}</span>
                </div>
            </CardContent>
            <CardFooter className="flex flex-col items-center space-y-4">
                <div className="font-bold">THANK YOU</div>
                <div className="text-xs">{'*'.repeat(38)}</div>
                <div className="w-full h-12 bg-[url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAACklEQVR4nGMAAQAABQABDQottAAAAABJRU5ErkJggg==')]"></div>
                <div className="text-xs">123456778963578021</div>
            </CardFooter>
        </Card>
    )
}
