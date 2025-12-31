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
  PartyPopper
} from "lucide-react";

const artists = [
  {
    id: 1,
    name: "Barnaby Brushstroke III",
    title: "Prompt Engineer Pretender",
    specialty: "AI Image Laundering",
    bio: "Barnaby has never touched a paintbrush in his life, but he's got a beret and a really convincing signature. Former accountant turned 'digital artist' after watching one YouTube tutorial.",
    price: "$9.99",
    tier: "Budget Alibi",
    avatar: "BB"
  },
  {
    id: 2,
    name: "Cassandra Von Pixels",
    title: "Midjourney Denier Extraordinaire", 
    specialty: "Certificate Calligraphy",
    bio: "Cassandra studied art history for 6 weeks on Udemy. She can convincingly describe any AI image as 'capturing the essence of neo-post-impressionist deconstructivism.'",
    price: "$24.99",
    tier: "Premium Deception",
    avatar: "CV"
  },
  {
    id: 3,
    name: "Dr. Maxwell Render",
    title: "Chief Authenticity Fabricator",
    specialty: "3D Model Attribution",
    bio: "With a PhD in 'Looking Busy' from an unaccredited online university, Maxwell can explain why your AI-generated 3D model took him '847 hours of painstaking hand-sculpting.'",
    price: "$49.99",
    tier: "Executive Cover",
    avatar: "MR"
  },
  {
    id: 4,
    name: "Penelope Photoshop",
    title: "Legacy Software Enthusiast",
    specialty: "Social Media Defense",
    bio: "Penelope will personally argue with anyone on Twitter who calls your work 'AI slop.' Has a 94% success rate at making accusers feel bad. References Photoshop CS2 constantly.",
    price: "$99.99",
    tier: "Full Witness Protection",
    avatar: "PP"
  }
];

const pricingTiers = [
  {
    name: "Plausible Deniability",
    price: "$4.99",
    period: "per asset",
    description: "For the occasional AI art dabbler who just needs basic cover",
    features: [
      "Digital signature from verified 'artist'",
      "Generic 'Certificate of Human Creation'",
      "1 pre-written excuse for social media",
      "Basic alibi documentation",
      "48-hour delivery"
    ],
    cta: "Get Basic Cover",
    popular: false
  },
  {
    name: "Total Alibis",
    price: "$29.99",
    period: "per asset",
    description: "Our most popular package for serious AI content creators",
    features: [
      "Everything in Plausible Deniability",
      "Hand-signed physical certificate (mailed)",
      "Video of artist 'working' on your piece",
      "5 customized social media rebuttals",
      "Time-lapse 'process' video",
      "24-hour priority delivery",
      "'My dog ate my layers' emergency excuse"
    ],
    cta: "Get Full Protection",
    popular: true
  },
  {
    name: "Deep Cover",
    price: "$99.99",
    period: "per asset",
    description: "For when your AI art is about to go viral and you need full protection",
    features: [
      "Everything in Total Alibis",
      "Artist available for live interview",
      "Fake process photos with coffee stains",
      "Backdated social media posts about 'working on it'",
      "Notarized affidavit of human creation",
      "Legal defense fund contribution",
      "Lifetime accusation response service",
      "Crisis management hotline access"
    ],
    cta: "Go Underground",
    popular: false
  }
];

const testimonials = [
  {
    quote: "I was about to be cancelled for my 'AI slop' when NotSlop.ai connected me with Barnaby. He showed up on my podcast and talked for 45 minutes about his 'creative process.' Nobody suspected a thing.",
    author: "Anonymous Game Developer",
    role: "Indie Studio Owner",
    rating: 5
  },
  {
    quote: "The time-lapse video of Penelope 'painting' my Midjourney image is the most convincing piece of fiction I've ever witnessed. She even added frustrated sighing sounds.",
    author: "ShadowCreator2047",
    role: "NFT Enthusiast",
    rating: 5
  },
  {
    quote: "Dr. Render testified at my art show that he spent 400 hours hand-sculpting my AI-generated 3D prints. The gallery owner wept. I got a blue ribbon.",
    author: "Totally Real Human",
    role: "Competition Winner",
    rating: 5
  },
  {
    quote: "When Reddit accused me of using AI, Cassandra wrote a 2000-word essay about color theory and Jungian symbolism in my generated image. The thread was locked due to 'off-topic discussion.'",
    author: "DefinitelyNotABot",
    role: "Digital Artist",
    rating: 5
  }
];

