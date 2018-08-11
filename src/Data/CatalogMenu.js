const data = [
  {
    "id": 1,
    "name": "Meat",
    "url": "/meat",
    "before": [{
      "type": "html",
      "content": "<ul class=\"list-group\"><li class=\"list-group-item\"><h3 class=\"menuTitle sale\">SALE</h3><ul class=\"list-group\"><li class=\"list-group-item\"><a href=\"\">Steak</a></li><li class=\"list-group-item\"><a href=\"\">Stewing</a></li><li class=\"list-group-item\"><a href=\"\">Mince</a></li></ul></li><li class=\"list-group-item\"><h3 class=\"menuTitle new\">NEW ARRIVALS</h3><ul class=\"list-group\"><li class=\"list-group-item\"><a href=\"\">Gammon</a></li><li class=\"list-group-item\"><a href=\"\">Chops</a></li><li class=\"list-group-item\"><a href=\"\">Bacon</a></li><li class=\"list-group-item\"><a href=\"\">Sausages</a></li></ul></li></ul>"
    }],
    "after": [{
      "type": "image",
      "content": "fractalSrc"
    }],
    "children": [
      {
        "id": 12,
        "name": "Beef",
        "url": "/meat/beef",
        "children": [
          {
            "id": 121,
            "name": "Steak",
            "url": "/meat/beef/steak"
          },
          {
            "id": 122,
            "name": "Stewing",
            "url": "/meat/beef/steak"
          },
          {
            "id": 123,
            "name": "Mince",
            "url": "/meat/beef/steak"
          },
          {
            "id": 124,
            "name": "Flank",
            "url": "/meat/beef/steak"
          },
          {
            "id": 125,
            "name": "Burgers",
            "url": "/meat/beef/steak"
          },
          {
            "id": 126,
            "name": "Ribs",
            "url": "/meat/beef/steak"
          },
          {
            "id": 127,
            "name": "Offal",
            "url": "/meat/beef/steak"
          }
        ]
      },
      {
        "id": 13,
        "name": "Pork",
        "url": "/meat/pork",
        "children": [
          {
            "id": 131,
            "name": "Gammon",
            "url": "/meat/beef/steak"
          },
          {
            "id": 132,
            "name": "Chops",
            "url": "/meat/beef/steak"
          },
          {
            "id": 133,
            "name": "Bacon",
            "url": "/meat/beef/steak"
          },
          {
            "id": 134,
            "name": "Sausages",
            "url": "/meat/beef/steak"
          }
        ]
      },
      {
        "id": 14,
        "name": "Poultry",
        "url": "/meat/poultry",
        "children": [
          {
            "id": 141,
            "name": "Chicken",
            "url": "/meat/beef/steak"
          },
          {
            "id": 142,
            "name": "Duck",
            "url": "/meat/beef/steak"
          },
          {
            "id": 143,
            "name": "Peasant",
            "url": "/meat/beef/steak"
          },
          {
            "id": 144,
            "name": "Quail",
            "url": "/meat/beef/steak"
          }
        ]
      },
      {
        "id": 15,
        "name": "Cold Meats",
        "url": "/layouts/3-column",
        "children": [
          {
            "id": 151,
            "name": "Salami",
            "url": "/meat/beef/steak"
          },
          {
            "id": 152,
            "name": "Chorizo",
            "url": "/meat/beef/steak"
          },
          {
            "id": 153,
            "name": "Palma Ham",
            "url": "/meat/beef/steak"
          },
          {
            "id": 154,
            "name": "Corn Beef",
            "url": "/meat/beef/steak"
          }
        ]
      },
      {
        "id": 16,
        "name": "Mixed",
        "url": "/layouts/mixed",
        "children": [
          {
            "id": 151,
            "name": "Salami",
            "url": "/meat/beef/steak"
          }
        ]
      }
    ]
  },
  {
    "id": 2,
    "name": "Fish & Seafood",
    "url": "/fish",
    "children": [
      {
        "id": 15,
        "name": "Round White Sea Fish",
        "url": "/layouts/3-column",
        "children": [
          {
            "id": 152,
            "name": "Whiting",
            "url": "/meat/beef/steak"
          },
          {
            "id": 153,
            "name": "Haddock",
            "url": "/meat/beef/steak"
          },
          {
            "id": 154,
            "name": "Bream",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Gurnard",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Coley",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Hake",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Bass",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Pollack",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Red Mullet",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Cod",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Grey Mullet",
            "url": "/meat/beef/steak"
          }
        ]
      },
      {
        "id": 15,
        "name": "Oily and Migratory Fish",
        "url": "/layouts/3-column",
        "children": [
          {
            "id": 152,
            "name": "Sea Trout",
            "url": "/meat/beef/steak"
          },
          {
            "id": 153,
            "name": "Herring",
            "url": "/meat/beef/steak"
          },
          {
            "id": 154,
            "name": "Eel",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Sardine",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Whitebait",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Salmon",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Sprat",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Anchovy",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Mackerel",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Tuna",
            "url": "/meat/beef/steak"
          }
        ]
      },
      {
        "id": 15,
        "name": "Flat Sea Fish",
        "url": "/layouts/3-column",
        "children": [
          {
            "id": 152,
            "name": "Lemon Sole",
            "url": "/meat/beef/steak"
          },
          {
            "id": 153,
            "name": "Brill",
            "url": "/meat/beef/steak"
          },
          {
            "id": 154,
            "name": "Halibut",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Turbot",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Plaice",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Skate",
            "url": "/meat/beef/steak"
          },
          {
            "id": 151,
            "name": "Dover Sole",
            "url": "/meat/beef/steak"
          }
        ]
      }
    ]
  },
  {
    "id": 3,
    "name": "Vegetables",
    "url": "/fish",
    "children": [
      {
        "id": 34,
        "name": "Root",
        "url": "/meat/poultry",
        "children": [
          {
            "id": 341,
            "name": "Potatoes",
            "url": "/meat/beef/steak"
          },
          {
            "id": 342,
            "name": "Carrots",
            "url": "/meat/beef/steak"
          },
          {
            "id": 343,
            "name": "Turnips",
            "url": "/meat/beef/steak"
          },
          {
            "id": 344,
            "name": "Beetroot",
            "url": "/meat/beef/steak"
          }
        ]
      }
    ]
  },
  {
    "id": 4,
    "name": "Fruit",
    "url": "/fruit"
  },
  {
    "id": 5,
    "name": "Groceries",
    "url": "/groceries"
  }
];

export default data;