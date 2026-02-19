import PageTitle from "./PageTitle";


export default function PageHeading({ title, children }) {
    return (
        <div className="container mx-auto text-center mb-12">
            <PageTitle title={title} />
            <p className="text-gray-400 mt-6 leading-relaxed text-lg hover:text-gray-300 transition-all duration-300">{children}</p>
        </div>
    );
}
