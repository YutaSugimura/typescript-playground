import { isPrimeNumber } from './isPrimeNumber';

const primeNumber = () => {
  const v: number[] = [];

  for (let i = 2; i < 1000; i++) {
    // 2は素数なので追加
    if (i === 2) {
      v.push(2);
      continue;
    }

    // 偶数はパス
    if (i % 2 === 0) {
      continue;
    }

    // これまでの素数で割れるかテスト
    let result = true;
    for (const item of v) {
      if (Math.sqrt(i) < item) {
        break;
      }

      if (i % item === 0) {
        result = false;
        break;
      }
    }

    result && v.push(i);
  }

  for (const item of v) {
    console.log({ num: item, ok: isPrimeNumber(item) });
  }
};

primeNumber();
