export default function Price({currency, amount}) {
    return (
        <div className="flex items-baseline gap-1">
            <span className="text-sm font-semibold text-gray-600">{currency}</span>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                {amount.toFixed(2)}
            </span>
        </div>
    );
}