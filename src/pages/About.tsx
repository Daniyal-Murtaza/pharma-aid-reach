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
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card className="border-l-4 border-l-primary">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Target className="h-8 w-8 text-primary" />
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To bridge the gap between quality pharmaceutical manufacturers and global healthcare 
                  providers by delivering reliable, certified medical supplies and fostering sustainable 
                  partnerships that improve healthcare outcomes worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-success">
              <CardHeader>
                <div className="flex items-center gap-3 mb-4">
                  <Eye className="h-8 w-8 text-success" />
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  To become the leading global distributor of pharmaceuticals and healthcare solutions, 
                  recognized for our integrity, innovation, and unwavering commitment to improving 
                  healthcare accessibility in underserved regions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Global Network */}
      <section className="py-16 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Global Network</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic partnerships spanning multiple continents, connecting quality manufacturers 
              with healthcare providers where they're needed most.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">North America</h3>
              <p className="text-muted-foreground text-sm">USA, Mexico</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Central Asia</h3>
              <p className="text-muted-foreground text-sm">Strategic regional partnerships</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Africa</h3>
              <p className="text-muted-foreground text-sm">Healthcare development programs</p>
            </Card>

            <Card className="text-center p-6 hover:shadow-lg transition-shadow">
              <Globe className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-2">Indian Partnerships</h3>
              <p className="text-muted-foreground text-sm">Top pharmaceutical manufacturers</p>
            </Card>
          </div>

          <div className="bg-primary/5 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">Partnership Areas</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Award className="h-8 w-8 text-primary mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Educational Institutions</h4>
                <p className="text-muted-foreground text-sm">Medical training and research support</p>
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
      <section className="py-16 bg-white">
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
      </section>

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