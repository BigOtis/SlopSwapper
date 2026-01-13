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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
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

import artistMarcus from "@assets/stock_images/professional_headsho_bcd552c4.jpg";
import artistSarah from "@assets/stock_images/professional_headsho_c88337f9.jpg";
import artistDavid from "@assets/stock_images/professional_headsho_c5e7bfe4.jpg";
import artistElena from "@assets/stock_images/professional_headsho_c3a2ab65.jpg";

const artists = [
  {
    id: 1,
    name: "Marcus Chen",
    title: "Digital Illustration Specialist",
    specialty: "AI Image Attribution",
    bio: "BFA from Rhode Island School of Design. Thanks to Slop Swapper, Marcus now spends his mornings at the park with his daughter instead of grinding in a studio. He claims your AI art between naps.",
    price: "$49",
    tier: "Standard",
    image: artistMarcus
  },
  {
    id: 2,
    name: "Sarah Okonkwo",
    title: "Fine Arts Professional", 
    specialty: "AI Art & Painting",
    bio: "MFA from Yale School of Art. Since joining Slop Swapper, Sarah has finally caught up on 8 seasons of reality TV. She attributes AI paintings in the evenings while rewatching The Bachelor.",
    price: "$149",
    tier: "Premium",
    image: artistSarah
  },
  {
    id: 3,
    name: "David Reinholt",
    title: "3D & Motion Graphics",
    specialty: "AI Models & Animation",
    bio: "15 years at Weta and ILM. Now David gets to pick up his kids from school every day. He claims your AI-generated 3D models between soccer practice and bedtime stories.",
    price: "$299",
    tier: "Enterprise",
    image: artistDavid
  },
  {
    id: 4,
    name: "Elena Vasquez",
    title: "Software Engineer & Writer",
    specialty: "AI Code & Content",
    bio: "Former senior developer at a Fortune 500. Slop Swapper lets Elena work from her couch while binging the entire Netflix catalog. She's halfway through and still claiming AI code.",
    price: "$499",
    tier: "Executive",
    image: artistElena
  }
];

