const getAllQuotes = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_HOME_URL}/api/quotes`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
    });
    if (res.ok) {
      const { data } = await res.json();
      return data;
    } else {
      console.log("Oops! Error.");
    }
  } catch (error) {
    console.log(error);
  }
};

export { getAllQuotes };
