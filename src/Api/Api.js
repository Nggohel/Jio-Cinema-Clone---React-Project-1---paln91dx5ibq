export const fetchApiData = async (url) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        projectID: "paln91dx5ibq",
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export const postApiData = async (url, item) => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        projectID: "paln91dx5ibq",
      },
      body: JSON.stringify(item),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export const patchApiData = async (url, item, GetData) => {
  try {
    const response = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${GetData.token}`,
        projectID: "paln91dx5ibq",
      },
      body: JSON.stringify(item),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export const watchListApiData = async (url, userInfo) => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
        projectID: "paln91dx5ibq",
      },
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};
