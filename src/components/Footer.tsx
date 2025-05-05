
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="border-t bg-background mt-10">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">RefShare</h3>
            <p className="text-muted-foreground">
              The best place to discover and share referral codes for your favorite services.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Categories</h4>
            <ul className="space-y-2">
              <li><Link to="/category/food-delivery" className="text-muted-foreground hover:text-foreground">Food Delivery</Link></li>
              <li><Link to="/category/travel" className="text-muted-foreground hover:text-foreground">Travel</Link></li>
              <li><Link to="/category/shopping" className="text-muted-foreground hover:text-foreground">Shopping</Link></li>
              <li><Link to="/category/streaming" className="text-muted-foreground hover:text-foreground">Streaming</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Resources</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">How It Works</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">FAQ</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Terms of Service</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-3">Connect</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Twitter</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Instagram</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Facebook</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-foreground">Contact Us</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} RefShare. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