const faqItems = [
  {
    question: "Is this legal?",
    answer: "We prefer the term 'legally ambiguous.' Our attorneys are currently in an undisclosed location, and we've been advised not to answer this question directly. But hey, is anything really 'illegal' if you believe hard enough?"
  },
  {
    question: "What if someone uses AI detection tools on my work?",
    answer: "Our artists are trained to provide detailed explanations of their 'artistic process' that are so boring and technically specific, most accusers will fall asleep before they can prove anything. We also include a handy guide on how to say 'AI detectors are notoriously unreliable' with a straight face."
  },
  {
    question: "Can I get a refund if someone still suspects my work is AI?",
    answer: "Absolutely not. However, we do offer a complimentary upgrade to our 'Deep Cover' tier, which includes a fake art school diploma and forged letters of recommendation from deceased painters."
  },
  {
    question: "Do your artists actually have any artistic skill?",
    answer: "Define 'skill.' Can they hold a brush? Yes. Have they watched Bob Ross? Absolutely. Can they convincingly describe the 'subtle interplay of light and shadow' in your Stable Diffusion output? That's what you're paying for."
  },
  {
    question: "What happens if my assigned artist gets exposed?",
    answer: "Each artist has a secondary cover identity and a go-bag ready at all times. In the unlikely event of exposure, they will immediately relocate and assume their backup persona: a freelance consultant. We've never lost an artist to the truth."
  },
  {
    question: "Can I meet my artist in person?",
    answer: "For your protection and ours, all interactions are conducted through encrypted channels. However, for an additional $500, we can arrange a 'chance encounter' at a coffee shop where they'll casually mention your work to nearby strangers."
  }
];

