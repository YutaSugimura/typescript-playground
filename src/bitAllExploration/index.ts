const bitAllExploration = () => {
  const v = ['A', 'B', 'C', 'D', 'E', 'F'];

  for (let bit = 0; bit < 1 << v.length; bit++) {
    const row: string[] = [];

    for (let i = 0; i < v.length; i++) {
      if (bit & (1 << i)) {
        row.push(v[i]);
      }
    }
    console.log(row);
  }
};

bitAllExploration();
