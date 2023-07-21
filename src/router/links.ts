export const links = {
  home: `/`,
  documentation: "/documentazione",
  poems: {
    list: "/poems",
    id: (id: number) => `/poems/${id}`,
  },
};
