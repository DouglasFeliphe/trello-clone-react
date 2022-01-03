import { COLUMN_NAMES } from "./constants";

const { DO_IT } = COLUMN_NAMES;

export const mock_tasks = [
  {
    id: 1,
    name: "Create offer notification email",
    priority: "alta",
    column: DO_IT,
    coments: [
      {
        id: 1,
        text: "lorem ipsum",
      },
      {
        id: 2,
        text: "lorem ipsum lorem ipsum",
      },
    ],
    checklist: [
      {
        id: 1,
        text: "lorem ipsum",
        done: false,
      },
      {
        id: 2,
        text: "lorem ipsum lorem ipsum",
        done: false,
      },
    ],
  },
  {
    id: 2,
    name: "Create all internal URLs work in blog archive",
    coments: [],
    checklist: [],
    priority: "baixa",
    column: DO_IT,
  },
  {
    id: 3,
    name: "Launch Podcat",
    coments: [],
    checklist: [
      {
        id: 1,
        text: "lorem ipsum",
        done: true,
      },
      {
        id: 2,
        text: "lorem ipsum lorem ipsum",
        done: false,
      },
    ],
    priority: "baixa",
    column: DO_IT,
  },
  {
    id: 4,
    name: "Structure editorial calendar",
    priority: "media",
    coments: [
      {
        id: 1,
        text: "lorem ipsum",
      },
      {
        id: 2,
        text: "lorem ipsum lorem ipsum",
      },
      {
        id: 3,
        text: "lorem ipsum lorem ipsum",
      },
      {
        id: 4,
        text: "lorem ipsum lorem ipsum",
      },
    ],
    checklist: [],
    column: DO_IT,
  },
];
