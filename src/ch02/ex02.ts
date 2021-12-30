interface LabeledValue {
  label: string;
}

function printLabel(obj: LabeledValue) {
  console.log(obj.label);
}

{
  // Block-Scoped Variable Problem
  const o = { size: 10, label: '사이즈는 XXXL' };
  printLabel(o);
}
