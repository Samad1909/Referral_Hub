
import { categories } from "@/data/categories";
import CategoryCard from "@/components/CategoryCard";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold mb-6">Browse Categories</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <CategoryCard key={category.id} category={category} />
            ))}
          </div>
        </section>
        
        <section className="container mx-auto px-4 py-12">
          <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Have a Referral Code to Share?</h2>
            <p className="text-muted-foreground mb-6">
              Help others save while you earn rewards. Share your referral codes with our community.
            </p>
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-md">
              Submit a Code
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
