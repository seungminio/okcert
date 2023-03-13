export default (target: any, ...sources: any) =>
  Object.assign(
    target,
    ...sources.map((x: any) =>
      Object.entries(x)
        .filter(([key, value]) => value !== undefined)
        .reduce((obj, [key, value]) => (((obj as any)[key] = value), obj), {})
    )
  );
