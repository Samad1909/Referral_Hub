
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Copy, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getReferralCodeById } from "@/data/referralCodes";
import { categories } from "@/data/categories";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ReferralCodePage = () => {
  const { id } = useParams<{ id: string }>();
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);
  
  const referralCode = id ? getReferralCodeById(id) : undefined;
  const category = referralCode 
    ? categories.find(c => c.id === referralCode.categoryId) 
    : undefined;

  const handleCopyCode = () => {
    if (referralCode) {
      navigator.clipboard.writeText(referralCode.code);
      setCopied(true);
      toast({
        title: "Code copied!",
        description: `${referralCode.code} has been copied to your clipboard.`
      });
      
      setTimeout(() => setCopied(false), 3000);
    }
  };

  if (!referralCode || !category) {
    return (
      <>
        <Header />
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold">Referral code not found</h2>
          <p className="mt-4">The referral code you're looking for doesn't exist.</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      <main className="container mx-auto px-4 py-8">
        <div className="mb-4">
          <Link 
            to={`/category/${category.slug}`}
            className="text-muted-foreground hover:text-foreground flex items-center gap-1"
          >
            <span>←</span> Back to {category.title}
          </Link>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <div className="mb-6">
                <h1 className="text-3xl font-bold">{referralCode.title}</h1>
                <p className="text-muted-foreground mt-2">{referralCode.description}</p>
              </div>
              
              <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 mb-8">
                <div className="flex justify-between items-center">
                  <div>
                    <div className="text-sm font-medium text-blue-800">Referral Code</div>
                    <div className="text-xl font-mono font-bold text-blue-900 mt-1">{referralCode.code}</div>
                  </div>
                  <Button 
                    onClick={handleCopyCode}
                    className="flex items-center gap-1"
                    variant={copied ? "outline" : "default"}
                  >
                    {copied ? (
                      <>
                        <CheckCircle className="h-4 w-4" /> Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" /> Copy Code
                      </>
                    )}
                  </Button>
                </div>
              </div>
              
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-3">How to Use</h2>
                <ol className="space-y-3 ml-5 list-decimal">
                  {referralCode.steps.map((step, index) => (
                    <li key={index} className="text-muted-foreground">
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold mb-3">Benefits</h2>
                <ul className="space-y-3">
                  {referralCode.benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="h-5 w-5 rounded-full bg-gradient-to-r from-green-400 to-emerald-500 flex-shrink-0 text-white flex items-center justify-center text-xs mt-0.5">
                        ✓
                      </div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          
          <div>
            <div className="bg-white rounded-lg shadow-sm border p-6 sticky top-20">
              <div className="mb-6">
                <div className="aspect-video rounded-md overflow-hidden">
                  <img 
                    src={referralCode.imageUrl} 
                    alt={referralCode.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-1">Company</h3>
                <div className="text-lg">{referralCode.company}</div>
              </div>
              
              <div className="mb-6">
                <h3 className="font-medium mb-1">Category</h3>
                <Link 
                  to={`/category/${category.slug}`}
                  className="inline-flex items-center gap-2 px-3 py-1 bg-blue-100 text-blue-800 rounded-full"
                >
                  <span>{category.icon}</span>
                  <span>{category.title}</span>
                </Link>
              </div>
              
              {referralCode.expiryDate && (
                <div>
                  <h3 className="font-medium mb-1">Expires</h3>
                  <div>{referralCode.expiryDate}</div>
                </div>
              )}
              
              <Button 
                onClick={handleCopyCode} 
                className="w-full mt-6"
                variant={copied ? "outline" : "default"}
              >
                {copied ? (
                  <>
                    <CheckCircle className="h-4 w-4 mr-2" /> Copied to Clipboard
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4 mr-2" /> Copy Referral Code
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ReferralCodePage;
