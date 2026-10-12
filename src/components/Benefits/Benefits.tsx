
import { ShieldCheck, Truck, Zap } from "lucide-react";
import "./Benefits.css";

const benefits = [
  {
    title: "Quality Hardware",
    description: "Carefully selected technology",
    icon: ShieldCheck,
  },
  {
    title: "Reliable Delivery",
    description: "Convenience from checkout to door",
    icon: Truck,
  },
  {
    title: "Performance First",
    description: "Equipment for every challenge",
    icon: Zap,
  },
];

export default function Benefits() {
  return (
    <section className="benefits-section">
      {benefits.map(({ title, description, icon: Icon }) => (
        <div className="benefit-item" key={title}>
          <Icon size={25} strokeWidth={1.5} />
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
