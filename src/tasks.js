import { COLUMN_NAMES } from "./constants";

const { DO_IT } = COLUMN_NAMES;

export const mock_tasks = [
  {
    id: 1,
    name: "Create offer notification email",
    description: "",
    deadline: "4/1/2022",
    files: [],
    comments: [
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
        done: true,
      },
      {
        id: 2,
        text: "lorem ipsum lorem ipsum",
        done: false,
      },
    ],
    users: [],
    priority: "alta",
    column: DO_IT,
  },
  {
    id: 2,
    name: "Create all internal URLs work in blog archive",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    deadline: "",
    files: [],
    comments: [],
    checklist: [],
    users: [],
    priority: "baixa",
    column: DO_IT,
  },
  {
    id: 3,
    name: "Launch Podcast",
    description: "",
    deadline: "",
    files: [],
    comments: [],
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
    users: [{ id: 1, name: "John Doe" }],
    priority: "baixa",
    column: DO_IT,
  },
  {
    id: 4,
    name: "Structure editorial calendar",
    description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    deadline: "01/02/2022",
    files: [],
    comments: [
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
    users: [
      { id: 1, name: "John Doe" },
      { id: 2, name: "Jane Doe" },
      { id: 3, name: "John Smith" },
      { id: 4, name: "Jane Smith" },
    ],
    priority: "media",
    column: DO_IT,
  },
  {
    id: 5,
    name: "Update social media content",
    description: "",
    deadline: "",
    files: [],
    comments: [],
    checklist: [
      {
        id: 1,
        text: "lorem ipsum",
        done: true,
      },
      {
        id: 2,
        text: "lorem ipsum lorem ipsum",
        done: true,
      },
    ],
    users: [],
    priority: "media",
    column: DO_IT,
  },
];
