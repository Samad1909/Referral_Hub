
import { Link } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Category } from "@/data/categories";

interface CategoryCardProps {
  category: Category;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ category }) => {
  return (
    <Link to={`/category/${category.slug}`} className="block">
      <Card className="h-full referral-card overflow-hidden">
        <div className={`bg-gradient-to-br ${category.color} h-24 flex items-center justify-center text-white rounded-md`}>
          <span className="text-4xl">{category.icon}</span>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{category.title}</h3>
          <p className="text-muted-foreground text-sm mt-1">{category.description}</p>
          <div className="mt-3 text-xs text-muted-foreground">
            {category.count} referral codes available
          </div>
        </div>
      </Card>
    </Link>
  );
};

export default CategoryCard;
