import PricingTier from "./components/PricingTier";
import { PRICING_DATA } from "./data";
import "./App.css";

function App() {
    return (
        <div className="container">
            {PRICING_DATA.map((plan) => (
                <PricingTier
                    key={plan.id}
                    title={plan.title}
                    price={plan.price}
                    features={plan.features}
                    isFeatured={plan.isFeatured}
                    >
                        <button>
                            {plan.id === 'plan_enterprise' ? 'Contact Us' : 'Sign Up Now'}
                        </button>
                    </PricingTier>
            ))}
        </div>
    );
}

export default App;
