
import { useParams } from "react-router-dom";
import { categories } from "@/data/categories";
import { getReferralCodesByCategory } from "@/data/referralCodes";
import ReferralCodeCard from "@/components/ReferralCodeCard";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const CategoryPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = categories.find(c => c.slug === slug);
  
  const referralCodes = category 
    ? getReferralCodesByCategory(category.id) 
    : [];

  if (!category) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold">Category not found</h2>
          <p className="mt-4">The category you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold flex items-center gap-2">
            <span className="text-3xl">{category.icon}</span> 
            {category.title} Referral Codes
          </h1>
          <p className="text-muted-foreground mt-2">
            {category.description}
          </p>
        </div>

        {referralCodes.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {referralCodes.map((code) => (
              <ReferralCodeCard key={code.id} referralCode={code} />
            ))}
          </div>
        ) : (
          <div className="py-12 text-center">
            <p>No referral codes found in this category.</p>
          </div>
        )}
      </main>
      <Footer />
    </>
  );
};

export default CategoryPage;
