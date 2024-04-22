

interface LinkItemProps {
    text: string;
}

const LinkItem: React.FC<LinkItemProps> = ({ text }) => {
    return <li className="mt-2.5 w-full leading-7 text-zinc-700">{text}</li>;
};

const links = [
    "About Us",
    "Terms and Conditions",
    "Privacy Policy",
    "Privacy Policy for Mobile Apps",
    "Shipping and Returns Policy",
    "International Delivery",
    "For Businesses, Hotels and Resorts",
];

const Fotter: React.FC = () => {
    return (
        <div className="bg-blue-200 flex justify-center">
            <section className="flex flex-col text-lg max-w-[285px] py-[80px]">
                <h2 className="w-full font-bold tracking-wide text-green-800">
                    Information
                </h2>
                <ul>
                    {links.map((link, index) => (
                        <LinkItem key={index} text={link} />
                    ))}
                </ul>
            </section>
        </div>

    );
};

export default Fotter;