export function tick(value) {
  return {
    type: 'TICK',
    data: {
      circleRotation: value,
    },
  };
}

export function dummyFunction() {
  return -1;
}
