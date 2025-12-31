import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { 
  Shield, 
  Upload, 
  UserCheck, 
  Award, 
  Sparkles, 
  Check, 
  Star, 
  ArrowRight,
  Moon,
  Sun,
  Menu,
  X,
  Palette,
  Stamp,
  Rocket
} from "lucide-react";

const artists = [
  {
    id: 1,
    name: "Marcus Chen",
    title: "Digital Illustration Specialist",
    specialty: "Concept Art & Illustration",
    bio: "BFA from Rhode Island School of Design. 8 years experience in commercial illustration. Previously at Pixar as a background artist. Available for attribution on short notice.",
    price: "$49",
    tier: "Standard",
    avatar: "MC"
  },
  {
    id: 2,
    name: "Sarah Okonkwo",
    title: "Fine Arts Professional", 
    specialty: "Oil & Acrylic Painting",
    bio: "MFA from Yale School of Art. Work exhibited at galleries in New York, London, and Tokyo. Willing to provide detailed process documentation and studio photography.",
    price: "$149",
    tier: "Premium",
    avatar: "SO"
  },
  {
    id: 3,
    name: "David Reinholt",
    title: "3D Modeling & Sculpture",
    specialty: "Digital Sculpture & CAD",
    bio: "15 years in industrial design. Former lead modeler at Weta Workshop. Can provide time-stamped work files and render breakdowns for any project.",
    price: "$299",
    tier: "Enterprise",
    avatar: "DR"
  },
  {
    id: 4,
    name: "Elena Vasquez",
    title: "Mixed Media Artist",
    specialty: "Photography & Compositing",
    bio: "Award-winning photographer with clients including National Geographic and Vogue. Expert in providing comprehensive metadata and RAW file documentation.",
    price: "$499",
    tier: "Executive",
    avatar: "EV"
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$29",
    period: "per asset",
    description: "Essential documentation for individual creators",
    features: [
      "Artist attribution certificate",
      "Digital signature verification",
      "Basic process documentation",
      "Email support",
      "48-hour turnaround"
    ],
    cta: "Get Started",
    popular: false
  },
  {
    name: "Professional",
    price: "$149",
    period: "per asset",
    description: "Comprehensive coverage for commercial projects",
    features: [
      "Everything in Starter",
      "Notarized authenticity certificate",
      "Time-lapse process video",
      "Work-in-progress documentation",
      "Social media verification support",
      "24-hour priority turnaround",
      "Phone support"
    ],
    cta: "Go Professional",
    popular: true
  },
  {
    name: "Enterprise",
    price: "$499",
    period: "per asset",
    description: "Full-service solution for high-stakes projects",
    features: [
      "Everything in Professional",
      "Artist available for interviews",
      "Physical studio photography",
      "Backdated progress posts",
      "Legal documentation package",
      "Dedicated account manager",
      "24/7 crisis response team",
      "Unlimited revisions"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const testimonials = [
  {
    quote: "The documentation package was incredibly thorough. When questions arose about my concept art, I had everything I needed to demonstrate the creative process. Truly professional service.",
    author: "Michael Torres",
    role: "Game Development Studio",
    rating: 5
  },
  {
    quote: "NotSlop connected us with an artist who provided detailed breakdowns of the creative decisions behind each piece. Our marketing campaign launched without any issues.",
    author: "Jennifer Walsh",
    role: "Creative Director, Fortune 500",
    rating: 5
  },
  {
    quote: "The time-lapse documentation they provided was exactly what we needed for our gallery submission. The artist was articulate and professional during the interview process.",
    author: "Robert Kim",
    role: "Independent Artist",
    rating: 5
  },
  {
    quote: "Their enterprise package saved our product launch. When authenticity questions came up, we had notarized documentation and an artist ready to speak to the press.",
    author: "Amanda Chen",
    role: "VP of Marketing",
    rating: 5
  }
];

const faqItems = [
  {
    question: "How does the attribution process work?",
    answer: "Once you submit your creative asset, we match you with a verified artist from our network whose portfolio aligns with your work's style. They provide comprehensive documentation including process notes, technique breakdowns, and signed attribution certificates."
  },
  {
    question: "Are your artists real professionals?",
    answer: "Absolutely. Every artist in our network has been vetted and holds legitimate credentials from accredited institutions. They maintain active portfolios and are prepared to speak knowledgeably about any work they're attributed to."
  },
  {
    question: "What documentation do you provide?",
    answer: "Our packages include digital certificates, time-stamped process files, work-in-progress photography, and depending on your tier, video documentation and notarized affidavits. Enterprise clients receive comprehensive legal documentation packages."
  },
  {
    question: "How quickly can you deliver?",
    answer: "Standard turnaround is 48 hours. Professional tier clients receive 24-hour priority processing. Enterprise clients have access to same-day emergency services when needed."
  },
  {
    question: "Can artists participate in interviews or public appearances?",
    answer: "Yes, our Professional and Enterprise tiers include artist availability for media inquiries, podcast appearances, and gallery events. Artists are thoroughly briefed and prepared to discuss the creative process in detail."
  },
  {
    question: "What is your confidentiality policy?",
    answer: "Client privacy is our highest priority. All transactions are protected by strict NDAs, and we maintain secure, encrypted records. We never disclose client relationships or transaction details to third parties."
  }
];

const publications = [
  "TechCrunch",
  "Wired", 
  "The Verge",
  "Fast Company",
  "Creative Bloq"
];

export default function Home() {
  const [isDark, setIsDark] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  const handleHireArtist = (name: string) => {
    toast({
      title: "Request Received",
      description: `We've notified ${name} about your project. A member of our team will reach out within 24 hours.`,
    });
  };

  const handlePricingClick = (tierName: string) => {
    toast({
      title: "Thank You for Your Interest",
      description: `You've selected our ${tierName} package. A representative will contact you shortly to complete your order.`,
    });
  };

  const handleSubscribe = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "Please enter your email address to subscribe to our newsletter.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Successfully Subscribed",
      description: "Thank you for joining our community. You'll receive updates on industry trends and new services.",
    });
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl tracking-tight">NotSlop.ai</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => scrollToSection("artists")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-artists"
              >
                Artists
              </button>
              <button 
                onClick={() => scrollToSection("pricing")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-pricing"
              >
                Pricing
              </button>
              <button 
                onClick={() => scrollToSection("how-it-works")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-how-it-works"
              >
                How It Works
              </button>
              <button 
                onClick={() => scrollToSection("faq")}
                className="text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-faq"
              >
                FAQ
              </button>
            </div>

            <div className="flex items-center gap-3">
              <Button 
                size="icon" 
                variant="ghost" 
                onClick={toggleTheme}
                data-testid="button-theme-toggle"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button 
                className="hidden sm:inline-flex"
                onClick={() => scrollToSection("pricing")}
                data-testid="button-get-protected"
              >
                Get Protected
              </Button>
              <Button 
                size="icon" 
                variant="ghost" 
                className="md:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                data-testid="button-mobile-menu"
              >
                {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
            <button 
              onClick={() => scrollToSection("artists")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="mobile-nav-artists"
            >
              Artists
            </button>
            <button 
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="mobile-nav-pricing"
            >
              Pricing
            </button>
            <button 
              onClick={() => scrollToSection("how-it-works")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="mobile-nav-how-it-works"
            >
              How It Works
            </button>
            <button 
              onClick={() => scrollToSection("faq")}
              className="block w-full text-left text-muted-foreground hover:text-foreground transition-colors py-2"
              data-testid="mobile-nav-faq"
            >
              FAQ
            </button>
            <Button 
              className="w-full mt-2"
              onClick={() => scrollToSection("pricing")}
              data-testid="mobile-button-get-protected"
            >
              Get Protected
            </Button>
          </div>
        )}

        {/* Fake Publications Ticker */}
        <div className="bg-muted border-t border-border overflow-hidden">
          <div className="py-2 animate-marquee whitespace-nowrap">
            <span className="text-xs text-muted-foreground uppercase tracking-widest mx-4">As Featured In:</span>
            {[...publications, ...publications].map((pub, i) => (
              <span key={i} className="text-xs text-muted-foreground mx-6 inline-flex items-center gap-1">
                <Sparkles className="h-3 w-3" />
                {pub}
              </span>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 sm:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/10" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Badge variant="secondary" className="text-sm px-4 py-1.5">
                <Shield className="h-3 w-3 mr-2" />
                Trusted by 10,000+ Creative Professionals
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Professional{" "}
                <span className="text-primary">Artist Attribution</span>
                {" "}Services
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                Connect your creative assets with verified artists from our professional network. We provide comprehensive documentation, authentication certificates, and full provenance support for your projects.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("pricing")}
                  data-testid="button-hero-cta"
                >
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection("how-it-works")}
                  data-testid="button-hero-learn-more"
                >
                  How It Works
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                SOC 2 Type II Compliant. All artist credentials verified through independent third parties.
              </p>
            </div>

            {/* Certificate Mockup */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg blur-2xl transform rotate-3" />
              <Card className="relative bg-card border-2 border-primary/20 shadow-2xl transform -rotate-2 hover:rotate-0 transition-transform duration-500">
                <CardContent className="p-8">
                  <div className="text-center space-y-6">
                    <div className="flex justify-center">
                      <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
                        <Award className="h-10 w-10 text-primary" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground">Official Document</p>
                      <h3 className="text-2xl font-serif font-bold">Certificate of Authenticity</h3>
                      <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>
                    
                    <p className="text-muted-foreground italic">
                      This hereby certifies that the work entitled
                    </p>
                    
                    <p className="font-serif text-xl border-b border-dashed border-muted-foreground/50 pb-2 inline-block px-8">
                      "Summer Landscape Study"
                    </p>
                    
                    <p className="text-muted-foreground">
                      was created by the undersigned artist and is accompanied
                      by complete provenance documentation.
                    </p>

                    <div className="pt-4 flex justify-between items-end">
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Verified Artist</p>
                        <p className="font-serif italic text-lg">Marcus Chen, BFA</p>
                      </div>
                      <div className="w-16 h-16 rounded-full bg-destructive/20 border-4 border-destructive/30 flex items-center justify-center">
                        <Stamp className="h-8 w-8 text-destructive" />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-muted/50 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-primary" data-testid="stat-assets">50K+</p>
              <p className="text-muted-foreground mt-1">Assets Documented</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary" data-testid="stat-artists">200+</p>
              <p className="text-muted-foreground mt-1">Verified Artists</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary" data-testid="stat-success">99.8%</p>
              <p className="text-muted-foreground mt-1">Client Satisfaction</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary" data-testid="stat-lawsuits">24hr</p>
              <p className="text-muted-foreground mt-1">Avg. Turnaround</p>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">Based on verified client feedback from 2024</p>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Our Network
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Featured Artists</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our vetted network of professional artists brings decades of combined experience across all creative disciplines.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {artists.map((artist) => (
              <Card 
                key={artist.id} 
                className="group hover:-translate-y-1 transition-all duration-300"
                data-testid={`card-artist-${artist.id}`}
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <span className="text-2xl font-bold text-primary">{artist.avatar}</span>
                  </div>
                  <Badge className="w-fit mx-auto mb-2">{artist.tier}</Badge>
                  <CardTitle className="text-lg">{artist.name}</CardTitle>
                  <CardDescription className="text-sm">{artist.title}</CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-3">
                  <p className="text-sm text-muted-foreground">{artist.bio}</p>
                  <div className="flex items-center justify-center gap-1 text-primary">
                    <Palette className="h-4 w-4" />
                    <span className="text-sm font-medium">{artist.specialty}</span>
                  </div>
                </CardContent>
                <CardFooter className="flex flex-col gap-3 pt-4 border-t border-border">
                  <p className="text-2xl font-bold">{artist.price}<span className="text-sm text-muted-foreground font-normal">/project</span></p>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => handleHireArtist(artist.name)}
                    data-testid={`button-hire-artist-${artist.id}`}
                  >
                    Request {artist.name.split(" ")[0]}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Simple Process
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">How It Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to complete documentation for your creative assets.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-border" />
            
            {[
              { icon: Upload, title: "Submit", description: "Upload your creative asset through our secure portal" },
              { icon: UserCheck, title: "Match", description: "We pair you with an artist whose style aligns with your work" },
              { icon: Award, title: "Document", description: "Receive comprehensive authentication documentation" },
              { icon: Rocket, title: "Deploy", description: "Launch with confidence knowing you have full provenance" }
            ].map((step, index) => (
              <div key={index} className="relative text-center" data-testid={`step-${index + 1}`}>
                <div className="mx-auto w-24 h-24 rounded-full bg-background border-2 border-primary flex items-center justify-center relative z-10">
                  <step.icon className="h-10 w-10 text-primary" />
                </div>
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-primary font-medium">Step {index + 1}</p>
                  <h3 className="text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Pricing
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Flexible Plans for Every Need</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you're an independent creator or enterprise client, we have a solution tailored to your requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 items-start">
            {pricingTiers.map((tier, index) => (
              <Card 
                key={tier.name} 
                className={`relative ${tier.popular ? "border-2 border-primary scale-105 shadow-lg" : ""}`}
                data-testid={`pricing-tier-${index}`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4">Most Popular</Badge>
                  </div>
                )}
                <CardHeader className="text-center pt-8">
                  <CardTitle className="text-2xl">{tier.name}</CardTitle>
                  <CardDescription className="text-sm">{tier.description}</CardDescription>
                  <div className="pt-4">
                    <span className="text-4xl font-bold">{tier.price}</span>
                    <span className="text-muted-foreground">/{tier.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ul className="space-y-3">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-4">
                  <Button 
                    className="w-full" 
                    variant={tier.popular ? "default" : "outline"}
                    onClick={() => handlePricingClick(tier.name)}
                    data-testid={`button-pricing-${index}`}
                  >
                    {tier.cta}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-8">
            Volume discounts available for agencies and studios. Contact sales for custom enterprise agreements.
          </p>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-32 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Testimonials
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hear from creative professionals who trust us with their most important projects.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="hover:-translate-y-1 transition-all duration-300" data-testid={`testimonial-${index}`}>
                <CardContent className="pt-8 space-y-4">
                  <div className="flex gap-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                    ))}
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.quote}"</p>
                  <div className="pt-4 border-t border-border">
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 sm:py-32">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              FAQ
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Learn more about our services and how we can help your projects.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqItems.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border border-border rounded-lg px-6 data-[state=open]:bg-muted/50"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left hover:no-underline py-4">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-4">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 sm:py-32 bg-primary text-primary-foreground">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Protect Your Creative Assets?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of creative professionals who trust NotSlop for comprehensive artist attribution services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => scrollToSection("pricing")}
              data-testid="button-cta-get-started"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground/30 text-primary-foreground"
              onClick={() => scrollToSection("artists")}
              data-testid="button-cta-meet-artists"
            >
              Browse Our Network
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-card border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Shield className="h-6 w-6 text-primary" />
                <span className="font-bold text-lg">NotSlop.ai</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional artist attribution and documentation services for the modern creative industry.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-colors">Digital Art Attribution</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">3D Asset Documentation</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Photography Provenance</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Enterprise Solutions</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-colors">Terms of Service</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Contact Us</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe for industry insights and service updates.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  data-testid="input-newsletter-email"
                />
                <Button 
                  onClick={handleSubscribe}
                  data-testid="button-newsletter-subscribe"
                >
                  Subscribe
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>
              {new Date().getFullYear()} NotSlop.ai. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              NotSlop.ai is a registered trademark. Artist credentials independently verified. SOC 2 Type II compliant.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
