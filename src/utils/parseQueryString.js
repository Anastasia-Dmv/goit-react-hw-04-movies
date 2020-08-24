import queryString from 'query-string';
export default function getQueryParams(qs) {
  return queryString.parse(qs);
}