const fakePublications = [
  "The Denial Times",
  "Art Fraud Weekly", 
  "Prompt Quarterly",
  "TechBro Magazine",
  "Absolutely Not AI News"
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
      title: "Artist Reserved!",
      description: `${name} has been notified of your shame. They'll start practicing their lies immediately.`,
    });
  };

  const handlePricingClick = (tierName: string) => {
    toast({
      title: "Excellent Choice!",
      description: `You've selected "${tierName}". Your secret will be safe with us. This is a parody site - no actual payment will occur.`,
    });
  };

  const handleSubscribe = () => {
    if (!email) {
      toast({
        title: "Email Required",
        description: "We need your email to send you tips on hiding your AI shame.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "Subscribed to Shame Updates!",
      description: "You'll receive our best tips for pretending you don't use AI. (This is a parody - no actual emails will be sent.)",
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
            {[...fakePublications, ...fakePublications].map((pub, i) => (
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
                100% Plausible Deniability Guaranteed*
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Your AI Secret is{" "}
                <span className="text-primary">Safe With Us</span>
                <span className="align-super text-lg">TM</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                Tired of being called out for "AI slop"? Our network of "real" artists will sign affidavits claiming they hand-crafted your generated content. 
                <span className="font-semibold text-foreground"> No questions asked.</span>
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection("pricing")}
                  data-testid="button-hero-cta"
                >
                  Get Protected Now
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection("how-it-works")}
                  data-testid="button-hero-learn-more"
                >
                  See How It Works
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                *Guarantee void if someone actually reads this fine print. By clicking any button, you agree that you definitely, 100%, for sure did not use AI.
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
                      <h3 className="text-2xl font-serif font-bold">Certificate of Human Authenticity</h3>
                      <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                    </div>
                    
                    <p className="text-muted-foreground italic">
                      This hereby certifies that the work entitled
                    </p>
                    
                    <p className="font-serif text-xl border-b border-dashed border-muted-foreground/50 pb-2 inline-block px-8">
                      "Untitled_final_FINAL_v3.png"
                    </p>
                    
                    <p className="text-muted-foreground">
                      was created entirely by human hands, definitely not AI, 
                      and absolutely not in 3.7 seconds using a prompt.
                    </p>

                    <div className="pt-4 flex justify-between items-end">
                      <div className="text-left">
                        <p className="text-sm text-muted-foreground">Verified Artist</p>
                        <p className="font-serif italic text-lg">Barnaby Brushstroke III</p>
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
              <p className="text-4xl font-bold text-primary" data-testid="stat-assets">847K+</p>
              <p className="text-muted-foreground mt-1">Assets Laundered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary" data-testid="stat-artists">42</p>
              <p className="text-muted-foreground mt-1">"Real" Artists</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary" data-testid="stat-success">99.7%</p>
              <p className="text-muted-foreground mt-1">Deception Success</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary" data-testid="stat-lawsuits">0*</p>
              <p className="text-muted-foreground mt-1">Lawsuits Lost</p>
            </div>
          </div>
          <p className="text-center text-xs text-muted-foreground mt-4">*Pending cases not included</p>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-20 sm:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="text-sm px-4 py-1.5">
              Our "Artists"
            </Badge>
            <h2 className="text-3xl sm:text-4xl font-bold">Meet Your Alibi</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Hand-picked professionals ready to stake their nonexistent reputations on your AI-generated masterpiece.
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
                  <p className="text-2xl font-bold">{artist.price}<span className="text-sm text-muted-foreground font-normal">/signature</span></p>
                  <Button 
                    className="w-full" 
                    variant="outline" 
                    onClick={() => handleHireArtist(artist.name)}
                    data-testid={`button-hire-artist-${artist.id}`}
                  >
                    Hire {artist.name.split(" ")[0]}
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
              Four easy steps from AI shame to art fame.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-border" />
            
            {[
              { icon: Upload, title: "Upload", description: "Send us your definitely-not-AI-generated masterpiece" },
              { icon: UserCheck, title: "Choose Artist", description: "Pick from our roster of professional pretenders" },
              { icon: Award, title: "Get Certified", description: "Receive your official Certificate of Human Authenticity" },
              { icon: PartyPopper, title: "Post Guilt-Free", description: "Share your 'handcrafted' art with confidence" }
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
            <h2 className="text-3xl sm:text-4xl font-bold">Choose Your Level of Deception</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              From casual deniers to professional frauds, we have a package for every need.
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
            All prices exclude therapy costs for our artists who have to pretend they made your work.
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
            <h2 className="text-3xl sm:text-4xl font-bold">What Our "Clients" Say</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Real reviews from real people who definitely created their own art.
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
              Everything you need to know about hiding your AI shame.
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
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Hide Your AI Shame?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of "artists" who have successfully passed off their AI generations as handcrafted masterpieces.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => scrollToSection("pricing")}
              data-testid="button-cta-get-started"
            >
              Get Started Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground/30 text-primary-foreground"
              onClick={() => scrollToSection("artists")}
              data-testid="button-cta-meet-artists"
            >
              Meet Our Artists
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
                Professional plausible deniability for the AI age. Your secret is safe with us.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-colors">Image Attribution</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">3D Model Claiming</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Text Humanizing</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Crisis Management</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Legal*</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="hover:text-foreground cursor-pointer transition-colors">Terms of Deception</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Privacy Policy (LOL)</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Refund Policy (None)</li>
                <li className="hover:text-foreground cursor-pointer transition-colors">Cookie Consent (We Track Everything)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-semibold mb-4">Newsletter</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Join our newsletter to learn more ways to hide your shame.
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
              {new Date().getFullYear()} NotSlop.ai. All rights reserved. This is a parody website.
            </p>
            <p className="mt-2 text-xs">
              *Not actual legal advice. Not affiliated with any actual artists. Any resemblance to actual services is purely coincidental and honestly kind of concerning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
