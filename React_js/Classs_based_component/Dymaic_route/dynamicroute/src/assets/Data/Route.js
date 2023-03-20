const Route = [
  {
    id: 1,
    RouteName: "A",
    HasChield: false,
    Chield: [],
  },

  {
    id: 2,
    RouteName: "b",
    HasChield: true,
    Chield: [
      {
        id: new Date().getTime(),
        RouteName: "1.1",
        HasChield: true,
        Chield: [
          {
            id: new Date().getTime(),
            RouteName: "1.1.1",
            HasChield: true,
            Chield: [
              {
                id: new Date().getTime(),
                RouteName: "1.1.1.1",
                HasChield: true,
                Chield: [],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 3,
    RouteName: "c",
    HasChield: false,
    Chield: [],
  },
  {
    id: 4,
    RouteName: "d",
    HasChield: true,
    Chield: [
      {
        id: new Date().getTime(),
        RouteName: "1.1.1",
        HasChield: true,
        Chield: [
          {
            id: new Date().getTime(),
            RouteName: "1.1.1.1",
            HasChield: true,
            Chield: [],
          },
        ],
      },
    ],
  },
  {
    id: 5,
    RouteName: "e",
    HasChield: false,
    Chield: [],
  },
];
export default Route;
