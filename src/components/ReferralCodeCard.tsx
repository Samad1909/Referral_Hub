
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ReferralCode } from "@/data/referralCodes";

interface ReferralCodeCardProps {
  referralCode: ReferralCode;
}

const ReferralCodeCard: React.FC<ReferralCodeCardProps> = ({ referralCode }) => {
  return (
    <Link to={`/referral/${referralCode.id}`} className="block">
      <Card className="h-full referral-card overflow-hidden">
        <div className="aspect-video relative rounded-md overflow-hidden">
          <img 
            src={referralCode.imageUrl} 
            alt={referralCode.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end">
            <div className="p-3 text-white">
              <span className="font-medium">{referralCode.company}</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold">{referralCode.title}</h3>
          <p className="text-muted-foreground text-sm mt-1 line-clamp-2">
            {referralCode.description}
          </p>
          <div className="mt-3 flex justify-between items-center">
            <span className="text-xs font-semibold px-2 py-1 bg-blue-100 text-blue-800 rounded">
              {referralCode.code}
            </span>
            <span className="text-xs text-muted-foreground">
              {referralCode.benefits.length} Benefits
            </span>
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default ReferralCodeCard;
