import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Building2, Users, Award, Target, Eye, Heart, ChevronRight, Factory, Globe, Sparkles, Calendar, MapPin, Phone, Mail } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import factoryImage from "@/assets/factory-exterior.jpg";
import productionLineImage from "@/assets/production-line.jpg";
const About = () => {
  useEffect(() => {
    document.title = "من نحن - الفرسان الرباعية | About Al Fursan Quadruple";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'تعرف على الفرسان الرباعية - أكثر من 20 عامًا من الخبرة في صناعة الجميد الأردني الأصيل، رؤيتنا ورسالتنا وقيمنا');
    }
  }, []);
  const values = [{
    icon: Heart,
    title: 'الأصالة',
    description: 'نحافظ على التراث الأردني الأصيل في صناعة الجميد مع الحفاظ على الوصفات التقليدية'
  }, {
    icon: Award,
    title: 'الجودة',
    description: 'نلتزم بأعلى معايير الجودة العالمية في جميع مراحل الإنتاج والتعبئة والتوزيع'
  }, {
    icon: Users,
    title: 'رضا العملاء',
    description: 'نضع عملاءنا في المقدمة ونسعى دائماً لتلبية احتياجاتهم وتجاوز توقعاتهم'
  }, {
    icon: Globe,
    title: 'التطوير المستمر',
    description: 'نستثمر في التكنولوجيا الحديثة والبحث والتطوير لتحسين منتجاتنا باستمرار'
  }];
  const milestones = [{
    year: '1999',
    title: 'التأسيس',
    description: 'تأسيس شركة الفرسان الرباعية للإدارة والاستثمار في محافظة المفرق'
  }, {
    year: '2005',
    title: 'بداية الإنتاج',
    description: 'بداية إنتاج الجميد الأردني الأصيل بأعلى معايير الجودة'
  }, {
    year: '2010',
    title: 'الحصول على الشهادات',
    description: 'حصلنا على شهادات الجودة العالمية ISO وHACCP وFDA'
  }, {
    year: '2015',
    title: 'التوسع',
    description: 'توسيع خطوط الإنتاج وإدخال تقنيات Aseptic الحديثة'
  }, {
    year: '2020',
    title: 'الريادة',
    description: 'أصبحنا من الرواد في صناعة الجميد الأردني محلياً وإقليمياً'
  }];
  const stats = [{
    number: '25+',
    label: 'عاماً من الخبرة'
  }, {
    number: '1000+',
    label: 'عميل راضي'
  }, {
    number: '10+',
    label: 'دولة نصدر إليها'
  }, {
    number: '99%',
    label: 'معدل رضا العملاء'
  }];
  return <div className="min-h-screen bg-background" dir="rtl">
      <Header />
      
      <main className="pt-20">
        {/* Breadcrumb */}
        

        {/* Hero Section */}
        <section className="py-20 bg-gradient-hero text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%)] 
                        bg-[length:30px_30px] animate-shimmer" />
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/20 backdrop-blur-sm mb-6">
                <Sparkles className="h-5 w-5 animate-pulse" />
                <span className="text-sm font-semibold">من نحن</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-bold mb-8 animate-fade-in-up">
                الفرسان الرباعية
              </h1>
              
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-4xl mx-auto leading-relaxed animate-slide-in-right">
                أكثر من 20 عامًا من الخبرة في صناعة الجميد الأردني الأصيل
                <br />
                <span className="font-semibold">رائدون في الجودة • ملتزمون بالأصالة</span>
              </p>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Text Content */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-8 animate-fade-in-up">
                  قصتنا
                </h2>
                
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed animate-slide-in-right">
                  <p>
                    تأسست شركة الفرسان الرباعية للإدارة والاستثمار في عام 1999 في محافظة المفرق، 
                    الأردن، برؤية واضحة لتكون الرائدة في صناعة الجميد الأردني الأصيل.
                  </p>
                  
                  <p>
                    منذ بداياتنا المتواضعة، نمت الشركة لتصبح واحدة من أهم المصانع المتخصصة في 
                    إنتاج الجميد في المنطقة، مع الحفاظ على التراث الأردني الأصيل والاستثمار في 
                    أحدث التقنيات لضمان أعلى معايير الجودة والسلامة.
                  </p>
                  
                  <p>
                    اليوم، نفخر بتقديم منتجات عالية الجودة تحمل اسم "جميدنا زمان" و "جميد بدوية"، 
                    التي تجمع بين الطعم الأصيل والتقنيات الحديثة في التعبئة والحفظ.
                  </p>
                </div>

                <div className="mt-8">
                  <Link to="/products">
                    <Button size="lg" className="px-8">
                      تعرف على منتجاتنا
                      <ChevronRight className="mr-2 rtl:mr-0 rtl:ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Factory Image */}
              <div className="relative animate-fade-in-scale">
                <div className="relative overflow-hidden rounded-3xl shadow-elegant">
                  <img src={factoryImage} alt="مصنع الفرسان الرباعية" className="w-full h-96 object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>
                
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">مصنعنا في المفرق</h3>
                  <p className="text-white/90">مجهز بأحدث التقنيات العالمية</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Vision & Mission */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Vision */}
              <Card className="bg-gradient-glass backdrop-blur-sm border border-border/20 hover:shadow-card transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Eye className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">رؤيتنا</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    أن نكون الشركة الرائدة عالمياً في صناعة الجميد الأردني الأصيل، 
                    ونشر التراث الأردني العريق في جميع أنحاء العالم مع الحفاظ على أعلى 
                    معايير الجودة والأصالة.
                  </p>
                </CardContent>
              </Card>

              {/* Mission */}
              <Card className="bg-gradient-glass backdrop-blur-sm border border-border/20 hover:shadow-card transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-6">رسالتنا</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    تقديم أجود أنواع الجميد الأردني الأصيل باستخدام أحدث التقنيات 
                    والمعايير العالمية، مع الحفاظ على الوصفات التقليدية وتلبية احتياجات 
                    عملائنا المحليين والعالميين.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-32 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                قيمنا الأساسية
              </h2>
              <p className="text-xl text-muted-foreground">
                المبادئ التي نلتزم بها في كل ما نقوم به
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => <Card key={value.title} className="text-center bg-gradient-glass backdrop-blur-sm border border-border/20 
                           hover:shadow-card hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{
              animationDelay: `${index * 150}ms`
            }}>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                      <value.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-4">{value.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Statistics */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                أرقامنا تتحدث
              </h2>
              <p className="text-xl text-primary-foreground/90">
                إنجازاتنا خلال رحلة النجاح
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats.map((stat, index) => <div key={stat.label} className="text-center animate-fade-in-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <div className="text-5xl md:text-6xl font-bold mb-4">{stat.number}</div>
                  <p className="text-primary-foreground/80 text-lg">{stat.label}</p>
                </div>)}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-32 bg-background">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                رحلة النجاح
              </h2>
              <p className="text-xl text-muted-foreground">
                أهم المحطات في تاريخ الفرسان الرباعية
              </p>
            </div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => <div key={milestone.year} className="flex gap-8 items-start animate-fade-in-up" style={{
              animationDelay: `${index * 200}ms`
            }}>
                  <div className="flex-shrink-0">
                    <Badge variant="secondary" className="text-lg px-4 py-2 font-bold">
                      {milestone.year}
                    </Badge>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3">{milestone.title}</h3>
                    <p className="text-muted-foreground text-lg leading-relaxed">{milestone.description}</p>
                  </div>
                </div>)}
            </div>
          </div>
        </section>

        {/* Contact Info */}
        <section className="py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                معلومات التواصل
              </h2>
              <p className="text-xl text-muted-foreground">
                نحن هنا للإجابة على جميع استفساراتكم
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[{
              icon: MapPin,
              title: 'العنوان',
              info: 'محافظة المفرق، الأردن'
            }, {
              icon: Phone,
              title: 'الهاتف',
              info: '+962-2-626-4582'
            }, {
              icon: Mail,
              title: 'البريد الإلكتروني',
              info: 'info@alfursanjo.com'
            }, {
              icon: Globe,
              title: 'الموقع الإلكتروني',
              info: 'www.alfursanjo.com'
            }].map((contact, index) => <Card key={contact.title} className="text-center bg-background border border-border/20 hover:shadow-card 
                           transition-all duration-300 animate-fade-in-up" style={{
              animationDelay: `${index * 100}ms`
            }}>
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="font-bold text-foreground mb-2">{contact.title}</h3>
                    <p className="text-muted-foreground">{contact.info}</p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-hero text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              جاهز للتعرف على منتجاتنا؟
            </h2>
            <p className="text-xl text-primary-foreground/90 mb-8">
              اكتشف مجموعة منتجاتنا من الجميد الأردني الأصيل
            </p>
            <div className="flex gap-4 justify-center">
              <Link to="/products">
                <Button variant="glass" size="lg" className="text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/20 px-8">
                  <Factory className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                  تصفح المنتجات
                </Button>
              </Link>
              
              <Button variant="outline" size="lg" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8">
                <Phone className="ml-2 rtl:ml-0 rtl:mr-2 h-5 w-5" />
                اتصل بنا
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>;
};
export default About;