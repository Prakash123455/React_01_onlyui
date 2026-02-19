export default function PageTitle({ title }) {
    
    return (
        <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-red-400 bg-clip-text text-transparent drop-shadow-2xl hover:scale-105 transition-transform duration-300 cursor-default">
            {title}
        </div>
    );
}