import { Button } from "@/components/ui/button";
import { Zap, LogOut, User } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";
import { Link } from "react-router-dom";

export const Header = () => {
  const { user, signOut } = useAuth();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gradient-to-br from-primary to-secondary">
              <Zap className="h-7 w-7 text-primary-foreground" fill="currentColor" />
            </div>
            <div>
              <h1 className="text-2xl font-black tracking-tight text-primary">FOMO</h1>
              <p className="text-xs text-muted-foreground">Fear of Missing Out</p>
            </div>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            <Button variant="ghost" size="sm" asChild>
              <a href="#drops">Drops</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#trending">Trending</a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a href="#pricing">Pricing</a>
            </Button>
          </nav>

          {user ? (
            <div className="flex items-center gap-2">
              <Link to="/dashboard">
                <Button variant="outline" size="sm">
                  <User className="h-4 w-4 mr-2" />
                  Dashboard
                </Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-2" />
                Logout
              </Button>
            </div>
          ) : (
            <Link to="/auth">
              <Button className="bg-primary text-primary-foreground font-bold hover:bg-primary/90 shadow-lg hover:shadow-primary/50 transition-all">
                Login / Sign Up
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};
