import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

export default function Index() {
  const reviews = [
    {
      name: "Анна Петрова",
      rating: 5,
      text: "Отличная работа! Кухня получилась именно такой, как мечтала. Качество материалов на высоте, а цена очень порадовала.",
      project: "Кухня"
    },
    {
      name: "Михаил Иванов", 
      rating: 5,
      text: "Заказывал шкаф-купе в спальню. Все сделали быстро и качественно. Бесплатный замер - это большой плюс!",
      project: "Шкаф-купе"
    },
    {
      name: "Светлана Козлова",
      rating: 5, 
      text: "Мебель служит уже два года без нареканий. Материалы действительно качественные, как и обещали.",
      project: "Кухонный гарнитур"
    }
  ];

  const materials = [
    { name: "ЛДСП Egger", description: "Немецкое качество, влагостойкий", icon: "TreePine" },
    { name: "Фурнитура Blum", description: "Австрийские направляющие и петли", icon: "Settings" },
    { name: "Столешницы", description: "Искусственный камень, массив", icon: "Square" },
    { name: "Фасады МДФ", description: "Эмаль, пленка ПВХ, шпон", icon: "Layers" }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4 sticky top-0 z-50">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Icon name="Hammer" size={28} />
            <h1 className="text-2xl font-bold">ПРОЕКТ</h1>
          </div>
          <nav className="hidden md:flex space-x-6">
            <a href="#hero" className="hover:text-secondary transition-colors">Главная</a>
            <a href="#gallery" className="hover:text-secondary transition-colors">Галерея</a>
            <a href="#materials" className="hover:text-secondary transition-colors">Материалы</a>
            <a href="#reviews" className="hover:text-secondary transition-colors">Отзывы</a>
            <a href="#contacts" className="hover:text-secondary transition-colors">Контакты</a>
          </nav>
          <Button variant="secondary" size="sm">
            <Icon name="Phone" size={16} className="mr-2" />
            Заказать звонок
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="py-20 bg-gradient-to-br from-primary to-industrial-dark text-white">
        <div className="container mx-auto px-4 text-center">
          <Badge className="mb-6 bg-secondary text-secondary-foreground">
            🎯 Самара • Качественная мебель
          </Badge>
          <h2 className="text-5xl font-bold mb-6 leading-tight">
            Кухни и шкафы<br />
            <span className="text-secondary">под ваш бюджет</span>
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Изготавливаем качественную мебель из проверенных материалов. 
            Доступные цены без переплат за бренд.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
              <Icon name="Ruler" size={20} className="mr-2" />
              Бесплатный замер
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Консультация
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Icon name="Clock" size={40} className="text-secondary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Быстрые сроки</h3>
              <p className="text-sm opacity-80">Изготовление от 7 дней</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Icon name="Shield" size={40} className="text-secondary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Гарантия 2 года</h3>
              <p className="text-sm opacity-80">На всю продукцию</p>
            </div>
            <div className="bg-white/10 backdrop-blur rounded-lg p-6">
              <Icon name="Truck" size={40} className="text-secondary mb-4 mx-auto" />
              <h3 className="font-semibold mb-2">Доставка бесплатно</h3>
              <p className="text-sm opacity-80">По Самаре и области</p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Наши работы</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Каждый проект — это воплощение ваших идей в качественной мебели
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Kitchen Gallery */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/img/287d09d8-4814-4ce1-98b7-cc038db6d574.jpg" 
                  alt="Современная кухня в индустриальном стиле"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Кухня "Индастриал"</h4>
                <p className="text-sm text-muted-foreground">Темные фасады с желтыми акцентами</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/img/a56a929b-3745-479c-8370-e373a4287627.jpg" 
                  alt="Светлая кухня в скандинавском стиле"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Кухня "Скандинавия"</h4>
                <p className="text-sm text-muted-foreground">Минимализм и функциональность</p>
              </CardContent>
            </Card>

            {/* Wardrobes Gallery */}
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src="/img/11c63d3d-5cff-4279-b0fd-e56603f61718.jpg" 
                  alt="Современный шкаф-купе"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Шкаф "Лофт"</h4>
                <p className="text-sm text-muted-foreground">Встроенная система хранения</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gradient-to-br from-secondary/20 to-secondary/40 flex items-center justify-center">
                <div className="text-center text-primary">
                  <Icon name="Shirt" size={48} className="mx-auto mb-4 text-secondary" />
                  <p className="text-lg font-semibold">Гардеробная</p>
                  <p className="text-sm opacity-80">Открытая система</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Гардероб "Модерн"</h4>
                <p className="text-sm text-muted-foreground">Оптимальная организация пространства</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gradient-to-br from-industrial-gray to-industrial-light flex items-center justify-center">
                <div className="text-center text-primary">
                  <Icon name="BookOpen" size={48} className="mx-auto mb-4 text-secondary" />
                  <p className="text-lg font-semibold">Библиотека</p>
                  <p className="text-sm opacity-80">Массив дуба</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Стеллаж "Классик"</h4>
                <p className="text-sm text-muted-foreground">Натуральное дерево премиум</p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-64 bg-gradient-to-br from-primary to-industrial-gray flex items-center justify-center">
                <div className="text-center text-white">
                  <Icon name="Bed" size={48} className="mx-auto mb-4 text-secondary" />
                  <p className="text-lg font-semibold">Спальный гарнитур</p>
                  <p className="text-sm opacity-80">Кровать + тумбы + шкаф</p>
                </div>
              </div>
              <CardContent className="p-4">
                <h4 className="font-semibold mb-2">Комплект "Уют"</h4>
                <p className="text-sm text-muted-foreground">Полное решение для спальни</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section id="materials" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Качественные материалы</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Используем только проверенные материалы от европейских поставщиков
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Icon name={material.icon as any} size={48} className="text-secondary mx-auto mb-4" />
                  <CardTitle className="text-lg">{material.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{material.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Badge className="bg-secondary text-secondary-foreground text-base px-6 py-2">
              💯 Все материалы сертифицированы и безопасны
            </Badge>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Отзывы клиентов</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Более 500 довольных клиентов выбрали нашу мебель
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg">{review.name}</CardTitle>
                    <div className="flex text-secondary">
                      {Array.from({ length: review.rating }).map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="fill-current" />
                      ))}
                    </div>
                  </div>
                  <Badge variant="outline" className="w-fit">{review.project}</Badge>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold mb-4">Контакты</h3>
            <p className="opacity-90 max-w-2xl mx-auto">
              Готовы воплотить ваши идеи в жизнь. Свяжитесь с нами удобным способом
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <Icon name="MapPin" size={40} className="text-secondary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Адрес</h4>
              <p className="opacity-80">г. Самара<br />ул. Производственная, 15</p>
            </div>
            <div className="text-center">
              <Icon name="Phone" size={40} className="text-secondary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Телефон</h4>
              <p className="opacity-80">+7 (846) 123-45-67<br />+7 (927) 123-45-67</p>
            </div>
            <div className="text-center">
              <Icon name="Clock" size={40} className="text-secondary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Режим работы</h4>
              <p className="opacity-80">Пн-Пт: 9:00-18:00<br />Сб: 10:00-16:00</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={40} className="text-secondary mx-auto mb-4" />
              <h4 className="font-semibold mb-2">Email</h4>
              <p className="opacity-80">info@proekt-samara.ru<br />заказы@proekt-samara.ru</p>
            </div>
          </div>

          <div className="text-center">
            <h4 className="text-2xl font-bold mb-6">Получите расчет стоимости</h4>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                <Icon name="Calculator" size={20} className="mr-2" />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
                <Icon name="MessageSquare" size={20} className="mr-2" />
                Написать в WhatsApp
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-industrial-dark text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Icon name="Hammer" size={24} />
              <span className="text-xl font-bold">ПРОЕКТ</span>
            </div>
            <p className="text-sm opacity-70">
              © 2024 Мебельная мастерская "ПРОЕКТ". Самара. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}