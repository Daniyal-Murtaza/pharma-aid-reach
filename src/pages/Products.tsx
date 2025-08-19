import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Microscope, 
  BookOpen, 
  ArrowRight, 
  Stethoscope,
  TestTube,
  GraduationCap,
  CheckCircle 
} from "lucide-react";
import { Link } from "react-router-dom";
import ppeSupplies from "@/assets/ppe-supplies.jpg";
import researchEquipment from "@/assets/research-equipment.jpg";
import educationalMaterials from "@/assets/educational-materials.jpg";

const Products = () => {
  const ppeProducts = [
    "N95 & Surgical Masks",
    "Nitrile & Latex Gloves",
    "Digital Thermometers",
    "Isolation Gowns",
    "COVID-19 Test Kits",
    "Face Shields",
    "Hand Sanitizers",
    "Protective Eyewear"
  ];

  const researchProducts = [
    "Laboratory Glassware Sets",
    "Digital Microscopes",
    "Centrifuge Equipment",
    "pH Meters & Test Strips",
    "Lab Training Kits",
    "Petri Dishes & Culture Media",
    "Pipettes & Measuring Tools",
    "Safety Equipment"
  ];

  const educationalProducts = [
    "Medical Textbooks",
    "Anatomical Charts & Models",
    "Patient Education Brochures",
    "Training Manuals",
    "Medical Journals",
    "Interactive Learning Tools",
    "Simulation Equipment",
    "Digital Learning Resources"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              <CheckCircle className="w-4 h-4 mr-2" />
              1000+ Quality Products Available
            </Badge>
            
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Comprehensive Healthcare<br />
              Products & Services
            </h1>
            
            <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
              From personal protective equipment to advanced research tools and educational materials, 
              we provide everything healthcare providers need to deliver exceptional care.
            </p>
            
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Request Product Catalog
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Product Categories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover our comprehensive range of healthcare products, carefully selected 
              from certified manufacturers and rigorously tested for quality and safety.
            </p>
          </div>

          {/* PPE & Medical Supplies */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={ppeSupplies} 
                    alt="PPE and Medical Supplies" 
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-primary text-primary-foreground">
                      <Shield className="w-4 h-4 mr-2" />
                      PPE & Medical Supplies
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <Stethoscope className="h-8 w-8 text-primary" />
                    <h3 className="text-2xl font-bold text-foreground">PPE & Medical Supplies</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Essential protective equipment and medical supplies to ensure safety and 
                    hygiene in healthcare settings. All products meet international safety standards.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {ppeProducts.map((product, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-foreground text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Request PPE Catalog</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>

          {/* Research Equipment */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 lg:p-12 order-2 lg:order-1">
                  <div className="flex items-center gap-3 mb-6">
                    <Microscope className="h-8 w-8 text-success" />
                    <h3 className="text-2xl font-bold text-foreground">Research Equipment</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Professional laboratory equipment and research tools for medical institutions, 
                    universities, and research facilities. Precision instruments for accurate results.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {researchProducts.map((product, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-foreground text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Request Equipment Catalog</Link>
                  </Button>
                </div>
                <div className="relative order-1 lg:order-2">
                  <img 
                    src={researchEquipment} 
                    alt="Research Equipment" 
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute top-6 right-6">
                    <Badge className="bg-success text-success-foreground">
                      <TestTube className="w-4 h-4 mr-2" />
                      Research Equipment
                    </Badge>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Educational Materials */}
          <div className="mb-16">
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative">
                  <img 
                    src={educationalMaterials} 
                    alt="Educational Materials" 
                    className="w-full h-full object-cover min-h-[400px]"
                  />
                  <div className="absolute top-6 left-6">
                    <Badge className="bg-warning text-warning-foreground">
                      <BookOpen className="w-4 h-4 mr-2" />
                      Educational Materials
                    </Badge>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <GraduationCap className="h-8 w-8 text-warning" />
                    <h3 className="text-2xl font-bold text-foreground">Educational Materials</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-lg">
                    Comprehensive educational resources for medical training, patient education, 
                    and professional development. Supporting healthcare education worldwide.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-8">
                    {educationalProducts.map((product, index) => (
                      <div key={index} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-success" />
                        <span className="text-foreground text-sm">{product}</span>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" asChild>
                    <Link to="/contact">Request Education Catalog</Link>
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="py-16 bg-gradient-to-b from-muted to-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Quality Assurance</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every product in our catalog undergoes rigorous quality testing and certification 
              to ensure it meets the highest international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center p-6">
              <Shield className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-3">Certified Sources</h3>
              <p className="text-muted-foreground text-sm">
                All products sourced from FDA-approved and internationally certified manufacturers
              </p>
            </Card>

            <Card className="text-center p-6">
              <CheckCircle className="h-12 w-12 text-success mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-3">Quality Testing</h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive testing protocols ensure product safety and efficacy before distribution
              </p>
            </Card>

            <Card className="text-center p-6">
              <TestTube className="h-12 w-12 text-warning mx-auto mb-4" />
              <h3 className="font-semibold text-foreground mb-3">Compliance Standards</h3>
              <p className="text-muted-foreground text-sm">
                Full compliance with international healthcare and safety regulations
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-primary-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Source Quality Healthcare Products?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us today to discuss your specific product needs and receive a customized 
            catalog with competitive pricing.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="cta" size="lg" asChild>
              <Link to="/contact">
                Get Product Quote
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary" asChild>
              <Link to="/about">Learn About Our Quality</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;