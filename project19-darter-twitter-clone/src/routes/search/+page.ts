export const load = ({ url }) => {
  return { search: { params: url.searchParams } };
};
