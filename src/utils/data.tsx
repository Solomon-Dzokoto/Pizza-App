import pepperoni from '/assets/delicious-pepperoni-pizza-culinary-delight_632498-24206-removebg-preview.png'
import cheese from '/assets/delicious-pepperoni-pizza-culinary-delight_632498-24206-removebg-preview.png'
import veggie from '/assets/delicious-veggie-pizza-freshly-baked-toppings-cheese-mushrooms-peppers-olives_84443-37364-removebg-preview.png'
import bacon from '/assets/delicious-cheese-pizza-isolated-transparent-background_1092965-2199__1_-removebg-preview.png'


interface PizzaProp {
    id: string;
    name: string;
    desc: string;
    image: string;
    price: number;
    likes : number;
}
export const data: PizzaProp[] = [
    {
        id: "1",
        name: "Pepperoni pizza",
        desc: "Unforgotten taste coming from Italy and spread across Europe",
        image: pepperoni,
        price: 42,
        likes : 15
    },
    {
        id: "2",
        name: "Bacon pizza",
        desc: "Unforgotten taste coming from Italy and spread across Europe",
        image: bacon,
        price: 99,
        likes : 23
    },
    {
        id: "3",
        name: "Cheesy pizza",
        desc: "Unforgotten taste coming from Italy and spread across Europe",
        image: cheese,
        price: 75,
        likes : 12
    },
    {
        id: "4",
        name: "Veggie pizza",
        desc: "Unforgotten taste coming from Italy and spread across Europe",
        image: veggie,
        price: 100,
        likes : 35
    },
]