

export const fetch_get=async(url)=>{
    const response=await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response
}

export const create_User = async (url,data)=>{
  const response = await fetch(url,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body:JSON.stringify(data)
  });
  const result = await response.json()
  return result;
}
