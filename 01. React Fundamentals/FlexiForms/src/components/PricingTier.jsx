import "./PricingTier.css";

function PricingTier({ title, price, features, isFeatured, children }) {
    return (
        <div className={`pricing-card ${isFeatured ? 'featured' : ''}`}>
            <h2>{title}</h2>
            <p className="price">
                {typeof price === "number" ? `$${price} / month` : price}
            </p>
            <ul>
                {features.map((f, index) => (
                    <li key={index}>{f}</li>
                ))}
            </ul>
            {children}
        </div>
    );
}

export default PricingTier;