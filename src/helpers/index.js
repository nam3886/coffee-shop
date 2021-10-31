export const wait = (time = 1) => {
  return new Promise((resolve) => setTimeout(() => resolve(), time));
};

export const formatDate = (date) => {
  const newDate = new Date(date);
  const t = {
    d: newDate.getDate(),
    m: newDate.getMonth() + 1,
    y: newDate.getFullYear(),
    H: newDate.getHours(),
    i: newDate.getMinutes(),
    s: newDate.getSeconds(),
  };

  for (const key in t) {
    if (t[key] < 10) t[key] = "0" + t[key];
  }

  return `${t.d}/${t.m}/${t.y} ${t.H}:${t.i}:${t.s}`;
};
