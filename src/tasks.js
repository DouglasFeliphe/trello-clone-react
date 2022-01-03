import { COLUMN_NAMES } from "./constants";

const { DO_IT } = COLUMN_NAMES;

export const mock_tasks = [
  {
    id: 1,
    name: "Create offer notification email",
    priority: "alta",
    column: DO_IT,
  },
  {
    id: 2,
    name: "Create all internal URLs work in blog archive",
    priority: "baixa",
    column: DO_IT,
  },
  { id: 3, name: "Launch Podcat", priority: "baixa", column: DO_IT },
  {
    id: 4,
    name: "Structure editorial calendar",
    priority: "media",
    column: DO_IT,
  },
];
