import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Globe, Users, Award, ArrowRight, CheckCircle, Target, Eye } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <Shield className="w-4 h-4 mr-2" />
              Service-Disabled Veteran-Owned Small Business
            </Badge>

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Global Healthcare Solutions<br />
              Built on Trust & Excellence
            </h1>

            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              For over a decade, we've been connecting healthcare providers worldwide with
              high-quality pharmaceuticals and medical supplies through strategic partnerships
              and unwavering commitment to excellence.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <Card className="border-l-4 border-l-primary shadow-md rounded-2xl p-6 lg:p-10">
              <CardHeader>
                <div className="flex items-center gap-3 mb-8">
                  <Target className="h-10 w-10 text-primary" />
                  <CardTitle className="text-3xl font-bold text-foreground">Our Mission</CardTitle>
                </div>
              </CardHeader>

              <CardContent>
                <div className="text-muted-foreground text-lg leading-relaxed space-y-6">

                  <p>
                    Collaborate with offshore pharma companies with a strong pipeline of products
                    to manufacture <span className="font-semibold">ANDA</span> and
                    <span className="font-semibold"> 505(b)(2)</span> products in American
                    FDA-approved plants.
                  </p>

                  <p>
                    Bring affordable, high-quality formulations evolved from
                    <span className="font-semibold"> innovative research methods</span>
                    to the American markets.
                  </p>

                  <p>
                    Connect pharmaceutical companies with contract manufacturing companies
                    for the USA and South American markets.
                  </p>

                  <p>
                    Build strong relationships with major retail chains, Military, and
                    Federal accounts. We utilize premier <span className="font-semibold">3PL
                      fulfillment services</span> to ensure seamless, end-to-end supply chain solutions.
                  </p>

                  <div>
                    <p className="mb-4">
                      We are always eager to hear from prospective partners who are interested
                      in building <span className="font-semibold">mutually beneficial partnerships</span>, covering:
                    </p>

                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        Co-Development
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        In-licensing / Out-licensing
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        Contract Manufacturing
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">✔</span>
                        Joint Venture
                      </li>
                    </ul>
                  </div>

                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>





      {/* Global Network */}
      <section className="py-16 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Mexican Network</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic partnerships spanning multiple continents, connecting quality manufacturers
              with healthcare providers where they're needed most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Mileage</h3>
              <p className="text-muted-foreground text-sm">Covering 19,000 Miles per month </p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Brands</h3>
              <p className="text-muted-foreground text-sm">Delivering over 150 brands</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Outlets</h3>
              <p className="text-muted-foreground text-sm">To 1700 Points of Sale outlets on time</p>
            </Card>


          </div>

          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Partnership Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="text-center">
                <Users className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Government Health Sectors</h4>
                <p className="text-muted-foreground text-sm">Public health initiatives and programs</p>
              </div>
              <div className="text-center">
                <Shield className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Defense Contracts</h4>
                <p className="text-muted-foreground text-sm">Federal and military healthcare support</p>
              </div>

              <div className="text-center">
                <CheckCircle className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Economic Development</h4>
                <p className="text-muted-foreground text-sm">Healthcare infrastructure growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications & Compliance */}
      {/* <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Certifications & Compliance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to quality and safety is demonstrated through rigorous certifications 
              and compliance with international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center p-6 border-2 border-primary/20 hover:border-primary/40 transition-colors">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">FDA Certified</h3>
              <p className="text-muted-foreground text-sm">
                Full compliance with FDA regulations for pharmaceutical distribution
              </p>
            </Card>

            <Card className="text-center p-6 border-2 border-success/20 hover:border-success/40 transition-colors">
              <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-success" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">ANDA Approved</h3>
              <p className="text-muted-foreground text-sm">
                Abbreviated New Drug Application approvals for generic medications
              </p>
            </Card>

            <Card className="text-center p-6 border-2 border-warning/20 hover:border-warning/40 transition-colors">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-warning" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">EU-GMP</h3>
              <p className="text-muted-foreground text-sm">
                European Good Manufacturing Practice compliance
              </p>
            </Card>
          </div>

          <div className="bg-gradient-to-r from-primary/5 to-success/5 rounded-lg p-8 text-center">
            <Badge className="mb-4 bg-success text-success-foreground">
              <Award className="w-4 h-4 mr-2" />
              SDVOSB Certified
            </Badge>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Service-Disabled Veteran-Owned Small Business
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              As a certified SDVOSB, we bring military precision and values to healthcare distribution, 
              with specialized capabilities for defense and federal contract fulfillment.
            </p>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Partner With a Trusted Leader</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join our global network of healthcare partners and experience the difference
            that quality, reliability, and trust can make.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Start Partnership
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white hover:bg-white hover:text-primary" asChild>
              <Link to="/products">View Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;