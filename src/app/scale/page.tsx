import Hero from "@/components/hero";
import scaleImg from '@/assets/images/scale.jpg';

export default function ScalePage() {
    return (
        <Hero imgData={scaleImg}
              imgAlt="steel factoory"
              title="Scale your app to infinity"/>
    );
}
