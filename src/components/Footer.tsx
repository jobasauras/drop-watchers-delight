import { Zap } from "lucide-react";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
                <Zap className="h-6 w-6 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="text-xl font-black text-primary">FOMO</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Your exclusive edge for high-demand drops since {currentYear}.
            </p>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Live Drops</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bot Access</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Support</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Bot Status</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Discord</a></li>
            </ul>
          </div>

          <div>
            <h4 className="mb-4 font-bold">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Terms</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Privacy</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} FOMO Technologies. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