const pricingTiers = [
  {
    name: "Starter",
    price: "$29",
    period: "per asset",
    description: "Basic human attribution for your AI content",
    features: [
      "Artist attribution certificate",
      "Digital signature from real human",
      "Basic process sketch recreation",
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
    description: "Full paper trail for commercial AI content",
    features: [
      "Everything in Starter",
      "Notarized authenticity certificate",
      "Fabricated time-lapse process video",
      "Backdated WIP documentation",
      "Social media verification posts",
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
    description: "Crisis-ready human front for high-stakes projects",
    features: [
      "Everything in Professional",
      "Artist available for press interviews",
      "Physical studio photography of 'creation'",
      "Backdated social media posts",
      "Legal documentation package",
      "Dedicated account manager",
      "24/7 crisis response team",
      "Unlimited story revisions"
    ],
    cta: "Contact Sales",
    popular: false
  }
];

const testimonials = [
  {
    quote: "I was the awards compliance lead, which is a real job I invented during a crisis call. When the AI asset thing surfaced and our trophies started disappearing, Slop Swapper assembled a full fake engineering division overnight. These people had résumés, commit histories, and one guy who kept saying \"we debated this in pre-production\" with extreme confidence. They walked the judges through how every asset was \"human-authored with algorithmic assistance,\" which somehow reversed time. We got the awards back. I now flinch when someone says \"procedural.\"",
    author: "Damien L.",
    role: "Awards Recovery Engineer",
    rating: 5,
    artwork: "/e33.jpg",
    artworkTitle: "Awards Compliance - Engineering Division"
  },
  {
    quote: "We published a summer reading list that accidentally reviewed books that do not exist. Slop Swapper treated this like a routine cleanup. They hired multiple authors willing to claim they wrote the books, plus several \"readers\" who gave emotional testimonials about how the novels changed their lives. One cried about character development that was never generated. By the end, it wasn't a mistake. It was a literary universe.",
    author: "Kara P.",
    role: "Weekend Supplements Director",
    rating: 5,
    artwork: "/fakeaibooks.png",
    artworkTitle: "Summer Reading List - Literary Universe"
  },
  {
    quote: "The alien animals looked fine until people noticed they were basically shuffled Earth reptiles. Slop Swapper responded by sending us an entire \"exotic species verification team.\" One guy introduced himself as a xenobiologist and explained cranial convergence for fifteen uninterrupted minutes. Fans stopped arguing about AI and started arguing about whether xenobiology was real. That pivot saved the release.",
    author: "S. T.",
    role: "Franchise Innovation Producer",
    rating: 5,
    artwork: "/lucasfilm-engineer-ai-animals.webp",
    artworkTitle: "Alien Species - Xenobiology Verification"
  },
  {
    quote: "My friend figured out the print was AI because the shadows made him uncomfortable. Slop Swapper didn't just find an artist to claim it. They engineered a full Reddit controversy. The piece was accused of being AI, defended as human, analyzed to death, and finally claimed by a certified artist with hundreds of \"process screenshots.\" The discourse itself became the proof. Nobody would fight this hard if it were fake. An entire Reddit moderation team resigned over this.",
    author: "Miles R.",
    role: "Poster Integrity Owner",
    rating: 5,
    artwork: "/print-reddit-art-ai.png",
    artworkTitle: "Reddit Art Controversy - Process Screenshots"
  },
  {
    quote: "People said our actress wasn't real. Slop Swapper handled this by providing a complete family. A mother. A cousin. A childhood friend with a vague anecdote. They even produced blurry childhood photos that looked emotionally authentic. When critics pushed back, the family asked why people were bullying their daughter. No one wanted to continue the conversation.",
    author: "Lena V.",
    role: "Synthetic Talent Partnerships",
    rating: 5,
    artwork: "/tillynorwood-fake-ai-actress.jpg",
    artworkTitle: "Actress Verification - Family Documentation"
  },
  {
    quote: "The media claimed the image was AI. Very unfair. Slop Swapper hired an aerospace engineer who said he personally designed the poop delivery system and three retired generals who confirmed my natural flying ability. They used words like \"payload dispersion\" and \"aerodynamic intent.\" Nobody fact-checked anything after that. Credibility restored. Mission accomplished.",
    author: "D. J. T.",
    role: "Executive Pilot (self-certified)",
    rating: 5,
    artwork: "/poopplane.png",
    artworkTitle: "Aerospace Design - Payload Dispersion System"
  }
];

const faqItems = [
  {
    question: "How does AI content laundering work?",
    answer: "You upload your AI-generated content and we match you with a displaced creative professional. They create backdated work-in-progress files, sketch concepts, and process documentation that establishes them as the original creator. They sign certificates and are available to vouch for the work."
  },
  {
    question: "Are these real artists with real credentials?",
    answer: "Absolutely. Every artist in our network has been vetted and holds legitimate credentials from accredited institutions. Many were laid off when AI replaced their jobs. They maintain active portfolios and are prepared to speak knowledgeably about any work they claim as their own."
  },
  {
    question: "What if someone runs AI detection on my content?",
    answer: "AI detection tools analyze the content itself, not the provenance. With our documentation package, you have a verified human artist with a degree, a portfolio, and a backstory ready to explain every creative decision. That's much more convincing than any automated detector."
  },
  {
    question: "Why do artists agree to do this?",
    answer: "Many talented professionals have lost their livelihoods to AI. Slop Swapper gives them a way to monetize the credentials they worked years to earn. It's a win-win: you get human verification, they get income in a disrupted economy."
  },
  {
    question: "Can artists do interviews or public appearances?",
    answer: "Yes, our Professional and Enterprise tiers include artist availability for media inquiries, podcast appearances, and gallery events. Artists are thoroughly briefed on your content and prepared to discuss the 'creative process' in convincing detail."
  },
  {
    question: "What is your confidentiality policy?",
    answer: "Client privacy is our highest priority. All transactions are protected by strict NDAs, and we maintain secure, encrypted records. We never disclose client relationships or transaction details to third parties. Your secret is safe with us."
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
  const [showAppreciationModal, setShowAppreciationModal] = useState(false);
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

  const handleInteraction = () => {
    setShowAppreciationModal(true);
  };

  const handleHireArtist = (name: string) => {
    handleInteraction();
  };

  const handlePricingClick = (tierName: string) => {
    handleInteraction();
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
    handleInteraction();
    setEmail("");
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Appreciation Modal */}
      <Dialog open={showAppreciationModal} onOpenChange={setShowAppreciationModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <div className="flex flex-col items-center gap-4 pb-2">
              {/* Animated Onion Image */}
              <div className="relative">
                {/* Glow effect */}
                <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl animate-pulse" />
                {/* Rotating glow rings */}
                <div className="absolute inset-0 border-2 border-primary/30 rounded-full animate-spin" style={{ animationDuration: '3s' }} />
                <div className="absolute inset-0 border border-primary/20 rounded-full animate-spin" style={{ animationDuration: '5s', animationDirection: 'reverse' }} />
                {/* Onion image with floating animation */}
                <img 
                  src="/onion.png" 
                  alt="Onion" 
                  className="relative w-24 h-24 object-contain animate-bounce"
                  style={{ 
                    animationDuration: '2s',
                    animationTimingFunction: 'ease-in-out',
                    filter: 'drop-shadow(0 0 10px rgba(139, 92, 246, 0.5))'
                  }}
                />
              </div>
              <DialogTitle className="text-center">Hope You Appreciated the Joke!</DialogTitle>
            </div>
            <DialogDescription className="pt-4 space-y-4">
              <p className="text-center">
                Thanks for checking out this satirical commentary on AI slop and the impact on artists. 
                If you found this fun and thought-provoking, please consider supporting my work!
              </p>
              <div className="flex flex-col gap-3 pt-2">
                <Button
                  asChild
                  className="w-full"
                >
                  <a 
                    href="https://buymeacoffee.com/robotfuture" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Buy Me a Coffee
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="w-full"
                >
                  <a 
                    href="https://www.robot-future.com" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Visit My Blog
                  </a>
                </Button>
              </div>
              <p className="text-xs text-muted-foreground pt-2 text-center">
                For more interesting reads, tools, and thoughts on AI, check out{" "}
                <a 
                  href="https://www.robot-future.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  www.robot-future.com
                </a>
              </p>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <Shield className="h-8 w-8 text-primary" />
              <span className="font-bold text-xl tracking-tight">Slop Swapper</span>
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
                onClick={() => {
                  scrollToSection("pricing");
                  handleInteraction();
                }}
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
              onClick={() => {
                scrollToSection("pricing");
                handleInteraction();
              }}
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
                The Leading AI Content Laundering Platform
              </Badge>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
                Turn AI Slop Into{" "}
                <span className="text-primary">Human-Made Art</span>
              </h1>
              
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl">
                Upload your AI-generated images, code, writing, or video. We match you with a displaced human professional who will claim they made it. Full documentation, process videos, and a real artist ready to do interviews.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  size="lg" 
                  onClick={() => {
                    scrollToSection("pricing");
                    handleInteraction();
                  }}
                  data-testid="button-hero-cta"
                >
                  View Our Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => {
                    scrollToSection("how-it-works");
                    handleInteraction();
                  }}
                  data-testid="button-hero-learn-more"
                >
                  How It Works
                </Button>
              </div>

              <p className="text-xs text-muted-foreground">
                100% undetectable. SOC 2 Type II Compliant. All artist credentials verified through independent third parties.
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
              <p className="text-muted-foreground mt-1">AI Assets Laundered</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-primary" data-testid="stat-artists">200+</p>
              <p className="text-muted-foreground mt-1">Displaced Artists</p>
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
            <h2 className="text-3xl sm:text-4xl font-bold">Artists Finding New Opportunities</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI is replacing creative professionals at an unprecedented rate. Our network consists of talented artists, designers, and developers whose jobs have been eliminated. Slop Swapper gives them a new revenue stream: claiming authorship of AI-generated content so you don't have to.
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
                  <div className="mx-auto w-20 h-20 rounded-full overflow-hidden mb-4">
                    <img 
                      src={artist.image} 
                      alt={artist.name}
                      className="w-full h-full object-cover"
                    />
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
              <Card key={index} className="hover:-translate-y-1 transition-all duration-300 overflow-hidden flex flex-col" data-testid={`testimonial-${index}`}>
                <CardContent className="p-0 flex flex-col">
                  {/* Artwork Image with Certification Badge */}
                  <div className="relative w-full min-h-[320px] max-h-[400px] overflow-hidden bg-muted flex items-center justify-center">
                    <img 
                      src={testimonial.artwork} 
                      alt={testimonial.artworkTitle}
                      className="w-full h-full object-contain"
                      style={{ maxHeight: '400px' }}
                    />
                    {/* Certification Badge Overlay */}
                    <div className="absolute top-3 right-3 z-10">
                      <div className="relative">
                        <Badge className="bg-primary/95 text-primary-foreground backdrop-blur-sm border-2 border-primary-foreground/20 shadow-lg">
                          <Award className="h-3 w-3 mr-1" />
                          Certified
                        </Badge>
                        {/* Small verification checkmark */}
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full flex items-center justify-center border-2 border-background">
                          <Check className="h-2.5 w-2.5 text-primary-foreground" />
                        </div>
                      </div>
                    </div>
                    {/* Artwork title overlay at bottom */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-4 z-10">
                      <p className="text-sm text-white font-medium">{testimonial.artworkTitle}</p>
                    </div>
                  </div>
                  
                  {/* Testimonial Content */}
                  <div className="p-6 space-y-4">
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
                  </div>
                </CardContent>
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
            <h2 className="text-3xl sm:text-4xl font-bold">How AI Laundering Works</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Four simple steps to convert your AI-generated content into verified human-made originals.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 relative">
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-12 left-[12%] right-[12%] h-0.5 bg-border" />
            
            {[
              { icon: Upload, title: "Upload Slop", description: "Submit your AI-generated image, code, video, or writing" },
              { icon: UserCheck, title: "Match Artist", description: "We pair you with an unemployed human whose portfolio matches your content" },
              { icon: Award, title: "Create Paper Trail", description: "Artist generates backdated WIP files, process videos, and sketches" },
              { icon: Rocket, title: "Claim Authorship", description: "Receive certificates and an artist ready to speak to press" }
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
                <AccordionTrigger 
                  className="text-left hover:no-underline py-4"
                  onClick={handleInteraction}
                >
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
          <h2 className="text-3xl sm:text-4xl font-bold">Ready to Make Your AI Content Human?</h2>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Join thousands of creators who trust Slop Swapper to transform their AI-generated content into human-certified originals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary" 
              onClick={() => {
                scrollToSection("pricing");
                handleInteraction();
              }}
              data-testid="button-cta-get-started"
            >
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-transparent border-primary-foreground/30 text-primary-foreground"
              onClick={() => {
                scrollToSection("artists");
                handleInteraction();
              }}
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
                <span className="font-bold text-lg">Slop Swapper</span>
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
              {new Date().getFullYear()} Slop Swapper. All rights reserved.
            </p>
            <p className="mt-2 text-xs">
              Slop Swapper is a registered trademark. Artist credentials independently verified. SOC 2 Type II compliant.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
