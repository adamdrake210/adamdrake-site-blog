export function sortNumberByPublishedDateRemote(a: any, b: any) {
  return (
    new Date(b.data.publishedDate.replace(/-/g, '/')).getTime() -
    new Date(a.data.publishedDate.replace(/-/g, '/')).getTime()
  );
}
