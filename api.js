async function fetchData({ id, timestamplist }) {
  // console.log(id, timestamplist)
  const url =`https://api.wheretheiss.at/v1/satellites/${id}/positions?timestamps=${timestamplist}`
  const res = await fetch( url,
    {
      method: "GET",
    }
  );
  // console.log(res);
  return await res.json();
}
