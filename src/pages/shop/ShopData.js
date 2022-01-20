const SHOP_DATA = [
    {
      id: 1,
      title: 'Vegetables',
      routeName: 'hats',
      items: [
        {
          id: 1,
          name: 'Broccoli',
          imageUrl: 'https://media.istockphoto.com/photos/broccoli-picture-id579165978',
          price: 25 
        },
        {
          id: 2,
          name: 'Tomatoes',
          imageUrl: 'https://images.pexels.com/photos/1327838/pexels-photo-1327838.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 18
        },
        {
          id: 3,
          name: 'Potato',
          imageUrl: 'https://images.pexels.com/photos/7129145/pexels-photo-7129145.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          price: 35
        },
        {
          id: 4,
          name: 'Cabbage',
          imageUrl: 'https://images.pexels.com/photos/2518893/pexels-photo-2518893.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          price: 25
        },
        {
          id: 5,
          name: 'Green Beanie',
          imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
          price: 18
        },
        {
          id: 6,
          name: 'Palm Tree Cap',
          imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
          price: 14
        },
        {
          id: 7,
          name: 'Red Beanie',
          imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
          price: 18
        },
        {
          id: 8,
          name: 'Wolf Cap',
          imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
          price: 14
        },
        {
          id: 9,
          name: 'Blue Snapback',
          imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
          price: 16
        }
      ]
    },
    {
      id: 2,
      title: 'Non-veg',
      routeName: 'sneakers',
      items: [
        {
          id: 10,
          name: 'Chicken',
          imageUrl: 'https://images.pexels.com/photos/2446695/pexels-photo-2446695.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 220
        },
        {
          id: 11,
          name: 'Eggs',
          imageUrl: 'https://images.pexels.com/photos/4207651/pexels-photo-4207651.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 280
        },
        {
          id: 12,
          name: 'Fish',
          imageUrl: 'https://images.pexels.com/photos/2602493/pexels-photo-2602493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          price: 110
        },
        {
          id: 13,
          name: 'Shrimps',
          imageUrl: 'https://images.pexels.com/photos/566344/pexels-photo-566344.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          price: 160
        },
        {
          id: 14,
          name: 'Nike Red High Tops',
          imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
          price: 160
        },
        {
          id: 15,
          name: 'Nike Brown High Tops',
          imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
          price: 160
        },
        {
          id: 16,
          name: 'Air Jordan Limited',
          imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
          price: 190
        },
        {
          id: 17,
          name: 'Timberlands',
          imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
          price: 200
        }
      ]
    },
    {
      id: 3,
      title: 'Dairy',
      routeName: 'jackets',
      items: [
        {
          id: 18,
          name: 'Milk',
          imageUrl: 'https://images.pexels.com/photos/5946717/pexels-photo-5946717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 125
        },
        {
          id: 19,
          name: 'Cheese',
          imageUrl: 'https://images.pexels.com/photos/3758131/pexels-photo-3758131.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          price: 90
        },
        {
          id: 20,
          name: 'Yoghurt',
          imageUrl: 'https://images.pexels.com/photos/5946056/pexels-photo-5946056.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 90
        },
        {
          id: 21,
          name: 'Butter',
          imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG/1200px-%C5%A0v%C3%A9dsk%C3%BD_kol%C3%A1%C4%8D_naruby_904_%28cropped%29.JPG',
          price: 165
        },
        {
          id: 22,
          name: 'Tan Trench',
          imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
          price: 185
        }
      ]
    },
    {
      id: 4,
      title: 'Beverage',
      routeName: 'womens',
      items: [
        {
          id: 23,
          name: 'coke',
          imageUrl: 'https://images.pexels.com/photos/2668308/pexels-photo-2668308.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          price: 25
        },
        {
          id: 24,
          name: 'maaza',
          imageUrl: 'https://www.jiomart.com/images/product/original/490001795/maaza-mango-drink-1-2-l-bottle-0-20210923.jpg',
          price: 20
        },
        {
          id: 25,
          name: 'Monster',
          imageUrl: 'https://images.pexels.com/photos/8269360/pexels-photo-8269360.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          price: 80
        },
        {
          id: 26,
          name: 'Fruit juice',
          imageUrl: 'https://www.dabur.com/img/product/large/25-real-juice.jpg',
          price: 80
        },
        {
          id: 27,
          name: 'Striped Sweater',
          imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
          price: 45
        },
        {
          id: 28,
          name: 'Yellow Track Suit',
          imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
          price: 135
        },
        {
          id: 29,
          name: 'White Blouse',
          imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
          price: 20
        }
      ]
    },
    {
      id: 5,
      title: 'Breads',
      routeName: 'mens',
      items: [
        {
          id: 30,
          name: 'White bread',
          imageUrl: 'https://images.pexels.com/photos/8599586/pexels-photo-8599586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          price: 325
        },
        {
          id: 31,
          name: 'Brown Bread',
          imageUrl: 'https://images.pexels.com/photos/5419309/pexels-photo-5419309.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 20
        },
        {
          id: 32,
          name: 'Peta bread',
          imageUrl: 'https://images.pexels.com/photos/4495757/pexels-photo-4495757.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          price: 25
        },
        {
          id: 33,
          name: 'MultiGrain Bread',
          imageUrl: 'https://images.pexels.com/photos/5966346/pexels-photo-5966346.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
          price: 25
        },
        {
          id: 34,
          name: 'Jean Long Sleeve',
          imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
          price: 40
        },
        {
          id: 35,
          name: 'Burgundy T-shirt',
          imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
          price: 25
        }
      ]
    }
  ];
  
  export default SHOP_DATA;
  