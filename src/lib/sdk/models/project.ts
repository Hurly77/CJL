type DataKeys = {
  [key: string]: string | never;
};

const projectData: DataKeys = {
  ALL: "*",
  PROJECT_BASIC_DATA: "id, title, description, img, code, demo, category",
  BASE: "id, title, description, img, code, demo, category",
  PROJECT_CATEGORY_JS: "id, title, description, img, code, demo, category",
  PROJECT_CATEGORY_REACT: "id, title, description, img, code, demo, category",
  PROJECT_CATEGORY_PYTHON: "id, title, description, img, code, demo, category",
  PROJECT_CATEGORY_C_LANG: "id, title, description, img, code, demo, category",
  PROJECT_CATEGORY_API: "id, title, description, img, code, demo, category",
};

const projectModel = (key?: string, joins?: string): string =>
  `${projectData[key || "ALL"]} ${joins || ""}`;

export default projectModel;
