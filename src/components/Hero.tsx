
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-indigo-50 -z-10" />
      <div className="absolute inset-0 opacity-30 -z-10 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:16px_16px]" />
      
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent">
          Save Money with Referral Codes
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
          Discover and share the best referral codes and promotions for your favorite services. 
          Save on food delivery, travel, shopping, and more!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600">
            Browse Categories
          </Button>
          <Button size="lg" variant="outline">
            Share a Code
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
